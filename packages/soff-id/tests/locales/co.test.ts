import { describe, it, expect } from 'vitest';
import {
  validateNIT,
  formatNIT,
  calculateNITCheckDigit,
  validateCC,
  formatCC,
  cleanCC,
  validateCE,
  formatCE,
  cleanCE,
  validateTI,
  formatTI,
  cleanTI,
  isNITCompany,
  isNITPerson,
  generateNIT,
} from '../../src/locales/co.js';

describe('Colombian Documents', () => {
  describe('NIT validation', () => {
    it('should validate correct NIT', () => {
      // Test with known valid NITs - calculated: 800199436 -> check digit 4
      expect(validateNIT('800199436-4')).toBe(true);
      expect(validateNIT('8001994364')).toBe(true);
    });

    it('should reject invalid NIT', () => {
      expect(validateNIT('800199436-0')).toBe(false);
      expect(validateNIT('123')).toBe(false);
      expect(validateNIT('')).toBe(false);
    });

    it('should calculate check digit correctly', () => {
      // Using real NIT algorithm
      const checkDigit = calculateNITCheckDigit('800199436');
      expect(validateNIT('800199436-' + checkDigit)).toBe(true);
    });

    it('should format NIT correctly', () => {
      expect(formatNIT('9001234567')).toBe('900.123.456-7');
      expect(formatNIT('800.199.436-1')).toBe('800.199.436-1');
    });

    it('should throw error for invalid NIT length in check digit calc', () => {
      expect(() => calculateNITCheckDigit('123')).toThrow();
    });
  });

  describe('CC validation', () => {
    it('should validate correct CC', () => {
      expect(validateCC('12345678')).toBe(true);
      expect(validateCC('1.234.567')).toBe(true);
    });

    it('should reject invalid CC', () => {
      expect(validateCC('12345')).toBe(false);
      expect(validateCC('12345678901')).toBe(false);
    });

    it('should format and clean CC', () => {
      expect(formatCC('12345678')).toBe('12.345.678');
      expect(cleanCC('12.345.678')).toBe('12345678');
    });
  });

  describe('CE validation', () => {
    it('should validate correct CE', () => {
      expect(validateCE('123456')).toBe(true);
      expect(validateCE('ABC123456')).toBe(true);
    });

    it('should reject invalid CE', () => {
      expect(validateCE('12345')).toBe(false);
      expect(validateCE('12345678901')).toBe(false);
    });

    it('should format and clean CE', () => {
      expect(formatCE('abc123456')).toBe('ABC123456');
      expect(cleanCE('ABC-123-456')).toBe('ABC123456');
    });
  });

  describe('TI validation', () => {
    it('should validate correct TI', () => {
      expect(validateTI('1234567890')).toBe(true);
      expect(validateTI('12345678901')).toBe(true);
    });

    it('should reject invalid TI', () => {
      expect(validateTI('123456789')).toBe(false);
      expect(validateTI('123456789012')).toBe(false);
    });

    it('should format and clean TI', () => {
      expect(formatTI('1234567890')).toBe('1.234.567.890');
      expect(cleanTI('1.234.567.890')).toBe('1234567890');
    });
  });

  describe('NIT type detection', () => {
    it('should detect company NIT', () => {
      expect(isNITCompany('9001234567')).toBe(true);
      expect(isNITCompany('8001994364')).toBe(true);
    });

    it('should detect person NIT', () => {
      expect(isNITPerson('1234567890')).toBe(true);
      expect(isNITPerson('79123456-7')).toBe(true);
    });

    it('should return false for invalid NIT', () => {
      expect(isNITCompany('123')).toBe(false);
      expect(isNITPerson('123')).toBe(false);
    });
  });

  describe('NIT generation', () => {
    it('should generate valid company NIT', () => {
      const nit = generateNIT(true);
      expect(validateNIT(nit)).toBe(true);
      expect(isNITCompany(nit)).toBe(true);
    });

    it('should generate valid person NIT', () => {
      const nit = generateNIT(false);
      expect(validateNIT(nit)).toBe(true);
    });
  });
});
