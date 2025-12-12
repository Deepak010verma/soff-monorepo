import { describe, it, expect } from 'vitest';
import { validate } from '../../src/locales/us';

describe('United States Phone Validation', () => {
  it('should validate a valid US number', () => {
    const result = validate('2025551234');
    expect(result.isValid).toBe(true);
    expect(result.formatted).toBe('2025551234');
  });

  it('should validate a number with country code', () => {
    const result = validate('12025551234');
    expect(result.isValid).toBe(true);
  });

  it('should format to E.164', () => {
    const result = validate('2025551234', { format: 'e164' });
    expect(result.formatted).toBe('+12025551234');
  });

  it('should fail for invalid length', () => {
    const result = validate('202555123');
    expect(result.isValid).toBe(false);
  });

  it('should fail for invalid area code starting with 1', () => {
    const result = validate('1025551234');
    expect(result.isValid).toBe(false);
  });

  it('should fail for invalid exchange code starting with 1', () => {
    const result = validate('2021551234');
    expect(result.isValid).toBe(false);
  });
});
