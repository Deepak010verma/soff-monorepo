import type { Currency, FormatOptions, IMoney } from './types.js';

/**
 * Immutable Money class that uses integer arithmetic for precision
 */
export class Money implements IMoney {
  readonly cents: number;
  readonly currency: Currency;

  private constructor(cents: number, currency: Currency) {
    if (!Number.isInteger(cents)) {
      throw new Error('Money must be created with an integer number of cents');
    }
    this.cents = cents;
    this.currency = currency;
    Object.freeze(this);
  }

  /**
   * Create money from cents (smallest unit)
   */
  static fromCents(cents: number, currency: Currency): Money {
    return new Money(Math.round(cents), currency);
  }

  /**
   * Create money from a decimal amount
   * @example Money.fromDecimal(100.50, USD) creates $100.50
   */
  static fromDecimal(amount: number, currency: Currency): Money {
    const multiplier = Math.pow(10, currency.decimals);
    const cents = Math.round(amount * multiplier);
    return new Money(cents, currency);
  }

  /**
   * Create zero money
   */
  static zero(currency: Currency): Money {
    return new Money(0, currency);
  }

  /**
   * Add another money value (must be same currency)
   */
  add(other: IMoney): Money {
    this.assertSameCurrency(other);
    return new Money(this.cents + other.cents, this.currency);
  }

  /**
   * Subtract another money value (must be same currency)
   */
  subtract(other: IMoney): Money {
    this.assertSameCurrency(other);
    return new Money(this.cents - other.cents, this.currency);
  }

  /**
   * Multiply by a factor (rounds to nearest cent)
   */
  multiply(factor: number): Money {
    return new Money(Math.round(this.cents * factor), this.currency);
  }

  /**
   * Divide by a divisor (rounds to nearest cent)
   */
  divide(divisor: number): Money {
    if (divisor === 0) {
      throw new Error('Cannot divide by zero');
    }
    return new Money(Math.round(this.cents / divisor), this.currency);
  }

  /**
   * Distribute money evenly without losing cents
   * The remainder is distributed to the first parts
   * @example $100 / 3 = [$33.34, $33.33, $33.33]
   */
  distribute(parts: number): Money[] {
    if (parts <= 0 || !Number.isInteger(parts)) {
      throw new Error('Parts must be a positive integer');
    }

    const quotient = Math.floor(this.cents / parts);
    const remainder = this.cents % parts;

    const result: Money[] = [];
    for (let i = 0; i < parts; i++) {
      // Add 1 cent to the first 'remainder' parts
      const extra = i < remainder ? 1 : 0;
      result.push(new Money(quotient + extra, this.currency));
    }

    return result;
  }

  /**
   * Distribute money according to ratios
   * @example $100 with ratios [1, 2, 2] = [$20, $40, $40]
   */
  distributeByRatios(ratios: number[]): Money[] {
    if (ratios.length === 0) {
      throw new Error('Ratios array cannot be empty');
    }

    const total = ratios.reduce((sum, r) => sum + r, 0);
    if (total <= 0) {
      throw new Error('Sum of ratios must be positive');
    }

    let remaining = this.cents;
    const result: Money[] = [];

    for (let i = 0; i < ratios.length; i++) {
      if (i === ratios.length - 1) {
        // Last part gets whatever is remaining to avoid rounding errors
        result.push(new Money(remaining, this.currency));
      } else {
        const share = Math.round((this.cents * ratios[i]) / total);
        result.push(new Money(share, this.currency));
        remaining -= share;
      }
    }

    return result;
  }

  /**
   * Format money for display
   */
  format(options: FormatOptions = {}): string {
    const { showSymbol = true, showDecimals = true, symbolPosition } = options;

    const decimal = this.toDecimal();
    const absValue = Math.abs(decimal);
    const isNegative = decimal < 0;

    // Format the number
    let formatted: string;
    if (showDecimals && this.currency.decimals > 0) {
      const [intPart, decPart] = absValue.toFixed(this.currency.decimals).split('.');
      const intFormatted = this.formatInteger(intPart);
      formatted = `${intFormatted}${this.currency.decimalSeparator}${decPart}`;
    } else {
      formatted = this.formatInteger(Math.round(absValue).toString());
    }

    // Add negative sign
    if (isNegative) {
      formatted = `-${formatted}`;
    }

    // Add symbol
    if (showSymbol) {
      const pos = symbolPosition ?? this.currency.symbolPosition;
      const space = this.currency.symbolSpacing ? ' ' : '';

      if (pos === 'before') {
        formatted = `${this.currency.symbol}${space}${formatted}`;
      } else {
        formatted = `${formatted}${space}${this.currency.symbol}`;
      }
    }

    return formatted;
  }

  /**
   * Get the decimal representation
   */
  toDecimal(): number {
    return this.cents / Math.pow(10, this.currency.decimals);
  }

  /**
   * Check equality with another money value
   */
  equals(other: IMoney): boolean {
    return this.cents === other.cents && this.currency.code === other.currency.code;
  }

  /**
   * Check if greater than another money value
   */
  greaterThan(other: IMoney): boolean {
    this.assertSameCurrency(other);
    return this.cents > other.cents;
  }

  /**
   * Check if less than another money value
   */
  lessThan(other: IMoney): boolean {
    this.assertSameCurrency(other);
    return this.cents < other.cents;
  }

  /**
   * Check if greater than or equal
   */
  greaterThanOrEqual(other: IMoney): boolean {
    this.assertSameCurrency(other);
    return this.cents >= other.cents;
  }

  /**
   * Check if less than or equal
   */
  lessThanOrEqual(other: IMoney): boolean {
    this.assertSameCurrency(other);
    return this.cents <= other.cents;
  }

  /**
   * Check if zero
   */
  isZero(): boolean {
    return this.cents === 0;
  }

  /**
   * Check if positive
   */
  isPositive(): boolean {
    return this.cents > 0;
  }

  /**
   * Check if negative
   */
  isNegative(): boolean {
    return this.cents < 0;
  }

  /**
   * Get absolute value
   */
  abs(): Money {
    return new Money(Math.abs(this.cents), this.currency);
  }

  /**
   * Negate the value
   */
  negate(): Money {
    return new Money(-this.cents, this.currency);
  }

  /**
   * Convert to JSON-serializable object
   */
  toJSON(): { cents: number; currency: string } {
    return {
      cents: this.cents,
      currency: this.currency.code,
    };
  }

  /**
   * String representation
   */
  toString(): string {
    return this.format();
  }

  private formatInteger(intStr: string): string {
    const parts: string[] = [];
    let remaining = intStr;

    while (remaining.length > 3) {
      parts.unshift(remaining.slice(-3));
      remaining = remaining.slice(0, -3);
    }

    if (remaining) {
      parts.unshift(remaining);
    }

    return parts.join(this.currency.thousandsSeparator);
  }

  private assertSameCurrency(other: IMoney): void {
    if (this.currency.code !== other.currency.code) {
      throw new Error(
        `Cannot perform operation with different currencies: ${this.currency.code} and ${other.currency.code}`
      );
    }
  }
}
