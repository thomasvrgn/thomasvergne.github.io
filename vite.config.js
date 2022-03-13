import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'components'),
      'styles': path.resolve(__dirname, 'styles'),
      'assets': path.resolve(__dirname, 'assets'),
      'api': path.resolve(__dirname, 'api'),
      'src': path.resolve(__dirname, 'src'),
    }
  },
});
