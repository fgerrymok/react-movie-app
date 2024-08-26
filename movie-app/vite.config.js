import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  base: '/click-flicks/',
  // build: {
  //   outDir: 'click-flicks'
  // },
  plugins: [react()],
})
