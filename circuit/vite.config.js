import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: { target: 'esnext' },
    exclude: ['@noir-lang/noirc_abi', '@noir-lang/acvm_js']
  },
  server: {
    fs: {
      allow: [
        '.', // allow current working directory
        path.resolve(__dirname, 'node_modules/@noir-lang')
      ]
    }
  }
});
