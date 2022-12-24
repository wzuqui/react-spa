import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/react-spa/',
  define: {
    APP_VERSION: JSON.stringify(
      process.env.npm_package_version
    ),
  },
  plugins: [react()],
});
