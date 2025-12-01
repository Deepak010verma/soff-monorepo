import { describe, it, expect } from 'vitest';
import { Money } from '../../src/core/money.js';
import { USD } from '../../src/locales/us.js';
import { COP, COP_NO_DECIMALS } from '../../src/locales/co.js';
import { BRL } from '../../src/locales/br.js';
import { MXN } from '../../src/locales/mx.js';
import { ARS } from '../../src/locales/ar.js';
import { CLP } from '../../src/locales/cl.js';
import { PEN } from '../../src/locales/pe.js';
import { UYU } from '../../src/locales/uy.js';
import { EUR } from '../../src/locales/eu.js';

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

  describe('CLP formatting', () => {
    it('should format without decimals', () => {
      const money = Money.fromCents(150000, CLP); // CLP has 0 decimals
      expect(money.format()).toBe('$ 150.000');
    });

    it('should format large amounts', () => {
      const money = Money.fromCents(1500000, CLP);
      expect(money.format()).toBe('$ 1.500.000');
    });
  });

  describe('COP_NO_DECIMALS formatting', () => {
    it('should format without decimals', () => {
      const money = Money.fromCents(150000, COP_NO_DECIMALS);
      expect(money.format()).toBe('$ 150.000');
    });
  });

  describe('PEN formatting', () => {
    it('should format with S/ symbol', () => {
      const money = Money.fromCents(100050, PEN);
      expect(money.format()).toBe('S/ 1,000.50');
    });
  });

  describe('UYU formatting', () => {
    it('should format with period separator', () => {
      const money = Money.fromCents(100050, UYU);
      expect(money.format()).toBe('$ 1.000,50');
    });
  });

  describe('EUR formatting', () => {
    it('should format with symbol after', () => {
      const money = Money.fromCents(100050, EUR);
      expect(money.format()).toBe('1.000,50 €');
    });

    it('should format without symbol', () => {
      const money = Money.fromCents(100050, EUR);
      expect(money.format({ showSymbol: false })).toBe('1.000,50');
    });

    it('should override symbol position', () => {
      const money = Money.fromCents(100050, EUR);
      expect(money.format({ symbolPosition: 'before' })).toBe('€ 1.000,50');
    });
  });

  describe('toString', () => {
    it('should return formatted string', () => {
      const money = Money.fromCents(1000, USD);
      expect(money.toString()).toBe('$10.00');
    });
  });
});
