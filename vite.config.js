// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: './',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        cart: path.resolve(__dirname, 'src/cart/index.html'),
        checkout: path.resolve(__dirname, 'src/checkout/index.html'),
        product: path.resolve(__dirname, 'src/product_pages/index.html'),
      },
    },
  },
});