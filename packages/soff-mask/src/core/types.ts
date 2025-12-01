/**
 * Mask pattern configuration
 */
export interface MaskPattern {
  /** The pattern string using mask characters (#, A, S, *) */
  pattern: string;
  /** Maximum input length before mask */
  maxLength?: number;
  /** Whether to allow partial matches */
  partial?: boolean;
}

/**
 * Mask token types
 */
export type TokenType = 'digit' | 'letter' | 'alphanumeric' | 'any' | 'literal';

/**
 * Parsed token from a mask pattern
 */
export interface MaskToken {
  type: TokenType;
  char: string;
  index: number;
}

/**
 * Result of a mask operation
 */
export interface MaskResult {
  /** The masked value */
  value: string;
  /** The raw value (without mask) */
  raw: string;
  /** Whether the value is complete (all required positions filled) */
  complete: boolean;
  /** Cursor position after masking */
  cursorPosition: number;
}

/**
 * Options for the mask function
 */
export interface MaskOptions {
  /** Guide character for empty positions (default: none) */
  guide?: string;
  /** Whether to keep literal characters when unmasking */
  keepLiterals?: boolean;
}

/**
 * Dynamic mask that changes based on input length
 */
export interface DynamicMaskRule {
  /** Maximum raw input length for this pattern */
  maxLength: number;
  /** The pattern to use */
  pattern: string;
}
