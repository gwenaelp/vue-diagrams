import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue2'

export default defineConfig({
  plugins: [
    HstVue(),
  ],
  outDir: 'doc/dist/stories',
  vite: {
    base: "./",
  },
})
