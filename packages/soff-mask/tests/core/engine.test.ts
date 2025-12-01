import { describe, it, expect } from 'vitest';
import {
  mask,
  unmask,
  maskWithResult,
  isComplete,
  getPatternLength,
} from '../../src/core/engine.js';

describe('Mask Engine', () => {
  describe('mask()', () => {
    it('should mask phone number', () => {
      expect(mask('3001234567', '(###) ###-####')).toBe('(300) 123-4567');
    });

    it('should mask partial input', () => {
      expect(mask('300', '(###) ###-####')).toBe('(300');
    });

    it('should mask CPF', () => {
      expect(mask('12345678909', '###.###.###-##')).toBe('123.456.789-09');
    });

    it('should mask credit card', () => {
      expect(mask('4111111111111111', '#### #### #### ####')).toBe('4111 1111 1111 1111');
    });

    it('should handle letters with A token', () => {
      expect(mask('ABC123', 'AAA-###')).toBe('ABC-123');
    });

    it('should handle alphanumeric with S token', () => {
      expect(mask('A1B2C3', 'SSS-SSS')).toBe('A1B-2C3');
    });

    it('should skip invalid characters', () => {
      expect(mask('abc123def456', '###-###')).toBe('123-456');
    });

    it('should handle empty input', () => {
      expect(mask('', '###-###')).toBe('');
    });
  });

  describe('unmask()', () => {
    it('should unmask phone number', () => {
      expect(unmask('(300) 123-4567', '(###) ###-####')).toBe('3001234567');
    });

    it('should unmask CPF', () => {
      expect(unmask('123.456.789-09', '###.###.###-##')).toBe('12345678909');
    });

    it('should unmask credit card', () => {
      expect(unmask('4111 1111 1111 1111', '#### #### #### ####')).toBe('4111111111111111');
    });

    it('should handle partial mask', () => {
      expect(unmask('(300) ', '(###) ###-####')).toBe('300');
    });
  });

  describe('maskWithResult()', () => {
    it('should return complete for full input', () => {
      const result = maskWithResult('3001234567', '(###) ###-####');
      expect(result.value).toBe('(300) 123-4567');
      expect(result.raw).toBe('3001234567');
      expect(result.complete).toBe(true);
    });

    it('should return incomplete for partial input', () => {
      const result = maskWithResult('300123', '(###) ###-####');
      expect(result.complete).toBe(false);
    });
  });

  describe('isComplete()', () => {
    it('should return true for complete mask', () => {
      expect(isComplete('(300) 123-4567', '(###) ###-####')).toBe(true);
    });

    it('should return false for incomplete mask', () => {
      expect(isComplete('(300) 123', '(###) ###-####')).toBe(false);
    });
  });

  describe('getPatternLength()', () => {
    it('should return correct length for phone pattern', () => {
      expect(getPatternLength('(###) ###-####')).toBe(10);
    });

    it('should return correct length for CPF pattern', () => {
      expect(getPatternLength('###.###.###-##')).toBe(11);
    });
  });
});
