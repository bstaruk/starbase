import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      queries: path.resolve(import.meta.dirname, 'src/lib/queries'),
      utils: path.resolve(import.meta.dirname, 'src/lib/utils'),
      atoms: path.resolve(import.meta.dirname, 'src/ui/atoms'),
      molecules: path.resolve(import.meta.dirname, 'src/ui/molecules'),
      organisms: path.resolve(import.meta.dirname, 'src/ui/organisms'),
      templates: path.resolve(import.meta.dirname, 'src/ui/templates'),
    },
  },
  server: {
    port: 3000,
  },
});
