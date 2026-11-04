// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/config/site.js';

// https://astro.build/config
export default defineConfig({
  site: site.url,
  integrations: [
    react(),
    sitemap({
      filter: () => !site.isDemo,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
