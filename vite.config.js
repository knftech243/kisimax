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
        conditionsUtilisation: 'conditions-utilisation.html',
        conditionsGeneralesService: 'conditions-generales-service.html',
        aPropos: 'a-propos.html',
        contact: 'contact.html',
        faq: 'faq.html',
        securite: 'securite.html',
        remboursementResiliation: 'remboursement-resiliation.html',
        politiqueCookies: 'politique-cookies.html'
      }
    }
  },
  server: {
    port: 3000,
    host: true
  }
})
