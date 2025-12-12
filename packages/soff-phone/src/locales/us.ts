import type { PhoneValidationResult, PhoneOptions } from '../core/types.js';
import { cleanPhone, formatE164 } from '../core/utils.js';

const COUNTRY_CODE = '1';

export function validate(phone: string, options?: PhoneOptions): PhoneValidationResult {
  const cleaned = cleanPhone(phone);

  // Check if it includes country code
  let national = cleaned;
  if (cleaned.startsWith(COUNTRY_CODE) && cleaned.length === 11) {
    national = cleaned.slice(COUNTRY_CODE.length);
  }

  // US/Canada numbers: 10 digits (NPA-NXX-XXXX)
  if (national.length !== 10) {
    return { isValid: false, error: 'Phone number must be 10 digits' };
  }

  // Check valid area code (NPA): first digit 2-9, second digit 0-8, third digit 0-9
  const areaCode = national.substring(0, 3);
  if (!/^[2-9][0-8][0-9]$/.test(areaCode)) {
    return { isValid: false, error: 'Invalid area code' };
  }

  // Check valid exchange code (NXX): first digit 2-9
  const exchangeCode = national.substring(3, 6);
  if (!/^[2-9]\d{2}$/.test(exchangeCode)) {
    return { isValid: false, error: 'Invalid exchange code' };
  }

  let formatted = national;
  if (options?.format === 'e164') {
    formatted = formatE164(COUNTRY_CODE, national);
  } else if (options?.format === 'international') {
    formatted = `+${COUNTRY_CODE} ${national}`;
  }

  return { isValid: true, type: 'unknown', formatted };
}
