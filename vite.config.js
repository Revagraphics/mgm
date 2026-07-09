import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  base: '/',                    // Use '/' for root domain. Change to '/subfolder/' if needed
  build: {
    outDir: 'dist',             // Default for Vite
    emptyOutDir: true,
  }
})