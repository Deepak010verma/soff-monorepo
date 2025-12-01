export type {
  Department,
  Municipality,
  PostalCode,
  SearchOptions,
  SearchResult,
  CountryConfig,
} from './types.js';

export {
  normalizeString,
  calculateMatchScore,
  searchByNameOrCode,
  findDepartmentByCode,
  findMunicipalityByCode,
  getMunicipalitiesByDepartment,
  isValidDepartmentCode,
  isValidMunicipalityCode,
  extractDepartmentCode,
} from './utils.js';
