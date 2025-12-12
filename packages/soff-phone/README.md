<div align="center">
  <img src="https://raw.githubusercontent.com/bledxs/soff-monorepo/master/assets/logo.png" alt="Soff Logo" width="100" height="100">
  <h1>Soff Phone</h1>
  <p>Lightweight, tree-shakeable phone number validation and formatting library for global markets.</p>
</div>

<div align="center">

</div>

---

## Features

- 🌲 **Tree-shakeable**: Import only the locales you need
- 📦 **Zero dependencies**: Lightweight and fast
- 🌍 **Global coverage**: Support for 17 countries across Latin America, North America, and Europe
- ⚡ **TypeScript**: Fully typed
- 📱 **Mobile & Landline**: Distinguish between mobile and landline numbers where applicable

## Supported Countries

### Latin America 🌎

- 🇦🇷 **Argentina** (ar) - 10 digits
- 🇧🇷 **Brazil** (br) - 10-11 digits
- 🇨🇱 **Chile** (cl) - 9 digits
- 🇨🇴 **Colombia** (co) - 10 digits
- 🇨🇷 **Costa Rica** (cr) - 8 digits
- 🇪🇨 **Ecuador** (ec) - 9 digits
- 🇬🇹 **Guatemala** (gt) - 8 digits
- 🇲🇽 **Mexico** (mx) - 10 digits
- 🇵🇦 **Panama** (pa) - 8 digits
- 🇵🇪 **Peru** (pe) - 9 digits
- 🇻🇪 **Venezuela** (ve) - 10 digits

### North America 🌐

- 🇨🇦 **Canada** (ca) - 10 digits
- 🇺🇸 **United States** (us) - 10 digits

### Europe 🇪🇺

- 🇩🇪 **Germany** (de) - 9-11 digits
- 🇪🇸 **Spain** (es) - 9 digits
- 🇫🇷 **France** (fr) - 9 digits
- 🇬🇧 **United Kingdom** (gb) - 10 digits
- 🇮🇹 **Italy** (it) - 9-10 digits

## Installation

```bash
npm install soff-phone
# or
pnpm add soff-phone
# or
yarn add soff-phone
```

## Usage

### Colombia 🇨🇴

```typescript
import { validate } from 'soff-phone/co';

// Validate mobile
const mobile = validate('3001234567');
console.log(mobile);
// { isValid: true, type: 'mobile', formatted: '3001234567' }

// Validate landline
const landline = validate('6011234567');
console.log(landline);
// { isValid: true, type: 'landline', formatted: '6011234567' }

// Format E.164
const e164 = validate('3001234567', { format: 'e164' });
console.log(e164.formatted); // +573001234567
```

### Brazil 🇧🇷

```typescript
import { validate } from 'soff-phone/br';

// Mobile (11 digits with 9 prefix)
const mobile = validate('11987654321');
console.log(mobile);
// { isValid: true, type: 'mobile', formatted: '11987654321' }

// Landline (10 digits)
const landline = validate('1134567890');
console.log(landline);
// { isValid: true, type: 'landline', formatted: '1134567890' }
```

### United States 🇺🇸

```typescript
import { validate } from 'soff-phone/us';

const result = validate('2025551234');
console.log(result);
// { isValid: true, type: 'unknown', formatted: '2025551234' }

// With country code
const withCode = validate('12025551234');
console.log(withCode.formatted); // 2025551234
```

### Spain 🇪🇸

```typescript
import { validate } from 'soff-phone/es';

// Mobile
const mobile = validate('612345678');
console.log(mobile);
// { isValid: true, type: 'mobile', formatted: '612345678' }

// Landline
const landline = validate('912345678');
console.log(landline);
// { isValid: true, type: 'landline', formatted: '912345678' }
```

### Other Countries

```typescript
// Argentina
import { validate as validateAR } from 'soff-phone/ar';

// Chile
import { validate as validateCL } from 'soff-phone/cl';

// And so on for: ca, cr, de, ec, fr, gb, gt, it, mx, pa, pe, ve
```

## Bundle Size

Each locale is individually tree-shakeable, so you only pay for what you use.

| Module     | Size (minified) | Size (gzipped) |
| ---------- | --------------- | -------------- |
| Core       | ~0.5KB          | ~0.3KB         |
| Per Locale | ~0.5-0.7KB      | ~0.3-0.4KB     |

**Example**: If you only import Colombia validation, your bundle will be ~1KB minified (~0.6KB gzipped).

## License

MIT © [Luis C. Rojas](https://github.com/bledxs)
