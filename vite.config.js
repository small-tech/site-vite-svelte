import os from 'os'
import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'

// Note: the local TLS certificates will have been created at
// the post-install stage of npm install.
const certDirectory = path.join(os.homedir(), '.small-tech.org', 'auto-encrypt-localhost')
const cert = fs.readFileSync(path.join(certDirectory, 'localhost.pem'))
const key = fs.readFileSync(path.join(certDirectory, 'localhost-key.pem'))

// https://vitejs.dev/config/
export default defineConfig({
  root: '.vite',
  plugins: [svelte()],
  server: {
    port: 444,
    https: {key, cert}
  },
  build: {
    outDir: '../.generated',
    emptyOutDir: true
  }
})
