import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'core/index': 'src/core/index.ts',
    'locales/co': 'src/locales/co.ts',
    'locales/br': 'src/locales/br.ts',
    'locales/ar': 'src/locales/ar.ts',
    'locales/cl': 'src/locales/cl.ts',
    'locales/mx': 'src/locales/mx.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  splitting: false,
  treeshake: true,
  minify: true,
  sourcemap: true,
});
