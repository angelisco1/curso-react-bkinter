import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'header_remote',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/components/Header.jsx'
      },
      shared: [
        'react', 'react-dom', '@mf/shared'
      ],
      dts: false,
    })
  ],
  server: {
    port: 3001,
    origin: 'http://localhost:3001'
  },
  build: {
    target: 'esnext',
  },
  preview: {
    port: 3001,
    strictPort: true,
  }
})
