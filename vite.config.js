import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/Home",
  plugins: [react()],

server: {
  base: '/Balmoral/',
  port : 5000
}

})