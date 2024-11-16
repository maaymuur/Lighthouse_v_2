import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Lighthouse_v_2/', // Правильный base URL для GitHub Pages
  build: {
    outDir: 'dist', // Папка для сборки
    rollupOptions: {
      input: './index.html', // Убедитесь, что Rollup знает о вашем index.html
    },
  },
  plugins: [react()],
});
