import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunks - split vendor libraries
        manualChunks: (id) => {
          if (id.includes('node_modules/react')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons-lucide'
          }
          if (id.includes('node_modules/react-icons')) {
            return 'icons-react'
          }
        },
        // Better chunk naming
        chunkFileNames: (chunkInfo) => {
          return `chunks/[name]-[hash].js`
        },
      },
    },
  },
})
