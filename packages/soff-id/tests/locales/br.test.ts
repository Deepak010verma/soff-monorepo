import { describe, it, expect } from 'vitest';
import { validateCPF, formatCPF, validateCNPJ, formatCNPJ } from '../../src/locales/br.js';

describe('Brazilian Documents', () => {
  describe('CPF validation', () => {
    it('should validate correct CPF', () => {
      expect(validateCPF('529.982.247-25')).toBe(true);
      expect(validateCPF('52998224725')).toBe(true);
    });

    it('should reject invalid CPF', () => {
      expect(validateCPF('529.982.247-00')).toBe(false);
      expect(validateCPF('111.111.111-11')).toBe(false); // All same digits
      expect(validateCPF('123')).toBe(false);
    });

    it('should format CPF correctly', () => {
      expect(formatCPF('52998224725')).toBe('529.982.247-25');
    });
  });

  describe('CNPJ validation', () => {
    it('should validate correct CNPJ', () => {
      expect(validateCNPJ('11.222.333/0001-81')).toBe(true);
      expect(validateCNPJ('11222333000181')).toBe(true);
    });

    it('should reject invalid CNPJ', () => {
      expect(validateCNPJ('11.222.333/0001-00')).toBe(false);
      expect(validateCNPJ('11.111.111/1111-11')).toBe(false);
    });

    it('should format CNPJ correctly', () => {
      expect(formatCNPJ('11222333000181')).toBe('11.222.333/0001-81');
    });
  });
});
