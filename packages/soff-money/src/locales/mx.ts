import type { Currency } from '../core/types.js';

/**
 * Mexican Peso (MXN)
 * Format: $1,000.00
 */
export const MXN: Currency = {
  code: 'MXN',
  symbol: '$',
  decimals: 2,
  thousandsSeparator: ',',
  decimalSeparator: '.',
  symbolPosition: 'before',
  symbolSpacing: false,
};
