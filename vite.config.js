import { defineConfig } from 'vite';

export default defineConfig({
  base: '/landing-page-Bang-olufsen/',
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
