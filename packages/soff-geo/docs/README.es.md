# Soff Geo

[![npm](https://img.shields.io/npm/v/soff-geo)](https://www.npmjs.com/package/soff-geo)
[![License](https://img.shields.io/github/license/bledxs/soff-monorepo)](../LICENSE)

Librería ligera de datos geográficos para LATAM - Departamentos, municipios, códigos postales y más.

**Cero dependencias** · **TypeScript** · **Tree-shakeable**

## Tabla de Contenidos

- [Soff Geo](#soff-geo)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [¿Por qué?](#por-qué)
  - [Instalación](#instalación)
  - [Inicio Rápido](#inicio-rápido)
  - [Países Disponibles](#países-disponibles)
  - [Referencia API](#referencia-api)

## ¿Por qué?

A menudo necesitas listas de departamentos/provincias y municipios/ciudades para formularios de dirección, pero las APIs son lentas o las librerías existentes son pesadas y contienen datos de todo el mundo.

`soff-geo` ofrece una solución modular donde importas solo los datos del país que necesitas.

## Instalación

```bash
npm install soff-geo
```

## Inicio Rápido

```typescript
// Solo Colombia incluido en el bundle
import { getDepartments, getMunicipalities, searchMunicipalities } from 'soff-geo/co';

// Obtener todos los departamentos
const departments = getDepartments();
// [{ code: '05', name: 'Antioquia', ... }, ...]

// Obtener municipios por departamento
const antioquiaMunis = getDepartmentMunicipalities('05');
// [{ code: '05001', name: 'Medellín', ... }, ...]

// Buscar
const results = searchMunicipalities('medellin');
// [{ item: { name: 'Medellín', ... }, score: 1 }]
```

## Países Disponibles

| País        | Import        | Datos                     |
| ----------- | ------------- | ------------------------- |
| 🇨🇴 Colombia | `soff-geo/co` | Departamentos, Municipios |
| 🇲🇽 México   | `soff-geo/mx` | Estados, Municipios       |

## Referencia API

Cada país exporta un conjunto consistente de funciones:

### `getDepartments() / getStates()`

Retorna la lista de todas las divisiones administrativas de primer nivel.

### `getMunicipalities()`

Retorna la lista de todos los municipios disponibles.

### `getDepartment(code) / getState(code)`

Encuentra un departamento/estado por su código oficial.

### `getMunicipality(code)`

Encuentra un municipio por su código oficial.

### `getDepartmentMunicipalities(code) / getStateMunicipalities(code)`

Retorna todos los municipios pertenecientes a un departamento/estado específico.

### `searchDepartments(query) / searchStates(query)`

Busca departamentos/estados por nombre o código.

### `searchMunicipalities(query)`

Busca municipios por nombre o código.
