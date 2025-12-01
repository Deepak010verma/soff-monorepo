import { describe, it, expect } from 'vitest';
import {
  getStates,
  getMunicipalities,
  getState,
  getMunicipality,
  getStateMunicipalities,
  searchStates,
  searchMunicipalities,
  validateStateCode,
  validateMunicipalityCode,
} from '../../src/locales/mx.js';

describe('Mexico (MX) Locale', () => {
  describe('States', () => {
    it('should return all states', () => {
      const states = getStates();
      expect(states.length).toBe(32);
      expect(states.find((s) => s.code === '09')?.name).toBe('Ciudad de México');
    });

    it('should get state by code', () => {
      const state = getState('14');
      expect(state).toBeDefined();
      expect(state?.name).toBe('Jalisco');
    });

    it('should search states', () => {
      const results = searchStates('california');
      expect(results.length).toBeGreaterThan(0);
      expect(results.some((r) => r.item.name.includes('Baja California'))).toBe(true);
    });

    it('should validate state code', () => {
      expect(validateStateCode('09')).toBe(true);
      expect(validateStateCode('9')).toBe(false);
    });
  });

  describe('Municipalities', () => {
    it('should return municipalities', () => {
      const munis = getMunicipalities();
      expect(munis.length).toBeGreaterThan(0);
    });

    it('should get municipality by code', () => {
      const muni = getMunicipality('09015');
      expect(muni).toBeDefined();
      expect(muni?.name).toBe('Cuauhtémoc');
    });

    it('should get municipalities by state', () => {
      const munis = getStateMunicipalities('09');
      expect(munis.length).toBeGreaterThan(0);
      expect(munis.every((m) => m.departmentCode === '09')).toBe(true);
    });

    it('should search municipalities', () => {
      const results = searchMunicipalities('guadalajara');
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].item.name).toBe('Guadalajara');
    });

    it('should validate municipality code', () => {
      expect(validateMunicipalityCode('09015')).toBe(true);
      expect(validateMunicipalityCode('0915')).toBe(false);
    });
  });
});
