# soff-money 💸

Safe money handling for JavaScript with integer-based arithmetic and LATAM locale formatting.

## The Problem

In JavaScript, `0.1 + 0.2 === 0.30000000000000004`. This is fatal for e-commerce or financial applications. Additionally, formatting currencies in Latin America is painful - does the symbol go before or after? Dots or commas for thousands?

## The Solution

A library that handles money using integers (Safe Money pattern) and formats according to the country's locale.

## Features

- 🔢 **Integer-based arithmetic** - No floating point errors
- 🌎 **LATAM-first locales** - CO, MX, AR, BR, US
- 🌳 **Tree-shakeable** - Import only what you need
- 📦 **Tiny bundle** - Core is < 2KB gzipped
- 💯 **TypeScript** - Full type safety
- ⚡ **Zero dependencies** - Pure JavaScript

## Installation

```bash
npm install soff-money
```

## Quick Start

```typescript
import { Money } from 'soff-money';
import { COP } from 'soff-money/locales/co';

// Create money from cents (safe)
const price = Money.fromCents(10000, COP); // $100.00 COP

// Arithmetic operations
const total = price.add(Money.fromCents(5000, COP)); // $150.00
const discounted = total.multiply(0.9); // $135.00

// Format for display
console.log(total.format()); // "$ 150,00" or "$150.00" depending on locale

// Safe distribution (no lost cents!)
const [part1, part2, part3] = Money.fromCents(10000, COP).distribute(3);
// 33.34 + 33.33 + 33.33 = 100.00 ✓
```

## Killer Feature: Fair Distribution

When splitting money, you never lose cents:

```typescript
const bill = Money.fromCents(10000, COP); // $100.00
const [alice, bob, charlie] = bill.distribute(3);

// alice:   $33.34
// bob:     $33.33
// charlie: $33.33
// Total:   $100.00 ✓ (not $99.99!)
```

## Available Locales

| Locale | Currency | Symbol | Format      |
| ------ | -------- | ------ | ----------- |
| `co`   | COP      | $      | $ 1.000,00  |
| `mx`   | MXN      | $      | $1,000.00   |
| `ar`   | ARS      | $      | $ 1.000,00  |
| `br`   | BRL      | R$     | R$ 1.000,00 |
| `us`   | USD      | $      | $1,000.00   |

## License

MIT
