import fs from 'node:fs'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Fix for Windows OneDrive libuv realpathSync.native EPERM bug
if (fs.realpathSync && fs.realpathSync.native) {
  fs.realpathSync.native = fs.realpathSync
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
})
