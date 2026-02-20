import {defineConfig} from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://peleteiro.net',
  output: 'static',
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },
})
