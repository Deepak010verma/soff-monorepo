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
 * Calculate CPF check digits
 * @param cpf - The CPF body (9 digits without check digits)
 * @returns The two check digits as a string
 */
export function calculateCPFCheckDigit(cpf: string): string {
  const cleaned = cleanDigits(cpf).slice(0, 9).padStart(9, '0');

  if (cleaned.length !== 9) {
    throw new Error('CPF body must be 9 digits');
  }

  const digit1 = calcCheckDigit(cleaned, CPF_WEIGHTS_1);
  const digit2 = calcCheckDigit(cleaned + digit1, CPF_WEIGHTS_2);

  return `${digit1}${digit2}`;
}

/**
 * Calculate CNPJ check digits
 * @param cnpj - The CNPJ body (12 digits without check digits)
 * @returns The two check digits as a string
 */
export function calculateCNPJCheckDigit(cnpj: string): string {
  const cleaned = cleanDigits(cnpj).slice(0, 12).padStart(12, '0');

  if (cleaned.length !== 12) {
    throw new Error('CNPJ body must be 12 digits');
  }

  const digit1 = calcCheckDigit(cleaned, CNPJ_WEIGHTS_1);
  const digit2 = calcCheckDigit(cleaned + digit1, CNPJ_WEIGHTS_2);

  return `${digit1}${digit2}`;
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

/**
 * Generate a random valid CPF
 */
export function generateCPF(): string {
  let body = '';
  for (let i = 0; i < 9; i++) {
    body += Math.floor(Math.random() * 10);
  }
  const checkDigits = calculateCPFCheckDigit(body);
  return body + checkDigits;
}

/**
 * Generate a random valid CNPJ
 * @param branchNumber - The branch number (0001 for matriz, others for filiais)
 */
export function generateCNPJ(branchNumber: string = '0001'): string {
  let base = '';
  for (let i = 0; i < 8; i++) {
    base += Math.floor(Math.random() * 10);
  }
  const body = base + branchNumber.padStart(4, '0');
  const checkDigits = calculateCNPJCheckDigit(body);
  return body + checkDigits;
}

/**
 * Check if CNPJ is a matriz (main branch)
 */
export function isCNPJMatriz(cnpj: string): boolean {
  const cleaned = cleanDigits(cnpj);
  if (cleaned.length !== 14) return false;
  return cleaned.slice(8, 12) === '0001';
}

/**
 * Check if CNPJ is a filial (branch)
 */
export function isCNPJFilial(cnpj: string): boolean {
  const cleaned = cleanDigits(cnpj);
  if (cleaned.length !== 14) return false;
  return cleaned.slice(8, 12) !== '0001';
}

/**
 * Get the branch number from a CNPJ
 * @returns The branch number (e.g., "0001" for matriz)
 */
export function getCNPJBranchNumber(cnpj: string): string | null {
  const cleaned = cleanDigits(cnpj);
  if (cleaned.length !== 14) return null;
  return cleaned.slice(8, 12);
}
