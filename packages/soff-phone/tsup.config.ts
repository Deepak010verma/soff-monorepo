import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    // Latin America
    'locales/ar': 'src/locales/ar.ts',
    'locales/br': 'src/locales/br.ts',
    'locales/cl': 'src/locales/cl.ts',
    'locales/co': 'src/locales/co.ts',
    'locales/cr': 'src/locales/cr.ts',
    'locales/ec': 'src/locales/ec.ts',
    'locales/gt': 'src/locales/gt.ts',
    'locales/mx': 'src/locales/mx.ts',
    'locales/pa': 'src/locales/pa.ts',
    'locales/pe': 'src/locales/pe.ts',
    'locales/ve': 'src/locales/ve.ts',
    // North America
    'locales/ca': 'src/locales/ca.ts',
    'locales/us': 'src/locales/us.ts',
    // Europe
    'locales/de': 'src/locales/de.ts',
    'locales/es': 'src/locales/es.ts',
    'locales/fr': 'src/locales/fr.ts',
    'locales/gb': 'src/locales/gb.ts',
    'locales/it': 'src/locales/it.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  splitting: false,
  treeshake: true,
  minify: true,
  sourcemap: true,
});
