import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      app: '/src/app',
      assets: '/src/assets',
      constants: '/src/constants',
      data: '/src/data',
      features: '/src/features',
      hooks: '/src/hooks',
      interface: '/src/interface',
      styles: '/src/styles',
      util: '/src/util',
    },
  },
});
