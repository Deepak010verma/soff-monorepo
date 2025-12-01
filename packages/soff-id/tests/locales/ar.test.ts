import { describe, it, expect } from 'vitest';
import { validateCUIT, formatCUIT, validateDNI, formatDNI } from '../../src/locales/ar.js';

describe('Argentine Documents', () => {
  describe('CUIT validation', () => {
    it('should validate correct CUIT', () => {
      // Using known valid CUIT: 20-27777777-1 (calculated check digit)
      expect(validateCUIT('20-27777777-1')).toBe(true);
      expect(validateCUIT('20277777771')).toBe(true);
    });

    it('should reject invalid CUIT type', () => {
      expect(validateCUIT('11-12345678-3')).toBe(false); // Invalid type prefix
    });

    it('should reject invalid CUIT check digit', () => {
      expect(validateCUIT('20-12345678-0')).toBe(false);
    });

    it('should format CUIT correctly', () => {
      expect(formatCUIT('20123456783')).toBe('20-12345678-3');
    });
  });

  describe('DNI validation', () => {
    it('should validate correct DNI', () => {
      expect(validateDNI('12.345.678')).toBe(true);
      expect(validateDNI('12345678')).toBe(true);
      expect(validateDNI('1234567')).toBe(true);
    });

    it('should reject invalid DNI', () => {
      expect(validateDNI('123456')).toBe(false);
      expect(validateDNI('123456789')).toBe(false);
    });

    it('should format DNI correctly', () => {
      expect(formatDNI('12345678')).toBe('12.345.678');
    });
  });
});
