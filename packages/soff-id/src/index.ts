// Core utilities
export { cleanDocument, cleanDigits, padStart, mod11, mod10 } from './core/utils.js';
export type { DocumentType, ValidationResult, ValidatorFn, FormatterFn } from './core/types.js';

// Re-export all locale validators for convenience
export * from './locales/index.js';
