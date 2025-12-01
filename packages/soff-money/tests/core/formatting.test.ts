import { describe, it, expect } from 'vitest';
import { Money } from '../../src/core/money.js';
import { USD } from '../../src/locales/us.js';
import { COP } from '../../src/locales/co.js';
import { BRL } from '../../src/locales/br.js';
import { MXN } from '../../src/locales/mx.js';
import { ARS } from '../../src/locales/ar.js';

describe('Money formatting', () => {
  describe('USD formatting', () => {
    it('should format basic amount', () => {
      const money = Money.fromCents(100050, USD);
      expect(money.format()).toBe('$1,000.50');
    });

    it('should format without symbol', () => {
      const money = Money.fromCents(100050, USD);
      expect(money.format({ showSymbol: false })).toBe('1,000.50');
    });

    it('should format without decimals', () => {
      const money = Money.fromCents(100050, USD);
      expect(money.format({ showDecimals: false })).toBe('$1,001');
    });

    it('should format negative amounts', () => {
      const money = Money.fromCents(-100050, USD);
      expect(money.format()).toBe('$-1,000.50');
    });
  });

  describe('COP formatting', () => {
    it('should format with space after symbol', () => {
      const money = Money.fromCents(100050, COP);
      expect(money.format()).toBe('$ 1.000,50');
    });

    it('should use period as thousands separator', () => {
      const money = Money.fromCents(123456789, COP);
      expect(money.format()).toBe('$ 1.234.567,89');
    });
  });

  describe('BRL formatting', () => {
    it('should format with R$ symbol', () => {
      const money = Money.fromCents(100050, BRL);
      expect(money.format()).toBe('R$ 1.000,50');
    });
  });

  describe('MXN formatting', () => {
    it('should format without space', () => {
      const money = Money.fromCents(100050, MXN);
      expect(money.format()).toBe('$1,000.50');
    });
  });

  describe('ARS formatting', () => {
    it('should format with space and period separator', () => {
      const money = Money.fromCents(100050, ARS);
      expect(money.format()).toBe('$ 1.000,50');
    });
  });

  describe('toString', () => {
    it('should return formatted string', () => {
      const money = Money.fromCents(1000, USD);
      expect(money.toString()).toBe('$10.00');
    });
  });
});
