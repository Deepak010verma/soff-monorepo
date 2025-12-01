import { describe, it, expect } from 'vitest';
import {
  normalizeString,
  calculateMatchScore,
  searchByNameOrCode,
  isValidDepartmentCode,
  isValidMunicipalityCode,
  extractDepartmentCode,
} from '../../src/core/utils.js';

describe('Core Utils', () => {
  describe('normalizeString', () => {
    it('should normalize strings correctly', () => {
      expect(normalizeString('Bogotá')).toBe('bogota');
      expect(normalizeString('MÉXICO')).toBe('mexico');
      expect(normalizeString('Cañon')).toBe('canon');
    });

    it('should respect options', () => {
      expect(normalizeString('Bogotá', { ignoreDiacritics: false })).toBe('bogotá');
      expect(normalizeString('Bogotá', { ignoreCase: false })).toBe('Bogota');
    });
  });

  describe('calculateMatchScore', () => {
    it('should return 1 for exact match', () => {
      expect(calculateMatchScore('bogota', 'Bogotá')).toBe(1);
    });

    it('should return high score for startsWith', () => {
      expect(calculateMatchScore('bog', 'Bogotá')).toBe(0.9);
    });

    it('should return medium score for partial match', () => {
      const score = calculateMatchScore('got', 'Bogotá');
      expect(score).toBeGreaterThan(0.5);
      expect(score).toBeLessThan(0.9);
    });

    it('should return 0 for no match', () => {
      expect(calculateMatchScore('xyz', 'Bogotá')).toBe(0);
    });
  });

  describe('searchByNameOrCode', () => {
    const items = [
      { code: '01', name: 'Item One' },
      { code: '02', name: 'Item Two' },
      { code: '10', name: 'Another Item' },
    ];

    it('should search by code', () => {
      const results = searchByNameOrCode(items, '01');
      expect(results).toHaveLength(1);
      expect(results[0].item.name).toBe('Item One');
    });

    it('should search by name', () => {
      const results = searchByNameOrCode(items, 'two');
      expect(results).toHaveLength(1);
      expect(results[0].item.code).toBe('02');
    });

    it('should respect limit', () => {
      const results = searchByNameOrCode(items, 'item', { limit: 1 });
      expect(results).toHaveLength(1);
    });
  });

  describe('validation', () => {
    it('should validate department code', () => {
      expect(isValidDepartmentCode('05', 2)).toBe(true);
      expect(isValidDepartmentCode('5', 2)).toBe(false);
      expect(isValidDepartmentCode('005', 2)).toBe(false);
      expect(isValidDepartmentCode('AB', 2)).toBe(false);
    });

    it('should validate municipality code', () => {
      expect(isValidMunicipalityCode('05001', 5)).toBe(true);
      expect(isValidMunicipalityCode('0501', 5)).toBe(false);
    });
  });

  describe('extractDepartmentCode', () => {
    it('should extract department code from municipality code', () => {
      expect(extractDepartmentCode('05001', 2)).toBe('05');
      expect(extractDepartmentCode('11001', 2)).toBe('11');
    });
  });
});
