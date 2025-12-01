import { describe, it, expect } from 'vitest';
import { validateRFC, validateCURP, getCURPGender } from '../../src/locales/mx.js';

describe('Mexican Documents', () => {
  describe('RFC validation', () => {
    it('should validate correct RFC persona física', () => {
      expect(validateRFC('GAMA850101AB1')).toBe(true);
      expect(validateRFC('XAXX010101000')).toBe(true);
    });

    it('should validate correct RFC persona moral', () => {
      expect(validateRFC('ABC850101AB1')).toBe(true);
    });

    it('should reject invalid RFC', () => {
      expect(validateRFC('123')).toBe(false);
      expect(validateRFC('INVALIDO')).toBe(false);
    });
  });

  describe('CURP validation', () => {
    it('should validate CURP format', () => {
      // CURP validation is complex, test format only
      expect(validateCURP('INVALID')).toBe(false);
      expect(validateCURP('ABCD850101HDFRRN09')).toBe(false); // Invalid check digit
    });

    it('should reject invalid CURP', () => {
      expect(validateCURP('123')).toBe(false);
      expect(validateCURP('INVALIDCURP12345678')).toBe(false);
    });
  });

  describe('CURP utilities', () => {
    it('should extract gender from CURP', () => {
      expect(getCURPGender('GAMA850101HDFRRN09')).toBe('M'); // H = Hombre
      expect(getCURPGender('GAMA850101MDFRRN09')).toBe('F'); // M = Mujer
    });
  });
});
