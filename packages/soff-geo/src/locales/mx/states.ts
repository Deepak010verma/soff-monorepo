import type { Department } from '../../core/types.js';

/**
 * Mexican state with INEGI code
 */
export interface MexicanState extends Department {
  /** INEGI code (2 digits) */
  code: string;
  /** ISO 3166-2:MX code */
  iso: string;
}

/**
 * All 32 federal entities of Mexico
 * Source: INEGI (Instituto Nacional de Estadística y Geografía)
 */
export const STATES: readonly MexicanState[] = [
  {
    code: '01',
    name: 'Aguascalientes',
    iso: 'MX-AGU',
    capital: 'Aguascalientes',
    capitalCode: '01001',
  },
  {
    code: '02',
    name: 'Baja California',
    iso: 'MX-BCN',
    capital: 'Mexicali',
    capitalCode: '02002',
  },
  {
    code: '03',
    name: 'Baja California Sur',
    iso: 'MX-BCS',
    capital: 'La Paz',
    capitalCode: '03003',
  },
  {
    code: '04',
    name: 'Campeche',
    iso: 'MX-CAM',
    capital: 'San Francisco de Campeche',
    capitalCode: '04002',
  },
  {
    code: '05',
    name: 'Coahuila de Zaragoza',
    iso: 'MX-COA',
    capital: 'Saltillo',
    capitalCode: '05030',
  },
  {
    code: '06',
    name: 'Colima',
    iso: 'MX-COL',
    capital: 'Colima',
    capitalCode: '06002',
  },
  {
    code: '07',
    name: 'Chiapas',
    iso: 'MX-CHP',
    capital: 'Tuxtla Gutiérrez',
    capitalCode: '07101',
  },
  {
    code: '08',
    name: 'Chihuahua',
    iso: 'MX-CHH',
    capital: 'Chihuahua',
    capitalCode: '08019',
  },
  {
    code: '09',
    name: 'Ciudad de México',
    iso: 'MX-CMX',
    capital: 'Ciudad de México',
    capitalCode: '09000',
  },
  {
    code: '10',
    name: 'Durango',
    iso: 'MX-DUR',
    capital: 'Victoria de Durango',
    capitalCode: '10005',
  },
  {
    code: '11',
    name: 'Guanajuato',
    iso: 'MX-GUA',
    capital: 'Guanajuato',
    capitalCode: '11015',
  },
  {
    code: '12',
    name: 'Guerrero',
    iso: 'MX-GRO',
    capital: 'Chilpancingo de los Bravo',
    capitalCode: '12029',
  },
  {
    code: '13',
    name: 'Hidalgo',
    iso: 'MX-HGO',
    capital: 'Pachuca de Soto',
    capitalCode: '13048',
  },
  {
    code: '14',
    name: 'Jalisco',
    iso: 'MX-JAL',
    capital: 'Guadalajara',
    capitalCode: '14039',
  },
  {
    code: '15',
    name: 'Estado de México',
    iso: 'MX-MEX',
    capital: 'Toluca de Lerdo',
    capitalCode: '15106',
  },
  {
    code: '16',
    name: 'Michoacán de Ocampo',
    iso: 'MX-MIC',
    capital: 'Morelia',
    capitalCode: '16053',
  },
  {
    code: '17',
    name: 'Morelos',
    iso: 'MX-MOR',
    capital: 'Cuernavaca',
    capitalCode: '17007',
  },
  {
    code: '18',
    name: 'Nayarit',
    iso: 'MX-NAY',
    capital: 'Tepic',
    capitalCode: '18017',
  },
  {
    code: '19',
    name: 'Nuevo León',
    iso: 'MX-NLE',
    capital: 'Monterrey',
    capitalCode: '19039',
  },
  {
    code: '20',
    name: 'Oaxaca',
    iso: 'MX-OAX',
    capital: 'Oaxaca de Juárez',
    capitalCode: '20067',
  },
  {
    code: '21',
    name: 'Puebla',
    iso: 'MX-PUE',
    capital: 'Puebla de Zaragoza',
    capitalCode: '21114',
  },
  {
    code: '22',
    name: 'Querétaro',
    iso: 'MX-QUE',
    capital: 'Santiago de Querétaro',
    capitalCode: '22014',
  },
  {
    code: '23',
    name: 'Quintana Roo',
    iso: 'MX-ROO',
    capital: 'Chetumal',
    capitalCode: '23004',
  },
  {
    code: '24',
    name: 'San Luis Potosí',
    iso: 'MX-SLP',
    capital: 'San Luis Potosí',
    capitalCode: '24028',
  },
  {
    code: '25',
    name: 'Sinaloa',
    iso: 'MX-SIN',
    capital: 'Culiacán Rosales',
    capitalCode: '25006',
  },
  {
    code: '26',
    name: 'Sonora',
    iso: 'MX-SON',
    capital: 'Hermosillo',
    capitalCode: '26030',
  },
  {
    code: '27',
    name: 'Tabasco',
    iso: 'MX-TAB',
    capital: 'Villahermosa',
    capitalCode: '27004',
  },
  {
    code: '28',
    name: 'Tamaulipas',
    iso: 'MX-TAM',
    capital: 'Ciudad Victoria',
    capitalCode: '28041',
  },
  {
    code: '29',
    name: 'Tlaxcala',
    iso: 'MX-TLA',
    capital: 'Tlaxcala de Xicohténcatl',
    capitalCode: '29033',
  },
  {
    code: '30',
    name: 'Veracruz de Ignacio de la Llave',
    iso: 'MX-VER',
    capital: 'Xalapa-Enríquez',
    capitalCode: '30087',
  },
  {
    code: '31',
    name: 'Yucatán',
    iso: 'MX-YUC',
    capital: 'Mérida',
    capitalCode: '31050',
  },
  {
    code: '32',
    name: 'Zacatecas',
    iso: 'MX-ZAC',
    capital: 'Zacatecas',
    capitalCode: '32056',
  },
] as const;
