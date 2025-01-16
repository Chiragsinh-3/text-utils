import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/text-utils/", // Update this to match your repository name
  plugins: [react()],
})
