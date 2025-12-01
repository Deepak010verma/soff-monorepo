---
'soff-money': minor
---

feat(soff-money): add utility functions and new locales

### New Features

- Add `percentage()`, `addPercentage()`, `subtractPercentage()` for percentage calculations
- Add `min()`, `max()`, `clamp()`, `isBetween()` for comparisons
- Add `toCents()` to convert Money to cents
- Add static methods: `Money.sum()`, `Money.minimum()`, `Money.maximum()`, `Money.average()`

### New Locales

- Add CLP (Chilean Peso)
- Add PEN (Peruvian Sol)
- Add UYU (Uruguayan Peso)
- Add EUR (Euro)

### Improvements

- Expanded test coverage from 32 to 64 tests
- Coverage improved from 91.57% to 99.24%
