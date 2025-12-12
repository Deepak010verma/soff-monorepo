import { describe, it, expect } from 'vitest';
import { validate } from '../../src/locales/es';

describe('Spain Phone Validation', () => {
  it('should validate a valid mobile number', () => {
    const result = validate('612345678');
    expect(result.isValid).toBe(true);
    expect(result.type).toBe('mobile');
  });

  it('should validate a mobile starting with 7', () => {
    const result = validate('712345678');
    expect(result.isValid).toBe(true);
    expect(result.type).toBe('mobile');
  });

  it('should validate a valid landline number', () => {
    const result = validate('912345678');
    expect(result.isValid).toBe(true);
    expect(result.type).toBe('landline');
  });

  it('should validate a number with country code', () => {
    const result = validate('34612345678');
    expect(result.isValid).toBe(true);
  });

  it('should format to E.164', () => {
    const result = validate('612345678', { format: 'e164' });
    expect(result.formatted).toBe('+34612345678');
  });

  it('should fail for invalid length', () => {
    const result = validate('6123456');
    expect(result.isValid).toBe(false);
  });

  it('should fail for invalid prefix', () => {
    const result = validate('112345678');
    expect(result.isValid).toBe(false);
  });
});
