import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    }
  },
  plugins: [react(),
    tailwindcss(),
  ],
  css: {
     postcss: './postcss.config.js'
  }
})
