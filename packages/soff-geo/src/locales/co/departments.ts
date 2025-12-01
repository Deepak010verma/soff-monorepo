import type { Department } from '../../core/types.js';

/**
 * Colombian department with DANE code
 */
export interface ColombianDepartment extends Department {
  /** DANE code (2 digits) */
  code: string;
  /** ISO 3166-2:CO code */
  iso: string;
}

/**
 * All 32 departments of Colombia + Bogotá D.C.
 * Source: DANE (Departamento Administrativo Nacional de Estadística)
 */
export const DEPARTMENTS: readonly ColombianDepartment[] = [
  { code: '05', name: 'Antioquia', iso: 'CO-ANT', capital: 'Medellín', capitalCode: '05001' },
  { code: '08', name: 'Atlántico', iso: 'CO-ATL', capital: 'Barranquilla', capitalCode: '08001' },
  { code: '11', name: 'Bogotá D.C.', iso: 'CO-DC', capital: 'Bogotá', capitalCode: '11001' },
  {
    code: '13',
    name: 'Bolívar',
    iso: 'CO-BOL',
    capital: 'Cartagena de Indias',
    capitalCode: '13001',
  },
  { code: '15', name: 'Boyacá', iso: 'CO-BOY', capital: 'Tunja', capitalCode: '15001' },
  { code: '17', name: 'Caldas', iso: 'CO-CAL', capital: 'Manizales', capitalCode: '17001' },
  { code: '18', name: 'Caquetá', iso: 'CO-CAQ', capital: 'Florencia', capitalCode: '18001' },
  { code: '19', name: 'Cauca', iso: 'CO-CAU', capital: 'Popayán', capitalCode: '19001' },
  { code: '20', name: 'Cesar', iso: 'CO-CES', capital: 'Valledupar', capitalCode: '20001' },
  { code: '23', name: 'Córdoba', iso: 'CO-COR', capital: 'Montería', capitalCode: '23001' },
  { code: '25', name: 'Cundinamarca', iso: 'CO-CUN', capital: 'Bogotá', capitalCode: '25001' },
  { code: '27', name: 'Chocó', iso: 'CO-CHO', capital: 'Quibdó', capitalCode: '27001' },
  { code: '41', name: 'Huila', iso: 'CO-HUI', capital: 'Neiva', capitalCode: '41001' },
  { code: '44', name: 'La Guajira', iso: 'CO-LAG', capital: 'Riohacha', capitalCode: '44001' },
  { code: '47', name: 'Magdalena', iso: 'CO-MAG', capital: 'Santa Marta', capitalCode: '47001' },
  { code: '50', name: 'Meta', iso: 'CO-MET', capital: 'Villavicencio', capitalCode: '50001' },
  { code: '52', name: 'Nariño', iso: 'CO-NAR', capital: 'San Juan de Pasto', capitalCode: '52001' },
  {
    code: '54',
    name: 'Norte de Santander',
    iso: 'CO-NSA',
    capital: 'San José de Cúcuta',
    capitalCode: '54001',
  },
  { code: '63', name: 'Quindío', iso: 'CO-QUI', capital: 'Armenia', capitalCode: '63001' },
  { code: '66', name: 'Risaralda', iso: 'CO-RIS', capital: 'Pereira', capitalCode: '66001' },
  { code: '68', name: 'Santander', iso: 'CO-SAN', capital: 'Bucaramanga', capitalCode: '68001' },
  { code: '70', name: 'Sucre', iso: 'CO-SUC', capital: 'Sincelejo', capitalCode: '70001' },
  { code: '73', name: 'Tolima', iso: 'CO-TOL', capital: 'Ibagué', capitalCode: '73001' },
  {
    code: '76',
    name: 'Valle del Cauca',
    iso: 'CO-VAC',
    capital: 'Santiago de Cali',
    capitalCode: '76001',
  },
  { code: '81', name: 'Arauca', iso: 'CO-ARA', capital: 'Arauca', capitalCode: '81001' },
  { code: '85', name: 'Casanare', iso: 'CO-CAS', capital: 'Yopal', capitalCode: '85001' },
  { code: '86', name: 'Putumayo', iso: 'CO-PUT', capital: 'Mocoa', capitalCode: '86001' },
  {
    code: '88',
    name: 'San Andrés y Providencia',
    iso: 'CO-SAP',
    capital: 'San Andrés',
    capitalCode: '88001',
  },
  { code: '91', name: 'Amazonas', iso: 'CO-AMA', capital: 'Leticia', capitalCode: '91001' },
  { code: '94', name: 'Guainía', iso: 'CO-GUA', capital: 'Inírida', capitalCode: '94001' },
  {
    code: '95',
    name: 'Guaviare',
    iso: 'CO-GUV',
    capital: 'San José del Guaviare',
    capitalCode: '95001',
  },
  { code: '97', name: 'Vaupés', iso: 'CO-VAU', capital: 'Mitú', capitalCode: '97001' },
  { code: '99', name: 'Vichada', iso: 'CO-VID', capital: 'Puerto Carreño', capitalCode: '99001' },
] as const;
