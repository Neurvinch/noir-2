import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: { target: 'esnext' },
    exclude: [
      '@noir-lang/noirc_abi',
      '@noir-lang/acvm_js',
      '@noir-lang/noir_js',         // <- very likely the source of `main.worker.js`
      'main.worker.js'              // <- exclude the specific worker file
    ]
  },
  server: {
    fs: {
      allow: [
        '.', 
        path.resolve(__dirname, 'node_modules/@noir-lang')
      ]
    }
  }
});
