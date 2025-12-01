import type { Municipality } from '../../core/types.js';

/**
 * Mexican municipality with INEGI code
 */
export interface MexicanMunicipality extends Municipality {
  /** INEGI code (5 digits: 2 state + 3 muni) */
  code: string;
  /** State INEGI code */
  departmentCode: string;
}

/**
 * All municipalities of Mexico
 * Source: INEGI
 */
export const MUNICIPALITIES: readonly MexicanMunicipality[] = [
  {
    code: '01001',
    departmentCode: '01',
    name: 'Aguascalientes',
  },
  {
    code: '01002',
    departmentCode: '01',
    name: 'Asientos',
  },
  {
    code: '01003',
    departmentCode: '01',
    name: 'Calvillo',
  },
  {
    code: '01004',
    departmentCode: '01',
    name: 'Cosío',
  },
  {
    code: '01005',
    departmentCode: '01',
    name: 'Jesús María',
  },
  {
    code: '01006',
    departmentCode: '01',
    name: 'Pabellón de Arteaga',
  },
  {
    code: '01007',
    departmentCode: '01',
    name: 'Rincón de Romos',
  },
  {
    code: '01008',
    departmentCode: '01',
    name: 'San José de Gracia',
  },
  {
    code: '01009',
    departmentCode: '01',
    name: 'Tepezalá',
  },
  {
    code: '01010',
    departmentCode: '01',
    name: 'El Llano',
  },
  {
    code: '01011',
    departmentCode: '01',
    name: 'San Francisco de los Romo',
  },
  {
    code: '02001',
    departmentCode: '02',
    name: 'Ensenada',
  },
  {
    code: '02002',
    departmentCode: '02',
    name: 'Mexicali',
  },
  {
    code: '02003',
    departmentCode: '02',
    name: 'Tecate',
  },
  {
    code: '02004',
    departmentCode: '02',
    name: 'Tijuana',
  },
  {
    code: '02005',
    departmentCode: '02',
    name: 'Playas de Rosarito',
  },
  {
    code: '02006',
    departmentCode: '02',
    name: 'San Quintín',
  },
  {
    code: '02007',
    departmentCode: '02',
    name: 'San Felipe',
  },
  {
    code: '03001',
    departmentCode: '03',
    name: 'Comondú',
  },
  {
    code: '03002',
    departmentCode: '03',
    name: 'Mulegé',
  },
  {
    code: '03003',
    departmentCode: '03',
    name: 'La Paz',
  },
  {
    code: '03008',
    departmentCode: '03',
    name: 'Los Cabos',
  },
  {
    code: '03009',
    departmentCode: '03',
    name: 'Loreto',
  },
  {
    code: '04001',
    departmentCode: '04',
    name: 'Calkiní',
  },
  {
    code: '04002',
    departmentCode: '04',
    name: 'Campeche',
  },
  {
    code: '04003',
    departmentCode: '04',
    name: 'Carmen',
  },
  {
    code: '04004',
    departmentCode: '04',
    name: 'Champotón',
  },
  {
    code: '04005',
    departmentCode: '04',
    name: 'Hecelchakán',
  },
  {
    code: '04006',
    departmentCode: '04',
    name: 'Hopelchén',
  },
  {
    code: '04007',
    departmentCode: '04',
    name: 'Palizada',
  },
  {
    code: '04008',
    departmentCode: '04',
    name: 'Tenabo',
  },
  {
    code: '04009',
    departmentCode: '04',
    name: 'Escárcega',
  },
  {
    code: '04010',
    departmentCode: '04',
    name: 'Calakmul',
  },
  {
    code: '04011',
    departmentCode: '04',
    name: 'Candelaria',
  },
  {
    code: '04012',
    departmentCode: '04',
    name: 'Seybaplaya',
  },
  {
    code: '04013',
    departmentCode: '04',
    name: 'Dzitbalché',
  },
  {
    code: '05001',
    departmentCode: '05',
    name: 'Abasolo',
  },
  {
    code: '05002',
    departmentCode: '05',
    name: 'Acuña',
  },
  {
    code: '05003',
    departmentCode: '05',
    name: 'Allende',
  },
  {
    code: '05004',
    departmentCode: '05',
    name: 'Arteaga',
  },
  {
    code: '05005',
    departmentCode: '05',
    name: 'Candela',
  },
  {
    code: '05006',
    departmentCode: '05',
    name: 'Castaños',
  },
  {
    code: '05007',
    departmentCode: '05',
    name: 'Cuatro Ciénegas',
  },
  {
    code: '05008',
    departmentCode: '05',
    name: 'Escobedo',
  },
  {
    code: '05009',
    departmentCode: '05',
    name: 'Francisco I. Madero',
  },
  {
    code: '05010',
    departmentCode: '05',
    name: 'Frontera',
  },
  {
    code: '05011',
    departmentCode: '05',
    name: 'General Cepeda',
  },
  {
    code: '05012',
    departmentCode: '05',
    name: 'Guerrero',
  },
  {
    code: '05013',
    departmentCode: '05',
    name: 'Hidalgo',
  },
  {
    code: '05014',
    departmentCode: '05',
    name: 'Jiménez',
  },
  {
    code: '05015',
    departmentCode: '05',
    name: 'Juárez',
  },
  {
    code: '05016',
    departmentCode: '05',
    name: 'Lamadrid',
  },
  {
    code: '05017',
    departmentCode: '05',
    name: 'Matamoros',
  },
  {
    code: '05018',
    departmentCode: '05',
    name: 'Monclova',
  },
  {
    code: '05019',
    departmentCode: '05',
    name: 'Morelos',
  },
  {
    code: '05020',
    departmentCode: '05',
    name: 'Múzquiz',
  },
  {
    code: '05021',
    departmentCode: '05',
    name: 'Nadadores',
  },
  {
    code: '05022',
    departmentCode: '05',
    name: 'Nava',
  },
  {
    code: '05023',
    departmentCode: '05',
    name: 'Ocampo',
  },
  {
    code: '05024',
    departmentCode: '05',
    name: 'Parras',
  },
  {
    code: '05025',
    departmentCode: '05',
    name: 'Piedras Negras',
  },
  {
    code: '05026',
    departmentCode: '05',
    name: 'Progreso',
  },
  {
    code: '05027',
    departmentCode: '05',
    name: 'Ramos Arizpe',
  },
  {
    code: '05028',
    departmentCode: '05',
    name: 'Sabinas',
  },
  {
    code: '05029',
    departmentCode: '05',
    name: 'Sacramento',
  },
  {
    code: '05030',
    departmentCode: '05',
    name: 'Saltillo',
  },
  {
    code: '05031',
    departmentCode: '05',
    name: 'San Buenaventura',
  },
  {
    code: '05032',
    departmentCode: '05',
    name: 'San Juan de Sabinas',
  },
  {
    code: '05033',
    departmentCode: '05',
    name: 'San Pedro',
  },
  {
    code: '05034',
    departmentCode: '05',
    name: 'Sierra Mojada',
  },
  {
    code: '05035',
    departmentCode: '05',
    name: 'Torreón',
  },
  {
    code: '05036',
    departmentCode: '05',
    name: 'Viesca',
  },
  {
    code: '05037',
    departmentCode: '05',
    name: 'Villa Unión',
  },
  {
    code: '05038',
    departmentCode: '05',
    name: 'Zaragoza',
  },
  {
    code: '06001',
    departmentCode: '06',
    name: 'Armería',
  },
  {
    code: '06002',
    departmentCode: '06',
    name: 'Colima',
  },
  {
    code: '06003',
    departmentCode: '06',
    name: 'Comala',
  },
  {
    code: '06004',
    departmentCode: '06',
    name: 'Coquimatlán',
  },
  {
    code: '06005',
    departmentCode: '06',
    name: 'Cuauhtémoc',
  },
  {
    code: '06006',
    departmentCode: '06',
    name: 'Ixtlahuacán',
  },
  {
    code: '06007',
    departmentCode: '06',
    name: 'Manzanillo',
  },
  {
    code: '06008',
    departmentCode: '06',
    name: 'Minatitlán',
  },
  {
    code: '06009',
    departmentCode: '06',
    name: 'Tecomán',
  },
  {
    code: '06010',
    departmentCode: '06',
    name: 'Villa de Álvarez',
  },
  {
    code: '07001',
    departmentCode: '07',
    name: 'Acacoyagua',
  },
  {
    code: '07002',
    departmentCode: '07',
    name: 'Acala',
  },
  {
    code: '07003',
    departmentCode: '07',
    name: 'Acapetahua',
  },
  {
    code: '07004',
    departmentCode: '07',
    name: 'Altamirano',
  },
  {
    code: '07005',
    departmentCode: '07',
    name: 'Amatán',
  },
  {
    code: '07006',
    departmentCode: '07',
    name: 'Amatenango de la Frontera',
  },
  {
    code: '07007',
    departmentCode: '07',
    name: 'Amatenango del Valle',
  },
  {
    code: '07008',
    departmentCode: '07',
    name: 'Ángel Albino Corzo',
  },
  {
    code: '07009',
    departmentCode: '07',
    name: 'Arriaga',
  },
  {
    code: '07010',
    departmentCode: '07',
    name: 'Bejucal de Ocampo',
  },
  {
    code: '07011',
    departmentCode: '07',
    name: 'Bella Vista',
  },
  {
    code: '07012',
    departmentCode: '07',
    name: 'Berriozábal',
  },
  {
    code: '07013',
    departmentCode: '07',
    name: 'Bochil',
  },
  {
    code: '07014',
    departmentCode: '07',
    name: 'El Bosque',
  },
  {
    code: '07015',
    departmentCode: '07',
    name: 'Cacahoatán',
  },
  {
    code: '07016',
    departmentCode: '07',
    name: 'Catazajá',
  },
  {
    code: '07017',
    departmentCode: '07',
    name: 'Cintalapa de Figueroa',
  },
  {
    code: '07018',
    departmentCode: '07',
    name: 'Coapilla',
  },
  {
    code: '07019',
    departmentCode: '07',
    name: 'Comitán de Domínguez',
  },
  {
    code: '07020',
    departmentCode: '07',
    name: 'La Concordia',
  },
  {
    code: '07021',
    departmentCode: '07',
    name: 'Copainalá',
  },
  {
    code: '07022',
    departmentCode: '07',
    name: 'Chalchihuitán',
  },
  {
    code: '07023',
    departmentCode: '07',
    name: 'Chamula',
  },
  {
    code: '07024',
    departmentCode: '07',
    name: 'Chanal',
  },
  {
    code: '07025',
    departmentCode: '07',
    name: 'Chapultenango',
  },
  {
    code: '07026',
    departmentCode: '07',
    name: 'Chenalhó',
  },
  {
    code: '07027',
    departmentCode: '07',
    name: 'Chiapa de Corzo',
  },
  {
    code: '07028',
    departmentCode: '07',
    name: 'Chiapilla',
  },
  {
    code: '07029',
    departmentCode: '07',
    name: 'Chicoasén',
  },
  {
    code: '07030',
    departmentCode: '07',
    name: 'Chicomuselo',
  },
  {
    code: '07031',
    departmentCode: '07',
    name: 'Chilón',
  },
  {
    code: '07032',
    departmentCode: '07',
    name: 'Escuintla',
  },
  {
    code: '07033',
    departmentCode: '07',
    name: 'Francisco León',
  },
  {
    code: '07034',
    departmentCode: '07',
    name: 'Frontera Comalapa',
  },
  {
    code: '07035',
    departmentCode: '07',
    name: 'Frontera Hidalgo',
  },
  {
    code: '07036',
    departmentCode: '07',
    name: 'La Grandeza',
  },
  {
    code: '07037',
    departmentCode: '07',
    name: 'Huehuetán',
  },
  {
    code: '07038',
    departmentCode: '07',
    name: 'Huixtán',
  },
  {
    code: '07039',
    departmentCode: '07',
    name: 'Huitiupán',
  },
  {
    code: '07040',
    departmentCode: '07',
    name: 'Huixtla',
  },
  {
    code: '07041',
    departmentCode: '07',
    name: 'La Independencia',
  },
  {
    code: '07042',
    departmentCode: '07',
    name: 'Ixhuatán',
  },
  {
    code: '07043',
    departmentCode: '07',
    name: 'Ixtacomitán',
  },
  {
    code: '07044',
    departmentCode: '07',
    name: 'Ixtapa',
  },
  {
    code: '07045',
    departmentCode: '07',
    name: 'Ixtapangajoya',
  },
  {
    code: '07046',
    departmentCode: '07',
    name: 'Jiquipilas',
  },
  {
    code: '07047',
    departmentCode: '07',
    name: 'Jitotol',
  },
  {
    code: '07048',
    departmentCode: '07',
    name: 'Juárez',
  },
  {
    code: '07049',
    departmentCode: '07',
    name: 'Larráinzar',
  },
  {
    code: '07050',
    departmentCode: '07',
    name: 'La Libertad',
  },
  {
    code: '07051',
    departmentCode: '07',
    name: 'Mapastepec',
  },
  {
    code: '07052',
    departmentCode: '07',
    name: 'Las Margaritas',
  },
  {
    code: '07053',
    departmentCode: '07',
    name: 'Mazapa de Madero',
  },
  {
    code: '07054',
    departmentCode: '07',
    name: 'Mazatán',
  },
  {
    code: '07055',
    departmentCode: '07',
    name: 'Metapa',
  },
  {
    code: '07056',
    departmentCode: '07',
    name: 'Mitontic',
  },
  {
    code: '07057',
    departmentCode: '07',
    name: 'Motozintla',
  },
  {
    code: '07058',
    departmentCode: '07',
    name: 'Nicolás Ruíz',
  },
  {
    code: '07059',
    departmentCode: '07',
    name: 'Ocosingo',
  },
  {
    code: '07060',
    departmentCode: '07',
    name: 'Ocotepec',
  },
  {
    code: '07061',
    departmentCode: '07',
    name: 'Ocozocoautla de Espinosa',
  },
  {
    code: '07062',
    departmentCode: '07',
    name: 'Ostuacán',
  },
  {
    code: '07063',
    departmentCode: '07',
    name: 'Osumacinta',
  },
  {
    code: '07064',
    departmentCode: '07',
    name: 'Oxchuc',
  },
  {
    code: '07065',
    departmentCode: '07',
    name: 'Palenque',
  },
  {
    code: '07066',
    departmentCode: '07',
    name: 'Pantelhó',
  },
  {
    code: '07067',
    departmentCode: '07',
    name: 'Pantepec',
  },
  {
    code: '07068',
    departmentCode: '07',
    name: 'Pichucalco',
  },
  {
    code: '07069',
    departmentCode: '07',
    name: 'Pijijiapan',
  },
  {
    code: '07070',
    departmentCode: '07',
    name: 'El Porvenir',
  },
  {
    code: '07071',
    departmentCode: '07',
    name: 'Villa Comaltitlán',
  },
  {
    code: '07072',
    departmentCode: '07',
    name: 'Pueblo Nuevo Solistahuacán',
  },
  {
    code: '07073',
    departmentCode: '07',
    name: 'Rayón',
  },
  {
    code: '07074',
    departmentCode: '07',
    name: 'Reforma',
  },
  {
    code: '07075',
    departmentCode: '07',
    name: 'Las Rosas',
  },
  {
    code: '07076',
    departmentCode: '07',
    name: 'Sabanilla',
  },
  {
    code: '07077',
    departmentCode: '07',
    name: 'Salto de Agua',
  },
  {
    code: '07078',
    departmentCode: '07',
    name: 'San Cristóbal de las Casas',
  },
  {
    code: '07079',
    departmentCode: '07',
    name: 'San Fernando',
  },
  {
    code: '07080',
    departmentCode: '07',
    name: 'Siltepec',
  },
  {
    code: '07081',
    departmentCode: '07',
    name: 'Simojovel',
  },
  {
    code: '07082',
    departmentCode: '07',
    name: 'Sitalá',
  },
  {
    code: '07083',
    departmentCode: '07',
    name: 'Socoltenango',
  },
  {
    code: '07084',
    departmentCode: '07',
    name: 'Solosuchiapa',
  },
  {
    code: '07085',
    departmentCode: '07',
    name: 'Soyaló',
  },
  {
    code: '07086',
    departmentCode: '07',
    name: 'Suchiapa',
  },
  {
    code: '07087',
    departmentCode: '07',
    name: 'Suchiate',
  },
  {
    code: '07088',
    departmentCode: '07',
    name: 'Sunuapa',
  },
  {
    code: '07089',
    departmentCode: '07',
    name: 'Tapachula',
  },
  {
    code: '07090',
    departmentCode: '07',
    name: 'Tapalapa',
  },
  {
    code: '07091',
    departmentCode: '07',
    name: 'Tapilula',
  },
  {
    code: '07092',
    departmentCode: '07',
    name: 'Tecpatán',
  },
  {
    code: '07093',
    departmentCode: '07',
    name: 'Tenejapa',
  },
  {
    code: '07094',
    departmentCode: '07',
    name: 'Teopisca',
  },
  {
    code: '07096',
    departmentCode: '07',
    name: 'Tila',
  },
  {
    code: '07097',
    departmentCode: '07',
    name: 'Tonalá',
  },
  {
    code: '07098',
    departmentCode: '07',
    name: 'Totolapa',
  },
  {
    code: '07099',
    departmentCode: '07',
    name: 'La Trinitaria',
  },
  {
    code: '07100',
    departmentCode: '07',
    name: 'Tumbalá',
  },
  {
    code: '07101',
    departmentCode: '07',
    name: 'Tuxtla Gutiérrez',
  },
  {
    code: '07102',
    departmentCode: '07',
    name: 'Tuxtla Chico',
  },
  {
    code: '07103',
    departmentCode: '07',
    name: 'Tuzantán',
  },
  {
    code: '07104',
    departmentCode: '07',
    name: 'Tzimol',
  },
  {
    code: '07105',
    departmentCode: '07',
    name: 'Unión Juárez',
  },
  {
    code: '07106',
    departmentCode: '07',
    name: 'Venustiano Carranza',
  },
  {
    code: '07107',
    departmentCode: '07',
    name: 'Villa Corzo',
  },
  {
    code: '07108',
    departmentCode: '07',
    name: 'Villaflores',
  },
  {
    code: '07109',
    departmentCode: '07',
    name: 'Yajalón',
  },
  {
    code: '07110',
    departmentCode: '07',
    name: 'San Lucas',
  },
  {
    code: '07111',
    departmentCode: '07',
    name: 'Zinacantán',
  },
  {
    code: '07112',
    departmentCode: '07',
    name: 'San Juan Cancuc',
  },
  {
    code: '07113',
    departmentCode: '07',
    name: 'Aldama',
  },
  {
    code: '07114',
    departmentCode: '07',
    name: 'Benemérito de las Américas',
  },
  {
    code: '07115',
    departmentCode: '07',
    name: 'Maravilla Tenejapa',
  },
  {
    code: '07116',
    departmentCode: '07',
    name: 'Marqués de Comillas',
  },
  {
    code: '07117',
    departmentCode: '07',
    name: 'Montecristo de Guerrero',
  },
  {
    code: '07118',
    departmentCode: '07',
    name: 'San Andrés Duraznal',
  },
  {
    code: '07119',
    departmentCode: '07',
    name: 'Santiago el Pinar',
  },
  {
    code: '07120',
    departmentCode: '07',
    name: 'Capitán Luis Ángel Vidal',
  },
  {
    code: '07121',
    departmentCode: '07',
    name: 'Rincón Chamula San Pedro',
  },
  {
    code: '07122',
    departmentCode: '07',
    name: 'El Parral',
  },
  {
    code: '07123',
    departmentCode: '07',
    name: 'Emiliano Zapata',
  },
  {
    code: '07124',
    departmentCode: '07',
    name: 'Mezcalapa',
  },
  {
    code: '07125',
    departmentCode: '07',
    name: 'Honduras de la Sierra',
  },
  {
    code: '08001',
    departmentCode: '08',
    name: 'Ahumada',
  },
  {
    code: '08002',
    departmentCode: '08',
    name: 'Aldama',
  },
  {
    code: '08003',
    departmentCode: '08',
    name: 'Allende',
  },
  {
    code: '08004',
    departmentCode: '08',
    name: 'Aquiles Serdán',
  },
  {
    code: '08005',
    departmentCode: '08',
    name: 'Ascensión',
  },
  {
    code: '08006',
    departmentCode: '08',
    name: 'Bachíniva',
  },
  {
    code: '08007',
    departmentCode: '08',
    name: 'Balleza',
  },
  {
    code: '08008',
    departmentCode: '08',
    name: 'Batopilas de Manuel Gómez Morín',
  },
  {
    code: '08009',
    departmentCode: '08',
    name: 'Bocoyna',
  },
  {
    code: '08010',
    departmentCode: '08',
    name: 'Buenaventura',
  },
  {
    code: '08011',
    departmentCode: '08',
    name: 'Camargo',
  },
  {
    code: '08012',
    departmentCode: '08',
    name: 'Carichí',
  },
  {
    code: '08013',
    departmentCode: '08',
    name: 'Casas Grandes',
  },
  {
    code: '08014',
    departmentCode: '08',
    name: 'Coronado',
  },
  {
    code: '08015',
    departmentCode: '08',
    name: 'Coyame del Sotol',
  },
  {
    code: '08016',
    departmentCode: '08',
    name: 'La Cruz',
  },
  {
    code: '08017',
    departmentCode: '08',
    name: 'Cuauhtémoc',
  },
  {
    code: '08018',
    departmentCode: '08',
    name: 'Cusihuiriachi',
  },
  {
    code: '08019',
    departmentCode: '08',
    name: 'Chihuahua',
  },
  {
    code: '08020',
    departmentCode: '08',
    name: 'Chínipas',
  },
  {
    code: '08021',
    departmentCode: '08',
    name: 'Delicias',
  },
  {
    code: '08022',
    departmentCode: '08',
    name: 'Dr. Belisario Domínguez',
  },
  {
    code: '08023',
    departmentCode: '08',
    name: 'Galeana',
  },
  {
    code: '08024',
    departmentCode: '08',
    name: 'Santa Isabel',
  },
  {
    code: '08025',
    departmentCode: '08',
    name: 'Gómez Farías',
  },
  {
    code: '08026',
    departmentCode: '08',
    name: 'Gran Morelos',
  },
  {
    code: '08027',
    departmentCode: '08',
    name: 'Guachochi',
  },
  {
    code: '08028',
    departmentCode: '08',
    name: 'Guadalupe',
  },
  {
    code: '08029',
    departmentCode: '08',
    name: 'Guadalupe y Calvo',
  },
  {
    code: '08030',
    departmentCode: '08',
    name: 'Guazapares',
  },
  {
    code: '08031',
    departmentCode: '08',
    name: 'Guerrero',
  },
  {
    code: '08032',
    departmentCode: '08',
    name: 'Hidalgo del Parral',
  },
  {
    code: '08033',
    departmentCode: '08',
    name: 'Huejotitán',
  },
  {
    code: '08034',
    departmentCode: '08',
    name: 'Ignacio Zaragoza',
  },
  {
    code: '08035',
    departmentCode: '08',
    name: 'Janos',
  },
  {
    code: '08036',
    departmentCode: '08',
    name: 'Jiménez',
  },
  {
    code: '08037',
    departmentCode: '08',
    name: 'Juárez',
  },
  {
    code: '08038',
    departmentCode: '08',
    name: 'Julimes',
  },
  {
    code: '08039',
    departmentCode: '08',
    name: 'López',
  },
  {
    code: '08040',
    departmentCode: '08',
    name: 'Madera',
  },
  {
    code: '08041',
    departmentCode: '08',
    name: 'Maguarichi',
  },
  {
    code: '08042',
    departmentCode: '08',
    name: 'Manuel Benavides',
  },
  {
    code: '08043',
    departmentCode: '08',
    name: 'Matachí',
  },
  {
    code: '08044',
    departmentCode: '08',
    name: 'Matamoros',
  },
  {
    code: '08045',
    departmentCode: '08',
    name: 'Meoqui',
  },
  {
    code: '08046',
    departmentCode: '08',
    name: 'Morelos',
  },
  {
    code: '08047',
    departmentCode: '08',
    name: 'Moris',
  },
  {
    code: '08048',
    departmentCode: '08',
    name: 'Namiquipa',
  },
  {
    code: '08049',
    departmentCode: '08',
    name: 'Nonoava',
  },
  {
    code: '08050',
    departmentCode: '08',
    name: 'Nuevo Casas Grandes',
  },
  {
    code: '08051',
    departmentCode: '08',
    name: 'Ocampo',
  },
  {
    code: '08052',
    departmentCode: '08',
    name: 'Ojinaga',
  },
  {
    code: '08053',
    departmentCode: '08',
    name: 'Praxedis G. Guerrero',
  },
  {
    code: '08054',
    departmentCode: '08',
    name: 'Riva Palacio',
  },
  {
    code: '08055',
    departmentCode: '08',
    name: 'Rosales',
  },
  {
    code: '08056',
    departmentCode: '08',
    name: 'Valle del Rosario',
  },
  {
    code: '08057',
    departmentCode: '08',
    name: 'San Francisco de Borja',
  },
  {
    code: '08058',
    departmentCode: '08',
    name: 'San Francisco de Conchos',
  },
  {
    code: '08059',
    departmentCode: '08',
    name: 'San Francisco del Oro',
  },
  {
    code: '08060',
    departmentCode: '08',
    name: 'Santa Bárbara',
  },
  {
    code: '08061',
    departmentCode: '08',
    name: 'Satevó',
  },
  {
    code: '08062',
    departmentCode: '08',
    name: 'Saucillo',
  },
  {
    code: '08063',
    departmentCode: '08',
    name: 'Temósachic',
  },
  {
    code: '08064',
    departmentCode: '08',
    name: 'El Tule',
  },
  {
    code: '08065',
    departmentCode: '08',
    name: 'Urique',
  },
  {
    code: '08066',
    departmentCode: '08',
    name: 'Uruachi',
  },
  {
    code: '08067',
    departmentCode: '08',
    name: 'Valle de Zaragoza',
  },
  {
    code: '09002',
    departmentCode: '09',
    name: 'Azcapotzalco',
  },
  {
    code: '09003',
    departmentCode: '09',
    name: 'Coyoacán',
  },
  {
    code: '09004',
    departmentCode: '09',
    name: 'Cuajimalpa de Morelos',
  },
  {
    code: '09005',
    departmentCode: '09',
    name: 'Gustavo A. Madero',
  },
  {
    code: '09006',
    departmentCode: '09',
    name: 'Iztacalco',
  },
  {
    code: '09007',
    departmentCode: '09',
    name: 'Iztapalapa',
  },
  {
    code: '09008',
    departmentCode: '09',
    name: 'La Magdalena Contreras',
  },
  {
    code: '09009',
    departmentCode: '09',
    name: 'Milpa Alta',
  },
  {
    code: '09010',
    departmentCode: '09',
    name: 'Álvaro Obregón',
  },
  {
    code: '09011',
    departmentCode: '09',
    name: 'Tláhuac',
  },
  {
    code: '09012',
    departmentCode: '09',
    name: 'Tlalpan',
  },
  {
    code: '09013',
    departmentCode: '09',
    name: 'Xochimilco',
  },
  {
    code: '09014',
    departmentCode: '09',
    name: 'Benito Juárez',
  },
  {
    code: '09015',
    departmentCode: '09',
    name: 'Cuauhtémoc',
  },
  {
    code: '09016',
    departmentCode: '09',
    name: 'Miguel Hidalgo',
  },
  {
    code: '09017',
    departmentCode: '09',
    name: 'Venustiano Carranza',
  },
  {
    code: '10001',
    departmentCode: '10',
    name: 'Canatlán',
  },
  {
    code: '10002',
    departmentCode: '10',
    name: 'Canelas',
  },
  {
    code: '10003',
    departmentCode: '10',
    name: 'Coneto de Comonfort',
  },
  {
    code: '10004',
    departmentCode: '10',
    name: 'Cuencamé',
  },
  {
    code: '10005',
    departmentCode: '10',
    name: 'Durango',
  },
  {
    code: '10006',
    departmentCode: '10',
    name: 'General Simón Bolívar',
  },
  {
    code: '10007',
    departmentCode: '10',
    name: 'Gómez Palacio',
  },
  {
    code: '10008',
    departmentCode: '10',
    name: 'Guadalupe Victoria',
  },
  {
    code: '10009',
    departmentCode: '10',
    name: 'Guanaceví',
  },
  {
    code: '10010',
    departmentCode: '10',
    name: 'Hidalgo',
  },
  {
    code: '10011',
    departmentCode: '10',
    name: 'Indé',
  },
  {
    code: '10012',
    departmentCode: '10',
    name: 'Lerdo',
  },
  {
    code: '10013',
    departmentCode: '10',
    name: 'Mapimí',
  },
  {
    code: '10014',
    departmentCode: '10',
    name: 'Mezquital',
  },
  {
    code: '10015',
    departmentCode: '10',
    name: 'Nazas',
  },
  {
    code: '10016',
    departmentCode: '10',
    name: 'Nombre de Dios',
  },
  {
    code: '10017',
    departmentCode: '10',
    name: 'Ocampo',
  },
  {
    code: '10018',
    departmentCode: '10',
    name: 'El Oro',
  },
  {
    code: '10019',
    departmentCode: '10',
    name: 'Otáez',
  },
  {
    code: '10020',
    departmentCode: '10',
    name: 'Pánuco de Coronado',
  },
  {
    code: '10021',
    departmentCode: '10',
    name: 'Peñón Blanco',
  },
  {
    code: '10022',
    departmentCode: '10',
    name: 'Poanas',
  },
  {
    code: '10023',
    departmentCode: '10',
    name: 'Pueblo Nuevo',
  },
  {
    code: '10024',
    departmentCode: '10',
    name: 'Rodeo',
  },
  {
    code: '10025',
    departmentCode: '10',
    name: 'San Bernardo',
  },
  {
    code: '10026',
    departmentCode: '10',
    name: 'San Dimas',
  },
  {
    code: '10027',
    departmentCode: '10',
    name: 'San Juan de Guadalupe',
  },
  {
    code: '10028',
    departmentCode: '10',
    name: 'San Juan del Río',
  },
  {
    code: '10029',
    departmentCode: '10',
    name: 'San Luis del Cordero',
  },
  {
    code: '10030',
    departmentCode: '10',
    name: 'San Pedro del Gallo',
  },
  {
    code: '10031',
    departmentCode: '10',
    name: 'Santa Clara',
  },
  {
    code: '10032',
    departmentCode: '10',
    name: 'Santiago Papasquiaro',
  },
  {
    code: '10033',
    departmentCode: '10',
    name: 'Súchil',
  },
  {
    code: '10034',
    departmentCode: '10',
    name: 'Tamazula',
  },
  {
    code: '10035',
    departmentCode: '10',
    name: 'Tepehuanes',
  },
  {
    code: '10036',
    departmentCode: '10',
    name: 'Tlahualilo',
  },
  {
    code: '10037',
    departmentCode: '10',
    name: 'Topia',
  },
  {
    code: '10038',
    departmentCode: '10',
    name: 'Vicente Guerrero',
  },
  {
    code: '10039',
    departmentCode: '10',
    name: 'Nuevo Ideal',
  },
  {
    code: '11001',
    departmentCode: '11',
    name: 'Abasolo',
  },
  {
    code: '11002',
    departmentCode: '11',
    name: 'Acámbaro',
  },
  {
    code: '11003',
    departmentCode: '11',
    name: 'San Miguel de Allende',
  },
  {
    code: '11004',
    departmentCode: '11',
    name: 'Apaseo el Alto',
  },
  {
    code: '11005',
    departmentCode: '11',
    name: 'Apaseo el Grande',
  },
  {
    code: '11006',
    departmentCode: '11',
    name: 'Atarjea',
  },
  {
    code: '11007',
    departmentCode: '11',
    name: 'Celaya',
  },
  {
    code: '11008',
    departmentCode: '11',
    name: 'Manuel Doblado',
  },
  {
    code: '11009',
    departmentCode: '11',
    name: 'Comonfort',
  },
  {
    code: '11010',
    departmentCode: '11',
    name: 'Coroneo',
  },
  {
    code: '11011',
    departmentCode: '11',
    name: 'Cortazar',
  },
  {
    code: '11012',
    departmentCode: '11',
    name: 'Cuerámaro',
  },
  {
    code: '11013',
    departmentCode: '11',
    name: 'Doctor Mora',
  },
  {
    code: '11014',
    departmentCode: '11',
    name: 'Dolores Hidalgo Cuna de la Independencia Nacional',
  },
  {
    code: '11015',
    departmentCode: '11',
    name: 'Guanajuato',
  },
  {
    code: '11016',
    departmentCode: '11',
    name: 'Huanímaro',
  },
  {
    code: '11017',
    departmentCode: '11',
    name: 'Irapuato',
  },
  {
    code: '11018',
    departmentCode: '11',
    name: 'Jaral del Progreso',
  },
  {
    code: '11019',
    departmentCode: '11',
    name: 'Jerécuaro',
  },
  {
    code: '11020',
    departmentCode: '11',
    name: 'León',
  },
  {
    code: '11021',
    departmentCode: '11',
    name: 'Moroleón',
  },
  {
    code: '11022',
    departmentCode: '11',
    name: 'Ocampo',
  },
  {
    code: '11023',
    departmentCode: '11',
    name: 'Pénjamo',
  },
  {
    code: '11024',
    departmentCode: '11',
    name: 'Pueblo Nuevo',
  },
  {
    code: '11025',
    departmentCode: '11',
    name: 'Purísima del Rincón',
  },
  {
    code: '11026',
    departmentCode: '11',
    name: 'Romita',
  },
  {
    code: '11027',
    departmentCode: '11',
    name: 'Salamanca',
  },
  {
    code: '11028',
    departmentCode: '11',
    name: 'Salvatierra',
  },
  {
    code: '11029',
    departmentCode: '11',
    name: 'San Diego de la Unión',
  },
  {
    code: '11030',
    departmentCode: '11',
    name: 'San Felipe',
  },
  {
    code: '11031',
    departmentCode: '11',
    name: 'San Francisco del Rincón',
  },
  {
    code: '11032',
    departmentCode: '11',
    name: 'San José de Iturbide',
  },
  {
    code: '11033',
    departmentCode: '11',
    name: 'San Luis de la Paz',
  },
  {
    code: '11034',
    departmentCode: '11',
    name: 'Santa Catarina',
  },
  {
    code: '11035',
    departmentCode: '11',
    name: 'Santa Cruz de Juventino Rosas',
  },
  {
    code: '11036',
    departmentCode: '11',
    name: 'Santiago Maravatío',
  },
  {
    code: '11037',
    departmentCode: '11',
    name: 'Silao de la Victoria',
  },
  {
    code: '11038',
    departmentCode: '11',
    name: 'Tarandacuao',
  },
  {
    code: '11039',
    departmentCode: '11',
    name: 'Tarimoro',
  },
  {
    code: '11040',
    departmentCode: '11',
    name: 'Tierra Blanca',
  },
  {
    code: '11041',
    departmentCode: '11',
    name: 'Uriangato',
  },
  {
    code: '11042',
    departmentCode: '11',
    name: 'Valle de Santiago',
  },
  {
    code: '11043',
    departmentCode: '11',
    name: 'Victoria',
  },
  {
    code: '11044',
    departmentCode: '11',
    name: 'Villagrán',
  },
  {
    code: '11045',
    departmentCode: '11',
    name: 'Xichú',
  },
  {
    code: '11046',
    departmentCode: '11',
    name: 'Yuriria',
  },
  {
    code: '12001',
    departmentCode: '12',
    name: 'Acapulco de Juárez',
  },
  {
    code: '12002',
    departmentCode: '12',
    name: 'Ahuacuotzingo',
  },
  {
    code: '12003',
    departmentCode: '12',
    name: 'Ajuchitlán del Progreso',
  },
  {
    code: '12004',
    departmentCode: '12',
    name: 'Alcozauca de Guerrero',
  },
  {
    code: '12005',
    departmentCode: '12',
    name: 'Alpoyeca',
  },
  {
    code: '12006',
    departmentCode: '12',
    name: 'Apaxtla de Castrejón',
  },
  {
    code: '12007',
    departmentCode: '12',
    name: 'Arcelia',
  },
  {
    code: '12008',
    departmentCode: '12',
    name: 'Atenango del Río',
  },
  {
    code: '12009',
    departmentCode: '12',
    name: 'Atlamajalcingo del Monte',
  },
  {
    code: '12010',
    departmentCode: '12',
    name: 'Atlixtac',
  },
  {
    code: '12011',
    departmentCode: '12',
    name: 'Atoyac de Álvarez',
  },
  {
    code: '12012',
    departmentCode: '12',
    name: 'Ayutla de los Libres',
  },
  {
    code: '12013',
    departmentCode: '12',
    name: 'Azoyú',
  },
  {
    code: '12014',
    departmentCode: '12',
    name: 'Benito Juárez',
  },
  {
    code: '12015',
    departmentCode: '12',
    name: 'Buenavista de Cuéllar',
  },
  {
    code: '12016',
    departmentCode: '12',
    name: 'Coahuayutla de José María Izazaga',
  },
  {
    code: '12017',
    departmentCode: '12',
    name: 'Cocula',
  },
  {
    code: '12018',
    departmentCode: '12',
    name: 'Copala',
  },
  {
    code: '12019',
    departmentCode: '12',
    name: 'Copalillo',
  },
  {
    code: '12020',
    departmentCode: '12',
    name: 'Copanatoyac',
  },
  {
    code: '12021',
    departmentCode: '12',
    name: 'Coyuca de Benítez',
  },
  {
    code: '12022',
    departmentCode: '12',
    name: 'Coyuca de Catalán',
  },
  {
    code: '12023',
    departmentCode: '12',
    name: 'Cuajinicuilapa',
  },
  {
    code: '12024',
    departmentCode: '12',
    name: 'Cualác',
  },
  {
    code: '12025',
    departmentCode: '12',
    name: 'Cuautepec',
  },
  {
    code: '12026',
    departmentCode: '12',
    name: 'Cuetzala del Progreso',
  },
  {
    code: '12027',
    departmentCode: '12',
    name: 'Cutzamala de Pinzón',
  },
  {
    code: '12028',
    departmentCode: '12',
    name: 'Chilapa de Álvarez',
  },
  {
    code: '12029',
    departmentCode: '12',
    name: 'Chilpancingo de los Bravo',
  },
  {
    code: '12030',
    departmentCode: '12',
    name: 'Florencio Villarreal',
  },
  {
    code: '12031',
    departmentCode: '12',
    name: 'General Canuto A. Neri',
  },
  {
    code: '12032',
    departmentCode: '12',
    name: 'General Heliodoro Castillo',
  },
  {
    code: '12033',
    departmentCode: '12',
    name: 'Huamuxtitlán',
  },
  {
    code: '12034',
    departmentCode: '12',
    name: 'Huitzuco de los Figueroa',
  },
  {
    code: '12035',
    departmentCode: '12',
    name: 'Iguala de la Independencia',
  },
  {
    code: '12036',
    departmentCode: '12',
    name: 'Igualapa',
  },
  {
    code: '12037',
    departmentCode: '12',
    name: 'Ixcateopan de Cuauhtémoc',
  },
  {
    code: '12038',
    departmentCode: '12',
    name: 'Zihuatanejo de Azueta',
  },
  {
    code: '12039',
    departmentCode: '12',
    name: 'Juan R. Escudero',
  },
  {
    code: '12040',
    departmentCode: '12',
    name: 'Leonardo Bravo',
  },
  {
    code: '12041',
    departmentCode: '12',
    name: 'Malinaltepec',
  },
  {
    code: '12042',
    departmentCode: '12',
    name: 'Mártir de Cuilapan',
  },
  {
    code: '12043',
    departmentCode: '12',
    name: 'Metlatónoc',
  },
  {
    code: '12044',
    departmentCode: '12',
    name: 'Mochitlán',
  },
  {
    code: '12045',
    departmentCode: '12',
    name: 'Olinalá',
  },
  {
    code: '12046',
    departmentCode: '12',
    name: 'Ometepec',
  },
  {
    code: '12047',
    departmentCode: '12',
    name: 'Pedro Ascencio Alquisiras',
  },
  {
    code: '12048',
    departmentCode: '12',
    name: 'Petatlán',
  },
  {
    code: '12049',
    departmentCode: '12',
    name: 'Pilcaya',
  },
  {
    code: '12050',
    departmentCode: '12',
    name: 'Pungarabato',
  },
  {
    code: '12051',
    departmentCode: '12',
    name: 'Quechultenango',
  },
  {
    code: '12052',
    departmentCode: '12',
    name: 'San Luis Acatlán',
  },
  {
    code: '12053',
    departmentCode: '12',
    name: 'San Marcos',
  },
  {
    code: '12054',
    departmentCode: '12',
    name: 'San Miguel Totolapan',
  },
  {
    code: '12055',
    departmentCode: '12',
    name: 'Taxco de Alarcón',
  },
  {
    code: '12056',
    departmentCode: '12',
    name: 'Tecoanapa',
  },
  {
    code: '12057',
    departmentCode: '12',
    name: 'Técpan de Galeana',
  },
  {
    code: '12058',
    departmentCode: '12',
    name: 'Teloloapan',
  },
  {
    code: '12059',
    departmentCode: '12',
    name: 'Tepecoacuilco de Trujano',
  },
  {
    code: '12060',
    departmentCode: '12',
    name: 'Tetipac',
  },
  {
    code: '12061',
    departmentCode: '12',
    name: 'Tixtla de Guerrero',
  },
  {
    code: '12062',
    departmentCode: '12',
    name: 'Tlacoachistlahuaca',
  },
  {
    code: '12063',
    departmentCode: '12',
    name: 'Tlacoapa',
  },
  {
    code: '12064',
    departmentCode: '12',
    name: 'Tlalchapa',
  },
  {
    code: '12065',
    departmentCode: '12',
    name: 'Tlalixtaquilla de Maldonado',
  },
  {
    code: '12066',
    departmentCode: '12',
    name: 'Tlapa de Comonfort',
  },
  {
    code: '12067',
    departmentCode: '12',
    name: 'Tlapehuala',
  },
  {
    code: '12068',
    departmentCode: '12',
    name: 'La Unión de Isidoro Montes de Oca',
  },
  {
    code: '12069',
    departmentCode: '12',
    name: 'Xalpatláhuac',
  },
  {
    code: '12070',
    departmentCode: '12',
    name: 'Xochihuehuetlán',
  },
  {
    code: '12071',
    departmentCode: '12',
    name: 'Xochistlahuaca',
  },
  {
    code: '12072',
    departmentCode: '12',
    name: 'Zapotitlán Tablas',
  },
  {
    code: '12073',
    departmentCode: '12',
    name: 'Zirándaro',
  },
  {
    code: '12074',
    departmentCode: '12',
    name: 'Zitlala',
  },
  {
    code: '12075',
    departmentCode: '12',
    name: 'Eduardo Neri',
  },
  {
    code: '12076',
    departmentCode: '12',
    name: 'Acatepec',
  },
  {
    code: '12077',
    departmentCode: '12',
    name: 'Marquelia',
  },
  {
    code: '12078',
    departmentCode: '12',
    name: 'Cochoapa el Grande',
  },
  {
    code: '12079',
    departmentCode: '12',
    name: 'José Joaquín de Herrera',
  },
  {
    code: '12080',
    departmentCode: '12',
    name: 'Juchitán',
  },
  {
    code: '12081',
    departmentCode: '12',
    name: 'Iliatenco',
  },
  {
    code: '12082',
    departmentCode: '12',
    name: 'Las Vigas',
  },
  {
    code: '12083',
    departmentCode: '12',
    name: 'Ñuu Savi',
  },
  {
    code: '12084',
    departmentCode: '12',
    name: 'Santa Cruz del Rincón',
  },
  {
    code: '12085',
    departmentCode: '12',
    name: 'San Nicolás',
  },
  {
    code: '13001',
    departmentCode: '13',
    name: 'Acatlán',
  },
  {
    code: '13002',
    departmentCode: '13',
    name: 'Acaxochitlán',
  },
  {
    code: '13003',
    departmentCode: '13',
    name: 'Actopan',
  },
  {
    code: '13004',
    departmentCode: '13',
    name: 'Agua Blanca de Iturbide',
  },
  {
    code: '13005',
    departmentCode: '13',
    name: 'Ajacuba',
  },
  {
    code: '13006',
    departmentCode: '13',
    name: 'Alfajayucan',
  },
  {
    code: '13007',
    departmentCode: '13',
    name: 'Almoloya',
  },
  {
    code: '13008',
    departmentCode: '13',
    name: 'Apan',
  },
  {
    code: '13009',
    departmentCode: '13',
    name: 'El Arenal',
  },
  {
    code: '13010',
    departmentCode: '13',
    name: 'Atitalaquia',
  },
  {
    code: '13011',
    departmentCode: '13',
    name: 'Atlapexco',
  },
  {
    code: '13012',
    departmentCode: '13',
    name: 'Atotonilco el Grande',
  },
  {
    code: '13013',
    departmentCode: '13',
    name: 'Atotonilco de Tula',
  },
  {
    code: '13014',
    departmentCode: '13',
    name: 'Calnali',
  },
  {
    code: '13015',
    departmentCode: '13',
    name: 'Cardonal',
  },
  {
    code: '13016',
    departmentCode: '13',
    name: 'Cuautepec de Hinojosa',
  },
  {
    code: '13017',
    departmentCode: '13',
    name: 'Chapantongo',
  },
  {
    code: '13018',
    departmentCode: '13',
    name: 'Chapulhuacán',
  },
  {
    code: '13019',
    departmentCode: '13',
    name: 'Chilcuautla',
  },
  {
    code: '13020',
    departmentCode: '13',
    name: 'Eloxochitlán',
  },
  {
    code: '13021',
    departmentCode: '13',
    name: 'Emiliano Zapata',
  },
  {
    code: '13022',
    departmentCode: '13',
    name: 'Epazoyucan',
  },
  {
    code: '13023',
    departmentCode: '13',
    name: 'Francisco I. Madero',
  },
  {
    code: '13024',
    departmentCode: '13',
    name: 'Huasca de Ocampo',
  },
  {
    code: '13025',
    departmentCode: '13',
    name: 'Huautla',
  },
  {
    code: '13026',
    departmentCode: '13',
    name: 'Huazalingo',
  },
  {
    code: '13027',
    departmentCode: '13',
    name: 'Huehuetla',
  },
  {
    code: '13028',
    departmentCode: '13',
    name: 'Huejutla de Reyes',
  },
  {
    code: '13029',
    departmentCode: '13',
    name: 'Huichapan',
  },
  {
    code: '13030',
    departmentCode: '13',
    name: 'Ixmiquilpan',
  },
  {
    code: '13031',
    departmentCode: '13',
    name: 'Jacala de Ledezma',
  },
  {
    code: '13032',
    departmentCode: '13',
    name: 'Jaltocán',
  },
  {
    code: '13033',
    departmentCode: '13',
    name: 'Juárez Hidalgo',
  },
  {
    code: '13034',
    departmentCode: '13',
    name: 'Lolotla',
  },
  {
    code: '13035',
    departmentCode: '13',
    name: 'Metepec',
  },
  {
    code: '13036',
    departmentCode: '13',
    name: 'San Agustín Metzquititlán',
  },
  {
    code: '13037',
    departmentCode: '13',
    name: 'Metztitlán',
  },
  {
    code: '13038',
    departmentCode: '13',
    name: 'Mineral del Chico',
  },
  {
    code: '13039',
    departmentCode: '13',
    name: 'Mineral del Monte',
  },
  {
    code: '13040',
    departmentCode: '13',
    name: 'La Misión',
  },
  {
    code: '13041',
    departmentCode: '13',
    name: 'Mixquiahuala de Juárez',
  },
  {
    code: '13042',
    departmentCode: '13',
    name: 'Molango de Escamilla',
  },
  {
    code: '13043',
    departmentCode: '13',
    name: 'Nicolás Flores',
  },
  {
    code: '13044',
    departmentCode: '13',
    name: 'Nopala de Villagrán',
  },
  {
    code: '13045',
    departmentCode: '13',
    name: 'Omitlán de Juárez',
  },
  {
    code: '13046',
    departmentCode: '13',
    name: 'San Felipe Orizatlán',
  },
  {
    code: '13047',
    departmentCode: '13',
    name: 'Pacula',
  },
  {
    code: '13048',
    departmentCode: '13',
    name: 'Pachuca de Soto',
  },
  {
    code: '13049',
    departmentCode: '13',
    name: 'Pisaflores',
  },
  {
    code: '13050',
    departmentCode: '13',
    name: 'Progreso de Obregón',
  },
  {
    code: '13051',
    departmentCode: '13',
    name: 'Mineral de la Reforma',
  },
  {
    code: '13052',
    departmentCode: '13',
    name: 'San Agustín Tlaxiaca',
  },
  {
    code: '13053',
    departmentCode: '13',
    name: 'San Bartolo Tutotepec',
  },
  {
    code: '13054',
    departmentCode: '13',
    name: 'San Salvador',
  },
  {
    code: '13055',
    departmentCode: '13',
    name: 'Santiago de Anaya',
  },
  {
    code: '13056',
    departmentCode: '13',
    name: 'Santiago Tulantepec de Lugo Guerrero',
  },
  {
    code: '13057',
    departmentCode: '13',
    name: 'Singuilucan',
  },
  {
    code: '13058',
    departmentCode: '13',
    name: 'Tasquillo',
  },
  {
    code: '13059',
    departmentCode: '13',
    name: 'Tecozautla',
  },
  {
    code: '13060',
    departmentCode: '13',
    name: 'Tenango de Doria',
  },
  {
    code: '13061',
    departmentCode: '13',
    name: 'Tepeapulco',
  },
  {
    code: '13062',
    departmentCode: '13',
    name: 'Tepehuacán de Guerrero',
  },
  {
    code: '13063',
    departmentCode: '13',
    name: 'Tepeji del Río de Ocampo',
  },
  {
    code: '13064',
    departmentCode: '13',
    name: 'Tepetitlán',
  },
  {
    code: '13065',
    departmentCode: '13',
    name: 'Tetepango',
  },
  {
    code: '13066',
    departmentCode: '13',
    name: 'Villa de Tezontepec',
  },
  {
    code: '13067',
    departmentCode: '13',
    name: 'Tezontepec de Aldama',
  },
  {
    code: '13068',
    departmentCode: '13',
    name: 'Tianguistengo',
  },
  {
    code: '13069',
    departmentCode: '13',
    name: 'Tizayuca',
  },
  {
    code: '13070',
    departmentCode: '13',
    name: 'Tlahuelilpan',
  },
  {
    code: '13071',
    departmentCode: '13',
    name: 'Tlahuiltepa',
  },
  {
    code: '13072',
    departmentCode: '13',
    name: 'Tlanalapa',
  },
  {
    code: '13073',
    departmentCode: '13',
    name: 'Tlanchinol',
  },
  {
    code: '13074',
    departmentCode: '13',
    name: 'Tlaxcoapan',
  },
  {
    code: '13075',
    departmentCode: '13',
    name: 'Tolcayuca',
  },
  {
    code: '13076',
    departmentCode: '13',
    name: 'Tula de Allende',
  },
  {
    code: '13077',
    departmentCode: '13',
    name: 'Tulancingo de Bravo',
  },
  {
    code: '13078',
    departmentCode: '13',
    name: 'Xochiatipan',
  },
  {
    code: '13079',
    departmentCode: '13',
    name: 'Xochicoatlán',
  },
  {
    code: '13080',
    departmentCode: '13',
    name: 'Yahualica',
  },
  {
    code: '13081',
    departmentCode: '13',
    name: 'Zacualtipán de Ángeles',
  },
  {
    code: '13082',
    departmentCode: '13',
    name: 'Zapotlán de Juárez',
  },
  {
    code: '13083',
    departmentCode: '13',
    name: 'Zempoala',
  },
  {
    code: '13084',
    departmentCode: '13',
    name: 'Zimapán',
  },
  {
    code: '14001',
    departmentCode: '14',
    name: 'Acatic',
  },
  {
    code: '14002',
    departmentCode: '14',
    name: 'Acatlán de Juárez',
  },
  {
    code: '14003',
    departmentCode: '14',
    name: 'Ahualulco de Mercado',
  },
  {
    code: '14004',
    departmentCode: '14',
    name: 'Amacueca',
  },
  {
    code: '14005',
    departmentCode: '14',
    name: 'Amatitán',
  },
  {
    code: '14006',
    departmentCode: '14',
    name: 'Ameca',
  },
  {
    code: '14007',
    departmentCode: '14',
    name: 'San Juanito de Escobedo',
  },
  {
    code: '14008',
    departmentCode: '14',
    name: 'Arandas',
  },
  {
    code: '14009',
    departmentCode: '14',
    name: 'El Arenal',
  },
  {
    code: '14010',
    departmentCode: '14',
    name: 'Atemajac de Brizuela',
  },
  {
    code: '14011',
    departmentCode: '14',
    name: 'Atengo',
  },
  {
    code: '14012',
    departmentCode: '14',
    name: 'Atenguillo',
  },
  {
    code: '14013',
    departmentCode: '14',
    name: 'Atotonilco el Alto',
  },
  {
    code: '14014',
    departmentCode: '14',
    name: 'Atoyac',
  },
  {
    code: '14015',
    departmentCode: '14',
    name: 'Autlán de Navarro',
  },
  {
    code: '14016',
    departmentCode: '14',
    name: 'Ayotlán',
  },
  {
    code: '14017',
    departmentCode: '14',
    name: 'Ayutla',
  },
  {
    code: '14018',
    departmentCode: '14',
    name: 'La Barca',
  },
  {
    code: '14019',
    departmentCode: '14',
    name: 'Bolaños',
  },
  {
    code: '14020',
    departmentCode: '14',
    name: 'Cabo Corrientes',
  },
  {
    code: '14021',
    departmentCode: '14',
    name: 'Casimiro Castillo',
  },
  {
    code: '14022',
    departmentCode: '14',
    name: 'Cihuatlán',
  },
  {
    code: '14023',
    departmentCode: '14',
    name: 'Zapotlán el Grande',
  },
  {
    code: '14024',
    departmentCode: '14',
    name: 'Cocula',
  },
  {
    code: '14025',
    departmentCode: '14',
    name: 'Colotlán',
  },
  {
    code: '14026',
    departmentCode: '14',
    name: 'Concepción de Buenos Aires',
  },
  {
    code: '14027',
    departmentCode: '14',
    name: 'Cuautitlán de García Barragán',
  },
  {
    code: '14028',
    departmentCode: '14',
    name: 'Cuautla',
  },
  {
    code: '14029',
    departmentCode: '14',
    name: 'Cuquío',
  },
  {
    code: '14030',
    departmentCode: '14',
    name: 'Chapala',
  },
  {
    code: '14031',
    departmentCode: '14',
    name: 'Chimaltitán',
  },
  {
    code: '14032',
    departmentCode: '14',
    name: 'Chiquilistlán',
  },
  {
    code: '14033',
    departmentCode: '14',
    name: 'Degollado',
  },
  {
    code: '14034',
    departmentCode: '14',
    name: 'Ejutla',
  },
  {
    code: '14035',
    departmentCode: '14',
    name: 'Encarnación de Díaz',
  },
  {
    code: '14036',
    departmentCode: '14',
    name: 'Etzatlán',
  },
  {
    code: '14037',
    departmentCode: '14',
    name: 'El Grullo',
  },
  {
    code: '14038',
    departmentCode: '14',
    name: 'Guachinango',
  },
  {
    code: '14039',
    departmentCode: '14',
    name: 'Guadalajara',
  },
  {
    code: '14040',
    departmentCode: '14',
    name: 'Hostotipaquillo',
  },
  {
    code: '14041',
    departmentCode: '14',
    name: 'Huejúcar',
  },
  {
    code: '14042',
    departmentCode: '14',
    name: 'Huejuquilla el Alto',
  },
  {
    code: '14043',
    departmentCode: '14',
    name: 'La Huerta',
  },
  {
    code: '14044',
    departmentCode: '14',
    name: 'Ixtlahuacán de los Membrillos',
  },
  {
    code: '14045',
    departmentCode: '14',
    name: 'Ixtlahuacán del Río',
  },
  {
    code: '14046',
    departmentCode: '14',
    name: 'Jalostotitlán',
  },
  {
    code: '14047',
    departmentCode: '14',
    name: 'Jamay',
  },
  {
    code: '14048',
    departmentCode: '14',
    name: 'Jesús María',
  },
  {
    code: '14049',
    departmentCode: '14',
    name: 'Jilotlán de los Dolores',
  },
  {
    code: '14050',
    departmentCode: '14',
    name: 'Jocotepec',
  },
  {
    code: '14051',
    departmentCode: '14',
    name: 'Juanacatlán',
  },
  {
    code: '14052',
    departmentCode: '14',
    name: 'Juchitlán',
  },
  {
    code: '14053',
    departmentCode: '14',
    name: 'Lagos de Moreno',
  },
  {
    code: '14054',
    departmentCode: '14',
    name: 'El Limón',
  },
  {
    code: '14055',
    departmentCode: '14',
    name: 'Magdalena',
  },
  {
    code: '14056',
    departmentCode: '14',
    name: 'Santa María del Oro',
  },
  {
    code: '14057',
    departmentCode: '14',
    name: 'La Manzanilla de la Paz',
  },
  {
    code: '14058',
    departmentCode: '14',
    name: 'Mascota',
  },
  {
    code: '14059',
    departmentCode: '14',
    name: 'Mazamitla',
  },
  {
    code: '14060',
    departmentCode: '14',
    name: 'Mexticacán',
  },
  {
    code: '14061',
    departmentCode: '14',
    name: 'Mezquitic',
  },
  {
    code: '14062',
    departmentCode: '14',
    name: 'Mixtlán',
  },
  {
    code: '14063',
    departmentCode: '14',
    name: 'Ocotlán',
  },
  {
    code: '14064',
    departmentCode: '14',
    name: 'Ojuelos de Jalisco',
  },
  {
    code: '14065',
    departmentCode: '14',
    name: 'Pihuamo',
  },
  {
    code: '14066',
    departmentCode: '14',
    name: 'Poncitlán',
  },
  {
    code: '14067',
    departmentCode: '14',
    name: 'Puerto Vallarta',
  },
  {
    code: '14068',
    departmentCode: '14',
    name: 'Villa Purificación',
  },
  {
    code: '14069',
    departmentCode: '14',
    name: 'Quitupan',
  },
  {
    code: '14070',
    departmentCode: '14',
    name: 'El Salto',
  },
  {
    code: '14071',
    departmentCode: '14',
    name: 'San Cristóbal de la Barranca',
  },
  {
    code: '14072',
    departmentCode: '14',
    name: 'San Diego de Alejandría',
  },
  {
    code: '14073',
    departmentCode: '14',
    name: 'San Juan de los Lagos',
  },
  {
    code: '14074',
    departmentCode: '14',
    name: 'San Julián',
  },
  {
    code: '14075',
    departmentCode: '14',
    name: 'San Marcos',
  },
  {
    code: '14076',
    departmentCode: '14',
    name: 'San Martín de Bolaños',
  },
  {
    code: '14077',
    departmentCode: '14',
    name: 'San Martín Hidalgo',
  },
  {
    code: '14078',
    departmentCode: '14',
    name: 'San Miguel el Alto',
  },
  {
    code: '14079',
    departmentCode: '14',
    name: 'Gómez Farías',
  },
  {
    code: '14080',
    departmentCode: '14',
    name: 'San Sebastián del Oeste',
  },
  {
    code: '14081',
    departmentCode: '14',
    name: 'Santa María de los Ángeles',
  },
  {
    code: '14082',
    departmentCode: '14',
    name: 'Sayula',
  },
  {
    code: '14083',
    departmentCode: '14',
    name: 'Tala',
  },
  {
    code: '14084',
    departmentCode: '14',
    name: 'Talpa de Allende',
  },
  {
    code: '14085',
    departmentCode: '14',
    name: 'Tamazula de Gordiano',
  },
  {
    code: '14086',
    departmentCode: '14',
    name: 'Tapalpa',
  },
  {
    code: '14087',
    departmentCode: '14',
    name: 'Tecalitlán',
  },
  {
    code: '14088',
    departmentCode: '14',
    name: 'Tecolotlán',
  },
  {
    code: '14089',
    departmentCode: '14',
    name: 'Techaluta de Montenegro',
  },
  {
    code: '14090',
    departmentCode: '14',
    name: 'Tenamaxtlán',
  },
  {
    code: '14091',
    departmentCode: '14',
    name: 'Teocaltiche',
  },
  {
    code: '14092',
    departmentCode: '14',
    name: 'Teocuitatlán de Corona',
  },
  {
    code: '14093',
    departmentCode: '14',
    name: 'Tepatitlán de Morelos',
  },
  {
    code: '14094',
    departmentCode: '14',
    name: 'Tequila',
  },
  {
    code: '14095',
    departmentCode: '14',
    name: 'Teuchitlán',
  },
  {
    code: '14096',
    departmentCode: '14',
    name: 'Tizapán el Alto',
  },
  {
    code: '14097',
    departmentCode: '14',
    name: 'Tlajomulco de Zúñiga',
  },
  {
    code: '14098',
    departmentCode: '14',
    name: 'San Pedro Tlaquepaque',
  },
  {
    code: '14099',
    departmentCode: '14',
    name: 'Tolimán',
  },
  {
    code: '14100',
    departmentCode: '14',
    name: 'Tomatlán',
  },
  {
    code: '14101',
    departmentCode: '14',
    name: 'Tonalá',
  },
  {
    code: '14102',
    departmentCode: '14',
    name: 'Tonaya',
  },
  {
    code: '14103',
    departmentCode: '14',
    name: 'Tonila',
  },
  {
    code: '14104',
    departmentCode: '14',
    name: 'Totatiche',
  },
  {
    code: '14105',
    departmentCode: '14',
    name: 'Tototlán',
  },
  {
    code: '14106',
    departmentCode: '14',
    name: 'Tuxcacuesco',
  },
  {
    code: '14107',
    departmentCode: '14',
    name: 'Tuxcueca',
  },
  {
    code: '14108',
    departmentCode: '14',
    name: 'Tuxpan',
  },
  {
    code: '14109',
    departmentCode: '14',
    name: 'Unión de San Antonio',
  },
  {
    code: '14110',
    departmentCode: '14',
    name: 'Unión de Tula',
  },
  {
    code: '14111',
    departmentCode: '14',
    name: 'Valle de Guadalupe',
  },
  {
    code: '14112',
    departmentCode: '14',
    name: 'Valle de Juárez',
  },
  {
    code: '14113',
    departmentCode: '14',
    name: 'San Gabriel',
  },
  {
    code: '14114',
    departmentCode: '14',
    name: 'Villa Corona',
  },
  {
    code: '14115',
    departmentCode: '14',
    name: 'Villa Guerrero',
  },
  {
    code: '14116',
    departmentCode: '14',
    name: 'Villa Hidalgo',
  },
  {
    code: '14117',
    departmentCode: '14',
    name: 'Cañadas de Obregón',
  },
  {
    code: '14118',
    departmentCode: '14',
    name: 'Yahualica de González Gallo',
  },
  {
    code: '14119',
    departmentCode: '14',
    name: 'Zacoalco de Torres',
  },
  {
    code: '14120',
    departmentCode: '14',
    name: 'Zapopan',
  },
  {
    code: '14121',
    departmentCode: '14',
    name: 'Zapotiltic',
  },
  {
    code: '14122',
    departmentCode: '14',
    name: 'Zapotitlán de Vadillo',
  },
  {
    code: '14123',
    departmentCode: '14',
    name: 'Zapotlán del Rey',
  },
  {
    code: '14124',
    departmentCode: '14',
    name: 'Zapotlanejo',
  },
  {
    code: '14125',
    departmentCode: '14',
    name: 'San Ignacio Cerro Gordo',
  },
  {
    code: '15001',
    departmentCode: '15',
    name: 'Acambay de Ruíz Castañeda',
  },
  {
    code: '15002',
    departmentCode: '15',
    name: 'Acolman',
  },
  {
    code: '15003',
    departmentCode: '15',
    name: 'Aculco',
  },
  {
    code: '15004',
    departmentCode: '15',
    name: 'Almoloya de Alquisiras',
  },
  {
    code: '15005',
    departmentCode: '15',
    name: 'Almoloya de Juárez',
  },
  {
    code: '15006',
    departmentCode: '15',
    name: 'Almoloya del Río',
  },
  {
    code: '15007',
    departmentCode: '15',
    name: 'Amanalco',
  },
  {
    code: '15008',
    departmentCode: '15',
    name: 'Amatepec',
  },
  {
    code: '15009',
    departmentCode: '15',
    name: 'Amecameca',
  },
  {
    code: '15010',
    departmentCode: '15',
    name: 'Apaxco',
  },
  {
    code: '15011',
    departmentCode: '15',
    name: 'Atenco',
  },
  {
    code: '15012',
    departmentCode: '15',
    name: 'Atizapán',
  },
  {
    code: '15013',
    departmentCode: '15',
    name: 'Atizapán de Zaragoza',
  },
  {
    code: '15014',
    departmentCode: '15',
    name: 'Atlacomulco',
  },
  {
    code: '15015',
    departmentCode: '15',
    name: 'Atlautla',
  },
  {
    code: '15016',
    departmentCode: '15',
    name: 'Axapusco',
  },
  {
    code: '15017',
    departmentCode: '15',
    name: 'Ayapango',
  },
  {
    code: '15018',
    departmentCode: '15',
    name: 'Calimaya',
  },
  {
    code: '15019',
    departmentCode: '15',
    name: 'Capulhuac',
  },
  {
    code: '15020',
    departmentCode: '15',
    name: 'Coacalco de Berriozábal',
  },
  {
    code: '15021',
    departmentCode: '15',
    name: 'Coatepec Harinas',
  },
  {
    code: '15022',
    departmentCode: '15',
    name: 'Cocotitlán',
  },
  {
    code: '15023',
    departmentCode: '15',
    name: 'Coyotepec',
  },
  {
    code: '15024',
    departmentCode: '15',
    name: 'Cuautitlán',
  },
  {
    code: '15025',
    departmentCode: '15',
    name: 'Chalco',
  },
  {
    code: '15026',
    departmentCode: '15',
    name: 'Chapa de Mota',
  },
  {
    code: '15027',
    departmentCode: '15',
    name: 'Chapultepec',
  },
  {
    code: '15028',
    departmentCode: '15',
    name: 'Chiautla',
  },
  {
    code: '15029',
    departmentCode: '15',
    name: 'Chicoloapan',
  },
  {
    code: '15030',
    departmentCode: '15',
    name: 'Chiconcuac',
  },
  {
    code: '15031',
    departmentCode: '15',
    name: 'Chimalhuacán',
  },
  {
    code: '15032',
    departmentCode: '15',
    name: 'Donato Guerra',
  },
  {
    code: '15033',
    departmentCode: '15',
    name: 'Ecatepec de Morelos',
  },
  {
    code: '15034',
    departmentCode: '15',
    name: 'Ecatzingo',
  },
  {
    code: '15035',
    departmentCode: '15',
    name: 'Huehuetoca',
  },
  {
    code: '15036',
    departmentCode: '15',
    name: 'Hueypoxtla',
  },
  {
    code: '15037',
    departmentCode: '15',
    name: 'Huixquilucan',
  },
  {
    code: '15038',
    departmentCode: '15',
    name: 'Isidro Fabela',
  },
  {
    code: '15039',
    departmentCode: '15',
    name: 'Ixtapaluca',
  },
  {
    code: '15040',
    departmentCode: '15',
    name: 'Ixtapan de la Sal',
  },
  {
    code: '15041',
    departmentCode: '15',
    name: 'Ixtapan del Oro',
  },
  {
    code: '15042',
    departmentCode: '15',
    name: 'Ixtlahuaca',
  },
  {
    code: '15043',
    departmentCode: '15',
    name: 'Xalatlaco',
  },
  {
    code: '15044',
    departmentCode: '15',
    name: 'Jaltenco',
  },
  {
    code: '15045',
    departmentCode: '15',
    name: 'Jilotepec',
  },
  {
    code: '15046',
    departmentCode: '15',
    name: 'Jilotzingo',
  },
  {
    code: '15047',
    departmentCode: '15',
    name: 'Jiquipilco',
  },
  {
    code: '15048',
    departmentCode: '15',
    name: 'Jocotitlán',
  },
  {
    code: '15049',
    departmentCode: '15',
    name: 'Joquicingo',
  },
  {
    code: '15050',
    departmentCode: '15',
    name: 'Juchitepec',
  },
  {
    code: '15051',
    departmentCode: '15',
    name: 'Lerma',
  },
  {
    code: '15052',
    departmentCode: '15',
    name: 'Malinalco',
  },
  {
    code: '15053',
    departmentCode: '15',
    name: 'Melchor Ocampo',
  },
  {
    code: '15054',
    departmentCode: '15',
    name: 'Metepec',
  },
  {
    code: '15055',
    departmentCode: '15',
    name: 'Mexicaltzingo',
  },
  {
    code: '15056',
    departmentCode: '15',
    name: 'Morelos',
  },
  {
    code: '15057',
    departmentCode: '15',
    name: 'Naucalpan de Juárez',
  },
  {
    code: '15058',
    departmentCode: '15',
    name: 'Nezahualcóyotl',
  },
  {
    code: '15059',
    departmentCode: '15',
    name: 'Nextlalpan',
  },
  {
    code: '15060',
    departmentCode: '15',
    name: 'Nicolás Romero',
  },
  {
    code: '15061',
    departmentCode: '15',
    name: 'Nopaltepec',
  },
  {
    code: '15062',
    departmentCode: '15',
    name: 'Ocoyoacac',
  },
  {
    code: '15063',
    departmentCode: '15',
    name: 'Ocuilan',
  },
  {
    code: '15064',
    departmentCode: '15',
    name: 'El Oro',
  },
  {
    code: '15065',
    departmentCode: '15',
    name: 'Otumba',
  },
  {
    code: '15066',
    departmentCode: '15',
    name: 'Otzoloapan',
  },
  {
    code: '15067',
    departmentCode: '15',
    name: 'Otzolotepec',
  },
  {
    code: '15068',
    departmentCode: '15',
    name: 'Ozumba',
  },
  {
    code: '15069',
    departmentCode: '15',
    name: 'Papalotla',
  },
  {
    code: '15070',
    departmentCode: '15',
    name: 'La Paz',
  },
  {
    code: '15071',
    departmentCode: '15',
    name: 'Polotitlán',
  },
  {
    code: '15072',
    departmentCode: '15',
    name: 'Rayón',
  },
  {
    code: '15073',
    departmentCode: '15',
    name: 'San Antonio la Isla',
  },
  {
    code: '15074',
    departmentCode: '15',
    name: 'San Felipe del Progreso',
  },
  {
    code: '15075',
    departmentCode: '15',
    name: 'San Martín de las Pirámides',
  },
  {
    code: '15076',
    departmentCode: '15',
    name: 'San Mateo Atenco',
  },
  {
    code: '15077',
    departmentCode: '15',
    name: 'San Simón de Guerrero',
  },
  {
    code: '15078',
    departmentCode: '15',
    name: 'Santo Tomás',
  },
  {
    code: '15079',
    departmentCode: '15',
    name: 'Soyaniquilpan de Juárez',
  },
  {
    code: '15080',
    departmentCode: '15',
    name: 'Sultepec',
  },
  {
    code: '15081',
    departmentCode: '15',
    name: 'Tecámac',
  },
  {
    code: '15082',
    departmentCode: '15',
    name: 'Tejupilco',
  },
  {
    code: '15083',
    departmentCode: '15',
    name: 'Temamatla',
  },
  {
    code: '15084',
    departmentCode: '15',
    name: 'Temascalapa',
  },
  {
    code: '15085',
    departmentCode: '15',
    name: 'Temascalcingo',
  },
  {
    code: '15086',
    departmentCode: '15',
    name: 'Temascaltepec',
  },
  {
    code: '15087',
    departmentCode: '15',
    name: 'Temoaya',
  },
  {
    code: '15088',
    departmentCode: '15',
    name: 'Tenancingo',
  },
  {
    code: '15089',
    departmentCode: '15',
    name: 'Tenango del Aire',
  },
  {
    code: '15090',
    departmentCode: '15',
    name: 'Tenango del Valle',
  },
  {
    code: '15091',
    departmentCode: '15',
    name: 'Teoloyucan',
  },
  {
    code: '15092',
    departmentCode: '15',
    name: 'Teotihuacán',
  },
  {
    code: '15093',
    departmentCode: '15',
    name: 'Tepetlaoxtoc',
  },
  {
    code: '15094',
    departmentCode: '15',
    name: 'Tepetlixpa',
  },
  {
    code: '15095',
    departmentCode: '15',
    name: 'Tepotzotlán',
  },
  {
    code: '15096',
    departmentCode: '15',
    name: 'Tequixquiac',
  },
  {
    code: '15097',
    departmentCode: '15',
    name: 'Texcaltitlán',
  },
  {
    code: '15098',
    departmentCode: '15',
    name: 'Texcalyacac',
  },
  {
    code: '15099',
    departmentCode: '15',
    name: 'Texcoco',
  },
  {
    code: '15100',
    departmentCode: '15',
    name: 'Tezoyuca',
  },
  {
    code: '15101',
    departmentCode: '15',
    name: 'Tianguistenco',
  },
  {
    code: '15102',
    departmentCode: '15',
    name: 'Timilpan',
  },
  {
    code: '15103',
    departmentCode: '15',
    name: 'Tlalmanalco',
  },
  {
    code: '15104',
    departmentCode: '15',
    name: 'Tlalnepantla de Baz',
  },
  {
    code: '15105',
    departmentCode: '15',
    name: 'Tlatlaya',
  },
  {
    code: '15106',
    departmentCode: '15',
    name: 'Toluca',
  },
  {
    code: '15107',
    departmentCode: '15',
    name: 'Tonatico',
  },
  {
    code: '15108',
    departmentCode: '15',
    name: 'Tultepec',
  },
  {
    code: '15109',
    departmentCode: '15',
    name: 'Tultitlán',
  },
  {
    code: '15110',
    departmentCode: '15',
    name: 'Valle de Bravo',
  },
  {
    code: '15111',
    departmentCode: '15',
    name: 'Villa de Allende',
  },
  {
    code: '15112',
    departmentCode: '15',
    name: 'Villa del Carbón',
  },
  {
    code: '15113',
    departmentCode: '15',
    name: 'Villa Guerrero',
  },
  {
    code: '15114',
    departmentCode: '15',
    name: 'Villa Victoria',
  },
  {
    code: '15115',
    departmentCode: '15',
    name: 'Xonacatlán',
  },
  {
    code: '15116',
    departmentCode: '15',
    name: 'Zacazonapan',
  },
  {
    code: '15117',
    departmentCode: '15',
    name: 'Zacualpan',
  },
  {
    code: '15118',
    departmentCode: '15',
    name: 'Zinacantepec',
  },
  {
    code: '15119',
    departmentCode: '15',
    name: 'Zumpahuacán',
  },
  {
    code: '15120',
    departmentCode: '15',
    name: 'Zumpango',
  },
  {
    code: '15121',
    departmentCode: '15',
    name: 'Cuautitlán Izcalli',
  },
  {
    code: '15122',
    departmentCode: '15',
    name: 'Valle de Chalco Solidaridad',
  },
  {
    code: '15123',
    departmentCode: '15',
    name: 'Luvianos',
  },
  {
    code: '15124',
    departmentCode: '15',
    name: 'San José del Rincón',
  },
  {
    code: '15125',
    departmentCode: '15',
    name: 'Tonanitla',
  },
  {
    code: '16001',
    departmentCode: '16',
    name: 'Acuitzio',
  },
  {
    code: '16002',
    departmentCode: '16',
    name: 'Aguililla',
  },
  {
    code: '16003',
    departmentCode: '16',
    name: 'Álvaro Obregón',
  },
  {
    code: '16004',
    departmentCode: '16',
    name: 'Angamacutiro',
  },
  {
    code: '16005',
    departmentCode: '16',
    name: 'Angangueo',
  },
  {
    code: '16006',
    departmentCode: '16',
    name: 'Apatzingán',
  },
  {
    code: '16007',
    departmentCode: '16',
    name: 'Aporo',
  },
  {
    code: '16008',
    departmentCode: '16',
    name: 'Aquila',
  },
  {
    code: '16009',
    departmentCode: '16',
    name: 'Ario',
  },
  {
    code: '16010',
    departmentCode: '16',
    name: 'Arteaga',
  },
  {
    code: '16011',
    departmentCode: '16',
    name: 'Briseñas',
  },
  {
    code: '16012',
    departmentCode: '16',
    name: 'Buenavista',
  },
  {
    code: '16013',
    departmentCode: '16',
    name: 'Carácuaro',
  },
  {
    code: '16014',
    departmentCode: '16',
    name: 'Coahuayana',
  },
  {
    code: '16015',
    departmentCode: '16',
    name: 'Coalcomán de Vázquez Pallares',
  },
  {
    code: '16016',
    departmentCode: '16',
    name: 'Coeneo',
  },
  {
    code: '16017',
    departmentCode: '16',
    name: 'Contepec',
  },
  {
    code: '16018',
    departmentCode: '16',
    name: 'Copándaro',
  },
  {
    code: '16019',
    departmentCode: '16',
    name: 'Cotija',
  },
  {
    code: '16020',
    departmentCode: '16',
    name: 'Cuitzeo',
  },
  {
    code: '16021',
    departmentCode: '16',
    name: 'Charapan',
  },
  {
    code: '16022',
    departmentCode: '16',
    name: 'Charo',
  },
  {
    code: '16023',
    departmentCode: '16',
    name: 'Chavinda',
  },
  {
    code: '16024',
    departmentCode: '16',
    name: 'Cherán',
  },
  {
    code: '16025',
    departmentCode: '16',
    name: 'Chilchota',
  },
  {
    code: '16026',
    departmentCode: '16',
    name: 'Chinicuila',
  },
  {
    code: '16027',
    departmentCode: '16',
    name: 'Chucándiro',
  },
  {
    code: '16028',
    departmentCode: '16',
    name: 'Churintzio',
  },
  {
    code: '16029',
    departmentCode: '16',
    name: 'Churumuco',
  },
  {
    code: '16030',
    departmentCode: '16',
    name: 'Ecuandureo',
  },
  {
    code: '16031',
    departmentCode: '16',
    name: 'Epitacio Huerta',
  },
  {
    code: '16032',
    departmentCode: '16',
    name: 'Erongarícuaro',
  },
  {
    code: '16033',
    departmentCode: '16',
    name: 'Gabriel Zamora',
  },
  {
    code: '16034',
    departmentCode: '16',
    name: 'Hidalgo',
  },
  {
    code: '16035',
    departmentCode: '16',
    name: 'La Huacana',
  },
  {
    code: '16036',
    departmentCode: '16',
    name: 'Huandacareo',
  },
  {
    code: '16037',
    departmentCode: '16',
    name: 'Huaniqueo',
  },
  {
    code: '16038',
    departmentCode: '16',
    name: 'Huetamo',
  },
  {
    code: '16039',
    departmentCode: '16',
    name: 'Huiramba',
  },
  {
    code: '16040',
    departmentCode: '16',
    name: 'Indaparapeo',
  },
  {
    code: '16041',
    departmentCode: '16',
    name: 'Irimbo',
  },
  {
    code: '16042',
    departmentCode: '16',
    name: 'Ixtlán',
  },
  {
    code: '16043',
    departmentCode: '16',
    name: 'Jacona',
  },
  {
    code: '16044',
    departmentCode: '16',
    name: 'Jiménez',
  },
  {
    code: '16045',
    departmentCode: '16',
    name: 'Jiquilpan',
  },
  {
    code: '16046',
    departmentCode: '16',
    name: 'Juárez',
  },
  {
    code: '16047',
    departmentCode: '16',
    name: 'Jungapeo',
  },
  {
    code: '16048',
    departmentCode: '16',
    name: 'Lagunillas',
  },
  {
    code: '16049',
    departmentCode: '16',
    name: 'Madero',
  },
  {
    code: '16050',
    departmentCode: '16',
    name: 'Maravatío',
  },
  {
    code: '16051',
    departmentCode: '16',
    name: 'Marcos Castellanos',
  },
  {
    code: '16052',
    departmentCode: '16',
    name: 'Lázaro Cárdenas',
  },
  {
    code: '16053',
    departmentCode: '16',
    name: 'Morelia',
  },
  {
    code: '16054',
    departmentCode: '16',
    name: 'Morelos',
  },
  {
    code: '16055',
    departmentCode: '16',
    name: 'Múgica',
  },
  {
    code: '16056',
    departmentCode: '16',
    name: 'Nahuatzen',
  },
  {
    code: '16057',
    departmentCode: '16',
    name: 'Nocupétaro',
  },
  {
    code: '16058',
    departmentCode: '16',
    name: 'Nuevo Parangaricutiro',
  },
  {
    code: '16059',
    departmentCode: '16',
    name: 'Nuevo Urecho',
  },
  {
    code: '16060',
    departmentCode: '16',
    name: 'Numarán',
  },
  {
    code: '16061',
    departmentCode: '16',
    name: 'Ocampo',
  },
  {
    code: '16062',
    departmentCode: '16',
    name: 'Pajacuarán',
  },
  {
    code: '16063',
    departmentCode: '16',
    name: 'Panindícuaro',
  },
  {
    code: '16064',
    departmentCode: '16',
    name: 'Parácuaro',
  },
  {
    code: '16065',
    departmentCode: '16',
    name: 'Paracho',
  },
  {
    code: '16066',
    departmentCode: '16',
    name: 'Pátzcuaro',
  },
  {
    code: '16067',
    departmentCode: '16',
    name: 'Penjamillo',
  },
  {
    code: '16068',
    departmentCode: '16',
    name: 'Peribán',
  },
  {
    code: '16069',
    departmentCode: '16',
    name: 'La Piedad',
  },
  {
    code: '16070',
    departmentCode: '16',
    name: 'Purépero',
  },
  {
    code: '16071',
    departmentCode: '16',
    name: 'Puruándiro',
  },
  {
    code: '16072',
    departmentCode: '16',
    name: 'Queréndaro',
  },
  {
    code: '16073',
    departmentCode: '16',
    name: 'Quiroga',
  },
  {
    code: '16074',
    departmentCode: '16',
    name: 'Cojumatlán de Régules',
  },
  {
    code: '16075',
    departmentCode: '16',
    name: 'Los Reyes',
  },
  {
    code: '16076',
    departmentCode: '16',
    name: 'Sahuayo',
  },
  {
    code: '16077',
    departmentCode: '16',
    name: 'San Lucas',
  },
  {
    code: '16078',
    departmentCode: '16',
    name: 'Santa Ana Maya',
  },
  {
    code: '16079',
    departmentCode: '16',
    name: 'Salvador Escalante',
  },
  {
    code: '16080',
    departmentCode: '16',
    name: 'Senguio',
  },
  {
    code: '16081',
    departmentCode: '16',
    name: 'Susupuato',
  },
  {
    code: '16082',
    departmentCode: '16',
    name: 'Tacámbaro',
  },
  {
    code: '16083',
    departmentCode: '16',
    name: 'Tancítaro',
  },
  {
    code: '16084',
    departmentCode: '16',
    name: 'Tangamandapio',
  },
  {
    code: '16085',
    departmentCode: '16',
    name: 'Tangancícuaro',
  },
  {
    code: '16086',
    departmentCode: '16',
    name: 'Tanhuato',
  },
  {
    code: '16087',
    departmentCode: '16',
    name: 'Taretan',
  },
  {
    code: '16088',
    departmentCode: '16',
    name: 'Tarímbaro',
  },
  {
    code: '16089',
    departmentCode: '16',
    name: 'Tepalcatepec',
  },
  {
    code: '16090',
    departmentCode: '16',
    name: 'Tingambato',
  },
  {
    code: '16091',
    departmentCode: '16',
    name: 'Tingüindín',
  },
  {
    code: '16092',
    departmentCode: '16',
    name: 'Tiquicheo de Nicolás Romero',
  },
  {
    code: '16093',
    departmentCode: '16',
    name: 'Tlalpujahua',
  },
  {
    code: '16094',
    departmentCode: '16',
    name: 'Tlazazalca',
  },
  {
    code: '16095',
    departmentCode: '16',
    name: 'Tocumbo',
  },
  {
    code: '16096',
    departmentCode: '16',
    name: 'Tumbiscatío',
  },
  {
    code: '16097',
    departmentCode: '16',
    name: 'Turicato',
  },
  {
    code: '16098',
    departmentCode: '16',
    name: 'Tuxpan',
  },
  {
    code: '16099',
    departmentCode: '16',
    name: 'Tuzantla',
  },
  {
    code: '16100',
    departmentCode: '16',
    name: 'Tzintzuntzan',
  },
  {
    code: '16101',
    departmentCode: '16',
    name: 'Tzitzio',
  },
  {
    code: '16102',
    departmentCode: '16',
    name: 'Uruapan',
  },
  {
    code: '16103',
    departmentCode: '16',
    name: 'Venustiano Carranza',
  },
  {
    code: '16104',
    departmentCode: '16',
    name: 'Villamar',
  },
  {
    code: '16105',
    departmentCode: '16',
    name: 'Vista Hermosa',
  },
  {
    code: '16106',
    departmentCode: '16',
    name: 'Yurécuaro',
  },
  {
    code: '16107',
    departmentCode: '16',
    name: 'Zacapu',
  },
  {
    code: '16108',
    departmentCode: '16',
    name: 'Zamora',
  },
  {
    code: '16109',
    departmentCode: '16',
    name: 'Zináparo',
  },
  {
    code: '16110',
    departmentCode: '16',
    name: 'Zinapécuaro',
  },
  {
    code: '16111',
    departmentCode: '16',
    name: 'Ziracuaretiro',
  },
  {
    code: '16112',
    departmentCode: '16',
    name: 'Zitácuaro',
  },
  {
    code: '16113',
    departmentCode: '16',
    name: 'José Sixto Verduzco',
  },
  {
    code: '17001',
    departmentCode: '17',
    name: 'Amacuzac',
  },
  {
    code: '17002',
    departmentCode: '17',
    name: 'Atlatlahucan',
  },
  {
    code: '17003',
    departmentCode: '17',
    name: 'Axochiapan',
  },
  {
    code: '17004',
    departmentCode: '17',
    name: 'Ayala',
  },
  {
    code: '17005',
    departmentCode: '17',
    name: 'Coatlán del Río',
  },
  {
    code: '17006',
    departmentCode: '17',
    name: 'Cuautla',
  },
  {
    code: '17007',
    departmentCode: '17',
    name: 'Cuernavaca',
  },
  {
    code: '17008',
    departmentCode: '17',
    name: 'Emiliano Zapata',
  },
  {
    code: '17009',
    departmentCode: '17',
    name: 'Huitzilac',
  },
  {
    code: '17010',
    departmentCode: '17',
    name: 'Jantetelco',
  },
  {
    code: '17011',
    departmentCode: '17',
    name: 'Jiutepec',
  },
  {
    code: '17012',
    departmentCode: '17',
    name: 'Jojutla',
  },
  {
    code: '17013',
    departmentCode: '17',
    name: 'Jonacatepec de Leandro Valle',
  },
  {
    code: '17014',
    departmentCode: '17',
    name: 'Mazatepec',
  },
  {
    code: '17015',
    departmentCode: '17',
    name: 'Miacatlán',
  },
  {
    code: '17016',
    departmentCode: '17',
    name: 'Ocuituco',
  },
  {
    code: '17017',
    departmentCode: '17',
    name: 'Puente de Ixtla',
  },
  {
    code: '17018',
    departmentCode: '17',
    name: 'Temixco',
  },
  {
    code: '17019',
    departmentCode: '17',
    name: 'Tepalcingo',
  },
  {
    code: '17020',
    departmentCode: '17',
    name: 'Tepoztlán',
  },
  {
    code: '17021',
    departmentCode: '17',
    name: 'Tetecala',
  },
  {
    code: '17022',
    departmentCode: '17',
    name: 'Tetela del Volcán',
  },
  {
    code: '17023',
    departmentCode: '17',
    name: 'Tlalnepantla',
  },
  {
    code: '17024',
    departmentCode: '17',
    name: 'Tlaltizapán de Zapata',
  },
  {
    code: '17025',
    departmentCode: '17',
    name: 'Tlaquiltenango',
  },
  {
    code: '17026',
    departmentCode: '17',
    name: 'Tlayacapan',
  },
  {
    code: '17027',
    departmentCode: '17',
    name: 'Totolapan',
  },
  {
    code: '17028',
    departmentCode: '17',
    name: 'Xochitepec',
  },
  {
    code: '17029',
    departmentCode: '17',
    name: 'Yautepec',
  },
  {
    code: '17030',
    departmentCode: '17',
    name: 'Yecapixtla',
  },
  {
    code: '17031',
    departmentCode: '17',
    name: 'Zacatepec',
  },
  {
    code: '17032',
    departmentCode: '17',
    name: 'Zacualpan de Amilpas',
  },
  {
    code: '17033',
    departmentCode: '17',
    name: 'Temoac',
  },
  {
    code: '17034',
    departmentCode: '17',
    name: 'Coatetelco',
  },
  {
    code: '17035',
    departmentCode: '17',
    name: 'Xoxocotla',
  },
  {
    code: '17036',
    departmentCode: '17',
    name: 'Hueyapan',
  },
  {
    code: '18001',
    departmentCode: '18',
    name: 'Acaponeta',
  },
  {
    code: '18002',
    departmentCode: '18',
    name: 'Ahuacatlán',
  },
  {
    code: '18003',
    departmentCode: '18',
    name: 'Amatlán de Cañas',
  },
  {
    code: '18004',
    departmentCode: '18',
    name: 'Compostela',
  },
  {
    code: '18005',
    departmentCode: '18',
    name: 'Huajicori',
  },
  {
    code: '18006',
    departmentCode: '18',
    name: 'Ixtlán del Río',
  },
  {
    code: '18007',
    departmentCode: '18',
    name: 'Jala',
  },
  {
    code: '18008',
    departmentCode: '18',
    name: 'Xalisco',
  },
  {
    code: '18009',
    departmentCode: '18',
    name: 'Del Nayar',
  },
  {
    code: '18010',
    departmentCode: '18',
    name: 'Rosamorada',
  },
  {
    code: '18011',
    departmentCode: '18',
    name: 'Ruíz',
  },
  {
    code: '18012',
    departmentCode: '18',
    name: 'San Blas',
  },
  {
    code: '18013',
    departmentCode: '18',
    name: 'San Pedro Lagunillas',
  },
  {
    code: '18014',
    departmentCode: '18',
    name: 'Santa María del Oro',
  },
  {
    code: '18015',
    departmentCode: '18',
    name: 'Santiago Ixcuintla',
  },
  {
    code: '18016',
    departmentCode: '18',
    name: 'Tecuala',
  },
  {
    code: '18017',
    departmentCode: '18',
    name: 'Tepic',
  },
  {
    code: '18018',
    departmentCode: '18',
    name: 'Tuxpan',
  },
  {
    code: '18019',
    departmentCode: '18',
    name: 'La Yesca',
  },
  {
    code: '18020',
    departmentCode: '18',
    name: 'Bahía de Banderas',
  },
  {
    code: '19001',
    departmentCode: '19',
    name: 'Abasolo',
  },
  {
    code: '19002',
    departmentCode: '19',
    name: 'Agualeguas',
  },
  {
    code: '19003',
    departmentCode: '19',
    name: 'Los Aldamas',
  },
  {
    code: '19004',
    departmentCode: '19',
    name: 'Allende',
  },
  {
    code: '19005',
    departmentCode: '19',
    name: 'Anáhuac',
  },
  {
    code: '19006',
    departmentCode: '19',
    name: 'Apodaca',
  },
  {
    code: '19007',
    departmentCode: '19',
    name: 'Aramberri',
  },
  {
    code: '19008',
    departmentCode: '19',
    name: 'Bustamante',
  },
  {
    code: '19009',
    departmentCode: '19',
    name: 'Cadereyta Jiménez',
  },
  {
    code: '19010',
    departmentCode: '19',
    name: 'El Carmen',
  },
  {
    code: '19011',
    departmentCode: '19',
    name: 'Cerralvo',
  },
  {
    code: '19012',
    departmentCode: '19',
    name: 'Ciénega de Flores',
  },
  {
    code: '19013',
    departmentCode: '19',
    name: 'China',
  },
  {
    code: '19014',
    departmentCode: '19',
    name: 'Doctor Arroyo',
  },
  {
    code: '19015',
    departmentCode: '19',
    name: 'Doctor Coss',
  },
  {
    code: '19016',
    departmentCode: '19',
    name: 'Doctor González',
  },
  {
    code: '19017',
    departmentCode: '19',
    name: 'Galeana',
  },
  {
    code: '19018',
    departmentCode: '19',
    name: 'García',
  },
  {
    code: '19019',
    departmentCode: '19',
    name: 'San Pedro Garza García',
  },
  {
    code: '19020',
    departmentCode: '19',
    name: 'General Bravo',
  },
  {
    code: '19021',
    departmentCode: '19',
    name: 'General Escobedo',
  },
  {
    code: '19022',
    departmentCode: '19',
    name: 'General Terán',
  },
  {
    code: '19023',
    departmentCode: '19',
    name: 'General Treviño',
  },
  {
    code: '19024',
    departmentCode: '19',
    name: 'General Zaragoza',
  },
  {
    code: '19025',
    departmentCode: '19',
    name: 'General Zuazua',
  },
  {
    code: '19026',
    departmentCode: '19',
    name: 'Guadalupe',
  },
  {
    code: '19027',
    departmentCode: '19',
    name: 'Los Herreras',
  },
  {
    code: '19028',
    departmentCode: '19',
    name: 'Higueras',
  },
  {
    code: '19029',
    departmentCode: '19',
    name: 'Hualahuises',
  },
  {
    code: '19030',
    departmentCode: '19',
    name: 'Iturbide',
  },
  {
    code: '19031',
    departmentCode: '19',
    name: 'Juárez',
  },
  {
    code: '19032',
    departmentCode: '19',
    name: 'Lampazos de Naranjo',
  },
  {
    code: '19033',
    departmentCode: '19',
    name: 'Linares',
  },
  {
    code: '19034',
    departmentCode: '19',
    name: 'Marín',
  },
  {
    code: '19035',
    departmentCode: '19',
    name: 'Melchor Ocampo',
  },
  {
    code: '19036',
    departmentCode: '19',
    name: 'Mier y Noriega',
  },
  {
    code: '19037',
    departmentCode: '19',
    name: 'Mina',
  },
  {
    code: '19038',
    departmentCode: '19',
    name: 'Montemorelos',
  },
  {
    code: '19039',
    departmentCode: '19',
    name: 'Monterrey',
  },
  {
    code: '19040',
    departmentCode: '19',
    name: 'Parás',
  },
  {
    code: '19041',
    departmentCode: '19',
    name: 'Pesquería',
  },
  {
    code: '19042',
    departmentCode: '19',
    name: 'Los Ramones',
  },
  {
    code: '19043',
    departmentCode: '19',
    name: 'Rayones',
  },
  {
    code: '19044',
    departmentCode: '19',
    name: 'Sabinas Hidalgo',
  },
  {
    code: '19045',
    departmentCode: '19',
    name: 'Salinas Victoria',
  },
  {
    code: '19046',
    departmentCode: '19',
    name: 'San Nicolás de los Garza',
  },
  {
    code: '19047',
    departmentCode: '19',
    name: 'Hidalgo',
  },
  {
    code: '19048',
    departmentCode: '19',
    name: 'Santa Catarina',
  },
  {
    code: '19049',
    departmentCode: '19',
    name: 'Santiago',
  },
  {
    code: '19050',
    departmentCode: '19',
    name: 'Vallecillo',
  },
  {
    code: '19051',
    departmentCode: '19',
    name: 'Villaldama',
  },
  {
    code: '20001',
    departmentCode: '20',
    name: 'Abejones',
  },
  {
    code: '20002',
    departmentCode: '20',
    name: 'Acatlán de Pérez Figueroa',
  },
  {
    code: '20003',
    departmentCode: '20',
    name: 'Asunción Cacalotepec',
  },
  {
    code: '20004',
    departmentCode: '20',
    name: 'Asunción Cuyotepeji',
  },
  {
    code: '20005',
    departmentCode: '20',
    name: 'Asunción Ixtaltepec',
  },
  {
    code: '20006',
    departmentCode: '20',
    name: 'Asunción Nochixtlán',
  },
  {
    code: '20007',
    departmentCode: '20',
    name: 'Asunción Ocotlán',
  },
  {
    code: '20008',
    departmentCode: '20',
    name: 'Asunción Tlacolulita',
  },
  {
    code: '20009',
    departmentCode: '20',
    name: 'Ayotzintepec',
  },
  {
    code: '20010',
    departmentCode: '20',
    name: 'El Barrio de la Soledad',
  },
  {
    code: '20011',
    departmentCode: '20',
    name: 'Calihualá',
  },
  {
    code: '20012',
    departmentCode: '20',
    name: 'Candelaria Loxicha',
  },
  {
    code: '20013',
    departmentCode: '20',
    name: 'Ciénega de Zimatlán',
  },
  {
    code: '20014',
    departmentCode: '20',
    name: 'Ciudad Ixtepec',
  },
  {
    code: '20015',
    departmentCode: '20',
    name: 'Coatecas Altas',
  },
  {
    code: '20016',
    departmentCode: '20',
    name: 'Coicoyán de las Flores',
  },
  {
    code: '20017',
    departmentCode: '20',
    name: 'La Compañía',
  },
  {
    code: '20018',
    departmentCode: '20',
    name: 'Concepción Buenavista',
  },
  {
    code: '20019',
    departmentCode: '20',
    name: 'Concepción Pápalo',
  },
  {
    code: '20020',
    departmentCode: '20',
    name: 'Constancia del Rosario',
  },
  {
    code: '20021',
    departmentCode: '20',
    name: 'Cosolapa',
  },
  {
    code: '20022',
    departmentCode: '20',
    name: 'Cosoltepec',
  },
  {
    code: '20023',
    departmentCode: '20',
    name: 'Cuilápam de Guerrero',
  },
  {
    code: '20024',
    departmentCode: '20',
    name: 'Cuyamecalco Villa de Zaragoza',
  },
  {
    code: '20025',
    departmentCode: '20',
    name: 'Chahuites',
  },
  {
    code: '20026',
    departmentCode: '20',
    name: 'Chalcatongo de Hidalgo',
  },
  {
    code: '20027',
    departmentCode: '20',
    name: 'Chiquihuitlán de Benito Juárez',
  },
  {
    code: '20028',
    departmentCode: '20',
    name: 'Heroica Ciudad de Ejutla de Crespo',
  },
  {
    code: '20029',
    departmentCode: '20',
    name: 'Eloxochitlán de Flores Magón',
  },
  {
    code: '20030',
    departmentCode: '20',
    name: 'El Espinal',
  },
  {
    code: '20031',
    departmentCode: '20',
    name: 'Tamazulápam del Espíritu Santo',
  },
  {
    code: '20032',
    departmentCode: '20',
    name: 'Fresnillo de Trujano',
  },
  {
    code: '20033',
    departmentCode: '20',
    name: 'Guadalupe Etla',
  },
  {
    code: '20034',
    departmentCode: '20',
    name: 'Guadalupe de Ramírez',
  },
  {
    code: '20035',
    departmentCode: '20',
    name: 'Guelatao de Juárez',
  },
  {
    code: '20036',
    departmentCode: '20',
    name: 'Guevea de Humboldt',
  },
  {
    code: '20037',
    departmentCode: '20',
    name: 'Mesones Hidalgo',
  },
  {
    code: '20038',
    departmentCode: '20',
    name: 'Villa Hidalgo Yalálag',
  },
  {
    code: '20039',
    departmentCode: '20',
    name: 'Heroica Ciudad de Huajuapan de León',
  },
  {
    code: '20040',
    departmentCode: '20',
    name: 'Huautepec',
  },
  {
    code: '20041',
    departmentCode: '20',
    name: 'Huautla de Jiménez',
  },
  {
    code: '20042',
    departmentCode: '20',
    name: 'Ixtlán de Juárez',
  },
  {
    code: '20043',
    departmentCode: '20',
    name: 'Heroica Ciudad de Juchitán de Zaragoza',
  },
  {
    code: '20044',
    departmentCode: '20',
    name: 'Loma Bonita',
  },
  {
    code: '20045',
    departmentCode: '20',
    name: 'Magdalena Apasco',
  },
  {
    code: '20046',
    departmentCode: '20',
    name: 'Magdalena Jaltepec',
  },
  {
    code: '20047',
    departmentCode: '20',
    name: 'Santa Magdalena Jicotlán',
  },
  {
    code: '20048',
    departmentCode: '20',
    name: 'Magdalena Mixtepec',
  },
  {
    code: '20049',
    departmentCode: '20',
    name: 'Magdalena Ocotlán',
  },
  {
    code: '20050',
    departmentCode: '20',
    name: 'Magdalena Peñasco',
  },
  {
    code: '20051',
    departmentCode: '20',
    name: 'Magdalena Teitipac',
  },
  {
    code: '20052',
    departmentCode: '20',
    name: 'Magdalena Tequisistlán',
  },
  {
    code: '20053',
    departmentCode: '20',
    name: 'Magdalena Tlacotepec',
  },
  {
    code: '20054',
    departmentCode: '20',
    name: 'Magdalena Zahuatlán',
  },
  {
    code: '20055',
    departmentCode: '20',
    name: 'Mariscala de Juárez',
  },
  {
    code: '20056',
    departmentCode: '20',
    name: 'Mártires de Tacubaya',
  },
  {
    code: '20057',
    departmentCode: '20',
    name: 'Matías Romero Avendaño',
  },
  {
    code: '20058',
    departmentCode: '20',
    name: 'Mazatlán Villa de Flores',
  },
  {
    code: '20059',
    departmentCode: '20',
    name: 'Miahuatlán de Porfirio Díaz',
  },
  {
    code: '20060',
    departmentCode: '20',
    name: 'Mixistlán de la Reforma',
  },
  {
    code: '20061',
    departmentCode: '20',
    name: 'Monjas',
  },
  {
    code: '20062',
    departmentCode: '20',
    name: 'Natividad',
  },
  {
    code: '20063',
    departmentCode: '20',
    name: 'Nazareno Etla',
  },
  {
    code: '20064',
    departmentCode: '20',
    name: 'Nejapa de Madero',
  },
  {
    code: '20065',
    departmentCode: '20',
    name: 'Ixpantepec Nieves',
  },
  {
    code: '20066',
    departmentCode: '20',
    name: 'Santiago Niltepec',
  },
  {
    code: '20067',
    departmentCode: '20',
    name: 'Oaxaca de Juárez',
  },
  {
    code: '20068',
    departmentCode: '20',
    name: 'Ocotlán de Morelos',
  },
  {
    code: '20069',
    departmentCode: '20',
    name: 'La Pe',
  },
  {
    code: '20070',
    departmentCode: '20',
    name: 'Pinotepa de Don Luis',
  },
  {
    code: '20071',
    departmentCode: '20',
    name: 'Pluma Hidalgo',
  },
  {
    code: '20072',
    departmentCode: '20',
    name: 'San José del Progreso',
  },
  {
    code: '20073',
    departmentCode: '20',
    name: 'Putla Villa de Guerrero',
  },
  {
    code: '20074',
    departmentCode: '20',
    name: 'Santa Catarina Quioquitani',
  },
  {
    code: '20075',
    departmentCode: '20',
    name: 'Reforma de Pineda',
  },
  {
    code: '20076',
    departmentCode: '20',
    name: 'La Reforma',
  },
  {
    code: '20077',
    departmentCode: '20',
    name: 'Reyes Etla',
  },
  {
    code: '20078',
    departmentCode: '20',
    name: 'Rojas de Cuauhtémoc',
  },
  {
    code: '20079',
    departmentCode: '20',
    name: 'Salina Cruz',
  },
  {
    code: '20080',
    departmentCode: '20',
    name: 'San Agustín Amatengo',
  },
  {
    code: '20081',
    departmentCode: '20',
    name: 'San Agustín Atenango',
  },
  {
    code: '20082',
    departmentCode: '20',
    name: 'San Agustín Chayuco',
  },
  {
    code: '20083',
    departmentCode: '20',
    name: 'San Agustín de las Juntas',
  },
  {
    code: '20084',
    departmentCode: '20',
    name: 'San Agustín Etla',
  },
  {
    code: '20085',
    departmentCode: '20',
    name: 'San Agustín Loxicha',
  },
  {
    code: '20086',
    departmentCode: '20',
    name: 'San Agustín Tlacotepec',
  },
  {
    code: '20087',
    departmentCode: '20',
    name: 'San Agustín Yatareni',
  },
  {
    code: '20088',
    departmentCode: '20',
    name: 'San Andrés Cabecera Nueva',
  },
  {
    code: '20089',
    departmentCode: '20',
    name: 'San Andrés Dinicuiti',
  },
  {
    code: '20090',
    departmentCode: '20',
    name: 'San Andrés Huaxpaltepec',
  },
  {
    code: '20091',
    departmentCode: '20',
    name: 'San Andrés Huayápam',
  },
  {
    code: '20092',
    departmentCode: '20',
    name: 'San Andrés Ixtlahuaca',
  },
  {
    code: '20093',
    departmentCode: '20',
    name: 'San Andrés Lagunas',
  },
  {
    code: '20094',
    departmentCode: '20',
    name: 'San Andrés Nuxiño',
  },
  {
    code: '20095',
    departmentCode: '20',
    name: 'San Andrés Paxtlán',
  },
  {
    code: '20096',
    departmentCode: '20',
    name: 'San Andrés Sinaxtla',
  },
  {
    code: '20097',
    departmentCode: '20',
    name: 'San Andrés Solaga',
  },
  {
    code: '20098',
    departmentCode: '20',
    name: 'San Andrés Teotilálpam',
  },
  {
    code: '20099',
    departmentCode: '20',
    name: 'San Andrés Tepetlapa',
  },
  {
    code: '20100',
    departmentCode: '20',
    name: 'San Andrés Yaá',
  },
  {
    code: '20101',
    departmentCode: '20',
    name: 'San Andrés Zabache',
  },
  {
    code: '20102',
    departmentCode: '20',
    name: 'San Andrés Zautla',
  },
  {
    code: '20103',
    departmentCode: '20',
    name: 'San Antonino Castillo Velasco',
  },
  {
    code: '20104',
    departmentCode: '20',
    name: 'San Antonino el Alto',
  },
  {
    code: '20105',
    departmentCode: '20',
    name: 'San Antonino Monte Verde',
  },
  {
    code: '20106',
    departmentCode: '20',
    name: 'San Antonio Acutla',
  },
  {
    code: '20107',
    departmentCode: '20',
    name: 'San Antonio de la Cal',
  },
  {
    code: '20108',
    departmentCode: '20',
    name: 'San Antonio Huitepec',
  },
  {
    code: '20109',
    departmentCode: '20',
    name: 'San Antonio Nanahuatípam',
  },
  {
    code: '20110',
    departmentCode: '20',
    name: 'San Antonio Sinicahua',
  },
  {
    code: '20111',
    departmentCode: '20',
    name: 'San Antonio Tepetlapa',
  },
  {
    code: '20112',
    departmentCode: '20',
    name: 'San Baltazar Chichicápam',
  },
  {
    code: '20113',
    departmentCode: '20',
    name: 'San Baltazar Loxicha',
  },
  {
    code: '20114',
    departmentCode: '20',
    name: 'San Baltazar Yatzachi el Bajo',
  },
  {
    code: '20115',
    departmentCode: '20',
    name: 'San Bartolo Coyotepec',
  },
  {
    code: '20116',
    departmentCode: '20',
    name: 'San Bartolomé Ayautla',
  },
  {
    code: '20117',
    departmentCode: '20',
    name: 'San Bartolomé Loxicha',
  },
  {
    code: '20118',
    departmentCode: '20',
    name: 'San Bartolomé Quialana',
  },
  {
    code: '20119',
    departmentCode: '20',
    name: 'San Bartolomé Yucuañe',
  },
  {
    code: '20120',
    departmentCode: '20',
    name: 'San Bartolomé Zoogocho',
  },
  {
    code: '20121',
    departmentCode: '20',
    name: 'San Bartolo Soyaltepec',
  },
  {
    code: '20122',
    departmentCode: '20',
    name: 'San Bartolo Yautepec',
  },
  {
    code: '20123',
    departmentCode: '20',
    name: 'San Bernardo Mixtepec',
  },
  {
    code: '20124',
    departmentCode: '20',
    name: 'Heroica Villa de San Blas Atempa',
  },
  {
    code: '20125',
    departmentCode: '20',
    name: 'San Carlos Yautepec',
  },
  {
    code: '20126',
    departmentCode: '20',
    name: 'San Cristóbal Amatlán',
  },
  {
    code: '20127',
    departmentCode: '20',
    name: 'San Cristóbal Amoltepec',
  },
  {
    code: '20128',
    departmentCode: '20',
    name: 'San Cristóbal Lachirioag',
  },
  {
    code: '20129',
    departmentCode: '20',
    name: 'San Cristóbal Suchixtlahuaca',
  },
  {
    code: '20130',
    departmentCode: '20',
    name: 'San Dionisio del Mar',
  },
  {
    code: '20131',
    departmentCode: '20',
    name: 'San Dionisio Ocotepec',
  },
  {
    code: '20132',
    departmentCode: '20',
    name: 'San Dionisio Ocotlán',
  },
  {
    code: '20133',
    departmentCode: '20',
    name: 'San Esteban Atatlahuca',
  },
  {
    code: '20134',
    departmentCode: '20',
    name: 'San Felipe Jalapa de Díaz',
  },
  {
    code: '20135',
    departmentCode: '20',
    name: 'San Felipe Tejalápam',
  },
  {
    code: '20136',
    departmentCode: '20',
    name: 'San Felipe Usila',
  },
  {
    code: '20137',
    departmentCode: '20',
    name: 'San Francisco Cahuacuá',
  },
  {
    code: '20138',
    departmentCode: '20',
    name: 'San Francisco Cajonos',
  },
  {
    code: '20139',
    departmentCode: '20',
    name: 'San Francisco Chapulapa',
  },
  {
    code: '20140',
    departmentCode: '20',
    name: 'San Francisco Chindúa',
  },
  {
    code: '20141',
    departmentCode: '20',
    name: 'San Francisco del Mar',
  },
  {
    code: '20142',
    departmentCode: '20',
    name: 'San Francisco Huehuetlán',
  },
  {
    code: '20143',
    departmentCode: '20',
    name: 'San Francisco Ixhuatán',
  },
  {
    code: '20144',
    departmentCode: '20',
    name: 'San Francisco Jaltepetongo',
  },
  {
    code: '20145',
    departmentCode: '20',
    name: 'San Francisco Lachigoló',
  },
  {
    code: '20146',
    departmentCode: '20',
    name: 'San Francisco Logueche',
  },
  {
    code: '20147',
    departmentCode: '20',
    name: 'San Francisco Nuxaño',
  },
  {
    code: '20148',
    departmentCode: '20',
    name: 'San Francisco Ozolotepec',
  },
  {
    code: '20149',
    departmentCode: '20',
    name: 'San Francisco Sola',
  },
  {
    code: '20150',
    departmentCode: '20',
    name: 'San Francisco Telixtlahuaca',
  },
  {
    code: '20151',
    departmentCode: '20',
    name: 'San Francisco Teopan',
  },
  {
    code: '20152',
    departmentCode: '20',
    name: 'San Francisco Tlapancingo',
  },
  {
    code: '20153',
    departmentCode: '20',
    name: 'San Gabriel Mixtepec',
  },
  {
    code: '20154',
    departmentCode: '20',
    name: 'San Ildefonso Amatlán',
  },
  {
    code: '20155',
    departmentCode: '20',
    name: 'San Ildefonso Sola',
  },
  {
    code: '20156',
    departmentCode: '20',
    name: 'San Ildefonso Villa Alta',
  },
  {
    code: '20157',
    departmentCode: '20',
    name: 'San Jacinto Amilpas',
  },
  {
    code: '20158',
    departmentCode: '20',
    name: 'San Jacinto Tlacotepec',
  },
  {
    code: '20159',
    departmentCode: '20',
    name: 'San Jerónimo Coatlán',
  },
  {
    code: '20160',
    departmentCode: '20',
    name: 'San Jerónimo Silacayoapilla',
  },
  {
    code: '20161',
    departmentCode: '20',
    name: 'San Jerónimo Sosola',
  },
  {
    code: '20162',
    departmentCode: '20',
    name: 'San Jerónimo Taviche',
  },
  {
    code: '20163',
    departmentCode: '20',
    name: 'San Jerónimo Tecóatl',
  },
  {
    code: '20164',
    departmentCode: '20',
    name: 'San Jorge Nuchita',
  },
  {
    code: '20165',
    departmentCode: '20',
    name: 'San José Ayuquila',
  },
  {
    code: '20166',
    departmentCode: '20',
    name: 'San José Chiltepec',
  },
  {
    code: '20167',
    departmentCode: '20',
    name: 'San José del Peñasco',
  },
  {
    code: '20168',
    departmentCode: '20',
    name: 'San José Estancia Grande',
  },
  {
    code: '20169',
    departmentCode: '20',
    name: 'San José Independencia',
  },
  {
    code: '20170',
    departmentCode: '20',
    name: 'San José Lachiguiri',
  },
  {
    code: '20171',
    departmentCode: '20',
    name: 'San José Tenango',
  },
  {
    code: '20172',
    departmentCode: '20',
    name: 'San Juan Achiutla',
  },
  {
    code: '20173',
    departmentCode: '20',
    name: 'San Juan Atepec',
  },
  {
    code: '20174',
    departmentCode: '20',
    name: 'Ánimas Trujano',
  },
  {
    code: '20175',
    departmentCode: '20',
    name: 'San Juan Bautista Atatlahuca',
  },
  {
    code: '20176',
    departmentCode: '20',
    name: 'San Juan Bautista Coixtlahuaca',
  },
  {
    code: '20177',
    departmentCode: '20',
    name: 'San Juan Bautista Cuicatlán',
  },
  {
    code: '20178',
    departmentCode: '20',
    name: 'San Juan Bautista Guelache',
  },
  {
    code: '20179',
    departmentCode: '20',
    name: 'San Juan Bautista Jayacatlán',
  },
  {
    code: '20180',
    departmentCode: '20',
    name: 'San Juan Bautista Lo de Soto',
  },
  {
    code: '20181',
    departmentCode: '20',
    name: 'San Juan Bautista Suchitepec',
  },
  {
    code: '20182',
    departmentCode: '20',
    name: 'San Juan Bautista Tlacoatzintepec',
  },
  {
    code: '20183',
    departmentCode: '20',
    name: 'San Juan Bautista Tlachichilco',
  },
  {
    code: '20184',
    departmentCode: '20',
    name: 'San Juan Bautista Tuxtepec',
  },
  {
    code: '20185',
    departmentCode: '20',
    name: 'San Juan Cacahuatepec',
  },
  {
    code: '20186',
    departmentCode: '20',
    name: 'San Juan Cieneguilla',
  },
  {
    code: '20187',
    departmentCode: '20',
    name: 'San Juan Coatzóspam',
  },
  {
    code: '20188',
    departmentCode: '20',
    name: 'San Juan Colorado',
  },
  {
    code: '20189',
    departmentCode: '20',
    name: 'San Juan Comaltepec',
  },
  {
    code: '20190',
    departmentCode: '20',
    name: 'San Juan Cotzocón',
  },
  {
    code: '20191',
    departmentCode: '20',
    name: 'San Juan Chicomezúchil',
  },
  {
    code: '20192',
    departmentCode: '20',
    name: 'San Juan Chilateca',
  },
  {
    code: '20193',
    departmentCode: '20',
    name: 'San Juan del Estado',
  },
  {
    code: '20194',
    departmentCode: '20',
    name: 'San Juan del Río',
  },
  {
    code: '20195',
    departmentCode: '20',
    name: 'San Juan Diuxi',
  },
  {
    code: '20196',
    departmentCode: '20',
    name: 'San Juan Evangelista Analco',
  },
  {
    code: '20197',
    departmentCode: '20',
    name: 'San Juan Guelavía',
  },
  {
    code: '20198',
    departmentCode: '20',
    name: 'San Juan Guichicovi',
  },
  {
    code: '20199',
    departmentCode: '20',
    name: 'San Juan Ihualtepec',
  },
  {
    code: '20200',
    departmentCode: '20',
    name: 'San Juan Juquila Mixes',
  },
  {
    code: '20201',
    departmentCode: '20',
    name: 'San Juan Juquila Vijanos',
  },
  {
    code: '20202',
    departmentCode: '20',
    name: 'San Juan Lachao',
  },
  {
    code: '20203',
    departmentCode: '20',
    name: 'San Juan Lachigalla',
  },
  {
    code: '20204',
    departmentCode: '20',
    name: 'San Juan Lajarcia',
  },
  {
    code: '20205',
    departmentCode: '20',
    name: 'San Juan Lalana',
  },
  {
    code: '20206',
    departmentCode: '20',
    name: 'San Juan de los Cués',
  },
  {
    code: '20207',
    departmentCode: '20',
    name: 'San Juan Mazatlán',
  },
  {
    code: '20208',
    departmentCode: '20',
    name: 'San Juan Mixtepec',
  },
  {
    code: '20209',
    departmentCode: '20',
    name: 'San Juan Mixtepec',
  },
  {
    code: '20210',
    departmentCode: '20',
    name: 'San Juan Ñumí',
  },
  {
    code: '20211',
    departmentCode: '20',
    name: 'San Juan Ozolotepec',
  },
  {
    code: '20212',
    departmentCode: '20',
    name: 'San Juan Petlapa',
  },
  {
    code: '20213',
    departmentCode: '20',
    name: 'San Juan Quiahije',
  },
  {
    code: '20214',
    departmentCode: '20',
    name: 'San Juan Quiotepec',
  },
  {
    code: '20215',
    departmentCode: '20',
    name: 'San Juan Sayultepec',
  },
  {
    code: '20216',
    departmentCode: '20',
    name: 'San Juan Tabaá',
  },
  {
    code: '20217',
    departmentCode: '20',
    name: 'San Juan Tamazola',
  },
  {
    code: '20218',
    departmentCode: '20',
    name: 'San Juan Teita',
  },
  {
    code: '20219',
    departmentCode: '20',
    name: 'San Juan Teitipac',
  },
  {
    code: '20220',
    departmentCode: '20',
    name: 'San Juan Tepeuxila',
  },
  {
    code: '20221',
    departmentCode: '20',
    name: 'San Juan Teposcolula',
  },
  {
    code: '20222',
    departmentCode: '20',
    name: 'San Juan Yaeé',
  },
  {
    code: '20223',
    departmentCode: '20',
    name: 'San Juan Yatzona',
  },
  {
    code: '20224',
    departmentCode: '20',
    name: 'San Juan Yucuita',
  },
  {
    code: '20225',
    departmentCode: '20',
    name: 'San Lorenzo',
  },
  {
    code: '20226',
    departmentCode: '20',
    name: 'San Lorenzo Albarradas',
  },
  {
    code: '20227',
    departmentCode: '20',
    name: 'San Lorenzo Cacaotepec',
  },
  {
    code: '20228',
    departmentCode: '20',
    name: 'San Lorenzo Cuaunecuiltitla',
  },
  {
    code: '20229',
    departmentCode: '20',
    name: 'San Lorenzo Texmelúcan',
  },
  {
    code: '20230',
    departmentCode: '20',
    name: 'San Lorenzo Victoria',
  },
  {
    code: '20231',
    departmentCode: '20',
    name: 'San Lucas Camotlán',
  },
  {
    code: '20232',
    departmentCode: '20',
    name: 'San Lucas Ojitlán',
  },
  {
    code: '20233',
    departmentCode: '20',
    name: 'San Lucas Quiaviní',
  },
  {
    code: '20234',
    departmentCode: '20',
    name: 'San Lucas Zoquiápam',
  },
  {
    code: '20235',
    departmentCode: '20',
    name: 'San Luis Amatlán',
  },
  {
    code: '20236',
    departmentCode: '20',
    name: 'San Marcial Ozolotepec',
  },
  {
    code: '20237',
    departmentCode: '20',
    name: 'San Marcos Arteaga',
  },
  {
    code: '20238',
    departmentCode: '20',
    name: 'Heroico San Martín de los Cansecos',
  },
  {
    code: '20239',
    departmentCode: '20',
    name: 'San Martín Huamelúlpam',
  },
  {
    code: '20240',
    departmentCode: '20',
    name: 'San Martín Itunyoso',
  },
  {
    code: '20241',
    departmentCode: '20',
    name: 'San Martín Lachilá',
  },
  {
    code: '20242',
    departmentCode: '20',
    name: 'San Martín Peras',
  },
  {
    code: '20243',
    departmentCode: '20',
    name: 'San Martín Tilcajete',
  },
  {
    code: '20244',
    departmentCode: '20',
    name: 'San Martín Toxpalan',
  },
  {
    code: '20245',
    departmentCode: '20',
    name: 'San Martín Zacatepec',
  },
  {
    code: '20246',
    departmentCode: '20',
    name: 'San Mateo Cajonos',
  },
  {
    code: '20247',
    departmentCode: '20',
    name: 'Capulálpam de Méndez',
  },
  {
    code: '20248',
    departmentCode: '20',
    name: 'San Mateo del Mar',
  },
  {
    code: '20249',
    departmentCode: '20',
    name: 'San Mateo Yoloxochitlán',
  },
  {
    code: '20250',
    departmentCode: '20',
    name: 'San Mateo Etlatongo',
  },
  {
    code: '20251',
    departmentCode: '20',
    name: 'San Mateo Nejápam',
  },
  {
    code: '20252',
    departmentCode: '20',
    name: 'San Mateo Peñasco',
  },
  {
    code: '20253',
    departmentCode: '20',
    name: 'San Mateo Piñas',
  },
  {
    code: '20254',
    departmentCode: '20',
    name: 'San Mateo Río Hondo',
  },
  {
    code: '20255',
    departmentCode: '20',
    name: 'San Mateo Sindihui',
  },
  {
    code: '20256',
    departmentCode: '20',
    name: 'San Mateo Tlapiltepec',
  },
  {
    code: '20257',
    departmentCode: '20',
    name: 'San Melchor Betaza',
  },
  {
    code: '20258',
    departmentCode: '20',
    name: 'San Miguel Achiutla',
  },
  {
    code: '20259',
    departmentCode: '20',
    name: 'San Miguel Ahuehuetitlán',
  },
  {
    code: '20260',
    departmentCode: '20',
    name: 'San Miguel Aloápam',
  },
  {
    code: '20261',
    departmentCode: '20',
    name: 'San Miguel Amatitlán',
  },
  {
    code: '20262',
    departmentCode: '20',
    name: 'San Miguel Amatlán',
  },
  {
    code: '20263',
    departmentCode: '20',
    name: 'San Miguel Coatlán',
  },
  {
    code: '20264',
    departmentCode: '20',
    name: 'San Miguel Chicahua',
  },
  {
    code: '20265',
    departmentCode: '20',
    name: 'San Miguel Chimalapa',
  },
  {
    code: '20266',
    departmentCode: '20',
    name: 'San Miguel del Puerto',
  },
  {
    code: '20267',
    departmentCode: '20',
    name: 'San Miguel del Río',
  },
  {
    code: '20268',
    departmentCode: '20',
    name: 'San Miguel Ejutla',
  },
  {
    code: '20269',
    departmentCode: '20',
    name: 'San Miguel el Grande',
  },
  {
    code: '20270',
    departmentCode: '20',
    name: 'San Miguel Huautla',
  },
  {
    code: '20271',
    departmentCode: '20',
    name: 'San Miguel Mixtepec',
  },
  {
    code: '20272',
    departmentCode: '20',
    name: 'San Miguel Panixtlahuaca',
  },
  {
    code: '20273',
    departmentCode: '20',
    name: 'San Miguel Peras',
  },
  {
    code: '20274',
    departmentCode: '20',
    name: 'San Miguel Piedras',
  },
  {
    code: '20275',
    departmentCode: '20',
    name: 'San Miguel Quetzaltepec',
  },
  {
    code: '20276',
    departmentCode: '20',
    name: 'San Miguel Santa Flor',
  },
  {
    code: '20277',
    departmentCode: '20',
    name: 'Villa Sola de Vega',
  },
  {
    code: '20278',
    departmentCode: '20',
    name: 'San Miguel Soyaltepec',
  },
  {
    code: '20279',
    departmentCode: '20',
    name: 'San Miguel Suchixtepec',
  },
  {
    code: '20280',
    departmentCode: '20',
    name: 'Villa Talea de Castro',
  },
  {
    code: '20281',
    departmentCode: '20',
    name: 'San Miguel Tecomatlán',
  },
  {
    code: '20282',
    departmentCode: '20',
    name: 'San Miguel Tenango',
  },
  {
    code: '20283',
    departmentCode: '20',
    name: 'San Miguel Tequixtepec',
  },
  {
    code: '20284',
    departmentCode: '20',
    name: 'San Miguel Tilquiápam',
  },
  {
    code: '20285',
    departmentCode: '20',
    name: 'San Miguel Tlacamama',
  },
  {
    code: '20286',
    departmentCode: '20',
    name: 'San Miguel Tlacotepec',
  },
  {
    code: '20287',
    departmentCode: '20',
    name: 'San Miguel Tulancingo',
  },
  {
    code: '20288',
    departmentCode: '20',
    name: 'San Miguel Yotao',
  },
  {
    code: '20289',
    departmentCode: '20',
    name: 'San Nicolás',
  },
  {
    code: '20290',
    departmentCode: '20',
    name: 'San Nicolás Hidalgo',
  },
  {
    code: '20291',
    departmentCode: '20',
    name: 'San Pablo Coatlán',
  },
  {
    code: '20292',
    departmentCode: '20',
    name: 'San Pablo Cuatro Venados',
  },
  {
    code: '20293',
    departmentCode: '20',
    name: 'San Pablo Etla',
  },
  {
    code: '20294',
    departmentCode: '20',
    name: 'San Pablo Huitzo',
  },
  {
    code: '20295',
    departmentCode: '20',
    name: 'San Pablo Huixtepec',
  },
  {
    code: '20296',
    departmentCode: '20',
    name: 'San Pablo Macuiltianguis',
  },
  {
    code: '20297',
    departmentCode: '20',
    name: 'San Pablo Tijaltepec',
  },
  {
    code: '20298',
    departmentCode: '20',
    name: 'San Pablo Villa de Mitla',
  },
  {
    code: '20299',
    departmentCode: '20',
    name: 'San Pablo Yaganiza',
  },
  {
    code: '20300',
    departmentCode: '20',
    name: 'San Pedro Amuzgos',
  },
  {
    code: '20301',
    departmentCode: '20',
    name: 'San Pedro Apóstol',
  },
  {
    code: '20302',
    departmentCode: '20',
    name: 'San Pedro Atoyac',
  },
  {
    code: '20303',
    departmentCode: '20',
    name: 'San Pedro Cajonos',
  },
  {
    code: '20304',
    departmentCode: '20',
    name: 'San Pedro Coxcaltepec Cántaros',
  },
  {
    code: '20305',
    departmentCode: '20',
    name: 'San Pedro Comitancillo',
  },
  {
    code: '20306',
    departmentCode: '20',
    name: 'San Pedro el Alto',
  },
  {
    code: '20307',
    departmentCode: '20',
    name: 'San Pedro Huamelula',
  },
  {
    code: '20308',
    departmentCode: '20',
    name: 'San Pedro Huilotepec',
  },
  {
    code: '20309',
    departmentCode: '20',
    name: 'San Pedro Ixcatlán',
  },
  {
    code: '20310',
    departmentCode: '20',
    name: 'San Pedro Ixtlahuaca',
  },
  {
    code: '20311',
    departmentCode: '20',
    name: 'San Pedro Jaltepetongo',
  },
  {
    code: '20312',
    departmentCode: '20',
    name: 'San Pedro Jicayán',
  },
  {
    code: '20313',
    departmentCode: '20',
    name: 'San Pedro Jocotipac',
  },
  {
    code: '20314',
    departmentCode: '20',
    name: 'San Pedro Juchatengo',
  },
  {
    code: '20315',
    departmentCode: '20',
    name: 'San Pedro Mártir',
  },
  {
    code: '20316',
    departmentCode: '20',
    name: 'San Pedro Mártir Quiechapa',
  },
  {
    code: '20317',
    departmentCode: '20',
    name: 'San Pedro Mártir Yucuxaco',
  },
  {
    code: '20318',
    departmentCode: '20',
    name: 'San Pedro Mixtepec',
  },
  {
    code: '20319',
    departmentCode: '20',
    name: 'San Pedro Mixtepec',
  },
  {
    code: '20320',
    departmentCode: '20',
    name: 'San Pedro Molinos',
  },
  {
    code: '20321',
    departmentCode: '20',
    name: 'San Pedro Nopala',
  },
  {
    code: '20322',
    departmentCode: '20',
    name: 'San Pedro Ocopetatillo',
  },
  {
    code: '20323',
    departmentCode: '20',
    name: 'San Pedro Ocotepec',
  },
  {
    code: '20324',
    departmentCode: '20',
    name: 'San Pedro Pochutla',
  },
  {
    code: '20325',
    departmentCode: '20',
    name: 'San Pedro Quiatoni',
  },
  {
    code: '20326',
    departmentCode: '20',
    name: 'San Pedro Sochiápam',
  },
  {
    code: '20327',
    departmentCode: '20',
    name: 'San Pedro Tapanatepec',
  },
  {
    code: '20328',
    departmentCode: '20',
    name: 'San Pedro Taviche',
  },
  {
    code: '20329',
    departmentCode: '20',
    name: 'San Pedro Teozacoalco',
  },
  {
    code: '20330',
    departmentCode: '20',
    name: 'San Pedro Teutila',
  },
  {
    code: '20331',
    departmentCode: '20',
    name: 'San Pedro Tidaá',
  },
  {
    code: '20332',
    departmentCode: '20',
    name: 'San Pedro Topiltepec',
  },
  {
    code: '20333',
    departmentCode: '20',
    name: 'San Pedro Totolápam',
  },
  {
    code: '20334',
    departmentCode: '20',
    name: 'Villa de Tututepec',
  },
  {
    code: '20335',
    departmentCode: '20',
    name: 'San Pedro Yaneri',
  },
  {
    code: '20336',
    departmentCode: '20',
    name: 'San Pedro Yólox',
  },
  {
    code: '20337',
    departmentCode: '20',
    name: 'San Pedro y San Pablo Ayutla',
  },
  {
    code: '20338',
    departmentCode: '20',
    name: 'Villa de Etla',
  },
  {
    code: '20339',
    departmentCode: '20',
    name: 'San Pedro y San Pablo Teposcolula',
  },
  {
    code: '20340',
    departmentCode: '20',
    name: 'San Pedro y San Pablo Tequixtepec',
  },
  {
    code: '20341',
    departmentCode: '20',
    name: 'San Pedro Yucunama',
  },
  {
    code: '20342',
    departmentCode: '20',
    name: 'San Raymundo Jalpan',
  },
  {
    code: '20343',
    departmentCode: '20',
    name: 'San Sebastián Abasolo',
  },
  {
    code: '20344',
    departmentCode: '20',
    name: 'San Sebastián Coatlán',
  },
  {
    code: '20345',
    departmentCode: '20',
    name: 'San Sebastián Ixcapa',
  },
  {
    code: '20346',
    departmentCode: '20',
    name: 'San Sebastián Nicananduta',
  },
  {
    code: '20347',
    departmentCode: '20',
    name: 'San Sebastián Río Hondo',
  },
  {
    code: '20348',
    departmentCode: '20',
    name: 'San Sebastián Tecomaxtlahuaca',
  },
  {
    code: '20349',
    departmentCode: '20',
    name: 'San Sebastián Teitipac',
  },
  {
    code: '20350',
    departmentCode: '20',
    name: 'San Sebastián Tutla',
  },
  {
    code: '20351',
    departmentCode: '20',
    name: 'San Simón Almolongas',
  },
  {
    code: '20352',
    departmentCode: '20',
    name: 'San Simón Zahuatlán',
  },
  {
    code: '20353',
    departmentCode: '20',
    name: 'Santa Ana',
  },
  {
    code: '20354',
    departmentCode: '20',
    name: 'Santa Ana Ateixtlahuaca',
  },
  {
    code: '20355',
    departmentCode: '20',
    name: 'Santa Ana Cuauhtémoc',
  },
  {
    code: '20356',
    departmentCode: '20',
    name: 'Santa Ana del Valle',
  },
  {
    code: '20357',
    departmentCode: '20',
    name: 'Santa Ana Tavela',
  },
  {
    code: '20358',
    departmentCode: '20',
    name: 'Santa Ana Tlapacoyan',
  },
  {
    code: '20359',
    departmentCode: '20',
    name: 'Santa Ana Yareni',
  },
  {
    code: '20360',
    departmentCode: '20',
    name: 'Santa Ana Zegache',
  },
  {
    code: '20361',
    departmentCode: '20',
    name: 'Santa Catalina Quierí',
  },
  {
    code: '20362',
    departmentCode: '20',
    name: 'Santa Catarina Cuixtla',
  },
  {
    code: '20363',
    departmentCode: '20',
    name: 'Santa Catarina Ixtepeji',
  },
  {
    code: '20364',
    departmentCode: '20',
    name: 'Santa Catarina Juquila',
  },
  {
    code: '20365',
    departmentCode: '20',
    name: 'Santa Catarina Lachatao',
  },
  {
    code: '20366',
    departmentCode: '20',
    name: 'Santa Catarina Loxicha',
  },
  {
    code: '20367',
    departmentCode: '20',
    name: 'Santa Catarina Mechoacán',
  },
  {
    code: '20368',
    departmentCode: '20',
    name: 'Santa Catarina Minas',
  },
  {
    code: '20369',
    departmentCode: '20',
    name: 'Santa Catarina Quiané',
  },
  {
    code: '20370',
    departmentCode: '20',
    name: 'Santa Catarina Tayata',
  },
  {
    code: '20371',
    departmentCode: '20',
    name: 'Santa Catarina Ticuá',
  },
  {
    code: '20372',
    departmentCode: '20',
    name: 'Santa Catarina Yosonotú',
  },
  {
    code: '20373',
    departmentCode: '20',
    name: 'Santa Catarina Zapoquila',
  },
  {
    code: '20374',
    departmentCode: '20',
    name: 'Santa Cruz Acatepec',
  },
  {
    code: '20375',
    departmentCode: '20',
    name: 'Santa Cruz Amilpas',
  },
  {
    code: '20376',
    departmentCode: '20',
    name: 'Santa Cruz de Bravo',
  },
  {
    code: '20377',
    departmentCode: '20',
    name: 'Santa Cruz Itundujia',
  },
  {
    code: '20378',
    departmentCode: '20',
    name: 'Santa Cruz Mixtepec',
  },
  {
    code: '20379',
    departmentCode: '20',
    name: 'Santa Cruz Nundaco',
  },
  {
    code: '20380',
    departmentCode: '20',
    name: 'Santa Cruz Papalutla',
  },
  {
    code: '20381',
    departmentCode: '20',
    name: 'Santa Cruz Tacache de Mina',
  },
  {
    code: '20382',
    departmentCode: '20',
    name: 'Santa Cruz Tacahua',
  },
  {
    code: '20383',
    departmentCode: '20',
    name: 'Santa Cruz Tayata',
  },
  {
    code: '20384',
    departmentCode: '20',
    name: 'Santa Cruz Xitla',
  },
  {
    code: '20385',
    departmentCode: '20',
    name: 'Santa Cruz Xoxocotlán',
  },
  {
    code: '20386',
    departmentCode: '20',
    name: 'Santa Cruz Zenzontepec',
  },
  {
    code: '20387',
    departmentCode: '20',
    name: 'Santa Gertrudis',
  },
  {
    code: '20388',
    departmentCode: '20',
    name: 'Santa Inés del Monte',
  },
  {
    code: '20389',
    departmentCode: '20',
    name: 'Santa Inés Yatzeche',
  },
  {
    code: '20390',
    departmentCode: '20',
    name: 'Santa Lucía del Camino',
  },
  {
    code: '20391',
    departmentCode: '20',
    name: 'Santa Lucía Miahuatlán',
  },
  {
    code: '20392',
    departmentCode: '20',
    name: 'Santa Lucía Monteverde',
  },
  {
    code: '20393',
    departmentCode: '20',
    name: 'Santa Lucía Ocotlán',
  },
  {
    code: '20394',
    departmentCode: '20',
    name: 'Santa María Alotepec',
  },
  {
    code: '20395',
    departmentCode: '20',
    name: 'Santa María Apazco',
  },
  {
    code: '20396',
    departmentCode: '20',
    name: 'Santa María la Asunción',
  },
  {
    code: '20397',
    departmentCode: '20',
    name: 'Heroica Ciudad de Tlaxiaco',
  },
  {
    code: '20398',
    departmentCode: '20',
    name: 'Ayoquezco de Aldama',
  },
  {
    code: '20399',
    departmentCode: '20',
    name: 'Santa María Atzompa',
  },
  {
    code: '20400',
    departmentCode: '20',
    name: 'Santa María Camotlán',
  },
  {
    code: '20401',
    departmentCode: '20',
    name: 'Santa María Colotepec',
  },
  {
    code: '20402',
    departmentCode: '20',
    name: 'Santa María Cortijo',
  },
  {
    code: '20403',
    departmentCode: '20',
    name: 'Santa María Coyotepec',
  },
  {
    code: '20404',
    departmentCode: '20',
    name: 'Santa María Chachoápam',
  },
  {
    code: '20405',
    departmentCode: '20',
    name: 'Villa de Chilapa de Díaz',
  },
  {
    code: '20406',
    departmentCode: '20',
    name: 'Santa María Chilchotla',
  },
  {
    code: '20407',
    departmentCode: '20',
    name: 'Santa María Chimalapa',
  },
  {
    code: '20408',
    departmentCode: '20',
    name: 'Santa María del Rosario',
  },
  {
    code: '20409',
    departmentCode: '20',
    name: 'Santa María del Tule',
  },
  {
    code: '20410',
    departmentCode: '20',
    name: 'Santa María Ecatepec',
  },
  {
    code: '20411',
    departmentCode: '20',
    name: 'Santa María Guelacé',
  },
  {
    code: '20412',
    departmentCode: '20',
    name: 'Santa María Guienagati',
  },
  {
    code: '20413',
    departmentCode: '20',
    name: 'Santa María Huatulco',
  },
  {
    code: '20414',
    departmentCode: '20',
    name: 'Santa María Huazolotitlán',
  },
  {
    code: '20415',
    departmentCode: '20',
    name: 'Santa María Ipalapa',
  },
  {
    code: '20416',
    departmentCode: '20',
    name: 'Santa María Ixcatlán',
  },
  {
    code: '20417',
    departmentCode: '20',
    name: 'Santa María Jacatepec',
  },
  {
    code: '20418',
    departmentCode: '20',
    name: 'Santa María Jalapa del Marqués',
  },
  {
    code: '20419',
    departmentCode: '20',
    name: 'Santa María Jaltianguis',
  },
  {
    code: '20420',
    departmentCode: '20',
    name: 'Santa María Lachixío',
  },
  {
    code: '20421',
    departmentCode: '20',
    name: 'Santa María Mixtequilla',
  },
  {
    code: '20422',
    departmentCode: '20',
    name: 'Santa María Nativitas',
  },
  {
    code: '20423',
    departmentCode: '20',
    name: 'Santa María Nduayaco',
  },
  {
    code: '20424',
    departmentCode: '20',
    name: 'Santa María Ozolotepec',
  },
  {
    code: '20425',
    departmentCode: '20',
    name: 'Santa María Pápalo',
  },
  {
    code: '20426',
    departmentCode: '20',
    name: 'Santa María Peñoles',
  },
  {
    code: '20427',
    departmentCode: '20',
    name: 'Santa María Petapa',
  },
  {
    code: '20428',
    departmentCode: '20',
    name: 'Santa María Quiegolani',
  },
  {
    code: '20429',
    departmentCode: '20',
    name: 'Santa María Sola',
  },
  {
    code: '20430',
    departmentCode: '20',
    name: 'Santa María Tataltepec',
  },
  {
    code: '20431',
    departmentCode: '20',
    name: 'Santa María Tecomavaca',
  },
  {
    code: '20432',
    departmentCode: '20',
    name: 'Santa María Temaxcalapa',
  },
  {
    code: '20433',
    departmentCode: '20',
    name: 'Santa María Temaxcaltepec',
  },
  {
    code: '20434',
    departmentCode: '20',
    name: 'Santa María Teopoxco',
  },
  {
    code: '20435',
    departmentCode: '20',
    name: 'Santa María Tepantlali',
  },
  {
    code: '20436',
    departmentCode: '20',
    name: 'Santa María Texcatitlán',
  },
  {
    code: '20437',
    departmentCode: '20',
    name: 'Santa María Tlahuitoltepec',
  },
  {
    code: '20438',
    departmentCode: '20',
    name: 'Santa María Tlalixtac',
  },
  {
    code: '20439',
    departmentCode: '20',
    name: 'Santa María Tonameca',
  },
  {
    code: '20440',
    departmentCode: '20',
    name: 'Santa María Totolapilla',
  },
  {
    code: '20441',
    departmentCode: '20',
    name: 'Santa María Xadani',
  },
  {
    code: '20442',
    departmentCode: '20',
    name: 'Santa María Yalina',
  },
  {
    code: '20443',
    departmentCode: '20',
    name: 'Santa María Yavesía',
  },
  {
    code: '20444',
    departmentCode: '20',
    name: 'Santa María Yolotepec',
  },
  {
    code: '20445',
    departmentCode: '20',
    name: 'Santa María Yosoyúa',
  },
  {
    code: '20446',
    departmentCode: '20',
    name: 'Santa María Yucuhiti',
  },
  {
    code: '20447',
    departmentCode: '20',
    name: 'Santa María Zacatepec',
  },
  {
    code: '20448',
    departmentCode: '20',
    name: 'Santa María Zaniza',
  },
  {
    code: '20449',
    departmentCode: '20',
    name: 'Santa María Zoquitlán',
  },
  {
    code: '20450',
    departmentCode: '20',
    name: 'Santiago Amoltepec',
  },
  {
    code: '20451',
    departmentCode: '20',
    name: 'Santiago Apoala',
  },
  {
    code: '20452',
    departmentCode: '20',
    name: 'Santiago Apóstol',
  },
  {
    code: '20453',
    departmentCode: '20',
    name: 'Santiago Astata',
  },
  {
    code: '20454',
    departmentCode: '20',
    name: 'Santiago Atitlán',
  },
  {
    code: '20455',
    departmentCode: '20',
    name: 'Santiago Ayuquililla',
  },
  {
    code: '20456',
    departmentCode: '20',
    name: 'Santiago Cacaloxtepec',
  },
  {
    code: '20457',
    departmentCode: '20',
    name: 'Santiago Camotlán',
  },
  {
    code: '20458',
    departmentCode: '20',
    name: 'Santiago Comaltepec',
  },
  {
    code: '20459',
    departmentCode: '20',
    name: 'Villa de Santiago Chazumba',
  },
  {
    code: '20460',
    departmentCode: '20',
    name: 'Santiago Choápam',
  },
  {
    code: '20461',
    departmentCode: '20',
    name: 'Santiago del Río',
  },
  {
    code: '20462',
    departmentCode: '20',
    name: 'Santiago Huajolotitlán',
  },
  {
    code: '20463',
    departmentCode: '20',
    name: 'Santiago Huauclilla',
  },
  {
    code: '20464',
    departmentCode: '20',
    name: 'Santiago Ihuitlán Plumas',
  },
  {
    code: '20465',
    departmentCode: '20',
    name: 'Santiago Ixcuintepec',
  },
  {
    code: '20466',
    departmentCode: '20',
    name: 'Santiago Ixtayutla',
  },
  {
    code: '20467',
    departmentCode: '20',
    name: 'Santiago Jamiltepec',
  },
  {
    code: '20468',
    departmentCode: '20',
    name: 'Santiago Jocotepec',
  },
  {
    code: '20469',
    departmentCode: '20',
    name: 'Santiago Juxtlahuaca',
  },
  {
    code: '20470',
    departmentCode: '20',
    name: 'Santiago Lachiguiri',
  },
  {
    code: '20471',
    departmentCode: '20',
    name: 'Santiago Lalopa',
  },
  {
    code: '20472',
    departmentCode: '20',
    name: 'Santiago Laollaga',
  },
  {
    code: '20473',
    departmentCode: '20',
    name: 'Santiago Laxopa',
  },
  {
    code: '20474',
    departmentCode: '20',
    name: 'Santiago Llano Grande',
  },
  {
    code: '20475',
    departmentCode: '20',
    name: 'Santiago Matatlán',
  },
  {
    code: '20476',
    departmentCode: '20',
    name: 'Santiago Miltepec',
  },
  {
    code: '20477',
    departmentCode: '20',
    name: 'Santiago Minas',
  },
  {
    code: '20478',
    departmentCode: '20',
    name: 'Santiago Nacaltepec',
  },
  {
    code: '20479',
    departmentCode: '20',
    name: 'Santiago Nejapilla',
  },
  {
    code: '20480',
    departmentCode: '20',
    name: 'Santiago Nundiche',
  },
  {
    code: '20481',
    departmentCode: '20',
    name: 'Santiago Nuyoó',
  },
  {
    code: '20482',
    departmentCode: '20',
    name: 'Santiago Pinotepa Nacional',
  },
  {
    code: '20483',
    departmentCode: '20',
    name: 'Santiago Suchilquitongo',
  },
  {
    code: '20484',
    departmentCode: '20',
    name: 'Santiago Tamazola',
  },
  {
    code: '20485',
    departmentCode: '20',
    name: 'Santiago Tapextla',
  },
  {
    code: '20486',
    departmentCode: '20',
    name: 'Villa Tejúpam de la Unión',
  },
  {
    code: '20487',
    departmentCode: '20',
    name: 'Santiago Tenango',
  },
  {
    code: '20488',
    departmentCode: '20',
    name: 'Santiago Tepetlapa',
  },
  {
    code: '20489',
    departmentCode: '20',
    name: 'Santiago Tetepec',
  },
  {
    code: '20490',
    departmentCode: '20',
    name: 'Santiago Texcalcingo',
  },
  {
    code: '20491',
    departmentCode: '20',
    name: 'Santiago Textitlán',
  },
  {
    code: '20492',
    departmentCode: '20',
    name: 'Santiago Tilantongo',
  },
  {
    code: '20493',
    departmentCode: '20',
    name: 'Santiago Tillo',
  },
  {
    code: '20494',
    departmentCode: '20',
    name: 'Santiago Tlazoyaltepec',
  },
  {
    code: '20495',
    departmentCode: '20',
    name: 'Santiago Xanica',
  },
  {
    code: '20496',
    departmentCode: '20',
    name: 'Santiago Xiacuí',
  },
  {
    code: '20497',
    departmentCode: '20',
    name: 'Santiago Yaitepec',
  },
  {
    code: '20498',
    departmentCode: '20',
    name: 'Santiago Yaveo',
  },
  {
    code: '20499',
    departmentCode: '20',
    name: 'Santiago Yolomécatl',
  },
  {
    code: '20500',
    departmentCode: '20',
    name: 'Santiago Yosondúa',
  },
  {
    code: '20501',
    departmentCode: '20',
    name: 'Santiago Yucuyachi',
  },
  {
    code: '20502',
    departmentCode: '20',
    name: 'Santiago Zacatepec',
  },
  {
    code: '20503',
    departmentCode: '20',
    name: 'Santiago Zoochila',
  },
  {
    code: '20504',
    departmentCode: '20',
    name: 'Nuevo Zoquiápam',
  },
  {
    code: '20505',
    departmentCode: '20',
    name: 'Santo Domingo Ingenio',
  },
  {
    code: '20506',
    departmentCode: '20',
    name: 'Santo Domingo Albarradas',
  },
  {
    code: '20507',
    departmentCode: '20',
    name: 'Santo Domingo Armenta',
  },
  {
    code: '20508',
    departmentCode: '20',
    name: 'Santo Domingo Chihuitán',
  },
  {
    code: '20509',
    departmentCode: '20',
    name: 'Santo Domingo de Morelos',
  },
  {
    code: '20510',
    departmentCode: '20',
    name: 'Santo Domingo Ixcatlán',
  },
  {
    code: '20511',
    departmentCode: '20',
    name: 'Santo Domingo Nuxaá',
  },
  {
    code: '20512',
    departmentCode: '20',
    name: 'Santo Domingo Ozolotepec',
  },
  {
    code: '20513',
    departmentCode: '20',
    name: 'Santo Domingo Petapa',
  },
  {
    code: '20514',
    departmentCode: '20',
    name: 'Santo Domingo Roayaga',
  },
  {
    code: '20515',
    departmentCode: '20',
    name: 'Santo Domingo Tehuantepec',
  },
  {
    code: '20516',
    departmentCode: '20',
    name: 'Santo Domingo Teojomulco',
  },
  {
    code: '20517',
    departmentCode: '20',
    name: 'Santo Domingo Tepuxtepec',
  },
  {
    code: '20518',
    departmentCode: '20',
    name: 'Santo Domingo Tlatayápam',
  },
  {
    code: '20519',
    departmentCode: '20',
    name: 'Santo Domingo Tomaltepec',
  },
  {
    code: '20520',
    departmentCode: '20',
    name: 'Santo Domingo Tonalá',
  },
  {
    code: '20521',
    departmentCode: '20',
    name: 'Santo Domingo Tonaltepec',
  },
  {
    code: '20522',
    departmentCode: '20',
    name: 'Santo Domingo Xagacía',
  },
  {
    code: '20523',
    departmentCode: '20',
    name: 'Santo Domingo Yanhuitlán',
  },
  {
    code: '20524',
    departmentCode: '20',
    name: 'Santo Domingo Yodohino',
  },
  {
    code: '20525',
    departmentCode: '20',
    name: 'Santo Domingo Zanatepec',
  },
  {
    code: '20526',
    departmentCode: '20',
    name: 'Santos Reyes Nopala',
  },
  {
    code: '20527',
    departmentCode: '20',
    name: 'Santos Reyes Pápalo',
  },
  {
    code: '20528',
    departmentCode: '20',
    name: 'Santos Reyes Tepejillo',
  },
  {
    code: '20529',
    departmentCode: '20',
    name: 'Santos Reyes Yucuná',
  },
  {
    code: '20530',
    departmentCode: '20',
    name: 'Santo Tomás Jalieza',
  },
  {
    code: '20531',
    departmentCode: '20',
    name: 'Santo Tomás Mazaltepec',
  },
  {
    code: '20532',
    departmentCode: '20',
    name: 'Santo Tomás Ocotepec',
  },
  {
    code: '20533',
    departmentCode: '20',
    name: 'Santo Tomás Tamazulapan',
  },
  {
    code: '20534',
    departmentCode: '20',
    name: 'San Vicente Coatlán',
  },
  {
    code: '20535',
    departmentCode: '20',
    name: 'San Vicente Lachixío',
  },
  {
    code: '20536',
    departmentCode: '20',
    name: 'San Vicente Nuñú',
  },
  {
    code: '20537',
    departmentCode: '20',
    name: 'Silacayoápam',
  },
  {
    code: '20538',
    departmentCode: '20',
    name: 'Sitio de Xitlapehua',
  },
  {
    code: '20539',
    departmentCode: '20',
    name: 'Soledad Etla',
  },
  {
    code: '20540',
    departmentCode: '20',
    name: 'Villa de Tamazulápam del Progreso',
  },
  {
    code: '20541',
    departmentCode: '20',
    name: 'Tanetze de Zaragoza',
  },
  {
    code: '20542',
    departmentCode: '20',
    name: 'Taniche',
  },
  {
    code: '20543',
    departmentCode: '20',
    name: 'Tataltepec de Valdés',
  },
  {
    code: '20544',
    departmentCode: '20',
    name: 'Teococuilco de Marcos Pérez',
  },
  {
    code: '20545',
    departmentCode: '20',
    name: 'Teotitlán de Flores Magón',
  },
  {
    code: '20546',
    departmentCode: '20',
    name: 'Teotitlán del Valle',
  },
  {
    code: '20547',
    departmentCode: '20',
    name: 'Teotongo',
  },
  {
    code: '20548',
    departmentCode: '20',
    name: 'Tepelmeme Villa de Morelos',
  },
  {
    code: '20549',
    departmentCode: '20',
    name: 'Heroica Villa Tezoatlán de Segura y Luna, Cuna de la Independencia de Oaxaca',
  },
  {
    code: '20550',
    departmentCode: '20',
    name: 'San Jerónimo Tlacochahuaya',
  },
  {
    code: '20551',
    departmentCode: '20',
    name: 'Tlacolula de Matamoros',
  },
  {
    code: '20552',
    departmentCode: '20',
    name: 'Tlacotepec Plumas',
  },
  {
    code: '20553',
    departmentCode: '20',
    name: 'Tlalixtac de Cabrera',
  },
  {
    code: '20554',
    departmentCode: '20',
    name: 'Totontepec Villa de Morelos',
  },
  {
    code: '20555',
    departmentCode: '20',
    name: 'Trinidad Zaachila',
  },
  {
    code: '20556',
    departmentCode: '20',
    name: 'La Trinidad Vista Hermosa',
  },
  {
    code: '20557',
    departmentCode: '20',
    name: 'Unión Hidalgo',
  },
  {
    code: '20558',
    departmentCode: '20',
    name: 'Valerio Trujano',
  },
  {
    code: '20559',
    departmentCode: '20',
    name: 'San Juan Bautista Valle Nacional',
  },
  {
    code: '20560',
    departmentCode: '20',
    name: 'Villa Díaz Ordaz',
  },
  {
    code: '20561',
    departmentCode: '20',
    name: 'Yaxe',
  },
  {
    code: '20562',
    departmentCode: '20',
    name: 'Magdalena Yodocono de Porfirio Díaz',
  },
  {
    code: '20563',
    departmentCode: '20',
    name: 'Yogana',
  },
  {
    code: '20564',
    departmentCode: '20',
    name: 'Yutanduchi de Guerrero',
  },
  {
    code: '20565',
    departmentCode: '20',
    name: 'Villa de Zaachila',
  },
  {
    code: '20566',
    departmentCode: '20',
    name: 'San Mateo Yucutindoo',
  },
  {
    code: '20567',
    departmentCode: '20',
    name: 'Zapotitlán Lagunas',
  },
  {
    code: '20568',
    departmentCode: '20',
    name: 'Zapotitlán Palmas',
  },
  {
    code: '20569',
    departmentCode: '20',
    name: 'Santa Inés de Zaragoza',
  },
  {
    code: '20570',
    departmentCode: '20',
    name: 'Zimatlán de Álvarez',
  },
  {
    code: '21001',
    departmentCode: '21',
    name: 'Acajete',
  },
  {
    code: '21002',
    departmentCode: '21',
    name: 'Acateno',
  },
  {
    code: '21003',
    departmentCode: '21',
    name: 'Acatlán',
  },
  {
    code: '21004',
    departmentCode: '21',
    name: 'Acatzingo',
  },
  {
    code: '21005',
    departmentCode: '21',
    name: 'Acteopan',
  },
  {
    code: '21006',
    departmentCode: '21',
    name: 'Ahuacatlán',
  },
  {
    code: '21007',
    departmentCode: '21',
    name: 'Ahuatlán',
  },
  {
    code: '21008',
    departmentCode: '21',
    name: 'Ahuazotepec',
  },
  {
    code: '21009',
    departmentCode: '21',
    name: 'Ahuehuetitla',
  },
  {
    code: '21010',
    departmentCode: '21',
    name: 'Ajalpan',
  },
  {
    code: '21011',
    departmentCode: '21',
    name: 'Albino Zertuche',
  },
  {
    code: '21012',
    departmentCode: '21',
    name: 'Aljojuca',
  },
  {
    code: '21013',
    departmentCode: '21',
    name: 'Altepexi',
  },
  {
    code: '21014',
    departmentCode: '21',
    name: 'Amixtlán',
  },
  {
    code: '21015',
    departmentCode: '21',
    name: 'Amozoc',
  },
  {
    code: '21016',
    departmentCode: '21',
    name: 'Aquixtla',
  },
  {
    code: '21017',
    departmentCode: '21',
    name: 'Atempan',
  },
  {
    code: '21018',
    departmentCode: '21',
    name: 'Atexcal',
  },
  {
    code: '21019',
    departmentCode: '21',
    name: 'Atlixco',
  },
  {
    code: '21020',
    departmentCode: '21',
    name: 'Atoyatempan',
  },
  {
    code: '21021',
    departmentCode: '21',
    name: 'Atzala',
  },
  {
    code: '21022',
    departmentCode: '21',
    name: 'Atzitzihuacán',
  },
  {
    code: '21023',
    departmentCode: '21',
    name: 'Atzitzintla',
  },
  {
    code: '21024',
    departmentCode: '21',
    name: 'Axutla',
  },
  {
    code: '21025',
    departmentCode: '21',
    name: 'Ayotoxco de Guerrero',
  },
  {
    code: '21026',
    departmentCode: '21',
    name: 'Calpan',
  },
  {
    code: '21027',
    departmentCode: '21',
    name: 'Caltepec',
  },
  {
    code: '21028',
    departmentCode: '21',
    name: 'Camocuautla',
  },
  {
    code: '21029',
    departmentCode: '21',
    name: 'Caxhuacan',
  },
  {
    code: '21030',
    departmentCode: '21',
    name: 'Coatepec',
  },
  {
    code: '21031',
    departmentCode: '21',
    name: 'Coatzingo',
  },
  {
    code: '21032',
    departmentCode: '21',
    name: 'Cohetzala',
  },
  {
    code: '21033',
    departmentCode: '21',
    name: 'Cohuecan',
  },
  {
    code: '21034',
    departmentCode: '21',
    name: 'Coronango',
  },
  {
    code: '21035',
    departmentCode: '21',
    name: 'Coxcatlán',
  },
  {
    code: '21036',
    departmentCode: '21',
    name: 'Coyomeapan',
  },
  {
    code: '21037',
    departmentCode: '21',
    name: 'Coyotepec',
  },
  {
    code: '21038',
    departmentCode: '21',
    name: 'Cuapiaxtla de Madero',
  },
  {
    code: '21039',
    departmentCode: '21',
    name: 'Cuautempan',
  },
  {
    code: '21040',
    departmentCode: '21',
    name: 'Cuautinchán',
  },
  {
    code: '21041',
    departmentCode: '21',
    name: 'Cuautlancingo',
  },
  {
    code: '21042',
    departmentCode: '21',
    name: 'Cuayuca de Andrade',
  },
  {
    code: '21043',
    departmentCode: '21',
    name: 'Cuetzalan del Progreso',
  },
  {
    code: '21044',
    departmentCode: '21',
    name: 'Cuyoaco',
  },
  {
    code: '21045',
    departmentCode: '21',
    name: 'Chalchicomula de Sesma',
  },
  {
    code: '21046',
    departmentCode: '21',
    name: 'Chapulco',
  },
  {
    code: '21047',
    departmentCode: '21',
    name: 'Chiautla',
  },
  {
    code: '21048',
    departmentCode: '21',
    name: 'Chiautzingo',
  },
  {
    code: '21049',
    departmentCode: '21',
    name: 'Chiconcuautla',
  },
  {
    code: '21050',
    departmentCode: '21',
    name: 'Chichiquila',
  },
  {
    code: '21051',
    departmentCode: '21',
    name: 'Chietla',
  },
  {
    code: '21052',
    departmentCode: '21',
    name: 'Chigmecatitlán',
  },
  {
    code: '21053',
    departmentCode: '21',
    name: 'Chignahuapan',
  },
  {
    code: '21054',
    departmentCode: '21',
    name: 'Chignautla',
  },
  {
    code: '21055',
    departmentCode: '21',
    name: 'Chila',
  },
  {
    code: '21056',
    departmentCode: '21',
    name: 'Chila de la Sal',
  },
  {
    code: '21057',
    departmentCode: '21',
    name: 'Honey',
  },
  {
    code: '21058',
    departmentCode: '21',
    name: 'Chilchotla',
  },
  {
    code: '21059',
    departmentCode: '21',
    name: 'Chinantla',
  },
  {
    code: '21060',
    departmentCode: '21',
    name: 'Domingo Arenas',
  },
  {
    code: '21061',
    departmentCode: '21',
    name: 'Eloxochitlán',
  },
  {
    code: '21062',
    departmentCode: '21',
    name: 'Epatlán',
  },
  {
    code: '21063',
    departmentCode: '21',
    name: 'Esperanza',
  },
  {
    code: '21064',
    departmentCode: '21',
    name: 'Francisco Z. Mena',
  },
  {
    code: '21065',
    departmentCode: '21',
    name: 'General Felipe Ángeles',
  },
  {
    code: '21066',
    departmentCode: '21',
    name: 'Guadalupe',
  },
  {
    code: '21067',
    departmentCode: '21',
    name: 'Guadalupe Victoria',
  },
  {
    code: '21068',
    departmentCode: '21',
    name: 'Hermenegildo Galeana',
  },
  {
    code: '21069',
    departmentCode: '21',
    name: 'Huaquechula',
  },
  {
    code: '21070',
    departmentCode: '21',
    name: 'Huatlatlauca',
  },
  {
    code: '21071',
    departmentCode: '21',
    name: 'Huauchinango',
  },
  {
    code: '21072',
    departmentCode: '21',
    name: 'Huehuetla',
  },
  {
    code: '21073',
    departmentCode: '21',
    name: 'Huehuetlán el Chico',
  },
  {
    code: '21074',
    departmentCode: '21',
    name: 'Huejotzingo',
  },
  {
    code: '21075',
    departmentCode: '21',
    name: 'Hueyapan',
  },
  {
    code: '21076',
    departmentCode: '21',
    name: 'Hueytamalco',
  },
  {
    code: '21077',
    departmentCode: '21',
    name: 'Hueytlalpan',
  },
  {
    code: '21078',
    departmentCode: '21',
    name: 'Huitzilan de Serdán',
  },
  {
    code: '21079',
    departmentCode: '21',
    name: 'Huitziltepec',
  },
  {
    code: '21080',
    departmentCode: '21',
    name: 'Atlequizayan',
  },
  {
    code: '21081',
    departmentCode: '21',
    name: 'Ixcamilpa de Guerrero',
  },
  {
    code: '21082',
    departmentCode: '21',
    name: 'Ixcaquixtla',
  },
  {
    code: '21083',
    departmentCode: '21',
    name: 'Ixtacamaxtitlán',
  },
  {
    code: '21084',
    departmentCode: '21',
    name: 'Ixtepec',
  },
  {
    code: '21085',
    departmentCode: '21',
    name: 'Izúcar de Matamoros',
  },
  {
    code: '21086',
    departmentCode: '21',
    name: 'Jalpan',
  },
  {
    code: '21087',
    departmentCode: '21',
    name: 'Jolalpan',
  },
  {
    code: '21088',
    departmentCode: '21',
    name: 'Jonotla',
  },
  {
    code: '21089',
    departmentCode: '21',
    name: 'Jopala',
  },
  {
    code: '21090',
    departmentCode: '21',
    name: 'Juan C. Bonilla',
  },
  {
    code: '21091',
    departmentCode: '21',
    name: 'Juan Galindo',
  },
  {
    code: '21092',
    departmentCode: '21',
    name: 'Juan N. Méndez',
  },
  {
    code: '21093',
    departmentCode: '21',
    name: 'Lafragua',
  },
  {
    code: '21094',
    departmentCode: '21',
    name: 'Libres',
  },
  {
    code: '21095',
    departmentCode: '21',
    name: 'La Magdalena Tlatlauquitepec',
  },
  {
    code: '21096',
    departmentCode: '21',
    name: 'Mazapiltepec de Juárez',
  },
  {
    code: '21097',
    departmentCode: '21',
    name: 'Mixtla',
  },
  {
    code: '21098',
    departmentCode: '21',
    name: 'Molcaxac',
  },
  {
    code: '21099',
    departmentCode: '21',
    name: 'Cañada Morelos',
  },
  {
    code: '21100',
    departmentCode: '21',
    name: 'Naupan',
  },
  {
    code: '21101',
    departmentCode: '21',
    name: 'Nauzontla',
  },
  {
    code: '21102',
    departmentCode: '21',
    name: 'Nealtican',
  },
  {
    code: '21103',
    departmentCode: '21',
    name: 'Nicolás Bravo',
  },
  {
    code: '21104',
    departmentCode: '21',
    name: 'Nopalucan',
  },
  {
    code: '21105',
    departmentCode: '21',
    name: 'Ocotepec',
  },
  {
    code: '21106',
    departmentCode: '21',
    name: 'Ocoyucan',
  },
  {
    code: '21107',
    departmentCode: '21',
    name: 'Olintla',
  },
  {
    code: '21108',
    departmentCode: '21',
    name: 'Oriental',
  },
  {
    code: '21109',
    departmentCode: '21',
    name: 'Pahuatlán',
  },
  {
    code: '21110',
    departmentCode: '21',
    name: 'Palmar de Bravo',
  },
  {
    code: '21111',
    departmentCode: '21',
    name: 'Pantepec',
  },
  {
    code: '21112',
    departmentCode: '21',
    name: 'Petlalcingo',
  },
  {
    code: '21113',
    departmentCode: '21',
    name: 'Piaxtla',
  },
  {
    code: '21114',
    departmentCode: '21',
    name: 'Puebla',
  },
  {
    code: '21115',
    departmentCode: '21',
    name: 'Quecholac',
  },
  {
    code: '21116',
    departmentCode: '21',
    name: 'Quimixtlán',
  },
  {
    code: '21117',
    departmentCode: '21',
    name: 'Rafael Lara Grajales',
  },
  {
    code: '21118',
    departmentCode: '21',
    name: 'Los Reyes de Juárez',
  },
  {
    code: '21119',
    departmentCode: '21',
    name: 'San Andrés Cholula',
  },
  {
    code: '21120',
    departmentCode: '21',
    name: 'San Antonio Cañada',
  },
  {
    code: '21121',
    departmentCode: '21',
    name: 'San Diego la Mesa Tochimiltzingo',
  },
  {
    code: '21122',
    departmentCode: '21',
    name: 'San Felipe Teotlalcingo',
  },
  {
    code: '21123',
    departmentCode: '21',
    name: 'San Felipe Tepatlán',
  },
  {
    code: '21124',
    departmentCode: '21',
    name: 'San Gabriel Chilac',
  },
  {
    code: '21125',
    departmentCode: '21',
    name: 'San Gregorio Atzompa',
  },
  {
    code: '21126',
    departmentCode: '21',
    name: 'San Jerónimo Tecuanipan',
  },
  {
    code: '21127',
    departmentCode: '21',
    name: 'San Jerónimo Xayacatlán',
  },
  {
    code: '21128',
    departmentCode: '21',
    name: 'San José Chiapa',
  },
  {
    code: '21129',
    departmentCode: '21',
    name: 'San José Miahuatlán',
  },
  {
    code: '21130',
    departmentCode: '21',
    name: 'San Juan Atenco',
  },
  {
    code: '21131',
    departmentCode: '21',
    name: 'San Juan Atzompa',
  },
  {
    code: '21132',
    departmentCode: '21',
    name: 'San Martín Texmelucan',
  },
  {
    code: '21133',
    departmentCode: '21',
    name: 'San Martín Totoltepec',
  },
  {
    code: '21134',
    departmentCode: '21',
    name: 'San Matías Tlalancaleca',
  },
  {
    code: '21135',
    departmentCode: '21',
    name: 'San Miguel Ixitlán',
  },
  {
    code: '21136',
    departmentCode: '21',
    name: 'San Miguel Xoxtla',
  },
  {
    code: '21137',
    departmentCode: '21',
    name: 'San Nicolás Buenos Aires',
  },
  {
    code: '21138',
    departmentCode: '21',
    name: 'San Nicolás de los Ranchos',
  },
  {
    code: '21139',
    departmentCode: '21',
    name: 'San Pablo Anicano',
  },
  {
    code: '21140',
    departmentCode: '21',
    name: 'San Pedro Cholula',
  },
  {
    code: '21141',
    departmentCode: '21',
    name: 'San Pedro Yeloixtlahuaca',
  },
  {
    code: '21142',
    departmentCode: '21',
    name: 'San Salvador el Seco',
  },
  {
    code: '21143',
    departmentCode: '21',
    name: 'San Salvador el Verde',
  },
  {
    code: '21144',
    departmentCode: '21',
    name: 'San Salvador Huixcolotla',
  },
  {
    code: '21145',
    departmentCode: '21',
    name: 'San Sebastián Tlacotepec',
  },
  {
    code: '21146',
    departmentCode: '21',
    name: 'Santa Catarina Tlaltempan',
  },
  {
    code: '21147',
    departmentCode: '21',
    name: 'Santa Inés Ahuatempan',
  },
  {
    code: '21148',
    departmentCode: '21',
    name: 'Santa Isabel Cholula',
  },
  {
    code: '21149',
    departmentCode: '21',
    name: 'Santiago Miahuatlán',
  },
  {
    code: '21150',
    departmentCode: '21',
    name: 'Huehuetlán el Grande',
  },
  {
    code: '21151',
    departmentCode: '21',
    name: 'Santo Tomás Hueyotlipan',
  },
  {
    code: '21152',
    departmentCode: '21',
    name: 'Soltepec',
  },
  {
    code: '21153',
    departmentCode: '21',
    name: 'Tecali de Herrera',
  },
  {
    code: '21154',
    departmentCode: '21',
    name: 'Tecamachalco',
  },
  {
    code: '21155',
    departmentCode: '21',
    name: 'Tecomatlán',
  },
  {
    code: '21156',
    departmentCode: '21',
    name: 'Tehuacán',
  },
  {
    code: '21157',
    departmentCode: '21',
    name: 'Tehuitzingo',
  },
  {
    code: '21158',
    departmentCode: '21',
    name: 'Tenampulco',
  },
  {
    code: '21159',
    departmentCode: '21',
    name: 'Teopantlán',
  },
  {
    code: '21160',
    departmentCode: '21',
    name: 'Teotlalco',
  },
  {
    code: '21161',
    departmentCode: '21',
    name: 'Tepanco de López',
  },
  {
    code: '21162',
    departmentCode: '21',
    name: 'Tepango de Rodríguez',
  },
  {
    code: '21163',
    departmentCode: '21',
    name: 'Tepatlaxco de Hidalgo',
  },
  {
    code: '21164',
    departmentCode: '21',
    name: 'Tepeaca',
  },
  {
    code: '21165',
    departmentCode: '21',
    name: 'Tepemaxalco',
  },
  {
    code: '21166',
    departmentCode: '21',
    name: 'Tepeojuma',
  },
  {
    code: '21167',
    departmentCode: '21',
    name: 'Tepetzintla',
  },
  {
    code: '21168',
    departmentCode: '21',
    name: 'Tepexco',
  },
  {
    code: '21169',
    departmentCode: '21',
    name: 'Tepexi de Rodríguez',
  },
  {
    code: '21170',
    departmentCode: '21',
    name: 'Tepeyahualco',
  },
  {
    code: '21171',
    departmentCode: '21',
    name: 'Tepeyahualco de Cuauhtémoc',
  },
  {
    code: '21172',
    departmentCode: '21',
    name: 'Tetela de Ocampo',
  },
  {
    code: '21173',
    departmentCode: '21',
    name: 'Teteles de Ávila Castillo',
  },
  {
    code: '21174',
    departmentCode: '21',
    name: 'Teziutlán',
  },
  {
    code: '21175',
    departmentCode: '21',
    name: 'Tianguismanalco',
  },
  {
    code: '21176',
    departmentCode: '21',
    name: 'Tilapa',
  },
  {
    code: '21177',
    departmentCode: '21',
    name: 'Tlacotepec de Benito Juárez',
  },
  {
    code: '21178',
    departmentCode: '21',
    name: 'Tlacuilotepec',
  },
  {
    code: '21179',
    departmentCode: '21',
    name: 'Tlachichuca',
  },
  {
    code: '21180',
    departmentCode: '21',
    name: 'Tlahuapan',
  },
  {
    code: '21181',
    departmentCode: '21',
    name: 'Tlaltenango',
  },
  {
    code: '21182',
    departmentCode: '21',
    name: 'Tlanepantla',
  },
  {
    code: '21183',
    departmentCode: '21',
    name: 'Tlaola',
  },
  {
    code: '21184',
    departmentCode: '21',
    name: 'Tlapacoya',
  },
  {
    code: '21185',
    departmentCode: '21',
    name: 'Tlapanalá',
  },
  {
    code: '21186',
    departmentCode: '21',
    name: 'Tlatlauquitepec',
  },
  {
    code: '21187',
    departmentCode: '21',
    name: 'Tlaxco',
  },
  {
    code: '21188',
    departmentCode: '21',
    name: 'Tochimilco',
  },
  {
    code: '21189',
    departmentCode: '21',
    name: 'Tochtepec',
  },
  {
    code: '21190',
    departmentCode: '21',
    name: 'Totoltepec de Guerrero',
  },
  {
    code: '21191',
    departmentCode: '21',
    name: 'Tulcingo',
  },
  {
    code: '21192',
    departmentCode: '21',
    name: 'Tuzamapan de Galeana',
  },
  {
    code: '21193',
    departmentCode: '21',
    name: 'Tzicatlacoyan',
  },
  {
    code: '21194',
    departmentCode: '21',
    name: 'Venustiano Carranza',
  },
  {
    code: '21195',
    departmentCode: '21',
    name: 'Vicente Guerrero',
  },
  {
    code: '21196',
    departmentCode: '21',
    name: 'Xayacatlán de Bravo',
  },
  {
    code: '21197',
    departmentCode: '21',
    name: 'Xicotepec',
  },
  {
    code: '21198',
    departmentCode: '21',
    name: 'Xicotlán',
  },
  {
    code: '21199',
    departmentCode: '21',
    name: 'Xiutetelco',
  },
  {
    code: '21200',
    departmentCode: '21',
    name: 'Xochiapulco',
  },
  {
    code: '21201',
    departmentCode: '21',
    name: 'Xochiltepec',
  },
  {
    code: '21202',
    departmentCode: '21',
    name: 'Xochitlán de Vicente Suárez',
  },
  {
    code: '21203',
    departmentCode: '21',
    name: 'Xochitlán Todos Santos',
  },
  {
    code: '21204',
    departmentCode: '21',
    name: 'Yaonáhuac',
  },
  {
    code: '21205',
    departmentCode: '21',
    name: 'Yehualtepec',
  },
  {
    code: '21206',
    departmentCode: '21',
    name: 'Zacapala',
  },
  {
    code: '21207',
    departmentCode: '21',
    name: 'Zacapoaxtla',
  },
  {
    code: '21208',
    departmentCode: '21',
    name: 'Zacatlán',
  },
  {
    code: '21209',
    departmentCode: '21',
    name: 'Zapotitlán',
  },
  {
    code: '21210',
    departmentCode: '21',
    name: 'Zapotitlán de Méndez',
  },
  {
    code: '21211',
    departmentCode: '21',
    name: 'Zaragoza',
  },
  {
    code: '21212',
    departmentCode: '21',
    name: 'Zautla',
  },
  {
    code: '21213',
    departmentCode: '21',
    name: 'Zihuateutla',
  },
  {
    code: '21214',
    departmentCode: '21',
    name: 'Zinacatepec',
  },
  {
    code: '21215',
    departmentCode: '21',
    name: 'Zongozotla',
  },
  {
    code: '21216',
    departmentCode: '21',
    name: 'Zoquiapan',
  },
  {
    code: '21217',
    departmentCode: '21',
    name: 'Zoquitlán',
  },
  {
    code: '22001',
    departmentCode: '22',
    name: 'Amealco de Bonfil',
  },
  {
    code: '22002',
    departmentCode: '22',
    name: 'Pinal de Amoles',
  },
  {
    code: '22003',
    departmentCode: '22',
    name: 'Arroyo Seco',
  },
  {
    code: '22004',
    departmentCode: '22',
    name: 'Cadereyta de Montes',
  },
  {
    code: '22005',
    departmentCode: '22',
    name: 'Colón',
  },
  {
    code: '22006',
    departmentCode: '22',
    name: 'Corregidora',
  },
  {
    code: '22007',
    departmentCode: '22',
    name: 'Ezequiel Montes',
  },
  {
    code: '22008',
    departmentCode: '22',
    name: 'Huimilpan',
  },
  {
    code: '22009',
    departmentCode: '22',
    name: 'Jalpan de Serra',
  },
  {
    code: '22010',
    departmentCode: '22',
    name: 'Landa de Matamoros',
  },
  {
    code: '22011',
    departmentCode: '22',
    name: 'El Marqués',
  },
  {
    code: '22012',
    departmentCode: '22',
    name: 'Pedro Escobedo',
  },
  {
    code: '22013',
    departmentCode: '22',
    name: 'Peñamiller',
  },
  {
    code: '22014',
    departmentCode: '22',
    name: 'Querétaro',
  },
  {
    code: '22015',
    departmentCode: '22',
    name: 'San Joaquín',
  },
  {
    code: '22016',
    departmentCode: '22',
    name: 'San Juan del Río',
  },
  {
    code: '22017',
    departmentCode: '22',
    name: 'Tequisquiapan',
  },
  {
    code: '22018',
    departmentCode: '22',
    name: 'Tolimán',
  },
  {
    code: '23001',
    departmentCode: '23',
    name: 'Cozumel',
  },
  {
    code: '23002',
    departmentCode: '23',
    name: 'Felipe Carrillo Puerto',
  },
  {
    code: '23003',
    departmentCode: '23',
    name: 'Isla Mujeres',
  },
  {
    code: '23004',
    departmentCode: '23',
    name: 'Othón P. Blanco',
  },
  {
    code: '23005',
    departmentCode: '23',
    name: 'Benito Juárez',
  },
  {
    code: '23006',
    departmentCode: '23',
    name: 'José María Morelos',
  },
  {
    code: '23007',
    departmentCode: '23',
    name: 'Lázaro Cárdenas',
  },
  {
    code: '23008',
    departmentCode: '23',
    name: 'Playa del Carmen',
  },
  {
    code: '23009',
    departmentCode: '23',
    name: 'Tulum',
  },
  {
    code: '23010',
    departmentCode: '23',
    name: 'Bacalar',
  },
  {
    code: '23011',
    departmentCode: '23',
    name: 'Puerto Morelos',
  },
  {
    code: '24001',
    departmentCode: '24',
    name: 'Ahualulco del Sonido 13',
  },
  {
    code: '24002',
    departmentCode: '24',
    name: 'Alaquines',
  },
  {
    code: '24003',
    departmentCode: '24',
    name: 'Aquismón',
  },
  {
    code: '24004',
    departmentCode: '24',
    name: 'Armadillo de los Infante',
  },
  {
    code: '24005',
    departmentCode: '24',
    name: 'Cárdenas',
  },
  {
    code: '24006',
    departmentCode: '24',
    name: 'Catorce',
  },
  {
    code: '24007',
    departmentCode: '24',
    name: 'Cedral',
  },
  {
    code: '24008',
    departmentCode: '24',
    name: 'Cerritos',
  },
  {
    code: '24009',
    departmentCode: '24',
    name: 'Cerro de San Pedro',
  },
  {
    code: '24010',
    departmentCode: '24',
    name: 'Ciudad del Maíz',
  },
  {
    code: '24011',
    departmentCode: '24',
    name: 'Ciudad Fernández',
  },
  {
    code: '24012',
    departmentCode: '24',
    name: 'Tancanhuitz',
  },
  {
    code: '24013',
    departmentCode: '24',
    name: 'Ciudad Valles',
  },
  {
    code: '24014',
    departmentCode: '24',
    name: 'Coxcatlán',
  },
  {
    code: '24015',
    departmentCode: '24',
    name: 'Charcas',
  },
  {
    code: '24016',
    departmentCode: '24',
    name: 'Ebano',
  },
  {
    code: '24017',
    departmentCode: '24',
    name: 'Guadalcázar',
  },
  {
    code: '24018',
    departmentCode: '24',
    name: 'Huehuetlán',
  },
  {
    code: '24019',
    departmentCode: '24',
    name: 'Lagunillas',
  },
  {
    code: '24020',
    departmentCode: '24',
    name: 'Matehuala',
  },
  {
    code: '24021',
    departmentCode: '24',
    name: 'Mexquitic de Carmona',
  },
  {
    code: '24022',
    departmentCode: '24',
    name: 'Moctezuma',
  },
  {
    code: '24023',
    departmentCode: '24',
    name: 'Rayón',
  },
  {
    code: '24024',
    departmentCode: '24',
    name: 'Rioverde',
  },
  {
    code: '24025',
    departmentCode: '24',
    name: 'Salinas',
  },
  {
    code: '24026',
    departmentCode: '24',
    name: 'San Antonio',
  },
  {
    code: '24027',
    departmentCode: '24',
    name: 'San Ciro de Acosta',
  },
  {
    code: '24028',
    departmentCode: '24',
    name: 'San Luis Potosí',
  },
  {
    code: '24029',
    departmentCode: '24',
    name: 'San Martín Chalchicuautla',
  },
  {
    code: '24030',
    departmentCode: '24',
    name: 'San Nicolás Tolentino',
  },
  {
    code: '24031',
    departmentCode: '24',
    name: 'Santa Catarina',
  },
  {
    code: '24032',
    departmentCode: '24',
    name: 'Santa María del Río',
  },
  {
    code: '24033',
    departmentCode: '24',
    name: 'Santo Domingo',
  },
  {
    code: '24034',
    departmentCode: '24',
    name: 'San Vicente Tancuayalab',
  },
  {
    code: '24035',
    departmentCode: '24',
    name: 'Soledad de Graciano Sánchez',
  },
  {
    code: '24036',
    departmentCode: '24',
    name: 'Tamasopo',
  },
  {
    code: '24037',
    departmentCode: '24',
    name: 'Tamazunchale',
  },
  {
    code: '24038',
    departmentCode: '24',
    name: 'Tampacán',
  },
  {
    code: '24039',
    departmentCode: '24',
    name: 'Tampamolón Corona',
  },
  {
    code: '24040',
    departmentCode: '24',
    name: 'Tamuín',
  },
  {
    code: '24041',
    departmentCode: '24',
    name: 'Tanlajás',
  },
  {
    code: '24042',
    departmentCode: '24',
    name: 'Tanquián de Escobedo',
  },
  {
    code: '24043',
    departmentCode: '24',
    name: 'Tierra Nueva',
  },
  {
    code: '24044',
    departmentCode: '24',
    name: 'Vanegas',
  },
  {
    code: '24045',
    departmentCode: '24',
    name: 'Venado',
  },
  {
    code: '24046',
    departmentCode: '24',
    name: 'Villa de Arriaga',
  },
  {
    code: '24047',
    departmentCode: '24',
    name: 'Villa de Guadalupe',
  },
  {
    code: '24048',
    departmentCode: '24',
    name: 'Villa de la Paz',
  },
  {
    code: '24049',
    departmentCode: '24',
    name: 'Villa de Ramos',
  },
  {
    code: '24050',
    departmentCode: '24',
    name: 'Villa de Reyes',
  },
  {
    code: '24051',
    departmentCode: '24',
    name: 'Villa Hidalgo',
  },
  {
    code: '24052',
    departmentCode: '24',
    name: 'Villa Juárez',
  },
  {
    code: '24053',
    departmentCode: '24',
    name: 'Axtla de Terrazas',
  },
  {
    code: '24054',
    departmentCode: '24',
    name: 'Xilitla',
  },
  {
    code: '24055',
    departmentCode: '24',
    name: 'Zaragoza',
  },
  {
    code: '24056',
    departmentCode: '24',
    name: 'Villa de Arista',
  },
  {
    code: '24057',
    departmentCode: '24',
    name: 'Matlapa',
  },
  {
    code: '24058',
    departmentCode: '24',
    name: 'El Naranjo',
  },
  {
    code: '24059',
    departmentCode: '24',
    name: 'Villa de Pozos',
  },
  {
    code: '25001',
    departmentCode: '25',
    name: 'Ahome',
  },
  {
    code: '25002',
    departmentCode: '25',
    name: 'Angostura',
  },
  {
    code: '25003',
    departmentCode: '25',
    name: 'Badiraguato',
  },
  {
    code: '25004',
    departmentCode: '25',
    name: 'Concordia',
  },
  {
    code: '25005',
    departmentCode: '25',
    name: 'Cosalá',
  },
  {
    code: '25006',
    departmentCode: '25',
    name: 'Culiacán',
  },
  {
    code: '25007',
    departmentCode: '25',
    name: 'Choix',
  },
  {
    code: '25008',
    departmentCode: '25',
    name: 'Elota',
  },
  {
    code: '25009',
    departmentCode: '25',
    name: 'Escuinapa',
  },
  {
    code: '25010',
    departmentCode: '25',
    name: 'El Fuerte',
  },
  {
    code: '25011',
    departmentCode: '25',
    name: 'Guasave',
  },
  {
    code: '25012',
    departmentCode: '25',
    name: 'Mazatlán',
  },
  {
    code: '25013',
    departmentCode: '25',
    name: 'Mocorito',
  },
  {
    code: '25014',
    departmentCode: '25',
    name: 'Rosario',
  },
  {
    code: '25015',
    departmentCode: '25',
    name: 'Salvador Alvarado',
  },
  {
    code: '25016',
    departmentCode: '25',
    name: 'San Ignacio',
  },
  {
    code: '25017',
    departmentCode: '25',
    name: 'Sinaloa',
  },
  {
    code: '25018',
    departmentCode: '25',
    name: 'Navolato',
  },
  {
    code: '25019',
    departmentCode: '25',
    name: 'Eldorado',
  },
  {
    code: '25020',
    departmentCode: '25',
    name: 'Juan José Ríos',
  },
  {
    code: '26001',
    departmentCode: '26',
    name: 'Aconchi',
  },
  {
    code: '26002',
    departmentCode: '26',
    name: 'Agua Prieta',
  },
  {
    code: '26003',
    departmentCode: '26',
    name: 'Álamos',
  },
  {
    code: '26004',
    departmentCode: '26',
    name: 'Altar',
  },
  {
    code: '26005',
    departmentCode: '26',
    name: 'Arivechi',
  },
  {
    code: '26006',
    departmentCode: '26',
    name: 'Arizpe',
  },
  {
    code: '26007',
    departmentCode: '26',
    name: 'Atil',
  },
  {
    code: '26008',
    departmentCode: '26',
    name: 'Bacadéhuachi',
  },
  {
    code: '26009',
    departmentCode: '26',
    name: 'Bacanora',
  },
  {
    code: '26010',
    departmentCode: '26',
    name: 'Bacerac',
  },
  {
    code: '26011',
    departmentCode: '26',
    name: 'Bacoachi',
  },
  {
    code: '26012',
    departmentCode: '26',
    name: 'Bácum',
  },
  {
    code: '26013',
    departmentCode: '26',
    name: 'Banámichi',
  },
  {
    code: '26014',
    departmentCode: '26',
    name: 'Baviácora',
  },
  {
    code: '26015',
    departmentCode: '26',
    name: 'Bavispe',
  },
  {
    code: '26016',
    departmentCode: '26',
    name: 'Benjamín Hill',
  },
  {
    code: '26017',
    departmentCode: '26',
    name: 'Caborca',
  },
  {
    code: '26018',
    departmentCode: '26',
    name: 'Cajeme',
  },
  {
    code: '26019',
    departmentCode: '26',
    name: 'Cananea',
  },
  {
    code: '26020',
    departmentCode: '26',
    name: 'Carbó',
  },
  {
    code: '26021',
    departmentCode: '26',
    name: 'La Colorada',
  },
  {
    code: '26022',
    departmentCode: '26',
    name: 'Cucurpe',
  },
  {
    code: '26023',
    departmentCode: '26',
    name: 'Cumpas',
  },
  {
    code: '26024',
    departmentCode: '26',
    name: 'Divisaderos',
  },
  {
    code: '26025',
    departmentCode: '26',
    name: 'Empalme',
  },
  {
    code: '26026',
    departmentCode: '26',
    name: 'Etchojoa',
  },
  {
    code: '26027',
    departmentCode: '26',
    name: 'Fronteras',
  },
  {
    code: '26028',
    departmentCode: '26',
    name: 'Granados',
  },
  {
    code: '26029',
    departmentCode: '26',
    name: 'Guaymas',
  },
  {
    code: '26030',
    departmentCode: '26',
    name: 'Hermosillo',
  },
  {
    code: '26031',
    departmentCode: '26',
    name: 'Huachinera',
  },
  {
    code: '26032',
    departmentCode: '26',
    name: 'Huásabas',
  },
  {
    code: '26033',
    departmentCode: '26',
    name: 'Huatabampo',
  },
  {
    code: '26034',
    departmentCode: '26',
    name: 'Huépac',
  },
  {
    code: '26035',
    departmentCode: '26',
    name: 'Imuris',
  },
  {
    code: '26036',
    departmentCode: '26',
    name: 'Magdalena',
  },
  {
    code: '26037',
    departmentCode: '26',
    name: 'Mazatán',
  },
  {
    code: '26038',
    departmentCode: '26',
    name: 'Moctezuma',
  },
  {
    code: '26039',
    departmentCode: '26',
    name: 'Naco',
  },
  {
    code: '26040',
    departmentCode: '26',
    name: 'Nácori Chico',
  },
  {
    code: '26041',
    departmentCode: '26',
    name: 'Nacozari de García',
  },
  {
    code: '26042',
    departmentCode: '26',
    name: 'Navojoa',
  },
  {
    code: '26043',
    departmentCode: '26',
    name: 'Nogales',
  },
  {
    code: '26044',
    departmentCode: '26',
    name: 'Ónavas',
  },
  {
    code: '26045',
    departmentCode: '26',
    name: 'Opodepe',
  },
  {
    code: '26046',
    departmentCode: '26',
    name: 'Oquitoa',
  },
  {
    code: '26047',
    departmentCode: '26',
    name: 'Pitiquito',
  },
  {
    code: '26048',
    departmentCode: '26',
    name: 'Puerto Peñasco',
  },
  {
    code: '26049',
    departmentCode: '26',
    name: 'Quiriego',
  },
  {
    code: '26050',
    departmentCode: '26',
    name: 'Rayón',
  },
  {
    code: '26051',
    departmentCode: '26',
    name: 'Rosario',
  },
  {
    code: '26052',
    departmentCode: '26',
    name: 'Sahuaripa',
  },
  {
    code: '26053',
    departmentCode: '26',
    name: 'San Felipe de Jesús',
  },
  {
    code: '26054',
    departmentCode: '26',
    name: 'San Javier',
  },
  {
    code: '26055',
    departmentCode: '26',
    name: 'San Luis Río Colorado',
  },
  {
    code: '26056',
    departmentCode: '26',
    name: 'San Miguel de Horcasitas',
  },
  {
    code: '26057',
    departmentCode: '26',
    name: 'San Pedro de la Cueva',
  },
  {
    code: '26058',
    departmentCode: '26',
    name: 'Santa Ana',
  },
  {
    code: '26059',
    departmentCode: '26',
    name: 'Santa Cruz',
  },
  {
    code: '26060',
    departmentCode: '26',
    name: 'Sáric',
  },
  {
    code: '26061',
    departmentCode: '26',
    name: 'Soyopa',
  },
  {
    code: '26062',
    departmentCode: '26',
    name: 'Suaqui Grande',
  },
  {
    code: '26063',
    departmentCode: '26',
    name: 'Tepache',
  },
  {
    code: '26064',
    departmentCode: '26',
    name: 'Trincheras',
  },
  {
    code: '26065',
    departmentCode: '26',
    name: 'Tubutama',
  },
  {
    code: '26066',
    departmentCode: '26',
    name: 'Ures',
  },
  {
    code: '26067',
    departmentCode: '26',
    name: 'Villa Hidalgo',
  },
  {
    code: '26068',
    departmentCode: '26',
    name: 'Villa Pesqueira',
  },
  {
    code: '26069',
    departmentCode: '26',
    name: 'Yécora',
  },
  {
    code: '26070',
    departmentCode: '26',
    name: 'General Plutarco Elías Calles',
  },
  {
    code: '26071',
    departmentCode: '26',
    name: 'Benito Juárez',
  },
  {
    code: '26072',
    departmentCode: '26',
    name: 'San Ignacio Río Muerto',
  },
  {
    code: '27001',
    departmentCode: '27',
    name: 'Balancán',
  },
  {
    code: '27002',
    departmentCode: '27',
    name: 'Cárdenas',
  },
  {
    code: '27003',
    departmentCode: '27',
    name: 'Centla',
  },
  {
    code: '27004',
    departmentCode: '27',
    name: 'Centro',
  },
  {
    code: '27005',
    departmentCode: '27',
    name: 'Comalcalco',
  },
  {
    code: '27006',
    departmentCode: '27',
    name: 'Cunduacán',
  },
  {
    code: '27007',
    departmentCode: '27',
    name: 'Emiliano Zapata',
  },
  {
    code: '27008',
    departmentCode: '27',
    name: 'Huimanguillo',
  },
  {
    code: '27009',
    departmentCode: '27',
    name: 'Jalapa',
  },
  {
    code: '27010',
    departmentCode: '27',
    name: 'Jalpa de Méndez',
  },
  {
    code: '27011',
    departmentCode: '27',
    name: 'Jonuta',
  },
  {
    code: '27012',
    departmentCode: '27',
    name: 'Macuspana',
  },
  {
    code: '27013',
    departmentCode: '27',
    name: 'Nacajuca',
  },
  {
    code: '27014',
    departmentCode: '27',
    name: 'Paraíso',
  },
  {
    code: '27015',
    departmentCode: '27',
    name: 'Tacotalpa',
  },
  {
    code: '27016',
    departmentCode: '27',
    name: 'Teapa',
  },
  {
    code: '27017',
    departmentCode: '27',
    name: 'Tenosique',
  },
  {
    code: '28001',
    departmentCode: '28',
    name: 'Abasolo',
  },
  {
    code: '28002',
    departmentCode: '28',
    name: 'Aldama',
  },
  {
    code: '28003',
    departmentCode: '28',
    name: 'Altamira',
  },
  {
    code: '28004',
    departmentCode: '28',
    name: 'Antiguo Morelos',
  },
  {
    code: '28005',
    departmentCode: '28',
    name: 'Burgos',
  },
  {
    code: '28006',
    departmentCode: '28',
    name: 'Bustamante',
  },
  {
    code: '28007',
    departmentCode: '28',
    name: 'Camargo',
  },
  {
    code: '28008',
    departmentCode: '28',
    name: 'Casas',
  },
  {
    code: '28009',
    departmentCode: '28',
    name: 'Ciudad Madero',
  },
  {
    code: '28010',
    departmentCode: '28',
    name: 'Cruillas',
  },
  {
    code: '28011',
    departmentCode: '28',
    name: 'Gómez Farías',
  },
  {
    code: '28012',
    departmentCode: '28',
    name: 'González',
  },
  {
    code: '28013',
    departmentCode: '28',
    name: 'Güémez',
  },
  {
    code: '28014',
    departmentCode: '28',
    name: 'Guerrero',
  },
  {
    code: '28015',
    departmentCode: '28',
    name: 'Gustavo Díaz Ordaz',
  },
  {
    code: '28016',
    departmentCode: '28',
    name: 'Hidalgo',
  },
  {
    code: '28017',
    departmentCode: '28',
    name: 'Jaumave',
  },
  {
    code: '28018',
    departmentCode: '28',
    name: 'Jiménez',
  },
  {
    code: '28019',
    departmentCode: '28',
    name: 'Llera',
  },
  {
    code: '28020',
    departmentCode: '28',
    name: 'Mainero',
  },
  {
    code: '28021',
    departmentCode: '28',
    name: 'El Mante',
  },
  {
    code: '28022',
    departmentCode: '28',
    name: 'Matamoros',
  },
  {
    code: '28023',
    departmentCode: '28',
    name: 'Méndez',
  },
  {
    code: '28024',
    departmentCode: '28',
    name: 'Mier',
  },
  {
    code: '28025',
    departmentCode: '28',
    name: 'Miguel Alemán',
  },
  {
    code: '28026',
    departmentCode: '28',
    name: 'Miquihuana',
  },
  {
    code: '28027',
    departmentCode: '28',
    name: 'Nuevo Laredo',
  },
  {
    code: '28028',
    departmentCode: '28',
    name: 'Nuevo Morelos',
  },
  {
    code: '28029',
    departmentCode: '28',
    name: 'Ocampo',
  },
  {
    code: '28030',
    departmentCode: '28',
    name: 'Padilla',
  },
  {
    code: '28031',
    departmentCode: '28',
    name: 'Palmillas',
  },
  {
    code: '28032',
    departmentCode: '28',
    name: 'Reynosa',
  },
  {
    code: '28033',
    departmentCode: '28',
    name: 'Río Bravo',
  },
  {
    code: '28034',
    departmentCode: '28',
    name: 'San Carlos',
  },
  {
    code: '28035',
    departmentCode: '28',
    name: 'San Fernando',
  },
  {
    code: '28036',
    departmentCode: '28',
    name: 'San Nicolás',
  },
  {
    code: '28037',
    departmentCode: '28',
    name: 'Soto la Marina',
  },
  {
    code: '28038',
    departmentCode: '28',
    name: 'Tampico',
  },
  {
    code: '28039',
    departmentCode: '28',
    name: 'Tula',
  },
  {
    code: '28040',
    departmentCode: '28',
    name: 'Valle Hermoso',
  },
  {
    code: '28041',
    departmentCode: '28',
    name: 'Victoria',
  },
  {
    code: '28042',
    departmentCode: '28',
    name: 'Villagrán',
  },
  {
    code: '28043',
    departmentCode: '28',
    name: 'Xicoténcatl',
  },
  {
    code: '29001',
    departmentCode: '29',
    name: 'Amaxac de Guerrero',
  },
  {
    code: '29002',
    departmentCode: '29',
    name: 'Apetatitlán de Antonio Carvajal',
  },
  {
    code: '29003',
    departmentCode: '29',
    name: 'Atlangatepec',
  },
  {
    code: '29004',
    departmentCode: '29',
    name: 'Atltzayanca',
  },
  {
    code: '29005',
    departmentCode: '29',
    name: 'Apizaco',
  },
  {
    code: '29006',
    departmentCode: '29',
    name: 'Calpulalpan',
  },
  {
    code: '29007',
    departmentCode: '29',
    name: 'El Carmen Tequexquitla',
  },
  {
    code: '29008',
    departmentCode: '29',
    name: 'Cuapiaxtla',
  },
  {
    code: '29009',
    departmentCode: '29',
    name: 'Cuaxomulco',
  },
  {
    code: '29010',
    departmentCode: '29',
    name: 'Chiautempan',
  },
  {
    code: '29011',
    departmentCode: '29',
    name: 'Muñoz de Domingo Arenas',
  },
  {
    code: '29012',
    departmentCode: '29',
    name: 'Españita',
  },
  {
    code: '29013',
    departmentCode: '29',
    name: 'Huamantla',
  },
  {
    code: '29014',
    departmentCode: '29',
    name: 'Hueyotlipan',
  },
  {
    code: '29015',
    departmentCode: '29',
    name: 'Ixtacuixtla de Mariano Matamoros',
  },
  {
    code: '29016',
    departmentCode: '29',
    name: 'Ixtenco',
  },
  {
    code: '29017',
    departmentCode: '29',
    name: 'Mazatecochco de José María Morelos',
  },
  {
    code: '29018',
    departmentCode: '29',
    name: 'Contla de Juan Cuamatzi',
  },
  {
    code: '29019',
    departmentCode: '29',
    name: 'Tepetitla de Lardizábal',
  },
  {
    code: '29020',
    departmentCode: '29',
    name: 'Sanctórum de Lázaro Cárdenas',
  },
  {
    code: '29021',
    departmentCode: '29',
    name: 'Nanacamilpa de Mariano Arista',
  },
  {
    code: '29022',
    departmentCode: '29',
    name: 'Acuamanala de Miguel Hidalgo',
  },
  {
    code: '29023',
    departmentCode: '29',
    name: 'Natívitas',
  },
  {
    code: '29024',
    departmentCode: '29',
    name: 'Panotla',
  },
  {
    code: '29025',
    departmentCode: '29',
    name: 'San Pablo del Monte',
  },
  {
    code: '29026',
    departmentCode: '29',
    name: 'Santa Cruz Tlaxcala',
  },
  {
    code: '29027',
    departmentCode: '29',
    name: 'Tenancingo',
  },
  {
    code: '29028',
    departmentCode: '29',
    name: 'Teolocholco',
  },
  {
    code: '29029',
    departmentCode: '29',
    name: 'Tepeyanco',
  },
  {
    code: '29030',
    departmentCode: '29',
    name: 'Terrenate',
  },
  {
    code: '29031',
    departmentCode: '29',
    name: 'Tetla de la Solidaridad',
  },
  {
    code: '29032',
    departmentCode: '29',
    name: 'Tetlatlahuca',
  },
  {
    code: '29033',
    departmentCode: '29',
    name: 'Tlaxcala',
  },
  {
    code: '29034',
    departmentCode: '29',
    name: 'Tlaxco',
  },
  {
    code: '29035',
    departmentCode: '29',
    name: 'Tocatlán',
  },
  {
    code: '29036',
    departmentCode: '29',
    name: 'Totolac',
  },
  {
    code: '29037',
    departmentCode: '29',
    name: 'Ziltlaltépec de Trinidad Sánchez Santos',
  },
  {
    code: '29038',
    departmentCode: '29',
    name: 'Tzompantepec',
  },
  {
    code: '29039',
    departmentCode: '29',
    name: 'Xaloztoc',
  },
  {
    code: '29040',
    departmentCode: '29',
    name: 'Xaltocan',
  },
  {
    code: '29041',
    departmentCode: '29',
    name: 'Papalotla de Xicohténcatl',
  },
  {
    code: '29042',
    departmentCode: '29',
    name: 'Xicohtzinco',
  },
  {
    code: '29043',
    departmentCode: '29',
    name: 'Yauhquemehcan',
  },
  {
    code: '29044',
    departmentCode: '29',
    name: 'Zacatelco',
  },
  {
    code: '29045',
    departmentCode: '29',
    name: 'Benito Juárez',
  },
  {
    code: '29046',
    departmentCode: '29',
    name: 'Emiliano Zapata',
  },
  {
    code: '29047',
    departmentCode: '29',
    name: 'Lázaro Cárdenas',
  },
  {
    code: '29048',
    departmentCode: '29',
    name: 'La Magdalena Tlaltelulco',
  },
  {
    code: '29049',
    departmentCode: '29',
    name: 'San Damián Texóloc',
  },
  {
    code: '29050',
    departmentCode: '29',
    name: 'San Francisco Tetlanohcan',
  },
  {
    code: '29051',
    departmentCode: '29',
    name: 'San Jerónimo Zacualpan',
  },
  {
    code: '29052',
    departmentCode: '29',
    name: 'San José Teacalco',
  },
  {
    code: '29053',
    departmentCode: '29',
    name: 'San Juan Huactzinco',
  },
  {
    code: '29054',
    departmentCode: '29',
    name: 'San Lorenzo Axocomanitla',
  },
  {
    code: '29055',
    departmentCode: '29',
    name: 'San Lucas Tecopilco',
  },
  {
    code: '29056',
    departmentCode: '29',
    name: 'Santa Ana Nopalucan',
  },
  {
    code: '29057',
    departmentCode: '29',
    name: 'Santa Apolonia Teacalco',
  },
  {
    code: '29058',
    departmentCode: '29',
    name: 'Santa Catarina Ayometla',
  },
  {
    code: '29059',
    departmentCode: '29',
    name: 'Santa Cruz Quilehtla',
  },
  {
    code: '29060',
    departmentCode: '29',
    name: 'Santa Isabel Xiloxoxtla',
  },
  {
    code: '30001',
    departmentCode: '30',
    name: 'Acajete',
  },
  {
    code: '30002',
    departmentCode: '30',
    name: 'Acatlán',
  },
  {
    code: '30003',
    departmentCode: '30',
    name: 'Acayucan',
  },
  {
    code: '30004',
    departmentCode: '30',
    name: 'Actopan',
  },
  {
    code: '30005',
    departmentCode: '30',
    name: 'Acula',
  },
  {
    code: '30006',
    departmentCode: '30',
    name: 'Acultzingo',
  },
  {
    code: '30007',
    departmentCode: '30',
    name: 'Camarón de Tejeda',
  },
  {
    code: '30008',
    departmentCode: '30',
    name: 'Alpatláhuac',
  },
  {
    code: '30009',
    departmentCode: '30',
    name: 'Alto Lucero de Gutiérrez Barrios',
  },
  {
    code: '30010',
    departmentCode: '30',
    name: 'Altotonga',
  },
  {
    code: '30011',
    departmentCode: '30',
    name: 'Alvarado',
  },
  {
    code: '30012',
    departmentCode: '30',
    name: 'Amatitlán',
  },
  {
    code: '30013',
    departmentCode: '30',
    name: 'Naranjos Amatlán',
  },
  {
    code: '30014',
    departmentCode: '30',
    name: 'Amatlán de los Reyes',
  },
  {
    code: '30015',
    departmentCode: '30',
    name: 'Angel R. Cabada',
  },
  {
    code: '30016',
    departmentCode: '30',
    name: 'La Antigua',
  },
  {
    code: '30017',
    departmentCode: '30',
    name: 'Apazapan',
  },
  {
    code: '30018',
    departmentCode: '30',
    name: 'Aquila',
  },
  {
    code: '30019',
    departmentCode: '30',
    name: 'Astacinga',
  },
  {
    code: '30020',
    departmentCode: '30',
    name: 'Atlahuilco',
  },
  {
    code: '30021',
    departmentCode: '30',
    name: 'Atoyac',
  },
  {
    code: '30022',
    departmentCode: '30',
    name: 'Atzacan',
  },
  {
    code: '30023',
    departmentCode: '30',
    name: 'Atzalan',
  },
  {
    code: '30024',
    departmentCode: '30',
    name: 'Tlaltetela',
  },
  {
    code: '30025',
    departmentCode: '30',
    name: 'Ayahualulco',
  },
  {
    code: '30026',
    departmentCode: '30',
    name: 'Banderilla',
  },
  {
    code: '30027',
    departmentCode: '30',
    name: 'Benito Juárez',
  },
  {
    code: '30028',
    departmentCode: '30',
    name: 'Boca del Río',
  },
  {
    code: '30029',
    departmentCode: '30',
    name: 'Calcahualco',
  },
  {
    code: '30030',
    departmentCode: '30',
    name: 'Camerino Z. Mendoza',
  },
  {
    code: '30031',
    departmentCode: '30',
    name: 'Carrillo Puerto',
  },
  {
    code: '30032',
    departmentCode: '30',
    name: 'Catemaco',
  },
  {
    code: '30033',
    departmentCode: '30',
    name: 'Cazones de Herrera',
  },
  {
    code: '30034',
    departmentCode: '30',
    name: 'Cerro Azul',
  },
  {
    code: '30035',
    departmentCode: '30',
    name: 'Citlaltépetl',
  },
  {
    code: '30036',
    departmentCode: '30',
    name: 'Coacoatzintla',
  },
  {
    code: '30037',
    departmentCode: '30',
    name: 'Coahuitlán',
  },
  {
    code: '30038',
    departmentCode: '30',
    name: 'Coatepec',
  },
  {
    code: '30039',
    departmentCode: '30',
    name: 'Coatzacoalcos',
  },
  {
    code: '30040',
    departmentCode: '30',
    name: 'Coatzintla',
  },
  {
    code: '30041',
    departmentCode: '30',
    name: 'Coetzala',
  },
  {
    code: '30042',
    departmentCode: '30',
    name: 'Colipa',
  },
  {
    code: '30043',
    departmentCode: '30',
    name: 'Comapa',
  },
  {
    code: '30044',
    departmentCode: '30',
    name: 'Córdoba',
  },
  {
    code: '30045',
    departmentCode: '30',
    name: 'Cosamaloapan de Carpio',
  },
  {
    code: '30046',
    departmentCode: '30',
    name: 'Cosautlán de Carvajal',
  },
  {
    code: '30047',
    departmentCode: '30',
    name: 'Coscomatepec',
  },
  {
    code: '30048',
    departmentCode: '30',
    name: 'Cosoleacaque',
  },
  {
    code: '30049',
    departmentCode: '30',
    name: 'Cotaxtla',
  },
  {
    code: '30050',
    departmentCode: '30',
    name: 'Coxquihui',
  },
  {
    code: '30051',
    departmentCode: '30',
    name: 'Coyutla',
  },
  {
    code: '30052',
    departmentCode: '30',
    name: 'Cuichapa',
  },
  {
    code: '30053',
    departmentCode: '30',
    name: 'Cuitláhuac',
  },
  {
    code: '30054',
    departmentCode: '30',
    name: 'Chacaltianguis',
  },
  {
    code: '30055',
    departmentCode: '30',
    name: 'Chalma',
  },
  {
    code: '30056',
    departmentCode: '30',
    name: 'Chiconamel',
  },
  {
    code: '30057',
    departmentCode: '30',
    name: 'Chiconquiaco',
  },
  {
    code: '30058',
    departmentCode: '30',
    name: 'Chicontepec',
  },
  {
    code: '30059',
    departmentCode: '30',
    name: 'Chinameca',
  },
  {
    code: '30060',
    departmentCode: '30',
    name: 'Chinampa de Gorostiza',
  },
  {
    code: '30061',
    departmentCode: '30',
    name: 'Las Choapas',
  },
  {
    code: '30062',
    departmentCode: '30',
    name: 'Chocamán',
  },
  {
    code: '30063',
    departmentCode: '30',
    name: 'Chontla',
  },
  {
    code: '30064',
    departmentCode: '30',
    name: 'Chumatlán',
  },
  {
    code: '30065',
    departmentCode: '30',
    name: 'Emiliano Zapata',
  },
  {
    code: '30066',
    departmentCode: '30',
    name: 'Espinal',
  },
  {
    code: '30067',
    departmentCode: '30',
    name: 'Filomeno Mata',
  },
  {
    code: '30068',
    departmentCode: '30',
    name: 'Fortín',
  },
  {
    code: '30069',
    departmentCode: '30',
    name: 'Gutiérrez Zamora',
  },
  {
    code: '30070',
    departmentCode: '30',
    name: 'Hidalgotitlán',
  },
  {
    code: '30071',
    departmentCode: '30',
    name: 'Huatusco',
  },
  {
    code: '30072',
    departmentCode: '30',
    name: 'Huayacocotla',
  },
  {
    code: '30073',
    departmentCode: '30',
    name: 'Hueyapan de Ocampo',
  },
  {
    code: '30074',
    departmentCode: '30',
    name: 'Huiloapan de Cuauhtémoc',
  },
  {
    code: '30075',
    departmentCode: '30',
    name: 'Ignacio de la Llave',
  },
  {
    code: '30076',
    departmentCode: '30',
    name: 'Ilamatlán',
  },
  {
    code: '30077',
    departmentCode: '30',
    name: 'Isla',
  },
  {
    code: '30078',
    departmentCode: '30',
    name: 'Ixcatepec',
  },
  {
    code: '30079',
    departmentCode: '30',
    name: 'Ixhuacán de los Reyes',
  },
  {
    code: '30080',
    departmentCode: '30',
    name: 'Ixhuatlán del Café',
  },
  {
    code: '30081',
    departmentCode: '30',
    name: 'Ixhuatlancillo',
  },
  {
    code: '30082',
    departmentCode: '30',
    name: 'Ixhuatlán del Sureste',
  },
  {
    code: '30083',
    departmentCode: '30',
    name: 'Ixhuatlán de Madero',
  },
  {
    code: '30084',
    departmentCode: '30',
    name: 'Ixmatlahuacan',
  },
  {
    code: '30085',
    departmentCode: '30',
    name: 'Ixtaczoquitlán',
  },
  {
    code: '30086',
    departmentCode: '30',
    name: 'Jalacingo',
  },
  {
    code: '30087',
    departmentCode: '30',
    name: 'Xalapa',
  },
  {
    code: '30088',
    departmentCode: '30',
    name: 'Jalcomulco',
  },
  {
    code: '30089',
    departmentCode: '30',
    name: 'Jáltipan',
  },
  {
    code: '30090',
    departmentCode: '30',
    name: 'Jamapa',
  },
  {
    code: '30091',
    departmentCode: '30',
    name: 'Jesús Carranza',
  },
  {
    code: '30092',
    departmentCode: '30',
    name: 'Xico',
  },
  {
    code: '30093',
    departmentCode: '30',
    name: 'Jilotepec',
  },
  {
    code: '30094',
    departmentCode: '30',
    name: 'Juan Rodríguez Clara',
  },
  {
    code: '30095',
    departmentCode: '30',
    name: 'Juchique de Ferrer',
  },
  {
    code: '30096',
    departmentCode: '30',
    name: 'Landero y Coss',
  },
  {
    code: '30097',
    departmentCode: '30',
    name: 'Lerdo de Tejada',
  },
  {
    code: '30098',
    departmentCode: '30',
    name: 'Magdalena',
  },
  {
    code: '30099',
    departmentCode: '30',
    name: 'Maltrata',
  },
  {
    code: '30100',
    departmentCode: '30',
    name: 'Manlio Fabio Altamirano',
  },
  {
    code: '30101',
    departmentCode: '30',
    name: 'Mariano Escobedo',
  },
  {
    code: '30102',
    departmentCode: '30',
    name: 'Martínez de la Torre',
  },
  {
    code: '30103',
    departmentCode: '30',
    name: 'Mecatlán',
  },
  {
    code: '30104',
    departmentCode: '30',
    name: 'Mecayapan',
  },
  {
    code: '30105',
    departmentCode: '30',
    name: 'Medellín de Bravo',
  },
  {
    code: '30106',
    departmentCode: '30',
    name: 'Miahuatlán',
  },
  {
    code: '30107',
    departmentCode: '30',
    name: 'Las Minas',
  },
  {
    code: '30108',
    departmentCode: '30',
    name: 'Minatitlán',
  },
  {
    code: '30109',
    departmentCode: '30',
    name: 'Misantla',
  },
  {
    code: '30110',
    departmentCode: '30',
    name: 'Mixtla de Altamirano',
  },
  {
    code: '30111',
    departmentCode: '30',
    name: 'Moloacán',
  },
  {
    code: '30112',
    departmentCode: '30',
    name: 'Naolinco',
  },
  {
    code: '30113',
    departmentCode: '30',
    name: 'Naranjal',
  },
  {
    code: '30114',
    departmentCode: '30',
    name: 'Nautla',
  },
  {
    code: '30115',
    departmentCode: '30',
    name: 'Nogales',
  },
  {
    code: '30116',
    departmentCode: '30',
    name: 'Oluta',
  },
  {
    code: '30117',
    departmentCode: '30',
    name: 'Omealca',
  },
  {
    code: '30118',
    departmentCode: '30',
    name: 'Orizaba',
  },
  {
    code: '30119',
    departmentCode: '30',
    name: 'Otatitlán',
  },
  {
    code: '30120',
    departmentCode: '30',
    name: 'Oteapan',
  },
  {
    code: '30121',
    departmentCode: '30',
    name: 'Ozuluama de Mascareñas',
  },
  {
    code: '30122',
    departmentCode: '30',
    name: 'Pajapan',
  },
  {
    code: '30123',
    departmentCode: '30',
    name: 'Pánuco',
  },
  {
    code: '30124',
    departmentCode: '30',
    name: 'Papantla',
  },
  {
    code: '30125',
    departmentCode: '30',
    name: 'Paso del Macho',
  },
  {
    code: '30126',
    departmentCode: '30',
    name: 'Paso de Ovejas',
  },
  {
    code: '30127',
    departmentCode: '30',
    name: 'La Perla',
  },
  {
    code: '30128',
    departmentCode: '30',
    name: 'Perote',
  },
  {
    code: '30129',
    departmentCode: '30',
    name: 'Platón Sánchez',
  },
  {
    code: '30130',
    departmentCode: '30',
    name: 'Playa Vicente',
  },
  {
    code: '30131',
    departmentCode: '30',
    name: 'Poza Rica de Hidalgo',
  },
  {
    code: '30132',
    departmentCode: '30',
    name: 'Las Vigas de Ramírez',
  },
  {
    code: '30133',
    departmentCode: '30',
    name: 'Pueblo Viejo',
  },
  {
    code: '30134',
    departmentCode: '30',
    name: 'Puente Nacional',
  },
  {
    code: '30135',
    departmentCode: '30',
    name: 'Rafael Delgado',
  },
  {
    code: '30136',
    departmentCode: '30',
    name: 'Rafael Lucio',
  },
  {
    code: '30137',
    departmentCode: '30',
    name: 'Los Reyes',
  },
  {
    code: '30138',
    departmentCode: '30',
    name: 'Río Blanco',
  },
  {
    code: '30139',
    departmentCode: '30',
    name: 'Saltabarranca',
  },
  {
    code: '30140',
    departmentCode: '30',
    name: 'San Andrés Tenejapan',
  },
  {
    code: '30141',
    departmentCode: '30',
    name: 'San Andrés Tuxtla',
  },
  {
    code: '30142',
    departmentCode: '30',
    name: 'San Juan Evangelista',
  },
  {
    code: '30143',
    departmentCode: '30',
    name: 'Santiago Tuxtla',
  },
  {
    code: '30144',
    departmentCode: '30',
    name: 'Sayula de Alemán',
  },
  {
    code: '30145',
    departmentCode: '30',
    name: 'Soconusco',
  },
  {
    code: '30146',
    departmentCode: '30',
    name: 'Sochiapa',
  },
  {
    code: '30147',
    departmentCode: '30',
    name: 'Soledad Atzompa',
  },
  {
    code: '30148',
    departmentCode: '30',
    name: 'Soledad de Doblado',
  },
  {
    code: '30149',
    departmentCode: '30',
    name: 'Soteapan',
  },
  {
    code: '30150',
    departmentCode: '30',
    name: 'Tamalín',
  },
  {
    code: '30151',
    departmentCode: '30',
    name: 'Tamiahua',
  },
  {
    code: '30152',
    departmentCode: '30',
    name: 'Tampico Alto',
  },
  {
    code: '30153',
    departmentCode: '30',
    name: 'Tancoco',
  },
  {
    code: '30154',
    departmentCode: '30',
    name: 'Tantima',
  },
  {
    code: '30155',
    departmentCode: '30',
    name: 'Tantoyuca',
  },
  {
    code: '30156',
    departmentCode: '30',
    name: 'Tatatila',
  },
  {
    code: '30157',
    departmentCode: '30',
    name: 'Castillo de Teayo',
  },
  {
    code: '30158',
    departmentCode: '30',
    name: 'Tecolutla',
  },
  {
    code: '30159',
    departmentCode: '30',
    name: 'Tehuipango',
  },
  {
    code: '30160',
    departmentCode: '30',
    name: 'Álamo Temapache',
  },
  {
    code: '30161',
    departmentCode: '30',
    name: 'Tempoal',
  },
  {
    code: '30162',
    departmentCode: '30',
    name: 'Tenampa',
  },
  {
    code: '30163',
    departmentCode: '30',
    name: 'Tenochtitlán',
  },
  {
    code: '30164',
    departmentCode: '30',
    name: 'Teocelo',
  },
  {
    code: '30165',
    departmentCode: '30',
    name: 'Tepatlaxco',
  },
  {
    code: '30166',
    departmentCode: '30',
    name: 'Tepetlán',
  },
  {
    code: '30167',
    departmentCode: '30',
    name: 'Tepetzintla',
  },
  {
    code: '30168',
    departmentCode: '30',
    name: 'Tequila',
  },
  {
    code: '30169',
    departmentCode: '30',
    name: 'José Azueta',
  },
  {
    code: '30170',
    departmentCode: '30',
    name: 'Texcatepec',
  },
  {
    code: '30171',
    departmentCode: '30',
    name: 'Texhuacán',
  },
  {
    code: '30172',
    departmentCode: '30',
    name: 'Texistepec',
  },
  {
    code: '30173',
    departmentCode: '30',
    name: 'Tezonapa',
  },
  {
    code: '30174',
    departmentCode: '30',
    name: 'Tierra Blanca',
  },
  {
    code: '30175',
    departmentCode: '30',
    name: 'Tihuatlán',
  },
  {
    code: '30176',
    departmentCode: '30',
    name: 'Tlacojalpan',
  },
  {
    code: '30177',
    departmentCode: '30',
    name: 'Tlacolulan',
  },
  {
    code: '30178',
    departmentCode: '30',
    name: 'Tlacotalpan',
  },
  {
    code: '30179',
    departmentCode: '30',
    name: 'Tlacotepec de Mejía',
  },
  {
    code: '30180',
    departmentCode: '30',
    name: 'Tlachichilco',
  },
  {
    code: '30181',
    departmentCode: '30',
    name: 'Tlalixcoyan',
  },
  {
    code: '30182',
    departmentCode: '30',
    name: 'Tlalnelhuayocan',
  },
  {
    code: '30183',
    departmentCode: '30',
    name: 'Tlapacoyan',
  },
  {
    code: '30184',
    departmentCode: '30',
    name: 'Tlaquilpa',
  },
  {
    code: '30185',
    departmentCode: '30',
    name: 'Tlilapan',
  },
  {
    code: '30186',
    departmentCode: '30',
    name: 'Tomatlán',
  },
  {
    code: '30187',
    departmentCode: '30',
    name: 'Tonayán',
  },
  {
    code: '30188',
    departmentCode: '30',
    name: 'Totutla',
  },
  {
    code: '30189',
    departmentCode: '30',
    name: 'Tuxpan',
  },
  {
    code: '30190',
    departmentCode: '30',
    name: 'Tuxtilla',
  },
  {
    code: '30191',
    departmentCode: '30',
    name: 'Ursulo Galván',
  },
  {
    code: '30192',
    departmentCode: '30',
    name: 'Vega de Alatorre',
  },
  {
    code: '30193',
    departmentCode: '30',
    name: 'Veracruz',
  },
  {
    code: '30194',
    departmentCode: '30',
    name: 'Villa Aldama',
  },
  {
    code: '30195',
    departmentCode: '30',
    name: 'Xoxocotla',
  },
  {
    code: '30196',
    departmentCode: '30',
    name: 'Yanga',
  },
  {
    code: '30197',
    departmentCode: '30',
    name: 'Yecuatla',
  },
  {
    code: '30198',
    departmentCode: '30',
    name: 'Zacualpan',
  },
  {
    code: '30199',
    departmentCode: '30',
    name: 'Zaragoza',
  },
  {
    code: '30200',
    departmentCode: '30',
    name: 'Zentla',
  },
  {
    code: '30201',
    departmentCode: '30',
    name: 'Zongolica',
  },
  {
    code: '30202',
    departmentCode: '30',
    name: 'Zontecomatlán de López y Fuentes',
  },
  {
    code: '30203',
    departmentCode: '30',
    name: 'Zozocolco de Hidalgo',
  },
  {
    code: '30204',
    departmentCode: '30',
    name: 'Agua Dulce',
  },
  {
    code: '30205',
    departmentCode: '30',
    name: 'El Higo',
  },
  {
    code: '30206',
    departmentCode: '30',
    name: 'Nanchital de Lázaro Cárdenas del Río',
  },
  {
    code: '30207',
    departmentCode: '30',
    name: 'Tres Valles',
  },
  {
    code: '30208',
    departmentCode: '30',
    name: 'Carlos A. Carrillo',
  },
  {
    code: '30209',
    departmentCode: '30',
    name: 'Tatahuicapan de Juárez',
  },
  {
    code: '30210',
    departmentCode: '30',
    name: 'Uxpanapa',
  },
  {
    code: '30211',
    departmentCode: '30',
    name: 'San Rafael',
  },
  {
    code: '30212',
    departmentCode: '30',
    name: 'Santiago Sochiapan',
  },
  {
    code: '31001',
    departmentCode: '31',
    name: 'Abalá',
  },
  {
    code: '31002',
    departmentCode: '31',
    name: 'Acanceh',
  },
  {
    code: '31003',
    departmentCode: '31',
    name: 'Akil',
  },
  {
    code: '31004',
    departmentCode: '31',
    name: 'Baca',
  },
  {
    code: '31005',
    departmentCode: '31',
    name: 'Bokobá',
  },
  {
    code: '31006',
    departmentCode: '31',
    name: 'Buctzotz',
  },
  {
    code: '31007',
    departmentCode: '31',
    name: 'Cacalchén',
  },
  {
    code: '31008',
    departmentCode: '31',
    name: 'Calotmul',
  },
  {
    code: '31009',
    departmentCode: '31',
    name: 'Cansahcab',
  },
  {
    code: '31010',
    departmentCode: '31',
    name: 'Cantamayec',
  },
  {
    code: '31011',
    departmentCode: '31',
    name: 'Celestún',
  },
  {
    code: '31012',
    departmentCode: '31',
    name: 'Cenotillo',
  },
  {
    code: '31013',
    departmentCode: '31',
    name: 'Conkal',
  },
  {
    code: '31014',
    departmentCode: '31',
    name: 'Cuncunul',
  },
  {
    code: '31015',
    departmentCode: '31',
    name: 'Cuzamá',
  },
  {
    code: '31016',
    departmentCode: '31',
    name: 'Chacsinkín',
  },
  {
    code: '31017',
    departmentCode: '31',
    name: 'Chankom',
  },
  {
    code: '31018',
    departmentCode: '31',
    name: 'Chapab',
  },
  {
    code: '31019',
    departmentCode: '31',
    name: 'Chemax',
  },
  {
    code: '31020',
    departmentCode: '31',
    name: 'Chicxulub Pueblo',
  },
  {
    code: '31021',
    departmentCode: '31',
    name: 'Chichimilá',
  },
  {
    code: '31022',
    departmentCode: '31',
    name: 'Chikindzonot',
  },
  {
    code: '31023',
    departmentCode: '31',
    name: 'Chocholá',
  },
  {
    code: '31024',
    departmentCode: '31',
    name: 'Chumayel',
  },
  {
    code: '31025',
    departmentCode: '31',
    name: 'Dzan',
  },
  {
    code: '31026',
    departmentCode: '31',
    name: 'Dzemul',
  },
  {
    code: '31027',
    departmentCode: '31',
    name: 'Dzidzantún',
  },
  {
    code: '31028',
    departmentCode: '31',
    name: 'Dzilam de Bravo',
  },
  {
    code: '31029',
    departmentCode: '31',
    name: 'Dzilam González',
  },
  {
    code: '31030',
    departmentCode: '31',
    name: 'Dzitás',
  },
  {
    code: '31031',
    departmentCode: '31',
    name: 'Dzoncauich',
  },
  {
    code: '31032',
    departmentCode: '31',
    name: 'Espita',
  },
  {
    code: '31033',
    departmentCode: '31',
    name: 'Halachó',
  },
  {
    code: '31034',
    departmentCode: '31',
    name: 'Hocabá',
  },
  {
    code: '31035',
    departmentCode: '31',
    name: 'Hoctún',
  },
  {
    code: '31036',
    departmentCode: '31',
    name: 'Homún',
  },
  {
    code: '31037',
    departmentCode: '31',
    name: 'Huhí',
  },
  {
    code: '31038',
    departmentCode: '31',
    name: 'Hunucmá',
  },
  {
    code: '31039',
    departmentCode: '31',
    name: 'Ixil',
  },
  {
    code: '31040',
    departmentCode: '31',
    name: 'Izamal',
  },
  {
    code: '31041',
    departmentCode: '31',
    name: 'Kanasín',
  },
  {
    code: '31042',
    departmentCode: '31',
    name: 'Kantunil',
  },
  {
    code: '31043',
    departmentCode: '31',
    name: 'Kaua',
  },
  {
    code: '31044',
    departmentCode: '31',
    name: 'Kinchil',
  },
  {
    code: '31045',
    departmentCode: '31',
    name: 'Kopomá',
  },
  {
    code: '31046',
    departmentCode: '31',
    name: 'Mama',
  },
  {
    code: '31047',
    departmentCode: '31',
    name: 'Maní',
  },
  {
    code: '31048',
    departmentCode: '31',
    name: 'Maxcanú',
  },
  {
    code: '31049',
    departmentCode: '31',
    name: 'Mayapán',
  },
  {
    code: '31050',
    departmentCode: '31',
    name: 'Mérida',
  },
  {
    code: '31051',
    departmentCode: '31',
    name: 'Mocochá',
  },
  {
    code: '31052',
    departmentCode: '31',
    name: 'Motul',
  },
  {
    code: '31053',
    departmentCode: '31',
    name: 'Muna',
  },
  {
    code: '31054',
    departmentCode: '31',
    name: 'Muxupip',
  },
  {
    code: '31055',
    departmentCode: '31',
    name: 'Opichén',
  },
  {
    code: '31056',
    departmentCode: '31',
    name: 'Oxkutzcab',
  },
  {
    code: '31057',
    departmentCode: '31',
    name: 'Panabá',
  },
  {
    code: '31058',
    departmentCode: '31',
    name: 'Peto',
  },
  {
    code: '31059',
    departmentCode: '31',
    name: 'Progreso',
  },
  {
    code: '31060',
    departmentCode: '31',
    name: 'Quintana Roo',
  },
  {
    code: '31061',
    departmentCode: '31',
    name: 'Río Lagartos',
  },
  {
    code: '31062',
    departmentCode: '31',
    name: 'Sacalum',
  },
  {
    code: '31063',
    departmentCode: '31',
    name: 'Samahil',
  },
  {
    code: '31064',
    departmentCode: '31',
    name: 'Sanahcat',
  },
  {
    code: '31065',
    departmentCode: '31',
    name: 'San Felipe',
  },
  {
    code: '31066',
    departmentCode: '31',
    name: 'Santa Elena',
  },
  {
    code: '31067',
    departmentCode: '31',
    name: 'Seyé',
  },
  {
    code: '31068',
    departmentCode: '31',
    name: 'Sinanché',
  },
  {
    code: '31069',
    departmentCode: '31',
    name: 'Sotuta',
  },
  {
    code: '31070',
    departmentCode: '31',
    name: 'Sucilá',
  },
  {
    code: '31071',
    departmentCode: '31',
    name: 'Sudzal',
  },
  {
    code: '31072',
    departmentCode: '31',
    name: 'Suma',
  },
  {
    code: '31073',
    departmentCode: '31',
    name: 'Tahdziú',
  },
  {
    code: '31074',
    departmentCode: '31',
    name: 'Tahmek',
  },
  {
    code: '31075',
    departmentCode: '31',
    name: 'Teabo',
  },
  {
    code: '31076',
    departmentCode: '31',
    name: 'Tecoh',
  },
  {
    code: '31077',
    departmentCode: '31',
    name: 'Tekal de Venegas',
  },
  {
    code: '31078',
    departmentCode: '31',
    name: 'Tekantó',
  },
  {
    code: '31079',
    departmentCode: '31',
    name: 'Tekax',
  },
  {
    code: '31080',
    departmentCode: '31',
    name: 'Tekit',
  },
  {
    code: '31081',
    departmentCode: '31',
    name: 'Tekom',
  },
  {
    code: '31082',
    departmentCode: '31',
    name: 'Telchac Pueblo',
  },
  {
    code: '31083',
    departmentCode: '31',
    name: 'Telchac Puerto',
  },
  {
    code: '31084',
    departmentCode: '31',
    name: 'Temax',
  },
  {
    code: '31085',
    departmentCode: '31',
    name: 'Temozón',
  },
  {
    code: '31086',
    departmentCode: '31',
    name: 'Tepakán',
  },
  {
    code: '31087',
    departmentCode: '31',
    name: 'Tetiz',
  },
  {
    code: '31088',
    departmentCode: '31',
    name: 'Teya',
  },
  {
    code: '31089',
    departmentCode: '31',
    name: 'Ticul',
  },
  {
    code: '31090',
    departmentCode: '31',
    name: 'Timucuy',
  },
  {
    code: '31091',
    departmentCode: '31',
    name: 'Tinum',
  },
  {
    code: '31092',
    departmentCode: '31',
    name: 'Tixcacalcupul',
  },
  {
    code: '31093',
    departmentCode: '31',
    name: 'Tixkokob',
  },
  {
    code: '31094',
    departmentCode: '31',
    name: 'Tixméhuac',
  },
  {
    code: '31095',
    departmentCode: '31',
    name: 'Tixpéhual',
  },
  {
    code: '31096',
    departmentCode: '31',
    name: 'Tizimín',
  },
  {
    code: '31097',
    departmentCode: '31',
    name: 'Tunkás',
  },
  {
    code: '31098',
    departmentCode: '31',
    name: 'Tzucacab',
  },
  {
    code: '31099',
    departmentCode: '31',
    name: 'Uayma',
  },
  {
    code: '31100',
    departmentCode: '31',
    name: 'Ucú',
  },
  {
    code: '31101',
    departmentCode: '31',
    name: 'Umán',
  },
  {
    code: '31102',
    departmentCode: '31',
    name: 'Valladolid',
  },
  {
    code: '31103',
    departmentCode: '31',
    name: 'Xocchel',
  },
  {
    code: '31104',
    departmentCode: '31',
    name: 'Yaxcabá',
  },
  {
    code: '31105',
    departmentCode: '31',
    name: 'Yaxkukul',
  },
  {
    code: '31106',
    departmentCode: '31',
    name: 'Yobaín',
  },
  {
    code: '32001',
    departmentCode: '32',
    name: 'Apozol',
  },
  {
    code: '32002',
    departmentCode: '32',
    name: 'Apulco',
  },
  {
    code: '32003',
    departmentCode: '32',
    name: 'Atolinga',
  },
  {
    code: '32004',
    departmentCode: '32',
    name: 'Benito Juárez',
  },
  {
    code: '32005',
    departmentCode: '32',
    name: 'Calera',
  },
  {
    code: '32006',
    departmentCode: '32',
    name: 'Cañitas de Felipe Pescador',
  },
  {
    code: '32007',
    departmentCode: '32',
    name: 'Concepción del Oro',
  },
  {
    code: '32008',
    departmentCode: '32',
    name: 'Cuauhtémoc',
  },
  {
    code: '32009',
    departmentCode: '32',
    name: 'Chalchihuites',
  },
  {
    code: '32010',
    departmentCode: '32',
    name: 'Fresnillo',
  },
  {
    code: '32011',
    departmentCode: '32',
    name: 'Trinidad García de la Cadena',
  },
  {
    code: '32012',
    departmentCode: '32',
    name: 'Genaro Codina',
  },
  {
    code: '32013',
    departmentCode: '32',
    name: 'General Enrique Estrada',
  },
  {
    code: '32014',
    departmentCode: '32',
    name: 'General Francisco R. Murguía',
  },
  {
    code: '32015',
    departmentCode: '32',
    name: 'El Plateado de Joaquín Amaro',
  },
  {
    code: '32016',
    departmentCode: '32',
    name: 'General Pánfilo Natera',
  },
  {
    code: '32017',
    departmentCode: '32',
    name: 'Guadalupe',
  },
  {
    code: '32018',
    departmentCode: '32',
    name: 'Huanusco',
  },
  {
    code: '32019',
    departmentCode: '32',
    name: 'Jalpa',
  },
  {
    code: '32020',
    departmentCode: '32',
    name: 'Jerez',
  },
  {
    code: '32021',
    departmentCode: '32',
    name: 'Jiménez del Teul',
  },
  {
    code: '32022',
    departmentCode: '32',
    name: 'Juan Aldama',
  },
  {
    code: '32023',
    departmentCode: '32',
    name: 'Juchipila',
  },
  {
    code: '32024',
    departmentCode: '32',
    name: 'Loreto',
  },
  {
    code: '32025',
    departmentCode: '32',
    name: 'Luis Moya',
  },
  {
    code: '32026',
    departmentCode: '32',
    name: 'Mazapil',
  },
  {
    code: '32027',
    departmentCode: '32',
    name: 'Melchor Ocampo',
  },
  {
    code: '32028',
    departmentCode: '32',
    name: 'Mezquital del Oro',
  },
  {
    code: '32029',
    departmentCode: '32',
    name: 'Miguel Auza',
  },
  {
    code: '32030',
    departmentCode: '32',
    name: 'Momax',
  },
  {
    code: '32031',
    departmentCode: '32',
    name: 'Monte Escobedo',
  },
  {
    code: '32032',
    departmentCode: '32',
    name: 'Morelos',
  },
  {
    code: '32033',
    departmentCode: '32',
    name: 'Moyahua de Estrada',
  },
  {
    code: '32034',
    departmentCode: '32',
    name: 'Nochistlán de Mejía',
  },
  {
    code: '32035',
    departmentCode: '32',
    name: 'Noria de Ángeles',
  },
  {
    code: '32036',
    departmentCode: '32',
    name: 'Ojocaliente',
  },
  {
    code: '32037',
    departmentCode: '32',
    name: 'Pánuco',
  },
  {
    code: '32038',
    departmentCode: '32',
    name: 'Pinos',
  },
  {
    code: '32039',
    departmentCode: '32',
    name: 'Río Grande',
  },
  {
    code: '32040',
    departmentCode: '32',
    name: 'Sain Alto',
  },
  {
    code: '32041',
    departmentCode: '32',
    name: 'El Salvador',
  },
  {
    code: '32042',
    departmentCode: '32',
    name: 'Sombrerete',
  },
  {
    code: '32043',
    departmentCode: '32',
    name: 'Susticacán',
  },
  {
    code: '32044',
    departmentCode: '32',
    name: 'Tabasco',
  },
  {
    code: '32045',
    departmentCode: '32',
    name: 'Tepechitlán',
  },
  {
    code: '32046',
    departmentCode: '32',
    name: 'Tepetongo',
  },
  {
    code: '32047',
    departmentCode: '32',
    name: 'Teúl de González Ortega',
  },
  {
    code: '32048',
    departmentCode: '32',
    name: 'Tlaltenango de Sánchez Román',
  },
  {
    code: '32049',
    departmentCode: '32',
    name: 'Valparaíso',
  },
  {
    code: '32050',
    departmentCode: '32',
    name: 'Vetagrande',
  },
  {
    code: '32051',
    departmentCode: '32',
    name: 'Villa de Cos',
  },
  {
    code: '32052',
    departmentCode: '32',
    name: 'Villa García',
  },
  {
    code: '32053',
    departmentCode: '32',
    name: 'Villa González Ortega',
  },
  {
    code: '32054',
    departmentCode: '32',
    name: 'Villa Hidalgo',
  },
  {
    code: '32055',
    departmentCode: '32',
    name: 'Villanueva',
  },
  {
    code: '32056',
    departmentCode: '32',
    name: 'Zacatecas',
  },
  {
    code: '32057',
    departmentCode: '32',
    name: 'Trancoso',
  },
  {
    code: '32058',
    departmentCode: '32',
    name: 'Santa María de la Paz',
  },
] as const;
