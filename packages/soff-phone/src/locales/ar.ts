import type { PhoneValidationResult, PhoneOptions } from '../core/types.js';
import { cleanPhone, formatE164 } from '../core/utils.js';

const COUNTRY_CODE = '54';

export function validate(phone: string, options?: PhoneOptions): PhoneValidationResult {
  const cleaned = cleanPhone(phone);

  // Check if it includes country code
  let national = cleaned;
  if (cleaned.startsWith(COUNTRY_CODE) && cleaned.length > 10) {
    national = cleaned.slice(COUNTRY_CODE.length);
  }

  // Argentine numbers: 10 digits (including area code)
  if (national.length !== 10) {
    return { isValid: false, error: 'Phone number must be 10 digits' };
  }

  let type: 'mobile' | 'landline' | 'unknown' = 'unknown';

  // Mobile: Starts with 9 (e.g., 9 11 xxxx-xxxx)
  if (national.startsWith('9')) {
    type = 'mobile';
  }
  // Landline: Starts with 11, 2, 3, 4 or other area codes
  else if (/^(11|2|3|4)/.test(national)) {
    type = 'landline';
  }

  let formatted = national;
  if (options?.format === 'e164') {
    formatted = formatE164(COUNTRY_CODE, national);
  } else if (options?.format === 'international') {
    formatted = `+${COUNTRY_CODE} ${national}`;
  }

  return { isValid: true, type, formatted };
}
