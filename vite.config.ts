import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  base: './',
  publicDir: 'public',
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],// eslint-disable-line
});
