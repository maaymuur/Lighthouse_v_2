import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Lighthouse_v_2/',  // Это обязательная настройка для GitHub Pages
  plugins: [react()],
});