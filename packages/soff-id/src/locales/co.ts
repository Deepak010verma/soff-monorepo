import { cleanDigits } from '../core/utils.js';

/**
 * NIT verification weights (Colombian tax ID)
 * Algorithm: Multiply each digit by its weight, sum, mod 11
 */
const NIT_WEIGHTS = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];

/**
 * Calculate the NIT check digit
 * @param nit - The NIT without check digit (8-15 digits)
 * @returns The check digit (0-9)
 */
export function calculateNITCheckDigit(nit: string): string {
  const cleaned = cleanDigits(nit);

  if (cleaned.length < 8 || cleaned.length > 15) {
    throw new Error('NIT must be between 8 and 15 digits');
  }

  let sum = 0;
  const reversed = cleaned.split('').reverse();

  for (let i = 0; i < reversed.length; i++) {
    sum += parseInt(reversed[i], 10) * NIT_WEIGHTS[i];
  }

  const remainder = sum % 11;

  if (remainder === 0) return '0';
  if (remainder === 1) return '1';
  return String(11 - remainder);
}

/**
 * Validate a Colombian NIT
 * @param nit - The NIT to validate (with or without check digit)
 * @returns true if valid
 */
export function validateNIT(nit: string): boolean {
  const cleaned = cleanDigits(nit);

  if (cleaned.length < 9 || cleaned.length > 16) {
    return false;
  }

  const body = cleaned.slice(0, -1);
  const checkDigit = cleaned.slice(-1);

  try {
    return calculateNITCheckDigit(body) === checkDigit;
  } catch {
    return false;
  }
}

/**
 * Format a NIT for display
 * @param nit - The NIT to format
 * @returns Formatted NIT (e.g., "900.123.456-7")
 */
export function formatNIT(nit: string): string {
  const cleaned = cleanDigits(nit);

  if (cleaned.length < 9) {
    return nit;
  }

  const body = cleaned.slice(0, -1);
  const checkDigit = cleaned.slice(-1);

  // Format with dots every 3 digits from right
  const formatted = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${formatted}-${checkDigit}`;
}

/**
 * Clean a NIT (remove all formatting)
 */
export function cleanNIT(nit: string): string {
  return cleanDigits(nit);
}

/**
 * Validate a Colombian Cédula de Ciudadanía (CC)
 * @param cc - The CC number (6-10 digits)
 * @returns true if valid format
 */
export function validateCC(cc: string): boolean {
  const cleaned = cleanDigits(cc);
  return cleaned.length >= 6 && cleaned.length <= 10;
}

/**
 * Format a Cédula for display
 */
export function formatCC(cc: string): string {
  const cleaned = cleanDigits(cc);
  return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/**
 * Clean a Cédula
 */
export function cleanCC(cc: string): string {
  return cleanDigits(cc);
}

/**
 * Validate a Cédula de Extranjería (CE)
 * @param ce - The CE number (6-10 alphanumeric characters)
 */
export function validateCE(ce: string): boolean {
  const cleaned = ce.replace(/[^a-zA-Z0-9]/g, '');
  return cleaned.length >= 6 && cleaned.length <= 10;
}

/**
 * Format a Cédula de Extranjería for display
 */
export function formatCE(ce: string): string {
  const cleaned = ce.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
  return cleaned;
}

/**
 * Clean a Cédula de Extranjería
 */
export function cleanCE(ce: string): string {
  return ce.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
}

/**
 * Validate a Tarjeta de Identidad (TI)
 * @param ti - The TI number (10-11 digits)
 */
export function validateTI(ti: string): boolean {
  const cleaned = cleanDigits(ti);
  return cleaned.length >= 10 && cleaned.length <= 11;
}

/**
 * Format a Tarjeta de Identidad for display
 */
export function formatTI(ti: string): string {
  const cleaned = cleanDigits(ti);
  return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/**
 * Clean a Tarjeta de Identidad
 */
export function cleanTI(ti: string): string {
  return cleanDigits(ti);
}

/**
 * Check if a NIT belongs to a company (persona jurídica)
 * Company NITs typically start with 8 or 9
 */
export function isNITCompany(nit: string): boolean {
  const cleaned = cleanDigits(nit);
  if (cleaned.length < 9) return false;
  const firstDigit = cleaned[0];
  return firstDigit === '8' || firstDigit === '9';
}

/**
 * Check if a NIT belongs to an individual (persona natural)
 */
export function isNITPerson(nit: string): boolean {
  const cleaned = cleanDigits(nit);
  if (cleaned.length < 9) return false;
  return !isNITCompany(nit);
}

/**
 * Generate a random valid NIT
 * @param isCompany - Whether to generate a company NIT
 */
export function generateNIT(isCompany: boolean = true): string {
  const prefix = isCompany
    ? Math.random() < 0.5
      ? '8'
      : '9'
    : String(Math.floor(Math.random() * 8));
  const length = Math.floor(Math.random() * 7) + 8; // 8-14 digits body
  let body = prefix;

  for (let i = 1; i < length; i++) {
    body += Math.floor(Math.random() * 10);
  }

  const checkDigit = calculateNITCheckDigit(body);
  return body + checkDigit;
}
