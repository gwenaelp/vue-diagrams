import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue2'
console.log('config found');
export default defineConfig({
  plugins: [
    HstVue(),
  ],
})
