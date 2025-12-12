import type { PhoneValidationResult, PhoneOptions } from '../core/types.js';
import { cleanPhone, formatE164 } from '../core/utils.js';

const COUNTRY_CODE = '44';

export function validate(phone: string, options?: PhoneOptions): PhoneValidationResult {
  const cleaned = cleanPhone(phone);

  // Check if it includes country code
  let national = cleaned;
  if (cleaned.startsWith(COUNTRY_CODE) && cleaned.length > 10) {
    national = cleaned.slice(COUNTRY_CODE.length);
  }

  // UK numbers: 10 digits (excluding the leading 0)
  // But users often include the leading 0, so we accept both formats
  if (national.startsWith('0')) {
    national = national.slice(1);
  }

  if (national.length !== 10) {
    return { isValid: false, error: 'Phone number must be 10 digits' };
  }

  let type: 'mobile' | 'landline' | 'unknown' = 'unknown';

  // Mobile: Starts with 7
  if (national.startsWith('7')) {
    type = 'mobile';
  }
  // Landline: Starts with 1, 2, 3
  else if (/^[123]/.test(national)) {
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
