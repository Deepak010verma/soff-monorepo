import type { ValidationResult, FieldConstraints } from './types.js';
import { FIELD_CONSTRAINTS, SPECIAL_KEYWORDS, MONTH_NAMES, DAY_NAMES } from './types.js';

/**
 * Validates a cron expression
 * Supports both 5-field and 6-field (with seconds) cron expressions
 * Also supports special keywords like @daily, @hourly, etc.
 *
 * @param expression - The cron expression to validate
 * @param allowSeconds - Whether to allow 6-field cron expressions with seconds
 * @returns ValidationResult object with isValid flag and optional error message
 *
 * @example
 * validateCron('0 2 * * *') // { isValid: true }
 * validateCron('invalid') // { isValid: false, error: '...' }
 * validateCron('0 0 2 * * *', true) // { isValid: true } (with seconds)
 */
export function validateCron(expression: string, allowSeconds = false): ValidationResult {
  if (!expression || typeof expression !== 'string') {
    return {
      isValid: false,
      error: 'Cron expression must be a non-empty string',
    };
  }

  const trimmed = expression.trim();

  // Check for special keywords
  if (trimmed.startsWith('@')) {
    if (SPECIAL_KEYWORDS[trimmed]) {
      return { isValid: true };
    }
    return {
      isValid: false,
      error: `Unknown special keyword: ${trimmed}`,
    };
  }

  // Split into fields
  const fields = trimmed.split(/\s+/);
  const expectedFields = allowSeconds ? 6 : 5;

  if (fields.length !== expectedFields) {
    return {
      isValid: false,
      error: `Expected ${expectedFields} fields, got ${fields.length}`,
    };
  }

  // Field order: [second] minute hour dayOfMonth month dayOfWeek
  const fieldNames = allowSeconds
    ? ['second', 'minute', 'hour', 'dayOfMonth', 'month', 'dayOfWeek']
    : ['minute', 'hour', 'dayOfMonth', 'month', 'dayOfWeek'];

  // Validate each field
  for (let i = 0; i < fields.length; i++) {
    const fieldName = fieldNames[i];
    const fieldValue = fields[i];
    const constraints = FIELD_CONSTRAINTS[fieldName];

    const result = validateField(fieldValue, constraints, fieldName);
    if (!result.isValid) {
      return {
        isValid: false,
        error: result.error,
        field: fieldName as ValidationResult['field'],
      };
    }
  }

  return { isValid: true };
}

/**
 * Validates a single cron field
 */
function validateField(
  value: string,
  constraints: FieldConstraints,
  fieldName: string
): ValidationResult {
  if (!value) {
    return {
      isValid: false,
      error: `${constraints.name} field cannot be empty`,
    };
  }

  // Wildcard is always valid
  if (value === '*') {
    return { isValid: true };
  }

  // Question mark (for day fields only)
  if (value === '?') {
    if (fieldName === 'dayOfMonth' || fieldName === 'dayOfWeek') {
      return { isValid: true };
    }
    return {
      isValid: false,
      error: `Question mark (?) is only valid for day fields, not ${constraints.name}`,
    };
  }

  // Handle step values (e.g., */15, 0-10/2)
  if (value.includes('/')) {
    return validateStepField(value, constraints, fieldName);
  }

  // Handle lists (e.g., 1,3,5 or 1-3,5-7)
  // Check lists before ranges because lists can contain ranges
  if (value.includes(',')) {
    return validateListField(value, constraints, fieldName);
  }

  // Handle ranges (e.g., 0-5)
  if (value.includes('-')) {
    return validateRangeField(value, constraints, fieldName);
  }

  // Single value
  return validateSingleValue(value, constraints, fieldName);
}

/**
 * Validates a step field with step syntax
 */
