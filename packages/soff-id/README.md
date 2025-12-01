# soff-id 🪪

LATAM document validation library - Validate NIT, RUT, CPF, CUIT, and more.

## The Problem

Validating a NIT in Colombia (calculating the verification digit), a RUT in Chile, a CPF in Brazil, or a CUIT in Argentina is something that all developers in the region have to reprogram over and over again.

## The Solution

A modular, tree-shakeable library using the same architecture as `soff-date`. Import only the validators you need.

## Features

- 🔢 **Accurate validation** - Uses official algorithms for each document type
- 🌎 **LATAM coverage** - CO, BR, AR, CL, MX
- 🌳 **Tree-shakeable** - Import only what you need
- 📦 **Tiny bundle** - Each locale is < 1KB gzipped
- 💯 **TypeScript** - Full type safety
- ⚡ **Zero dependencies** - Pure JavaScript

## Installation

```bash
npm install soff-id
```

## Quick Start

```typescript
// Import only what you need
import { validateNIT, formatNIT, calculateNITCheckDigit } from 'soff-id/locales/co';
import { validateCPF, validateCNPJ } from 'soff-id/locales/br';
import { validateRUT } from 'soff-id/locales/cl';
import { validateCUIT } from 'soff-id/locales/ar';

// Colombian NIT
validateNIT('900123456-7'); // true
calculateNITCheckDigit('900123456'); // '7'
formatNIT('9001234567'); // '900.123.456-7'

// Brazilian CPF
validateCPF('123.456.789-09'); // true/false

// Chilean RUT
validateRUT('12.345.678-5'); // true/false

// Argentine CUIT
validateCUIT('20-12345678-9'); // true/false
```

## Available Locales

| Locale | Documents       | Description                                          |
| ------ | --------------- | ---------------------------------------------------- |
| `co`   | NIT, CC, CE, TI | Colombia - Tax ID, Cédula, Foreign ID, Identity Card |
| `br`   | CPF, CNPJ       | Brazil - Individual & Business Tax IDs               |
| `ar`   | DNI, CUIT, CUIL | Argentina - National ID & Tax IDs                    |
| `cl`   | RUT, RUN        | Chile - Tax ID & National ID                         |
| `mx`   | RFC, CURP       | Mexico - Tax ID & Personal ID                        |

## Validation API

Each locale exports:

- `validate{DOC}(value)` - Returns `boolean`
- `format{DOC}(value)` - Returns formatted string
- `clean{DOC}(value)` - Removes formatting
- `calculate{DOC}CheckDigit(value)` - Returns check digit (where applicable)

## License

MIT
