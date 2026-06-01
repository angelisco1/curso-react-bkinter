import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'productos_remote',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductosPage': './src/components/ProductosPage.jsx',
        './ProductoInfoPage': './src/components/ProductoInfoPage.jsx',
      },
      shared: [
        'react', 'react-dom', '@mf/shared'
      ],
      dts: false,
    })
  ],
  server: {
    port: 3002,
    origin: 'http://localhost:3002'
  },
  build: {
    target: 'esnext',
  },
  preview: {
    port: 3002,
    strictPort: true,
  }
})
