import type { Currency } from '../core/types.js';

/**
 * Brazilian Real (BRL)
 * Format: R$ 1.000,00
 */
export const BRL: Currency = {
  code: 'BRL',
  symbol: 'R$',
  decimals: 2,
  thousandsSeparator: '.',
  decimalSeparator: ',',
  symbolPosition: 'before',
  symbolSpacing: true,
};
