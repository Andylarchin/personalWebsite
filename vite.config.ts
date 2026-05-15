import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages serves the site from /personalWebsite/, so prod assets need that prefix.
  // Dev server stays at / for normal localhost behaviour.
  base: command === 'build' ? '/personalWebsite/' : '/',
  server: {
    port: 5173,
    open: true,
  },
}));
