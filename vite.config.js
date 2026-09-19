import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        mentionsLegales: 'mentions-legales.html',
        politiqueConfidentialite: 'politique-confidentialite.html',
        conditionsUtilisation: 'conditions-utilisation.html'
      }
    }
  },
  server: {
    port: 3000,
    host: true
  }
})
