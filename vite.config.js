import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src'),
      '@shared': resolve(process.cwd(), 'shared'),
      '@assets': resolve(process.cwd(), 'attached_assets'),
    },
  },
  build: {
    outDir: 'dist/public',
    emptyOutDir: true,
  },
  publicDir: 'public',
}) 