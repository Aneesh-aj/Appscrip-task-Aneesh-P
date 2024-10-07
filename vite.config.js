import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
  plugins: [react()],
  server: {
    host: true,    // Set to true to listen on all addresses (equivalent to '0.0.0.0')
    port: 3000,    // Specify the port (you can change this to any available port)
  }
})