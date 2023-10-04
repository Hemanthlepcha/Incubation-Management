import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // Set this to 0 to disable inline assets
  },
  // Add the assetsInclude option to specify file extensions to be treated as assets
  assetsInclude: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'ico', 'JPG'],
  server: {
    fs: {
      // Allow serving specific CSS files and font files from slick-carousel package
      allow: [
        '/home/hemanth/Documents/GitHub/Incubation-Management/startUp/Frontend/node_modules/slick-carousel/slick/slick.css',
        '/home/hemanth/Documents/GitHub/Incubation-Management/startUp/Frontend/node_modules/slick-carousel/slick/slick-theme.css',
        '/home/hemanth/Documents/GitHub/Incubation-Management/startUp/Frontend/node_modules/slick-carousel/slick/fonts/',
        '/home/hemanth/Documents/GitHub/Incubation-Management/startUp/Frontend/src/',
      ],
    },
  },
});
