<template>
  <polygon class="port-shape" points="0 10,5 15,10 10,5 5" />
  <circle class="port-shape" cx="5" cy="10" r=".5" />
</template>
<script setup>
defineProps({
  port: Object,
});
</script>
