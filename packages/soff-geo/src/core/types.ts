/**
 * Represents an administrative division (department, state, province, etc.)
 */
export interface Department {
  /** Official code (DANE for Colombia, INEGI for Mexico, etc.) */
  code: string;
  /** Official name */
  name: string;
  /** ISO 3166-2 subdivision code (e.g., CO-ANT for Antioquia) */
  iso?: string;
  /** Capital city/municipality name */
  capital?: string;
  /** Capital city/municipality code */
  capitalCode?: string;
}

/**
 * Represents a municipality/city
 */
export interface Municipality {
  /** Official code (full code including department) */
  code: string;
  /** Department/state code */
  departmentCode: string;
  /** Official name */
  name: string;
  /** Category/type (e.g., capital, urban, rural) */
  category?: string;
}

/**
 * Represents a postal code entry
 */
export interface PostalCode {
  /** Postal code */
  code: string;
  /** Municipality code */
  municipalityCode: string;
  /** Department/state code */
  departmentCode: string;
  /** Zone or neighborhood name (optional) */
  zone?: string;
}

/**
 * Search options for filtering results
 */
export interface SearchOptions {
  /** Case-insensitive search (default: true) */
  ignoreCase?: boolean;
  /** Ignore accents/diacritics in search (default: true) */
  ignoreDiacritics?: boolean;
  /** Return partial matches (default: true) */
  partial?: boolean;
  /** Maximum number of results (default: no limit) */
  limit?: number;
}

/**
 * Result of a geographic search
 */
export interface SearchResult<T> {
  /** The matched item */
  item: T;
  /** Match score (0-1, higher is better) */
  score: number;
}

/**
 * Country configuration
 */
export interface CountryConfig {
  /** ISO 3166-1 alpha-2 country code */
  code: string;
  /** Country name */
  name: string;
  /** Name of the first-level administrative division (department, state, etc.) */
  divisionName: string;
  /** Plural name of the first-level administrative division */
  divisionNamePlural: string;
  /** Name of the second-level administrative division (municipality, city, etc.) */
  subdivisionName: string;
  /** Plural name of the second-level administrative division */
  subdivisionNamePlural: string;
  /** Official code system name (DANE, INEGI, etc.) */
  codeSystem: string;
}
