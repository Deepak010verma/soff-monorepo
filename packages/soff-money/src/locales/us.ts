import type { Currency } from '../core/types.js';

/**
 * US Dollar (USD)
 * Format: $1,000.00
 */
export const USD: Currency = {
  code: 'USD',
  symbol: '$',
  decimals: 2,
  thousandsSeparator: ',',
  decimalSeparator: '.',
  symbolPosition: 'before',
  symbolSpacing: false,
};
