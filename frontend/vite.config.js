import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@react-icons/bs': 'react-icons/bs',
    },
  },
  build: {
    rollupOptions: {
      external: ['@react-icons/bs'],
    },
  },
});
