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
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  target: 'es2020',
});
