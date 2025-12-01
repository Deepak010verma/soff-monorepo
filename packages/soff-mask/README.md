# soff-mask 🎭

Lightweight, framework-agnostic input masking library.

## The Problem

Making a phone input auto-format as you type `(300) 123-4567` is hard. Current libraries (react-input-mask, etc.) are often heavy or tied to a specific framework.

## The Solution

A pure JavaScript masking engine that works with anything - React, Vue, Angular, or plain HTML.

## Features

- 🎯 **Framework agnostic** - Works with React, Vue, Angular, Svelte, or vanilla JS
- 🌳 **Tree-shakeable** - Import only the masks you need
- 📦 **Tiny bundle** - Core engine is < 1KB gzipped
- 💯 **TypeScript** - Full type safety
- ⚡ **Zero dependencies** - Pure JavaScript
- 🔧 **Customizable** - Create your own mask patterns

## Installation

```bash
npm install soff-mask
```

## Quick Start

### Pure JavaScript (Core API)

```typescript
import { mask, unmask } from 'soff-mask';

// Apply mask
mask('3001234567', '(###) ###-####'); // '(300) 123-4567'

// Remove mask
unmask('(300) 123-4567', '(###) ###-####'); // '3001234567'
```

### With DOM (Vanilla JS)

```typescript
import { maskInput } from 'soff-mask/dom';

const input = document.querySelector('input');
const cleanup = maskInput(input, '(###) ###-####');

// Later: cleanup() to remove event listeners
```

### Pre-built Masks

```typescript
import { phoneCO, phoneMX, phoneUS, creditCard, cpf, date } from 'soff-mask/masks';

mask('3001234567', phoneCO); // '(300) 123-4567'
mask('4111111111111111', creditCard); // '4111 1111 1111 1111'
mask('12345678909', cpf); // '123.456.789-09'
```

## Mask Pattern Syntax

| Character | Description                |
| --------- | -------------------------- |
| `#`       | Any digit (0-9)            |
| `A`       | Any letter (a-z, A-Z)      |
| `S`       | Any alphanumeric character |
| `*`       | Any character              |
| Other     | Literal character          |

### Examples

```typescript
// Phone formats
'(###) ###-####'; // US: (555) 123-4567
'### ### ####'; // CO: 300 123 4567
'+## ## ####-####'; // BR: +55 11 1234-5678

// Documents
'###.###.###-##'; // CPF: 123.456.789-09
'##.###.###/####-##'; // CNPJ: 12.345.678/0001-90

// Credit Card
'#### #### #### ####'; // 4111 1111 1111 1111

// Date
'##/##/####'; // 25/12/2024
```

## Dynamic Masks

```typescript
import { createDynamicMask } from 'soff-mask';

// Phone that accepts 9 or 10 digits
const phoneMask = createDynamicMask([
  { maxLength: 9, pattern: '#### ####' },
  { maxLength: 10, pattern: '(##) #### ####' },
]);

mask('12345678', phoneMask); // '1234 5678'
mask('1234567890', phoneMask); // '(12) 3456 7890'
```

## License

MIT
