import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import VitePluginHtmlEnv from 'vite-plugin-html-env';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  plugins: [
    VitePluginHtmlEnv(),
    VitePluginHtmlEnv({
      compiler: true,
    }),
    react(),
  ],
});
