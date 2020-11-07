import rollupPluginJson from '@rollup/plugin-json';
import rollupPluginTypeScript from '@wessberg/rollup-plugin-ts';

export default {
  input: './src/vue-filter-truncate.ts',
  output: [
    {
      exports: 'named',
      file: 'dist/vue-filter-truncate.esm.js',
      format: 'es',
      sourcemap: true
    },
    {
      exports: 'named',
      file: 'dist/vue-filter-truncate.cjs.js',
      format: 'commonjs',
      sourcemap: true
    },
    {
      exports: 'named',
      file: 'dist/vue-filter-truncate.umd.js',
      format: 'umd',
      name: 'VueFilterDateFormat',
      sourcemap: true
    }
  ],
  plugins: [
    rollupPluginJson(),
    rollupPluginTypeScript()
  ]
};
