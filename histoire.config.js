import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [
    HstVue(),
  ],
  outDir: 'doc/dist/stories',
  routerMode: 'hash',
  vite: {
    base: "./",
  },
})
