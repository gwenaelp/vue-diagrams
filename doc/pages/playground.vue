<template>
  <div class="playground">
    <div class="menu">
      <section v-for="(section, name) in sections">
        <h3>{{ name }}</h3>
        <ul>
          <li v-for="example in section">
            <a :class="displayedExample === example ? 'selected': ''" @click="displayedExample = example">
              {{ example }}
            </a>
          </li>
        </ul>
      </section>
    </div>
    <Repl class="repl" :example="displayedExample" />
  </div>
</template>
<script setup lang="ts">
import { ref, Ref } from 'vue';

import Repl from '../components/Repl.vue';

import { exampleImports } from '../examples/index';

let displayedExample = ref('playground');
let sections: Ref<Record<string, any>> = ref({});

for (let e of Object.keys(exampleImports)) {
  const sectionName:string = exampleImports[e].section;
  if (sections.value[sectionName] === undefined) {
    sections.value[sectionName] = [];
  }
  sections.value[sectionName].push(e);
}
</script>
<style scoped>
.playground {
  display: flex;
  padding-top: 70px;
  justify-content: stretch;
  width: 100%;
}
.menu {
  width: 260px;
}

.repl {
  flex-grow: 1;
}
h3 {
  padding: 10px;
  padding-left: 10px;
  font-size: 18px;
  background-color: #ddd;
  margin: 0;
}
ul {
  margin: 0;
  padding: 0;
}
a {
  padding: 8px 16px;
  display: block;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}
a:hover {
  background: #eee;
}
a.selected {
  font-weight: bold;
}
</style>
