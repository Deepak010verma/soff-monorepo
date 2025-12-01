/**
 * Currency configuration for a specific locale
 */
export interface Currency {
  /** ISO 4217 currency code (e.g., 'COP', 'USD') */
  code: string;
  /** Currency symbol (e.g., '$', 'R$') */
  symbol: string;
  /** Number of decimal places (usually 2, but some currencies use 0) */
  decimals: number;
  /** Thousands separator (e.g., '.' for CO, ',' for US) */
  thousandsSeparator: string;
  /** Decimal separator (e.g., ',' for CO, '.' for US) */
  decimalSeparator: string;
  /** Symbol position: 'before' or 'after' the amount */
  symbolPosition: 'before' | 'after';
  /** Space between symbol and amount */
  symbolSpacing: boolean;
}

/**
 * Options for formatting money
 */
export interface FormatOptions {
  /** Whether to show the currency symbol */
  showSymbol?: boolean;
  /** Whether to show decimal places */
  showDecimals?: boolean;
  /** Override the default symbol position */
  symbolPosition?: 'before' | 'after';
}

/**
 * Result of a money distribution operation
 */
export type DistributionResult = Money[];

/**
 * Represents an immutable monetary value with safe integer arithmetic
 */
export interface IMoney {
  /** The amount in the smallest unit (cents) */
  readonly cents: number;
  /** The currency configuration */
  readonly currency: Currency;

  /** Add another money value */
  add(other: IMoney): IMoney;
  /** Subtract another money value */
  subtract(other: IMoney): IMoney;
  /** Multiply by a factor */
  multiply(factor: number): IMoney;
  /** Divide by a divisor */
  divide(divisor: number): IMoney;
  /** Distribute evenly without losing cents */
  distribute(parts: number): IMoney[];
  /** Format for display */
  format(options?: FormatOptions): string;
  /** Get the decimal amount */
  toDecimal(): number;
  /** Check equality */
  equals(other: IMoney): boolean;
  /** Check if greater than */
  greaterThan(other: IMoney): boolean;
  /** Check if less than */
  lessThan(other: IMoney): boolean;
  /** Check if zero */
  isZero(): boolean;
  /** Check if positive */
  isPositive(): boolean;
  /** Check if negative */
  isNegative(): boolean;
}

// Forward declaration for the Money class
import type { Money } from './money.js';
export type { Money };
