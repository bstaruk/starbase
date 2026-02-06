import path from 'path';
import { defineConfig } from 'vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      queries: path.resolve(__dirname, 'src/lib/queries'),
      utils: path.resolve(__dirname, 'src/lib/utils'),
      atoms: path.resolve(__dirname, 'src/ui/atoms'),
      molecules: path.resolve(__dirname, 'src/ui/molecules'),
      organisms: path.resolve(__dirname, 'src/ui/organisms'),
      templates: path.resolve(__dirname, 'src/ui/templates'),
    },
  },
  server: {
    port: 3000,
  },
});
