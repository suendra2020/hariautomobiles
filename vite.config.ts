import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      // Optimize build output
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      // Generate source maps for debugging (optional, remove for smaller bundle)
      sourcemap: false,
      // Chunk size warnings
      chunkSizeWarningLimit: 1000,
      // Output directory
      outDir: 'dist',
      // Assets directory
      assetsDir: 'assets',
      // Rollup options for better code splitting
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom'],
            'ui': ['lucide-react', 'motion'],
          },
        },
      },
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'lucide-react', 'motion'],
    },
  };
});
