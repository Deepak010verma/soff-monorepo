import type { ParsedCron, CronField, FieldConstraints } from './types.js';
import { FIELD_CONSTRAINTS, SPECIAL_KEYWORDS, MONTH_NAMES, DAY_NAMES } from './types.js';
import { validateCron } from './validator.js';

/**
 * Parses a cron expression into a structured format
 *
 * @param expression - The cron expression to parse
 * @param allowSeconds - Whether to allow 6-field cron expressions with seconds
 * @returns ParsedCron object with structured field information
 * @throws Error if the cron expression is invalid
 *
 * @example
 * parseCron('0 2 * * *')
 * // Returns: { minute: { raw: '0', values: [0], ... }, hour: { raw: '2', values: [2], ... }, ... }
 *
 * parseCron('* /15 9-17 * * 1-5')
 * // Returns parsed structure for "every 15 minutes between 9 AM and 5 PM, Monday to Friday"
 */
export function parseCron(expression: string, allowSeconds = false): ParsedCron {
  // Validate first
  const validation = validateCron(expression, allowSeconds);
  if (!validation.isValid) {
    throw new Error(validation.error || 'Invalid cron expression');
  }

  const trimmed = expression.trim();

  // Handle special keywords
  if (trimmed.startsWith('@')) {
    const actualExpression = SPECIAL_KEYWORDS[trimmed];
    return {
      expression: trimmed,
      ...parseStandardCron(actualExpression, false),
      isSpecial: true,
      specialKeyword: trimmed,
    };
  }

  return {
    expression: trimmed,
    ...parseStandardCron(trimmed, allowSeconds),
    isSpecial: false,
  };
}

/**
 * Parses a standard cron expression (non-special)
 */
function parseStandardCron(
  expression: string,
  allowSeconds: boolean
): Omit<ParsedCron, 'expression' | 'isSpecial'> {
  const fields = expression.split(/\s+/);

  if (allowSeconds && fields.length === 6) {
    const [second, minute, hour, dayOfMonth, month, dayOfWeek] = fields;
    return {
      second: parseField(second, FIELD_CONSTRAINTS.second, 'second'),
      minute: parseField(minute, FIELD_CONSTRAINTS.minute, 'minute'),
      hour: parseField(hour, FIELD_CONSTRAINTS.hour, 'hour'),
      dayOfMonth: parseField(dayOfMonth, FIELD_CONSTRAINTS.dayOfMonth, 'dayOfMonth'),
      month: parseField(month, FIELD_CONSTRAINTS.month, 'month'),
      dayOfWeek: parseField(dayOfWeek, FIELD_CONSTRAINTS.dayOfWeek, 'dayOfWeek'),
    };
  }

  const [minute, hour, dayOfMonth, month, dayOfWeek] = fields;
  return {
    minute: parseField(minute, FIELD_CONSTRAINTS.minute, 'minute'),
    hour: parseField(hour, FIELD_CONSTRAINTS.hour, 'hour'),
    dayOfMonth: parseField(dayOfMonth, FIELD_CONSTRAINTS.dayOfMonth, 'dayOfMonth'),
    month: parseField(month, FIELD_CONSTRAINTS.month, 'month'),
    dayOfWeek: parseField(dayOfWeek, FIELD_CONSTRAINTS.dayOfWeek, 'dayOfWeek'),
  };
}

/**
 * Parses a single cron field
 */
function parseField(value: string, constraints: FieldConstraints, fieldName: string): CronField {
  const raw = value;
  const isWildcard = value === '*' || value === '?';
  const isStep = value.includes('/');
  const isRange = value.includes('-') && !isStep;
  const isList = value.includes(',');

  let values: number[];

  if (isWildcard) {
    // Generate all possible values
    values = generateRange(constraints.min, constraints.max);
  } else if (isStep) {
    values = parseStepField(value, constraints, fieldName);
  } else if (isList) {
    values = parseListField(value, constraints, fieldName);
  } else if (isRange) {
    values = parseRangeField(value, constraints, fieldName);
  } else {
    // Single value
    const num = parseFieldValue(value, fieldName);
    values = num !== null ? [num] : [];
  }

  // Normalize day of week (both 0 and 7 are Sunday)
  if (fieldName === 'dayOfWeek') {
    values = values.map((v) => (v === 7 ? 0 : v));
    // Remove duplicates
    values = [...new Set(values)];
  }

  // Sort values
  values.sort((a, b) => a - b);

  return {
    raw,
    values,
    isWildcard,
    isRange,
    isStep,
    isList,
  };
}

/**
 * Parses a step field with step syntax
 */
function parseStepField(value: string, constraints: FieldConstraints, fieldName: string): number[] {
  const [range, stepStr] = value.split('/');
  const step = parseInt(stepStr, 10);

  let baseValues: number[];

  if (range === '*') {
    baseValues = generateRange(constraints.min, constraints.max);
  } else if (range.includes('-')) {
    baseValues = parseRangeField(range, constraints, fieldName);
  } else {
    const num = parseFieldValue(range, fieldName);
    baseValues = num !== null ? [num] : [];
  }

  // Apply step
  const result: number[] = [];
  for (let i = 0; i < baseValues.length; i += step) {
    result.push(baseValues[i]);
  }

  return result;
}

/**
 * Parses a range field (e.g., 0-5)
 */
function parseRangeField(
  value: string,
  _constraints: FieldConstraints,
  fieldName: string
): number[] {
  const [startStr, endStr] = value.split('-');
  const start = parseFieldValue(startStr, fieldName);
  const end = parseFieldValue(endStr, fieldName);

  if (start === null || end === null) {
    return [];
  }

  return generateRange(start, end);
}

/**
 * Parses a list field (e.g., 1,3,5)
 */
function parseListField(
  value: string,
  _constraints: FieldConstraints,
  fieldName: string
): number[] {
  const parts = value.split(',');
  const result: number[] = [];

  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.includes('-')) {
      const rangeValues = parseRangeField(trimmed, _constraints, fieldName);
      result.push(...rangeValues);
    } else {
      const num = parseFieldValue(trimmed, fieldName);
      if (num !== null) {
        result.push(num);
      }
    }
  }

  return result;
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

/**
 * Generates a range of numbers from start to end (inclusive)
 */
function generateRange(start: number, end: number): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
