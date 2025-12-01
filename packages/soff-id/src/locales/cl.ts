import { cleanDocument, cleanDigits } from '../core/utils.js';

/**
 * RUT/RUN validation weights
 */
const RUT_WEIGHTS = [2, 3, 4, 5, 6, 7];

/**
 * Calculate RUT check digit
 * @param rut - The RUT body (without check digit)
 * @returns The check digit (0-9 or 'K')
 */
export function calculateRUTCheckDigit(rut: string): string {
  const cleaned = cleanDigits(rut);
  const reversed = cleaned.split('').reverse();

  let sum = 0;
  for (let i = 0; i < reversed.length; i++) {
    sum += parseInt(reversed[i], 10) * RUT_WEIGHTS[i % RUT_WEIGHTS.length];
  }

  const remainder = 11 - (sum % 11);

  if (remainder === 11) return '0';
  if (remainder === 10) return 'K';
  return String(remainder);
}

/**
 * Validate a Chilean RUT (Rol Único Tributario)
 * @param rut - The RUT to validate (e.g., "12.345.678-5" or "12345678-K")
 */
export function validateRUT(rut: string): boolean {
  const cleaned = cleanDocument(rut).toUpperCase();

  if (cleaned.length < 8 || cleaned.length > 9) {
    return false;
  }

  const body = cleaned.slice(0, -1);
  const checkDigit = cleaned.slice(-1);

  // Body must be all digits
  if (!/^\d+$/.test(body)) {
    return false;
  }

  return calculateRUTCheckDigit(body) === checkDigit;
}

/**
 * Format a RUT for display
 * @returns Formatted RUT (e.g., "12.345.678-5")
 */
export function formatRUT(rut: string): string {
  const cleaned = cleanDocument(rut).toUpperCase();

  if (cleaned.length < 2) {
    return rut;
  }

  const body = cleaned.slice(0, -1);
  const checkDigit = cleaned.slice(-1);

  // Format with dots every 3 digits from right
  const formatted = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${formatted}-${checkDigit}`;
}

/**
 * Clean a RUT
 */
export function cleanRUT(rut: string): string {
  return cleanDocument(rut).toUpperCase();
}

/**
 * Validate a Chilean RUN (same algorithm as RUT)
 */
export const validateRUN = validateRUT;
export const formatRUN = formatRUT;
export const cleanRUN = cleanRUT;
