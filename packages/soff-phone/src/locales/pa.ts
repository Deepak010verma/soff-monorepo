import type { PhoneValidationResult, PhoneOptions } from '../core/types.js';
import { cleanPhone, formatE164 } from '../core/utils.js';

const COUNTRY_CODE = '507';

export function validate(phone: string, options?: PhoneOptions): PhoneValidationResult {
  const cleaned = cleanPhone(phone);

  // Check if it includes country code
  let national = cleaned;
  if (cleaned.startsWith(COUNTRY_CODE) && cleaned.length > 8) {
    national = cleaned.slice(COUNTRY_CODE.length);
  }

  // Panamanian numbers: 8 digits
  if (national.length !== 8) {
    return { isValid: false, error: 'Phone number must be 8 digits' };
  }

  let type: 'mobile' | 'landline' | 'unknown' = 'unknown';

  // Mobile: Starts with 6
  if (national.startsWith('6')) {
    type = 'mobile';
  }
  // Landline: Starts with 2-5, 7-9
  else if (/^[2-57-9]/.test(national)) {
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
