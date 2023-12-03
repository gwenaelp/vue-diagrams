<template>
  <IndexPageWrapper :manifest="manifest" :examples="examples" />
</template>
<script setup lang="ts">
import manifest from '../../package.json';
import IndexPageWrapper from 'nuxt-quickdoc/components/IndexPageWrapper.vue';
import example2 from '../../images/example2.png';
import example3 from '../../images/example3.png';

const examples = [example2, example3];

</script>
