import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@react-icons/bs': 'react-icons/fa', // Changed 'bs' to 'fa'
    },
  },
  build: {
    rollupOptions: {

    },
  },
});
