import { describe, it, expect } from 'vitest';
import {
  validateRFC,
  formatRFC,
  cleanRFC,
  validateCURP,
  formatCURP,
  cleanCURP,
  getCURPGender,
  getCURPBirthDate,
  getCURPBirthState,
  getCURPStateCode,
  isRFCCompany,
  isRFCPerson,
  getRFCDate,
  parseCURP,
  parseRFC,
} from '../../src/locales/mx.js';

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

    it('should format RFC correctly', () => {
      expect(formatRFC('gama850101ab1')).toBe('GAMA850101AB1');
    });

    it('should clean RFC correctly', () => {
      expect(cleanRFC('GAMA-850101-AB1')).toBe('GAMA850101AB1');
    });
  });

  describe('RFC type detection', () => {
    it('should detect company RFC', () => {
      expect(isRFCCompany('ABC850101AB1')).toBe(true);
      expect(isRFCCompany('GAMA850101AB1')).toBe(false);
    });

    it('should detect person RFC', () => {
      expect(isRFCPerson('GAMA850101AB1')).toBe(true);
      expect(isRFCPerson('ABC850101AB1')).toBe(false);
    });
  });

  describe('RFC date extraction', () => {
    it('should extract date from RFC persona física', () => {
      const date = getRFCDate('GAMA850101AB1');
      expect(date).not.toBe(null);
      expect(date?.getFullYear()).toBe(1985);
      expect(date?.getMonth()).toBe(0); // January
      expect(date?.getDate()).toBe(1);
    });

    it('should extract date from RFC persona moral', () => {
      const date = getRFCDate('ABC850101AB1');
      expect(date).not.toBe(null);
      expect(date?.getFullYear()).toBe(1985);
    });

    it('should return null for invalid RFC', () => {
      expect(getRFCDate('invalid')).toBe(null);
    });
  });

  describe('RFC parsing', () => {
    it('should parse valid RFC', () => {
      const result = parseRFC('GAMA850101AB1');
      expect(result.valid).toBe(true);
      expect(result.type).toBe('person');
      expect(result.date).not.toBe(null);
    });

    it('should handle invalid RFC', () => {
      const result = parseRFC('invalid');
      expect(result.valid).toBe(false);
      expect(result.type).toBe(null);
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

    it('should format CURP correctly', () => {
      expect(formatCURP('gama850101hdfrrn09')).toBe('GAMA850101HDFRRN09');
    });

    it('should clean CURP correctly', () => {
      expect(cleanCURP('GAMA-850101-HDFRRN09')).toBe('GAMA850101HDFRRN09');
    });
  });

  describe('CURP utilities', () => {
    it('should extract gender from CURP', () => {
      expect(getCURPGender('GAMA850101HDFRRN09')).toBe('M'); // H = Hombre
      expect(getCURPGender('GAMA850101MDFRRN09')).toBe('F'); // M = Mujer
      expect(getCURPGender('short')).toBe(null);
      expect(getCURPGender('GAMA850101XDFRRN09')).toBe(null); // Invalid gender
    });

    it('should extract birth date from CURP', () => {
      const date = getCURPBirthDate('GAMA850101HDFRRN09');
      expect(date).not.toBe(null);
      expect(date?.getFullYear()).toBe(1985);
      expect(date?.getMonth()).toBe(0); // January
      expect(date?.getDate()).toBe(1);
    });

    it('should return null for short CURP birth date', () => {
      expect(getCURPBirthDate('short')).toBe(null);
    });

    it('should extract birth state from CURP', () => {
      expect(getCURPBirthState('GAMA850101HDFRRN09')).toBe('Ciudad de México');
      expect(getCURPBirthState('GAMA850101HNLRRN09')).toBe('Nuevo León');
      expect(getCURPBirthState('short')).toBe(null);
      expect(getCURPBirthState('GAMA850101HXXRRN09')).toBe(null); // Invalid state
    });

    it('should extract state code from CURP', () => {
      expect(getCURPStateCode('GAMA850101HDFRRN09')).toBe('DF');
      expect(getCURPStateCode('GAMA850101HNLRRN09')).toBe('NL');
      expect(getCURPStateCode('short')).toBe(null);
    });
  });

  describe('CURP parsing', () => {
    it('should parse CURP completely', () => {
      const result = parseCURP('GAMA850101HDFRRN09');
      expect(result.gender).toBe('M');
      expect(result.birthState).toBe('Ciudad de México');
      expect(result.stateCode).toBe('DF');
    });
  });
});
