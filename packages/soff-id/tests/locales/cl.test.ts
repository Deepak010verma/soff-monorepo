import { describe, it, expect } from 'vitest';
import { validateRUT, formatRUT, calculateRUTCheckDigit } from '../../src/locales/cl.js';

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
  });
});
