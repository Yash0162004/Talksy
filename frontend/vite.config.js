import { defineConfig } from 'vite';

export default defineConfig({
  // ... other options ...
  build: {
    rollupOptions: {
      external: ['@react-icons/bs'],
    },
  },
});
