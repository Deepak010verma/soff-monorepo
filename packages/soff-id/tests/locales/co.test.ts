import { describe, it, expect } from 'vitest';
import {
  validateNIT,
  formatNIT,
  calculateNITCheckDigit,
  validateCC,
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
  });
});
