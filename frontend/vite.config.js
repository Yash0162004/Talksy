import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@react-icons/bs': 'react-icons/fa',
    },
  },
  build: {
    rollupOptions: {
      external: ['react-icons'], // Add this line
    },
  },
});
