import { describe, it, expect } from 'vitest';
import { validate } from '../../src/locales/ar';

describe('Argentina Phone Validation', () => {
  it('should validate a valid mobile number', () => {
    const result = validate('9111234567');
    expect(result.isValid).toBe(true);
    expect(result.type).toBe('mobile');
  });

  it('should validate a valid landline number', () => {
    const result = validate('1134567890');
    expect(result.isValid).toBe(true);
    expect(result.type).toBe('landline');
  });

  it('should validate a number with country code', () => {
    const result = validate('549111234567');
    expect(result.isValid).toBe(true);
  });

  it('should format to E.164', () => {
    const result = validate('9111234567', { format: 'e164' });
    expect(result.formatted).toBe('+549111234567');
  });

  it('should fail for invalid length', () => {
    const result = validate('91112345');
    expect(result.isValid).toBe(false);
  });
});
