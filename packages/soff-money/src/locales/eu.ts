import type { Currency } from '../core/types.js';

/**
 * Euro (EUR)
 * Format: 1.500,00 €
 */
export const EUR: Currency = {
  code: 'EUR',
  symbol: '€',
  decimals: 2,
  thousandsSeparator: '.',
  decimalSeparator: ',',
  symbolPosition: 'after',
  symbolSpacing: true,
};
