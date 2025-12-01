import type { Currency } from '../core/types.js';

/**
 * Peruvian Sol (PEN)
 * Format: S/ 1,500.00
 */
export const PEN: Currency = {
  code: 'PEN',
  symbol: 'S/',
  decimals: 2,
  thousandsSeparator: ',',
  decimalSeparator: '.',
  symbolPosition: 'before',
  symbolSpacing: true,
};
