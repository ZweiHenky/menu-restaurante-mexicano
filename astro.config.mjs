import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://menu-mexicano.example.com',
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['reenact-vascular-grant.ngrok-free.dev'],
    },
  },
});
