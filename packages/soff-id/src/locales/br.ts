import { cleanDigits } from '../core/utils.js';

/**
 * CPF weights for first check digit
 */
const CPF_WEIGHTS_1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];

/**
 * CPF weights for second check digit
 */
const CPF_WEIGHTS_2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

/**
 * CNPJ weights for first check digit
 */
const CNPJ_WEIGHTS_1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

/**
 * CNPJ weights for second check digit
 */
const CNPJ_WEIGHTS_2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

/**
 * Calculate CPF/CNPJ check digit using mod 11
 */
function calcCheckDigit(digits: string, weights: number[]): number {
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(digits[i], 10) * weights[i];
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Validate a Brazilian CPF (Individual Tax ID)
 * @param cpf - The CPF to validate (11 digits)
 */
export function validateCPF(cpf: string): boolean {
  const cleaned = cleanDigits(cpf);

  if (cleaned.length !== 11) {
    return false;
  }

  // Check for known invalid CPFs (all same digits)
  if (/^(\d)\1+$/.test(cleaned)) {
    return false;
  }

  // Calculate first check digit
  const digit1 = calcCheckDigit(cleaned.slice(0, 9), CPF_WEIGHTS_1);
  if (digit1 !== parseInt(cleaned[9], 10)) {
    return false;
  }

  // Calculate second check digit
  const digit2 = calcCheckDigit(cleaned.slice(0, 10), CPF_WEIGHTS_2);
  return digit2 === parseInt(cleaned[10], 10);
}

/**
 * Format a CPF for display
 * @returns Formatted CPF (e.g., "123.456.789-09")
 */
export function formatCPF(cpf: string): string {
  const cleaned = cleanDigits(cpf).padStart(11, '0');
  return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6, 9)}-${cleaned.slice(9)}`;
}

/**
 * Clean a CPF
 */
export function cleanCPF(cpf: string): string {
  return cleanDigits(cpf);
}

/**
 * Validate a Brazilian CNPJ (Business Tax ID)
 * @param cnpj - The CNPJ to validate (14 digits)
 */
export function validateCNPJ(cnpj: string): boolean {
  const cleaned = cleanDigits(cnpj);

  if (cleaned.length !== 14) {
    return false;
  }

  // Check for known invalid CNPJs (all same digits)
  if (/^(\d)\1+$/.test(cleaned)) {
    return false;
  }

  // Calculate first check digit
  const digit1 = calcCheckDigit(cleaned.slice(0, 12), CNPJ_WEIGHTS_1);
  if (digit1 !== parseInt(cleaned[12], 10)) {
    return false;
  }

  // Calculate second check digit
  const digit2 = calcCheckDigit(cleaned.slice(0, 13), CNPJ_WEIGHTS_2);
  return digit2 === parseInt(cleaned[13], 10);
}

/**
 * Format a CNPJ for display
 * @returns Formatted CNPJ (e.g., "12.345.678/0001-95")
 */
export function formatCNPJ(cnpj: string): string {
  const cleaned = cleanDigits(cnpj).padStart(14, '0');
  return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 5)}.${cleaned.slice(5, 8)}/${cleaned.slice(8, 12)}-${cleaned.slice(12)}`;
}

/**
 * Clean a CNPJ
 */
export function cleanCNPJ(cnpj: string): string {
  return cleanDigits(cnpj);
}
