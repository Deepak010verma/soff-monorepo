/**
 * Result of a document validation
 */
export interface ValidationResult {
  /** Whether the document is valid */
  valid: boolean;
  /** Error message if invalid */
  error?: string;
  /** The cleaned/normalized value */
  cleaned?: string;
  /** The formatted value */
  formatted?: string;
}

/**
 * Document type configuration
 */
export interface DocumentType {
  /** Document type code */
  code: string;
  /** Human-readable name */
  name: string;
  /** Country code (ISO 3166-1 alpha-2) */
  country: string;
  /** Regular expression for valid format */
  pattern: RegExp;
  /** Validate the document */
  validate: (value: string) => boolean;
  /** Format the document for display */
  format: (value: string) => string;
  /** Clean/normalize the document (remove formatting) */
  clean: (value: string) => string;
}

/**
 * Validator function type
 */
export type ValidatorFn = (value: string) => boolean;

/**
 * Formatter function type
 */
export type FormatterFn = (value: string) => string;
