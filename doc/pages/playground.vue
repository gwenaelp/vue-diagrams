<template>
  <div class="playground">
    <div class="menu">
      <ul>
        <li v-for="(e, name) in exampleImports">
          <a :class="displayedExample === name ? 'selected': ''" @click="displayedExample = name">
            {{ name }}
          </a>
        </li>
      </ul>
    </div>
    <Repl class="repl" :example="displayedExample" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import Repl from '../components/Repl.vue';

import { exampleImports } from '../examples/index';

let displayedExample = ref('playground');
</script>
<style scoped>
.playground {
  display: flex;
  padding-top: 70px;
  justify-content: stretch;
  width: 100%;
}
.menu {
  width: 200px;
}

.repl {
  flex-grow: 1;
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
