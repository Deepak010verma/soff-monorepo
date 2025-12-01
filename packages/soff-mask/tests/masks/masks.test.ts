import { describe, it, expect } from 'vitest';
import { mask } from '../../src/core/engine.js';
import {
  phoneCO,
  phoneUS,
  phoneBR,
  creditCard,
  cpf,
  cnpj,
  dateDMY,
} from '../../src/masks/index.js';

describe('Pre-built Masks', () => {
  describe('Phone Masks', () => {
    it('should mask Colombian phone', () => {
      expect(mask('3001234567', phoneCO)).toBe('(300) 123 4567');
    });

    it('should mask US phone', () => {
      expect(mask('5551234567', phoneUS)).toBe('(555) 123-4567');
    });

    it('should mask Brazilian phone', () => {
      expect(mask('11912345678', phoneBR)).toBe('(11) 91234-5678');
    });
  });

  describe('Credit Card Masks', () => {
    it('should mask credit card', () => {
      expect(mask('4111111111111111', creditCard)).toBe('4111 1111 1111 1111');
    });
  });

  describe('Document Masks', () => {
    it('should mask CPF', () => {
      expect(mask('12345678909', cpf)).toBe('123.456.789-09');
    });

    it('should mask CNPJ', () => {
      expect(mask('12345678000190', cnpj)).toBe('12.345.678/0001-90');
    });
  });

  describe('Date Masks', () => {
    it('should mask date DMY', () => {
      expect(mask('25122024', dateDMY)).toBe('25/12/2024');
    });
  });
});
