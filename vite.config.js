import { defineConfig } from 'vite';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: 'src/index.js',
        'objects/index': 'src/objects/index.js'
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => 
        format === 'es' ? `${entryName}.js` : `${entryName}.cjs`
    },
    rollupOptions: {
      plugins: [nodeResolve()],
      output: {
        preserveModulesRoot: 'src',
        preserveModules: true,
      }
    },
    minify: true
  }
});