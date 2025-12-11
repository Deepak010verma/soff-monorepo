import { describe, it, expect } from 'vitest';
import { formatCron } from '../../src/core/formatter.js';

describe('formatCron', () => {
  describe('special keywords', () => {
    it('should format special keywords in English', () => {
      expect(formatCron('@yearly', { locale: 'en' })).toBe('every year');
      expect(formatCron('@monthly', { locale: 'en' })).toBe('every month');
      expect(formatCron('@weekly', { locale: 'en' })).toBe('every week');
      expect(formatCron('@daily', { locale: 'en' })).toBe('every day');
      expect(formatCron('@hourly', { locale: 'en' })).toBe('every hour');
      expect(formatCron('@midnight', { locale: 'en' })).toBe('at midnight');
    });

    it('should format special keywords in Spanish', () => {
      expect(formatCron('@yearly', { locale: 'es' })).toBe('cada año');
      expect(formatCron('@monthly', { locale: 'es' })).toBe('cada mes');
      expect(formatCron('@weekly', { locale: 'es' })).toBe('cada semana');
      expect(formatCron('@daily', { locale: 'es' })).toBe('todos los días');
      expect(formatCron('@hourly', { locale: 'es' })).toBe('cada hora');
      expect(formatCron('@midnight', { locale: 'es' })).toBe('a las medianoche');
    });
  });

  describe('basic time expressions', () => {
    it('should format specific times in 24-hour format', () => {
      expect(formatCron('0 2 * * *', { locale: 'en' })).toContain('02:00');
      expect(formatCron('30 14 * * *', { locale: 'en' })).toContain('14:30');
    });

    it('should format specific times in 12-hour format', () => {
      expect(formatCron('0 2 * * *', { locale: 'en', use24HourFormat: false })).toContain(
        '2:00 AM'
      );
      expect(formatCron('30 14 * * *', { locale: 'en', use24HourFormat: false })).toContain(
        '2:30 PM'
      );
    });

    it('should format every minute', () => {
      expect(formatCron('* * * * *', { locale: 'en' })).toContain('every minute');
      expect(formatCron('* * * * *', { locale: 'es' })).toContain('cada minuto');
    });

    it('should format step minutes', () => {
      const result = formatCron('*/15 * * * *', { locale: 'en' });
      expect(result).toContain('every 15 minutes');
    });

    it('should format step minutes in Spanish', () => {
      const result = formatCron('*/15 * * * *', { locale: 'es' });
      expect(result).toContain('cada 15 minutos');
    });
  });

  describe('date expressions', () => {
    it('should format every day', () => {
      expect(formatCron('0 0 * * *', { locale: 'en' })).toContain('every day');
      expect(formatCron('0 0 * * *', { locale: 'es' })).toContain('todos los días');
    });

    it('should format specific days of week', () => {
      const result = formatCron('0 0 * * 1', { locale: 'en' });
      expect(result).toContain('Monday');
    });

    it('should format day ranges', () => {
      const result = formatCron('0 0 * * 1-5', { locale: 'en' });
      expect(result).toContain('weekday');
    });

    it('should format weekends', () => {
      const result = formatCron('0 0 * * 0,6', { locale: 'en' });
      expect(result).toContain('weekend');
    });
  });

  describe('complex expressions', () => {
    it('should format "every 15 minutes during work hours on weekdays"', () => {
      const result = formatCron('*/15 9-17 * * 1-5', { locale: 'en' });
      expect(result).toContain('15 minutes');
      expect(result.toLowerCase()).toContain('weekday');
    });

    it('should format time ranges', () => {
      const result = formatCron('0 9-17 * * *', { locale: 'en' });
      expect(result).toContain('09:00');
      expect(result).toContain('17:00');
    });

    it('should format specific months', () => {
      const result = formatCron('0 0 1 1 *', { locale: 'en' });
      expect(result).toContain('January');
    });
  });

  describe('Spanish translations', () => {
    it('should format times in Spanish', () => {
      const result = formatCron('0 2 * * *', { locale: 'es' });
      expect(result).toContain('a las');
    });

    it('should format weekdays in Spanish', () => {
      const result = formatCron('0 0 * * 1', { locale: 'es' });
      expect(result).toContain('lunes');
    });

    it('should format months in Spanish', () => {
      const result = formatCron('0 0 1 1 *', { locale: 'es' });
      expect(result).toContain('enero');
    });

    it('should format complex expressions in Spanish', () => {
      const result = formatCron('*/15 9-17 * * 1-5', { locale: 'es' });
      expect(result).toContain('15 minutos');
    });
  });

  describe('edge cases', () => {
    it('should handle midnight and noon', () => {
      expect(formatCron('0 0 * * *', { locale: 'en', use24HourFormat: false })).toContain(
        '12:00 AM'
      );
      expect(formatCron('0 12 * * *', { locale: 'en', use24HourFormat: false })).toContain(
        '12:00 PM'
      );
    });

    it('should handle single day of month', () => {
      const result = formatCron('0 0 15 * *', { locale: 'en' });
      expect(result).toContain('day 15');
    });

    it('should handle multiple specific times', () => {
      const result = formatCron('0 9,12,15 * * *', { locale: 'en' });
      expect(result).toContain('09:00');
      expect(result).toContain('12:00');
      expect(result).toContain('15:00');
    });
  });

  describe('6-field expressions with seconds', () => {
    it('should format expressions with seconds', () => {
      const result = formatCron('30 0 2 * * *', {
        locale: 'en',
        includeSeconds: true,
      });
      expect(result).toContain('02:00');
    });

    it('should format step seconds', () => {
      const result = formatCron('*/30 * * * * *', {
        locale: 'en',
        includeSeconds: true,
      });
      expect(result).toContain('second');
      expect(result).toContain('0');
      expect(result).toContain('30');
    });
  });
});
