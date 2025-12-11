import { describe, it, expect } from 'vitest';
import { parseCron } from '../../src/core/parser.js';

describe('parseCron', () => {
  describe('basic parsing', () => {
    it('should parse wildcard fields', () => {
      const result = parseCron('* * * * *');
      expect(result.minute.isWildcard).toBe(true);
      expect(result.hour.isWildcard).toBe(true);
      expect(result.dayOfMonth.isWildcard).toBe(true);
      expect(result.month.isWildcard).toBe(true);
      expect(result.dayOfWeek.isWildcard).toBe(true);
    });

    it('should parse single values', () => {
      const result = parseCron('0 2 15 3 1');
      expect(result.minute.values).toEqual([0]);
      expect(result.hour.values).toEqual([2]);
      expect(result.dayOfMonth.values).toEqual([15]);
      expect(result.month.values).toEqual([3]);
      expect(result.dayOfWeek.values).toEqual([1]);
    });

    it('should parse ranges', () => {
      const result = parseCron('0 9-17 * * 1-5');
      expect(result.hour.values).toEqual([9, 10, 11, 12, 13, 14, 15, 16, 17]);
      expect(result.hour.isRange).toBe(true);
      expect(result.dayOfWeek.values).toEqual([1, 2, 3, 4, 5]);
      expect(result.dayOfWeek.isRange).toBe(true);
    });

    it('should parse step values', () => {
      const result = parseCron('*/15 * * * *');
      expect(result.minute.values).toEqual([0, 15, 30, 45]);
      expect(result.minute.isStep).toBe(true);
    });

    it('should parse step with range', () => {
      const result = parseCron('*/15 9-17 * * *');
      expect(result.minute.values).toEqual([0, 15, 30, 45]);
      expect(result.hour.values).toEqual([9, 10, 11, 12, 13, 14, 15, 16, 17]);
    });

    it('should parse lists', () => {
      const result = parseCron('0 9,12,15,18 * * *');
      expect(result.hour.values).toEqual([9, 12, 15, 18]);
      expect(result.hour.isList).toBe(true);
    });

    it('should parse mixed lists with ranges', () => {
      const result = parseCron('0 9-11,14-16 * * *');
      expect(result.hour.values).toEqual([9, 10, 11, 14, 15, 16]);
    });
  });

  describe('special keywords', () => {
    it('should parse @yearly', () => {
      const result = parseCron('@yearly');
      expect(result.isSpecial).toBe(true);
      expect(result.specialKeyword).toBe('@yearly');
      expect(result.minute.values).toEqual([0]);
      expect(result.hour.values).toEqual([0]);
      expect(result.dayOfMonth.values).toEqual([1]);
      expect(result.month.values).toEqual([1]);
    });

    it('should parse @monthly', () => {
      const result = parseCron('@monthly');
      expect(result.isSpecial).toBe(true);
      expect(result.minute.values).toEqual([0]);
      expect(result.hour.values).toEqual([0]);
      expect(result.dayOfMonth.values).toEqual([1]);
    });

    it('should parse @daily', () => {
      const result = parseCron('@daily');
      expect(result.isSpecial).toBe(true);
      expect(result.minute.values).toEqual([0]);
      expect(result.hour.values).toEqual([0]);
    });

    it('should parse @hourly', () => {
      const result = parseCron('@hourly');
      expect(result.isSpecial).toBe(true);
      expect(result.minute.values).toEqual([0]);
    });
  });

  describe('named values', () => {
    it('should parse month names', () => {
      const result = parseCron('0 0 1 JAN *');
      expect(result.month.values).toEqual([1]);
    });

    it('should parse month name ranges', () => {
      const result = parseCron('0 0 1 JAN-MAR *');
      expect(result.month.values).toEqual([1, 2, 3]);
    });

    it('should parse day names', () => {
      const result = parseCron('0 0 * * MON');
      expect(result.dayOfWeek.values).toEqual([1]);
    });

    it('should parse day name ranges', () => {
      const result = parseCron('0 0 * * MON-FRI');
      expect(result.dayOfWeek.values).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('6-field expressions', () => {
    it('should parse expressions with seconds', () => {
      const result = parseCron('30 0 2 * * *', true);
      expect(result.second?.values).toEqual([30]);
      expect(result.minute.values).toEqual([0]);
      expect(result.hour.values).toEqual([2]);
    });

    it('should parse step seconds', () => {
      const result = parseCron('*/30 * * * * *', true);
      expect(result.second?.values).toEqual([0, 30]);
    });
  });

  describe('edge cases', () => {
    it('should normalize day of week (7 to 0)', () => {
      const result = parseCron('0 0 * * 7');
      expect(result.dayOfWeek.values).toEqual([0]);
    });

    it('should handle mixed 0 and 7 for Sunday', () => {
      const result = parseCron('0 0 * * 0,7');
      expect(result.dayOfWeek.values).toEqual([0]);
    });

    it('should sort values', () => {
      const result = parseCron('0 0 * * 5,1,3');
      expect(result.dayOfWeek.values).toEqual([1, 3, 5]);
    });
  });

  describe('error handling', () => {
    it('should throw on invalid expressions', () => {
      expect(() => parseCron('invalid')).toThrow();
      expect(() => parseCron('60 * * * *')).toThrow();
      expect(() => parseCron('* * *')).toThrow();
    });
  });

  describe('complex expressions', () => {
    it('should parse "every 15 minutes during work hours on weekdays"', () => {
      const result = parseCron('*/15 9-17 * * 1-5');
      expect(result.minute.values).toEqual([0, 15, 30, 45]);
      expect(result.hour.values).toEqual([9, 10, 11, 12, 13, 14, 15, 16, 17]);
      expect(result.dayOfWeek.values).toEqual([1, 2, 3, 4, 5]);
    });

    it('should parse "at 2:30 AM every day"', () => {
      const result = parseCron('30 2 * * *');
      expect(result.minute.values).toEqual([30]);
      expect(result.hour.values).toEqual([2]);
      expect(result.dayOfMonth.isWildcard).toBe(true);
    });

    it('should parse "every 5 minutes"', () => {
      const result = parseCron('*/5 * * * *');
      expect(result.minute.values.length).toBe(12); // 60 / 5 = 12
      expect(result.minute.values).toEqual([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]);
    });
  });
});
