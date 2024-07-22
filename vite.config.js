import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Указание выходного каталога
    sourcemap: true,
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
