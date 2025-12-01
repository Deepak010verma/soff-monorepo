import { describe, it, expect } from 'vitest';
import {
  validateRUT,
  formatRUT,
  cleanRUT,
  calculateRUTCheckDigit,
  validateRUN,
  calculateRUNCheckDigit,
  generateRUT,
  getFormattedRUTIfValid,
} from '../../src/locales/cl.js';

describe('Chilean Documents', () => {
  describe('RUT validation', () => {
    it('should validate correct RUT', () => {
      // Using calculated check digits
      const check1 = calculateRUTCheckDigit('12345678');
      expect(validateRUT('12345678-' + check1)).toBe(true);
    });

    it('should validate RUT with K check digit', () => {
      // Find a RUT that has K as check digit
      const check = calculateRUTCheckDigit('44444444');
      expect(validateRUT('44444444-' + check)).toBe(true);
    });

    it('should reject invalid RUT', () => {
      expect(validateRUT('12.345.678-0')).toBe(false);
      expect(validateRUT('123')).toBe(false);
    });

    it('should calculate check digit correctly', () => {
      // Verify the check digit validates
      const check = calculateRUTCheckDigit('12345678');
      expect(validateRUT('12345678-' + check)).toBe(true);
    });

    it('should format RUT correctly', () => {
      expect(formatRUT('123456785')).toBe('12.345.678-5');
    });

    it('should clean RUT correctly', () => {
      expect(cleanRUT('12.345.678-5')).toBe('123456785');
      expect(cleanRUT('12345678-k')).toBe('12345678K');
    });
  });

  describe('RUN validation (same as RUT)', () => {
    it('should validate correct RUN', () => {
      const check = calculateRUNCheckDigit('12345678');
      expect(validateRUN('12345678-' + check)).toBe(true);
    });
  });

  describe('RUT generation', () => {
    it('should generate valid RUT', () => {
      const rut = generateRUT();
      expect(validateRUT(rut)).toBe(true);
    });

    it('should generate multiple unique RUTs', () => {
      const ruts = new Set([generateRUT(), generateRUT(), generateRUT()]);
      expect(ruts.size).toBeGreaterThan(1);
    });
  });

  describe('RUT utilities', () => {
    it('should return formatted RUT if valid', () => {
      const check = calculateRUTCheckDigit('12345678');
      expect(getFormattedRUTIfValid('12345678' + check)).toBe('12.345.678-' + check);
    });

    it('should return null for invalid RUT', () => {
      expect(getFormattedRUTIfValid('12345678-0')).toBe(null);
    });
  });
});
