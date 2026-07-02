import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Global image optimization configuration
  image: {
    service: {
      // Note: Ensure 'sharp' is installed in your project: npm install sharp
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // This sets the default format for optimized images to AVIF
        format: 'avif',
      },
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});