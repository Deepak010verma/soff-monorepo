import { cleanDocument } from '../core/utils.js';

/**
 * Valid RFC patterns
 * - Persona física: 4 letters + 6 digits + 3 alphanumeric (homoclave)
 * - Persona moral: 3 letters + 6 digits + 3 alphanumeric (homoclave)
 */
const RFC_PATTERN_FISICA = /^[A-ZÑ&]{4}\d{6}[A-Z0-9]{3}$/;
const RFC_PATTERN_MORAL = /^[A-ZÑ&]{3}\d{6}[A-Z0-9]{3}$/;

/**
 * CURP pattern
 * 18 characters: 4 letters + 6 digits + 6 letters + 2 alphanumeric
 */
const CURP_PATTERN = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/;

/**
 * Validate a Mexican RFC (Registro Federal de Contribuyentes)
 * @param rfc - The RFC to validate
 */
export function validateRFC(rfc: string): boolean {
  const cleaned = cleanDocument(rfc).toUpperCase();

  if (cleaned.length !== 12 && cleaned.length !== 13) {
    return false;
  }

  // 12 chars = Persona moral, 13 chars = Persona física
  if (cleaned.length === 13) {
    return RFC_PATTERN_FISICA.test(cleaned);
  }

  return RFC_PATTERN_MORAL.test(cleaned);
}

/**
 * Format an RFC for display (uppercase, no separators)
 */
export function formatRFC(rfc: string): string {
  return cleanDocument(rfc).toUpperCase();
}

/**
 * Clean an RFC
 */
export function cleanRFC(rfc: string): string {
  return cleanDocument(rfc).toUpperCase();
}

/**
 * Validate a Mexican CURP (Clave Única de Registro de Población)
 * @param curp - The CURP to validate (18 characters)
 */
export function validateCURP(curp: string): boolean {
  const cleaned = cleanDocument(curp).toUpperCase();

  if (cleaned.length !== 18) {
    return false;
  }

  if (!CURP_PATTERN.test(cleaned)) {
    return false;
  }

  // Validate check digit
  return validateCURPCheckDigit(cleaned);
}

/**
 * CURP check digit validation
 */
function validateCURPCheckDigit(curp: string): boolean {
  const dictionary = '0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  let sum = 0;

  for (let i = 0; i < 17; i++) {
    const char = curp[i];
    const value = dictionary.indexOf(char);
    if (value === -1) return false;
    sum += value * (18 - i);
  }

  const checkDigit = (10 - (sum % 10)) % 10;
  return checkDigit === parseInt(curp[17], 10);
}

/**
 * Format a CURP for display
 */
export function formatCURP(curp: string): string {
  return cleanDocument(curp).toUpperCase();
}

/**
 * Clean a CURP
 */
export function cleanCURP(curp: string): string {
  return cleanDocument(curp).toUpperCase();
}

/**
 * Get the gender from a CURP
 * @returns 'M' for male, 'F' for female, or null if invalid
 */
export function getCURPGender(curp: string): 'M' | 'F' | null {
  const cleaned = cleanDocument(curp).toUpperCase();
  if (cleaned.length < 11) return null;

  const genderChar = cleaned[10];
  if (genderChar === 'H') return 'M';
  if (genderChar === 'M') return 'F';
  return null;
}

/**
 * Get the birth date from a CURP
 * @returns Date object or null if invalid
 */
export function getCURPBirthDate(curp: string): Date | null {
  const cleaned = cleanDocument(curp).toUpperCase();
  if (cleaned.length < 10) return null;

  const yearPart = cleaned.slice(4, 6);
  const month = cleaned.slice(6, 8);
  const day = cleaned.slice(8, 10);

  // Determine century based on position 17 (digit for century)
  // 0-9 for people born 1900-1999, A for 2000+
  const centuryChar = cleaned[16];
  let year: number;

  if (/\d/.test(centuryChar)) {
    year = 1900 + parseInt(yearPart, 10);
  } else {
    year = 2000 + parseInt(yearPart, 10);
  }

  const date = new Date(year, parseInt(month, 10) - 1, parseInt(day, 10));

  // Validate the date is real
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== parseInt(month, 10) - 1 ||
    date.getDate() !== parseInt(day, 10)
  ) {
    return null;
  }

  return date;
}
