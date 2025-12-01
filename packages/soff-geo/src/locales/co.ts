import {
  searchByNameOrCode,
  findDepartmentByCode,
  findMunicipalityByCode,
  getMunicipalitiesByDepartment,
  isValidDepartmentCode,
  isValidMunicipalityCode,
} from '../core/utils.js';
import type { SearchOptions, SearchResult } from '../core/types.js';
import { DEPARTMENTS, type ColombianDepartment } from './co/departments.js';
import { MUNICIPALITIES, type ColombianMunicipality } from './co/municipalities.js';

export type { ColombianDepartment, ColombianMunicipality };

/**
 * Get all departments of Colombia
 */
export function getDepartments(): readonly ColombianDepartment[] {
  return DEPARTMENTS;
}

/**
 * Get all municipalities of Colombia (included in the bundle)
 */
export function getMunicipalities(): readonly ColombianMunicipality[] {
  return MUNICIPALITIES;
}

/**
 * Find a department by its DANE code (2 digits)
 */
export function getDepartment(code: string): ColombianDepartment | undefined {
  return findDepartmentByCode(DEPARTMENTS, code);
}

/**
 * Find a municipality by its DANE code (5 digits)
 */
export function getMunicipality(code: string): ColombianMunicipality | undefined {
  return findMunicipalityByCode(MUNICIPALITIES, code);
}

/**
 * Get all municipalities for a specific department
 * @param departmentCode DANE code of the department (2 digits)
 */
export function getDepartmentMunicipalities(departmentCode: string): ColombianMunicipality[] {
  return getMunicipalitiesByDepartment(MUNICIPALITIES, departmentCode);
}

/**
 * Search departments by name or code
 */
export function searchDepartments(
  query: string,
  options?: SearchOptions
): SearchResult<ColombianDepartment>[] {
  return searchByNameOrCode(DEPARTMENTS, query, options);
}

/**
 * Search municipalities by name or code
 */
export function searchMunicipalities(
  query: string,
  options?: SearchOptions
): SearchResult<ColombianMunicipality>[] {
  return searchByNameOrCode(MUNICIPALITIES, query, options);
}

/**
 * Validate a DANE department code
 */
export function validateDepartmentCode(code: string): boolean {
  return isValidDepartmentCode(code, 2);
}

/**
 * Validate a DANE municipality code
 */
export function validateMunicipalityCode(code: string): boolean {
  return isValidMunicipalityCode(code, 5);
}
