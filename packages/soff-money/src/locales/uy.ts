import type { Currency } from '../core/types.js';

/**
 * Uruguayan Peso (UYU)
 * Format: $ 1.500,00
 */
export const UYU: Currency = {
  code: 'UYU',
  symbol: '$',
  decimals: 2,
  thousandsSeparator: '.',
  decimalSeparator: ',',
  symbolPosition: 'before',
  symbolSpacing: true,
};
