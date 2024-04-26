import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import image from '@rollup/plugin-image'; // Add image plugin

export default defineConfig({
  plugins: [react(), VitePWA(), image()], // Add image plugin to handle images
  resolve: {
    alias: {
      'jspdf': 'jspdf/dist/jspdf.es.min.js'
    }
  },
  optimizeDeps: {
    include: ['react-icons'] // Include react-icons for optimization
  },
  build: {
    assetsInlineLimit: 0 // Disable asset size limit
  }
});
