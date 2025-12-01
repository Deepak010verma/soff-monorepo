import {
  searchByNameOrCode,
  findDepartmentByCode,
  findMunicipalityByCode,
  getMunicipalitiesByDepartment,
  isValidDepartmentCode,
  isValidMunicipalityCode,
} from '../core/utils.js';
import type { SearchOptions, SearchResult } from '../core/types.js';
import { STATES, type MexicanState } from './mx/states.js';
import { MUNICIPALITIES, type MexicanMunicipality } from './mx/municipalities.js';

export type { MexicanState, MexicanMunicipality };

/**
 * Get all states of Mexico
 */
export function getStates(): readonly MexicanState[] {
  return STATES;
}

/**
 * Get all municipalities of Mexico (included in the bundle)
 */
export function getMunicipalities(): readonly MexicanMunicipality[] {
  return MUNICIPALITIES;
}

/**
 * Find a state by its INEGI code (2 digits)
 */
export function getState(code: string): MexicanState | undefined {
  return findDepartmentByCode(STATES, code);
}

/**
 * Find a municipality by its INEGI code (5 digits)
 */
export function getMunicipality(code: string): MexicanMunicipality | undefined {
  return findMunicipalityByCode(MUNICIPALITIES, code);
}

/**
 * Get all municipalities for a specific state
 * @param stateCode INEGI code of the state (2 digits)
 */
export function getStateMunicipalities(stateCode: string): MexicanMunicipality[] {
  return getMunicipalitiesByDepartment(MUNICIPALITIES, stateCode);
}

/**
 * Search states by name or code
 */
export function searchStates(query: string, options?: SearchOptions): SearchResult<MexicanState>[] {
  return searchByNameOrCode(STATES, query, options);
}

/**
 * Search municipalities by name or code
 */
export function searchMunicipalities(
  query: string,
  options?: SearchOptions
): SearchResult<MexicanMunicipality>[] {
  return searchByNameOrCode(MUNICIPALITIES, query, options);
}

/**
 * Validate an INEGI state code
 */
export function validateStateCode(code: string): boolean {
  return isValidDepartmentCode(code, 2);
}

/**
 * Validate an INEGI municipality code
 */
export function validateMunicipalityCode(code: string): boolean {
  return isValidMunicipalityCode(code, 5);
}
