import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
  plugins: [
    react(),
    nodeResolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
  ],
  optimizeDeps: {
    include: ['swiper/react'],
  },
  resolve: {
    alias: {
      'swiper/react': 'swiper/react/swiper-react.esm.js',
    },
  },
});

