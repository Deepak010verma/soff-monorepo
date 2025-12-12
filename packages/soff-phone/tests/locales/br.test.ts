import { describe, it, expect } from 'vitest';
import { validate } from '../../src/locales/br';

describe('Brazil Phone Validation', () => {
  it('should validate a valid mobile number (11 digits)', () => {
    const result = validate('11987654321');
    expect(result.isValid).toBe(true);
    expect(result.type).toBe('mobile');
    expect(result.formatted).toBe('11987654321');
  });

  it('should validate a valid landline number (10 digits)', () => {
    const result = validate('1134567890');
    expect(result.isValid).toBe(true);
    expect(result.type).toBe('landline');
  });

  it('should validate a number with country code', () => {
    const result = validate('5511987654321');
    expect(result.isValid).toBe(true);
    expect(result.formatted).toBe('11987654321');
  });

  it('should format to E.164', () => {
    const result = validate('11987654321', { format: 'e164' });
    expect(result.formatted).toBe('+5511987654321');
  });

  it('should fail for invalid length', () => {
    const result = validate('119876543');
    expect(result.isValid).toBe(false);
  });

  it('should fail for mobile without 9 prefix', () => {
    const result = validate('11887654321');
    expect(result.isValid).toBe(false);
  });
});
