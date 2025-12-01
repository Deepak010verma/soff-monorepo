import type { Currency } from '../core/types.js';

/**
 * Argentine Peso (ARS)
 * Format: $ 1.000,00
 */
export const ARS: Currency = {
  code: 'ARS',
  symbol: '$',
  decimals: 2,
  thousandsSeparator: '.',
  decimalSeparator: ',',
  symbolPosition: 'before',
  symbolSpacing: true,
};
