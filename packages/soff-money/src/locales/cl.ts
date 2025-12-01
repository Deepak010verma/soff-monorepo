import type { Currency } from '../core/types.js';

/**
 * Chilean Peso (CLP)
 * Format: $ 1.500
 * Note: CLP doesn't use decimal places in common usage
 */
export const CLP: Currency = {
  code: 'CLP',
  symbol: '$',
  decimals: 0,
  thousandsSeparator: '.',
  decimalSeparator: ',',
  symbolPosition: 'before',
  symbolSpacing: true,
};

/**
 * Chilean Peso with decimals (for precise calculations)
 * Format: $ 1.500,00
 */
export const CLP_DECIMALS: Currency = {
  ...CLP,
  decimals: 2,
};
