import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
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
