/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//https://www.youtube.com/watch?v=G-4zgIPsjkU Guy explains well
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true, 
    setupFiles: './tests/setup.ts',
  }
})
