/**
 * Remove all non-alphanumeric characters
 */
export function cleanDocument(value: string): string {
  return value.replace(/[^a-zA-Z0-9]/g, '');
}

/**
 * Remove all non-digit characters
 */
export function cleanDigits(value: string): string {
  return value.replace(/\D/g, '');
}

/**
 * Pad a string with leading zeros
 */
export function padStart(value: string, length: number): string {
  return value.padStart(length, '0');
}

/**
 * Calculate modulo 11 check digit (common algorithm)
 */
export function mod11(digits: string, weights: number[]): number {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i], 10) * weights[i % weights.length];
  }
  const remainder = sum % 11;
  return remainder;
}

/**
 * Calculate modulo 10 check digit (Luhn-like algorithms)
 */
export function mod10(digits: string, weights: number[]): number {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let product = parseInt(digits[i], 10) * weights[i % weights.length];
    if (product > 9) {
      product = Math.floor(product / 10) + (product % 10);
    }
    sum += product;
  }
  return sum % 10;
}
