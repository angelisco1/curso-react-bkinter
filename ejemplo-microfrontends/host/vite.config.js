import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        header_remote: {
          type: 'module',
          name: 'header_remote',
          entry: 'http://localhost:3001/remoteEntry.js',
          shareScope: 'default'
        },
        productos_remote: {
          type: 'module',
          name: 'productos_remote',
          entry: 'http://localhost:3002/remoteEntry.js',
          shareScope: 'default'
        }
      },
      shared: [
        'react', 'react-dom', '@mf/shared'
      ],
      dts: false,
    })
  ],
  server: {
    port: 3000,
    origin: 'http://localhost:3000'
  },
  build: {
    target: 'esnext',
  }
})
