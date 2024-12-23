// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
//import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
/*  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vue-diagrams',
      // the proper extensions will be added
      fileName: 'vue-diagrams',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  */
  plugins: [
    vue(),
/*    dts({
      tsconfigPath: './tsconfig.json',
      rollupTypes: true,
      entryRoot: 'src',
    }),
*/
  ],
});
