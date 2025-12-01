import { describe, it, expect } from 'vitest';
import { Money } from '../../src/core/money.js';
import { USD } from '../../src/locales/us.js';
import { COP } from '../../src/locales/co.js';

describe('Money', () => {
  describe('creation', () => {
    it('should create money from cents', () => {
      const money = Money.fromCents(1000, USD);
      expect(money.cents).toBe(1000);
      expect(money.toDecimal()).toBe(10);
    });

    it('should create money from decimal', () => {
      const money = Money.fromDecimal(10.5, USD);
      expect(money.cents).toBe(1050);
      expect(money.toDecimal()).toBe(10.5);
    });

    it('should create zero money', () => {
      const money = Money.zero(USD);
      expect(money.cents).toBe(0);
      expect(money.isZero()).toBe(true);
    });

    it('should round when creating from decimal', () => {
      const money = Money.fromDecimal(10.555, USD);
      expect(money.cents).toBe(1056); // Rounds to nearest
    });
  });

  describe('arithmetic', () => {
    it('should add money correctly', () => {
      const a = Money.fromCents(1000, USD);
      const b = Money.fromCents(500, USD);
      const result = a.add(b);
      expect(result.cents).toBe(1500);
    });

    it('should subtract money correctly', () => {
      const a = Money.fromCents(1000, USD);
      const b = Money.fromCents(300, USD);
      const result = a.subtract(b);
      expect(result.cents).toBe(700);
    });

    it('should multiply correctly', () => {
      const money = Money.fromCents(1000, USD);
      const result = money.multiply(1.5);
      expect(result.cents).toBe(1500);
    });

    it('should divide correctly', () => {
      const money = Money.fromCents(1000, USD);
      const result = money.divide(4);
      expect(result.cents).toBe(250);
    });

    it('should throw when dividing by zero', () => {
      const money = Money.fromCents(1000, USD);
      expect(() => money.divide(0)).toThrow('Cannot divide by zero');
    });

    it('should throw when adding different currencies', () => {
      const usd = Money.fromCents(1000, USD);
      const cop = Money.fromCents(1000, COP);
      expect(() => usd.add(cop)).toThrow('different currencies');
    });
  });

  describe('distribution', () => {
    it('should distribute evenly', () => {
      const money = Money.fromCents(1000, USD);
      const parts = money.distribute(4);
      expect(parts).toHaveLength(4);
      expect(parts.every((p) => p.cents === 250)).toBe(true);
    });

    it('should distribute remainder to first parts', () => {
      const money = Money.fromCents(1000, USD); // $10.00
      const parts = money.distribute(3);
      expect(parts).toHaveLength(3);
      expect(parts[0].cents).toBe(334); // Gets extra cent
      expect(parts[1].cents).toBe(333);
      expect(parts[2].cents).toBe(333);
      // Total should be exactly 1000
      expect(parts.reduce((sum, p) => sum + p.cents, 0)).toBe(1000);
    });

    it('should distribute $100 among 3 people correctly', () => {
      const money = Money.fromCents(10000, USD); // $100.00
      const parts = money.distribute(3);
      expect(parts[0].cents).toBe(3334); // $33.34
      expect(parts[1].cents).toBe(3333); // $33.33
      expect(parts[2].cents).toBe(3333); // $33.33
      expect(parts.reduce((sum, p) => sum + p.cents, 0)).toBe(10000);
    });

    it('should distribute by ratios', () => {
      const money = Money.fromCents(10000, USD); // $100.00
      const parts = money.distributeByRatios([1, 2, 2]); // 20%, 40%, 40%
      expect(parts[0].cents).toBe(2000); // $20.00
      expect(parts[1].cents).toBe(4000); // $40.00
      expect(parts[2].cents).toBe(4000); // $40.00
    });

    it('should throw for invalid parts', () => {
      const money = Money.fromCents(1000, USD);
      expect(() => money.distribute(0)).toThrow('positive integer');
      expect(() => money.distribute(-1)).toThrow('positive integer');
    });
  });

  describe('comparisons', () => {
    it('should check equality', () => {
      const a = Money.fromCents(1000, USD);
      const b = Money.fromCents(1000, USD);
      const c = Money.fromCents(500, USD);
      expect(a.equals(b)).toBe(true);
      expect(a.equals(c)).toBe(false);
    });

    it('should compare greater than', () => {
      const a = Money.fromCents(1000, USD);
      const b = Money.fromCents(500, USD);
      expect(a.greaterThan(b)).toBe(true);
      expect(b.greaterThan(a)).toBe(false);
    });

    it('should compare less than', () => {
      const a = Money.fromCents(500, USD);
      const b = Money.fromCents(1000, USD);
      expect(a.lessThan(b)).toBe(true);
      expect(b.lessThan(a)).toBe(false);
    });

    it('should check zero, positive, negative', () => {
      const zero = Money.zero(USD);
      const positive = Money.fromCents(100, USD);
      const negative = Money.fromCents(-100, USD);

      expect(zero.isZero()).toBe(true);
      expect(positive.isPositive()).toBe(true);
      expect(negative.isNegative()).toBe(true);
    });
  });

  describe('utilities', () => {
    it('should get absolute value', () => {
      const negative = Money.fromCents(-1000, USD);
      expect(negative.abs().cents).toBe(1000);
    });

    it('should negate', () => {
      const positive = Money.fromCents(1000, USD);
      expect(positive.negate().cents).toBe(-1000);
    });

    it('should serialize to JSON', () => {
      const money = Money.fromCents(1000, USD);
      expect(money.toJSON()).toEqual({ cents: 1000, currency: 'USD' });
    });
  });
});