function validateStepField(
  value: string,
  constraints: FieldConstraints,
  fieldName: string
): ValidationResult {
  const parts = value.split('/');
  if (parts.length !== 2) {
    return {
      isValid: false,
      error: `Invalid step syntax in ${constraints.name}: ${value}`,
    };
  }

  const [range, step] = parts;

  // Validate step value
  const stepNum = parseInt(step, 10);
  if (isNaN(stepNum) || stepNum <= 0) {
    return {
      isValid: false,
      error: `Invalid step value in ${constraints.name}: ${step}`,
    };
  }

  // If range is *, it's valid
  if (range === '*') {
    return { isValid: true };
  }

  // If range is a number or range, validate it
  if (range.includes('-')) {
    return validateRangeField(range, constraints, fieldName);
  }

  return validateSingleValue(range, constraints, fieldName);
}

/**
 * Validates a range field (e.g., 0-5)
 */
function validateRangeField(
  value: string,
  constraints: FieldConstraints,
  fieldName: string
): ValidationResult {
  const parts = value.split('-');
  if (parts.length !== 2) {
    return {
      isValid: false,
      error: `Invalid range syntax in ${constraints.name}: ${value}`,
    };
  }

  const [startStr, endStr] = parts;
  const start = parseFieldValue(startStr, fieldName);
  const end = parseFieldValue(endStr, fieldName);

  if (start === null) {
    return {
      isValid: false,
      error: `Invalid start value in ${constraints.name} range: ${startStr}`,
    };
  }

  if (end === null) {
    return {
      isValid: false,
      error: `Invalid end value in ${constraints.name} range: ${endStr}`,
    };
  }

  if (start < constraints.min || start > constraints.max) {
    return {
      isValid: false,
      error: `Start value ${start} is out of range for ${constraints.name} (${constraints.min}-${constraints.max})`,
    };
  }

  if (end < constraints.min || end > constraints.max) {
    return {
      isValid: false,
      error: `End value ${end} is out of range for ${constraints.name} (${constraints.min}-${constraints.max})`,
    };
  }

  if (start > end) {
    return {
      isValid: false,
      error: `Start value ${start} cannot be greater than end value ${end} in ${constraints.name}`,
    };
  }

  return { isValid: true };
}

/**
 * Validates a list field (e.g., 1,3,5)
 */
function validateListField(
  value: string,
  constraints: FieldConstraints,
  fieldName: string
): ValidationResult {
  const values = value.split(',');

  for (const val of values) {
    const trimmed = val.trim();
    if (!trimmed) {
      return {
        isValid: false,
        error: `Empty value in ${constraints.name} list`,
      };
    }

    // Each item can be a single value or a range
    if (trimmed.includes('-')) {
      const result = validateRangeField(trimmed, constraints, fieldName);
      if (!result.isValid) {
        return result;
      }
    } else {
      const result = validateSingleValue(trimmed, constraints, fieldName);
      if (!result.isValid) {
        return result;
      }
    }
  }

  return { isValid: true };
}

/**
 * Validates a single numeric value
 */
function validateSingleValue(
  value: string,
  constraints: FieldConstraints,
  fieldName: string
): ValidationResult {
  const num = parseFieldValue(value, fieldName);

  if (num === null) {
    return {
      isValid: false,
      error: `Invalid value in ${constraints.name}: ${value}`,
    };
  }

  if (num < constraints.min || num > constraints.max) {
    return {
      isValid: false,
      error: `Value ${num} is out of range for ${constraints.name} (${constraints.min}-${constraints.max})`,
    };
  }

  return { isValid: true };
}

/**
 * Parses a field value, handling numeric values and named values (MON, JAN, etc.)
 */
function parseFieldValue(value: string, fieldName: string): number | null {
  // Try parsing as number first
  const num = parseInt(value, 10);
  if (!isNaN(num)) {
    return num;
  }

  // Try parsing as month name
  if (fieldName === 'month') {
    const monthNum = MONTH_NAMES[value.toUpperCase()];
    if (monthNum !== undefined) {
      return monthNum;
    }
  }

  // Try parsing as day name
  if (fieldName === 'dayOfWeek') {
    const dayNum = DAY_NAMES[value.toUpperCase()];
    if (dayNum !== undefined) {
      return dayNum;
    }
  }

  return null;
}
