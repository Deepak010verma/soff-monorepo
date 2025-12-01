import { describe, it, expect } from 'vitest';
import {
  getDepartments,
  getMunicipalities,
  getDepartment,
  getMunicipality,
  getDepartmentMunicipalities,
  searchDepartments,
  searchMunicipalities,
  validateDepartmentCode,
  validateMunicipalityCode,
} from '../../src/locales/co.js';

describe('Colombia (CO) Locale', () => {
  describe('Departments', () => {
    it('should return all departments', () => {
      const depts = getDepartments();
      expect(depts.length).toBeGreaterThan(30);
      expect(depts.find((d) => d.code === '05')?.name).toBe('Antioquia');
    });

    it('should get department by code', () => {
      const dept = getDepartment('11');
      expect(dept).toBeDefined();
      expect(dept?.name).toBe('Bogotá D.C.');
    });

    it('should search departments', () => {
      const results = searchDepartments('valle');
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].item.name).toContain('Valle');
    });

    it('should validate department code', () => {
      expect(validateDepartmentCode('05')).toBe(true);
      expect(validateDepartmentCode('5')).toBe(false);
    });
  });

  describe('Municipalities', () => {
    it('should return municipalities', () => {
      const munis = getMunicipalities();
      expect(munis.length).toBeGreaterThan(0);
    });

    it('should get municipality by code', () => {
      const muni = getMunicipality('05001');
      expect(muni).toBeDefined();
      expect(muni?.name).toBe('Medellín');
    });

    it('should get municipalities by department', () => {
      const munis = getDepartmentMunicipalities('05');
      expect(munis.length).toBeGreaterThan(0);
      expect(munis.every((m) => m.departmentCode === '05')).toBe(true);
    });

    it('should search municipalities', () => {
      const results = searchMunicipalities('medellin');
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].item.name).toBe('Medellín');
    });

    it('should validate municipality code', () => {
      expect(validateMunicipalityCode('05001')).toBe(true);
      expect(validateMunicipalityCode('0501')).toBe(false);
    });
  });
});
