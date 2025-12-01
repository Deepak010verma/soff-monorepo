import { cleanDigits } from '../core/utils.js';

/**
 * CUIT/CUIL weights
 */
const CUIT_WEIGHTS = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

/**
 * Calculate CUIT/CUIL check digit
 * @param cuit - The CUIT body (10 digits: type + DNI)
 * @returns The check digit (0-9)
 */
export function calculateCUITCheckDigit(cuit: string): string {
  const cleaned = cleanDigits(cuit);

  if (cleaned.length !== 10) {
    throw new Error('CUIT body must be 10 digits');
  }

  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleaned[i], 10) * CUIT_WEIGHTS[i];
  }

  const remainder = 11 - (sum % 11);

  if (remainder === 11) return '0';
  if (remainder === 10) return '9'; // Special case for Argentina
  return String(remainder);
}

/**
 * Validate an Argentine CUIT (Clave Única de Identificación Tributaria)
 * @param cuit - The CUIT to validate (e.g., "20-12345678-9")
 */
export function validateCUIT(cuit: string): boolean {
  const cleaned = cleanDigits(cuit);

  if (cleaned.length !== 11) {
    return false;
  }

  // Valid type prefixes: 20, 23, 24, 27, 30, 33, 34
  const type = cleaned.slice(0, 2);
  const validTypes = ['20', '23', '24', '27', '30', '33', '34'];
  if (!validTypes.includes(type)) {
    return false;
  }

  const body = cleaned.slice(0, 10);
  const checkDigit = cleaned.slice(-1);

  try {
    return calculateCUITCheckDigit(body) === checkDigit;
  } catch {
    return false;
  }
}

/**
 * Format a CUIT for display
 * @returns Formatted CUIT (e.g., "20-12345678-9")
 */
export function formatCUIT(cuit: string): string {
  const cleaned = cleanDigits(cuit).padStart(11, '0');
  return `${cleaned.slice(0, 2)}-${cleaned.slice(2, 10)}-${cleaned.slice(10)}`;
}

/**
 * Clean a CUIT
 */
export function cleanCUIT(cuit: string): string {
  return cleanDigits(cuit);
}

/**
 * CUIL validation (same algorithm as CUIT)
 */
export const validateCUIL = validateCUIT;
export const formatCUIL = formatCUIT;
export const cleanCUIL = cleanCUIT;
export const calculateCUILCheckDigit = calculateCUITCheckDigit;

/**
 * Validate an Argentine DNI
 * @param dni - The DNI number (7-8 digits)
 */
export function validateDNI(dni: string): boolean {
  const cleaned = cleanDigits(dni);
  return cleaned.length >= 7 && cleaned.length <= 8;
}

/**
 * Format a DNI for display
 */
export function formatDNI(dni: string): string {
  const cleaned = cleanDigits(dni);
  return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/**
 * Clean a DNI
 */
export function cleanDNI(dni: string): string {
  return cleanDigits(dni);
}
