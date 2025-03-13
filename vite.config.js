import { defineConfig } from 'vite';
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      formats: ['es', 'cjs'],
      fileName: (format) => format === 'es' ? 'index.js' : 'index.cjs'
    },
    rollupOptions: {
      plugins: [nodeResolve()],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named'
      }
    },
    minify: 'esbuild'
  }
});