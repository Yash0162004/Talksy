import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react-icons/fa'], // Add this line
    },
  },
});
