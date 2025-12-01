import type { Currency } from '../core/types.js';

/**
 * Colombian Peso (COP)
 * Format: $ 1.000,00
 */
export const COP: Currency = {
  code: 'COP',
  symbol: '$',
  decimals: 2,
  thousandsSeparator: '.',
  decimalSeparator: ',',
  symbolPosition: 'before',
  symbolSpacing: true,
};

/**
 * Colombian Peso without decimals (common usage)
 * Format: $ 1.000
 */
export const COP_NO_DECIMALS: Currency = {
  ...COP,
  decimals: 0,
};
