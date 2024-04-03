import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression2';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    chunkSplitPlugin(),
    compression({
      algorithm: 'gzip', exclude: [/\.(br)$ /, /\.(gz)$/]
    }),
    compression({
      algorithm: 'brotliCompress', exclude: [/\.(br)$ /, /\.(gz)$/],
    }),
  
  ]
})
