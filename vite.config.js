import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/

export default defineConfig({
  // base: '/casavacanzeogliastra.it/',
   base: process.env.NODE_ENV === 'production' ? '/casavacanzeogliastra.it/' : '/',
 plugins: [react()],
})
