import type { PhoneValidationResult, PhoneOptions } from '../core/types.js';
import { cleanPhone, formatE164 } from '../core/utils.js';

const COUNTRY_CODE = '51';

export function validate(phone: string, options?: PhoneOptions): PhoneValidationResult {
  const cleaned = cleanPhone(phone);

  // Check if it includes country code
  let national = cleaned;
  if (cleaned.startsWith(COUNTRY_CODE) && cleaned.length > 9) {
    national = cleaned.slice(COUNTRY_CODE.length);
  }

  // Peruvian numbers: 9 digits
  if (national.length !== 9) {
    return { isValid: false, error: 'Phone number must be 9 digits' };
  }

  let type: 'mobile' | 'landline' | 'unknown' = 'unknown';

  // Mobile: Starts with 9
  if (national.startsWith('9')) {
    type = 'mobile';
  }
  // Landline: Starts with 1 (Lima) or other area codes (0)
  else if (/^[01]/.test(national)) {
    type = 'landline';
  } else {
    return { isValid: false, error: 'Invalid prefix for Peru' };
  }

  let formatted = national;
  if (options?.format === 'e164') {
    formatted = formatE164(COUNTRY_CODE, national);
  } else if (options?.format === 'international') {
    formatted = `+${COUNTRY_CODE} ${national}`;
  }

  return { isValid: true, type, formatted };
}
