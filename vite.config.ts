// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration adaptée au déploiement sur Vercel
export default defineConfig({
  base: '/', // Ne surtout pas mettre un sous-chemin ici pour Vercel
  plugins: [react()],
});
