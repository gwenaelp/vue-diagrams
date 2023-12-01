<template>
  <div>
    Playground page
    <client-only placeholder="Loading...">
      <Repl example="playground" />
    </client-only>
  </div>
</template>
<script lang="ts">
import Repl from '../components/Repl.vue';

export default {
  components: {
    Repl,
  },
};
</script>
