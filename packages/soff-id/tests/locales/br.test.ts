import { describe, it, expect } from 'vitest';
import {
  validateCPF,
  formatCPF,
  cleanCPF,
  calculateCPFCheckDigit,
  generateCPF,
  validateCNPJ,
  formatCNPJ,
  cleanCNPJ,
  calculateCNPJCheckDigit,
  generateCNPJ,
  isCNPJMatriz,
  isCNPJFilial,
  getCNPJBranchNumber,
} from '../../src/locales/br.js';

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

    it('should clean CPF correctly', () => {
      expect(cleanCPF('529.982.247-25')).toBe('52998224725');
    });
  });

  describe('CPF check digit calculation', () => {
    it('should calculate correct check digits', () => {
      expect(calculateCPFCheckDigit('529982247')).toBe('25');
    });

    it('should generate valid CPF using calculated check digit', () => {
      const body = '123456789';
      const checkDigits = calculateCPFCheckDigit(body);
      expect(validateCPF(body + checkDigits)).toBe(true);
    });
  });

  describe('CPF generation', () => {
    it('should generate valid CPF', () => {
      const cpf = generateCPF();
      expect(validateCPF(cpf)).toBe(true);
      expect(cpf.length).toBe(11);
    });

    it('should generate multiple unique CPFs', () => {
      const cpfs = new Set([generateCPF(), generateCPF(), generateCPF()]);
      expect(cpfs.size).toBeGreaterThan(1);
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

    it('should clean CNPJ correctly', () => {
      expect(cleanCNPJ('11.222.333/0001-81')).toBe('11222333000181');
    });
  });

  describe('CNPJ check digit calculation', () => {
    it('should calculate correct check digits', () => {
      expect(calculateCNPJCheckDigit('112223330001')).toBe('81');
    });

    it('should generate valid CNPJ using calculated check digit', () => {
      const body = '112223330001';
      const checkDigits = calculateCNPJCheckDigit(body);
      expect(validateCNPJ(body + checkDigits)).toBe(true);
    });
  });

  describe('CNPJ generation', () => {
    it('should generate valid CNPJ matriz', () => {
      const cnpj = generateCNPJ();
      expect(validateCNPJ(cnpj)).toBe(true);
      expect(isCNPJMatriz(cnpj)).toBe(true);
    });

    it('should generate valid CNPJ filial', () => {
      const cnpj = generateCNPJ('0002');
      expect(validateCNPJ(cnpj)).toBe(true);
      expect(isCNPJFilial(cnpj)).toBe(true);
    });
  });

  describe('CNPJ type detection', () => {
    it('should detect matriz CNPJ', () => {
      expect(isCNPJMatriz('11222333000181')).toBe(true);
      expect(isCNPJMatriz('11222333000281')).toBe(false);
    });

    it('should detect filial CNPJ', () => {
      expect(isCNPJFilial('11222333000281')).toBe(true);
      expect(isCNPJFilial('11222333000181')).toBe(false);
    });

    it('should get branch number', () => {
      expect(getCNPJBranchNumber('11222333000181')).toBe('0001');
      expect(getCNPJBranchNumber('11222333000281')).toBe('0002');
      expect(getCNPJBranchNumber('invalid')).toBe(null);
    });
  });
});
