import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/med-hamady-portfolio/', // 👈 correspond exactement au nom du repo GitHub
  plugins: [react()],
});

