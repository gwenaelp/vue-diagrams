<script lang="ts" setup>
//https://github.com/bcakmakoglu/vue-flow/blob/master/docs/components/DocsRepl.vue
import type { SFCOptions } from '@vue/repl';
import { ReplStore, Repl as VueRepl } from '@vue/repl';
import '@vue/repl/style.css';
import { exampleImports } from '../examples';
import CodeMirror from '@vue/repl/codemirror-editor';
import Diagram from '../../src/index';

const props = defineProps<{
  example: keyof typeof exampleImports;
  mainFile?: string;
  dependencies?: Record<string, string> }
>()

let css = '';

const store = new ReplStore({
  showOutput: true,
  outputMode: 'preview',
})


const files: Record<string, (typeof imports)[keyof typeof imports]> = {}
const imports = exampleImports[props.example]
const additionalImports: Object = ('additionalImports' in imports ? imports.additionalImports : {}) as Object;

for (const example of Object.keys(imports).filter((i) => i !== 'additionalImports')) {
  if (example.includes('css')) {
    css += `${imports[example as keyof typeof imports]}`
  } else {
    files[example] = imports[example as keyof typeof imports]
  }
}

await store.setVueVersion('3.2.37')
await store.setFiles(
  {
    ...files,
    'main.css': css,
  },
  props.mainFile ?? 'App.vue',
)

// pre-set import map
const diagram =
store.setImportMap({
  imports: {
    'vue-diagrams': 'https://unpkg.com/vue-diagrams@latest',
    ...additionalImports,
  },
} as any);

</script>

<template>
  <VueRepl
    :clear-console="true"
    :editor="CodeMirror"
    :auto-resize="true"
    :store="store"
    :show-compile-output="false"
    :show-import-map="false"
    @keydown.ctrl.s.prevent
    @keydown.meta.s.prevent
  />
</template>

<style>
.file-selector {
}

.vue-repl {
  --vh: 100vh;
  margin-top: 52px;
  height: calc(var(--vh) - 72px);
}
</style>
