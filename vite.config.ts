import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    // Disable minification for better debugging
    minify: false,
    // Ensure vite doesn't try to resolve node modules
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: [
        'express',
        'cors',
        'pg',
        'sequelize',
        'bcrypt',
        'jsonwebtoken',
        'dotenv',
        'cloudinary',
        'algoliasearch',
        'resend',
        /node:.*/,
      ],
      input: resolve(__dirname, 'src/main.ts'),
      output: {
        // Output to the dist directory as a CommonJS module
        format: 'cjs',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
    // Target Node.js environment
    target: 'node18',
    // Output to the dist directory
    outDir: 'dist',
    // Don't clear the output directory
    emptyOutDir: true,
    // Generate sourcemaps for debugging
    sourcemap: true,
    // Don't split chunks
    ssr: true,
    // Build for Node.js
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['cjs'],
      fileName: 'main',
    },
  },
  // Resolve TypeScript paths
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // Server options
  server: {
    // We're not using the Vite server for development, but configuring just in case
    watch: {
      usePolling: true,
    },
  },
});

