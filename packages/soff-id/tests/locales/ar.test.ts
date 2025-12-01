import { describe, it, expect } from 'vitest';
import {
  validateCUIT,
  formatCUIT,
  cleanCUIT,
  calculateCUITCheckDigit,
  validateCUIL,
  validateDNI,
  formatDNI,
  cleanDNI,
  isCUITCompany,
  isCUITPerson,
  getCUITType,
  getDNIFromCUIT,
  generateCUITFromDNI,
  generateCUIT,
} from '../../src/locales/ar.js';

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

    it('should clean CUIT correctly', () => {
      expect(cleanCUIT('20-12345678-3')).toBe('20123456783');
    });
  });

  describe('CUIT check digit calculation', () => {
    it('should calculate correct check digit', () => {
      expect(calculateCUITCheckDigit('2027777777')).toBe('1');
    });

    it('should throw error for invalid length', () => {
      expect(() => calculateCUITCheckDigit('123')).toThrow();
    });
  });

  describe('CUIL validation', () => {
    it('should validate CUIL (same as CUIT)', () => {
      expect(validateCUIL('20-27777777-1')).toBe(true);
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

    it('should clean DNI correctly', () => {
      expect(cleanDNI('12.345.678')).toBe('12345678');
    });
  });

  describe('CUIT type detection', () => {
    it('should detect company CUIT', () => {
      expect(isCUITCompany('30123456789')).toBe(true);
      expect(isCUITCompany('33123456789')).toBe(true);
      expect(isCUITCompany('34123456789')).toBe(true);
    });

    it('should detect person CUIT', () => {
      expect(isCUITPerson('20123456789')).toBe(true);
      expect(isCUITPerson('27123456789')).toBe(true);
    });

    it('should return false for invalid CUIT', () => {
      expect(isCUITCompany('123')).toBe(false);
      expect(isCUITPerson('123')).toBe(false);
    });

    it('should get CUIT type', () => {
      expect(getCUITType('30123456789')).toBe('company');
      expect(getCUITType('20123456789')).toBe('male');
      expect(getCUITType('27123456789')).toBe('female');
      expect(getCUITType('23123456789')).toBe('unknown'); // Can be either
      expect(getCUITType('invalid')).toBe('unknown');
    });
  });

  describe('DNI extraction', () => {
    it('should extract DNI from CUIT', () => {
      expect(getDNIFromCUIT('20123456783')).toBe('12345678');
      expect(getDNIFromCUIT('invalid')).toBe(null);
    });
  });

  describe('CUIT generation', () => {
    it('should generate CUIT from DNI', () => {
      const cuit = generateCUITFromDNI('12345678', '20');
      expect(validateCUIT(cuit)).toBe(true);
      expect(getDNIFromCUIT(cuit)).toBe('12345678');
    });

    it('should generate random valid company CUIT', () => {
      const cuit = generateCUIT(true);
      expect(validateCUIT(cuit)).toBe(true);
      expect(isCUITCompany(cuit)).toBe(true);
    });

    it('should generate random valid person CUIT', () => {
      const cuit = generateCUIT(false);
      expect(validateCUIT(cuit)).toBe(true);
      expect(isCUITPerson(cuit)).toBe(true);
    });
  });
});
