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
 * @param ce - The CE number (6-10 digits)
 */
export function validateCE(ce: string): boolean {
  const cleaned = cleanDigits(ce);
  return cleaned.length >= 6 && cleaned.length <= 10;
}

/**
 * Validate a Tarjeta de Identidad (TI)
 * @param ti - The TI number (10-11 digits)
 */
export function validateTI(ti: string): boolean {
  const cleaned = cleanDigits(ti);
  return cleaned.length >= 10 && cleaned.length <= 11;
}
