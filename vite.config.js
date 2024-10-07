import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server:{
    port:2000,
    proxy:{
      '/api':{
        target:"http://localhost:8000/mines",
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/, ''),
      }
    }
  }
})