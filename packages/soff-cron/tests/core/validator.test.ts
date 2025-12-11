import { describe, it, expect } from 'vitest';
import { validateCron } from '../../src/core/validator.js';

describe('validateCron', () => {
  describe('valid expressions', () => {
    it('should validate basic 5-field cron expressions', () => {
      expect(validateCron('* * * * *')).toEqual({ isValid: true });
      expect(validateCron('0 0 * * *')).toEqual({ isValid: true });
      expect(validateCron('0 2 * * *')).toEqual({ isValid: true });
      expect(validateCron('30 14 * * *')).toEqual({ isValid: true });
    });

    it('should validate ranges', () => {
      expect(validateCron('0 9-17 * * *')).toEqual({ isValid: true });
      expect(validateCron('0 0 1-15 * *')).toEqual({ isValid: true });
      expect(validateCron('0 0 * 1-6 *')).toEqual({ isValid: true });
      expect(validateCron('0 0 * * 1-5')).toEqual({ isValid: true });
    });

    it('should validate step values', () => {
      expect(validateCron('*/5 * * * *')).toEqual({ isValid: true });
      expect(validateCron('0 */2 * * *')).toEqual({ isValid: true });
      expect(validateCron('*/15 9-17 * * *')).toEqual({ isValid: true });
      expect(validateCron('0 0 */2 * *')).toEqual({ isValid: true });
    });

    it('should validate lists', () => {
      expect(validateCron('0 0,12 * * *')).toEqual({ isValid: true });
      expect(validateCron('0 0 1,15 * *')).toEqual({ isValid: true });
      expect(validateCron('0 0 * * 1,3,5')).toEqual({ isValid: true });
      expect(validateCron('0 9,12,15,18 * * *')).toEqual({ isValid: true });
    });

    it('should validate special keywords', () => {
      expect(validateCron('@yearly')).toEqual({ isValid: true });
      expect(validateCron('@annually')).toEqual({ isValid: true });
      expect(validateCron('@monthly')).toEqual({ isValid: true });
      expect(validateCron('@weekly')).toEqual({ isValid: true });
      expect(validateCron('@daily')).toEqual({ isValid: true });
      expect(validateCron('@midnight')).toEqual({ isValid: true });
      expect(validateCron('@hourly')).toEqual({ isValid: true });
    });

    it('should validate month names', () => {
      expect(validateCron('0 0 1 JAN *')).toEqual({ isValid: true });
      expect(validateCron('0 0 1 DEC *')).toEqual({ isValid: true });
      expect(validateCron('0 0 1 JAN-JUN *')).toEqual({ isValid: true });
    });

    it('should validate day names', () => {
      expect(validateCron('0 0 * * MON')).toEqual({ isValid: true });
      expect(validateCron('0 0 * * SUN')).toEqual({ isValid: true });
      expect(validateCron('0 0 * * MON-FRI')).toEqual({ isValid: true });
    });

    it('should validate 6-field expressions with seconds', () => {
      expect(validateCron('0 0 0 * * *', true)).toEqual({ isValid: true });
      expect(validateCron('30 0 2 * * *', true)).toEqual({ isValid: true });
      expect(validateCron('*/30 * * * * *', true)).toEqual({ isValid: true });
    });

    it('should validate question marks for day fields', () => {
      expect(validateCron('0 0 ? * *')).toEqual({ isValid: true });
      expect(validateCron('0 0 * * ?')).toEqual({ isValid: true });
    });
  });

  describe('invalid expressions', () => {
    it('should reject empty or invalid input', () => {
      expect(validateCron('')).toEqual({
        isValid: false,
        error: 'Cron expression must be a non-empty string',
      });
      expect(validateCron('   ')).toEqual({
        isValid: false,
        error: 'Expected 5 fields, got 1',
      });
    });

    it('should reject incorrect number of fields', () => {
      expect(validateCron('* * *')).toEqual({
        isValid: false,
        error: 'Expected 5 fields, got 3',
      });
      expect(validateCron('* * * * * *')).toEqual({
        isValid: false,
        error: 'Expected 5 fields, got 6',
      });
    });

    it('should reject out of range values', () => {
      const result = validateCron('60 * * * *');
      expect(result.isValid).toBe(false);
      expect(result.error).toContain('out of range');
    });

    it('should reject invalid ranges', () => {
      const result = validateCron('0 17-9 * * *');
      expect(result.isValid).toBe(false);
      expect(result.error).toContain('cannot be greater than');
    });

    it('should reject invalid step values', () => {
      const result = validateCron('*/0 * * * *');
      expect(result.isValid).toBe(false);
      expect(result.error).toContain('Invalid step value');
    });

    it('should reject unknown special keywords', () => {
      expect(validateCron('@invalid')).toEqual({
        isValid: false,
        error: 'Unknown special keyword: @invalid',
      });
    });

    it('should reject question mark in non-day fields', () => {
      const result = validateCron('? * * * *');
      expect(result.isValid).toBe(false);
      expect(result.error).toContain('only valid for day fields');
    });

    it('should reject invalid syntax', () => {
      expect(validateCron('0 0 1-2-3 * *').isValid).toBe(false);
      expect(validateCron('0 0 */5/ * *').isValid).toBe(false);
      expect(validateCron('abc * * * *').isValid).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('should handle whitespace correctly', () => {
      expect(validateCron('  0   2   *   *   *  ')).toEqual({ isValid: true });
    });

    it('should validate boundary values', () => {
      expect(validateCron('0 0 1 1 0')).toEqual({ isValid: true });
      expect(validateCron('59 23 31 12 7')).toEqual({ isValid: true });
    });

    it('should validate complex expressions', () => {
      expect(validateCron('*/15 9-17 * * 1-5')).toEqual({ isValid: true });
      expect(validateCron('0 0,12 1,15 * *')).toEqual({ isValid: true });
      expect(validateCron('0 9-17/2 * * 1-5')).toEqual({ isValid: true });
    });
  });
});
