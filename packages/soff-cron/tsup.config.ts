import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    // Core
    index: 'src/index.ts',
    'core/parser': 'src/core/parser.ts',
    'core/formatter': 'src/core/formatter.ts',
    'core/validator': 'src/core/validator.ts',
    'core/types': 'src/core/types.ts',

    // i18n
    'i18n/es': 'src/i18n/es.ts',
    'i18n/en': 'src/i18n/en.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  splitting: false,
  treeshake: true,
  minify: true,
  sourcemap: true,
});
