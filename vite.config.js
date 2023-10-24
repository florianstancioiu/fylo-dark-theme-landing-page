import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fylo-dark-theme-landing-page/',
  plugins: [react()],
});
