<template>
  <span :class="`port-name port-${props.port.type}`" y="8" :x="(width || 0) - horizontalPadding" >{{props.port.name}}</span>
</template>
<script setup lang="ts">
const horizontalPadding = 10;

const props = defineProps({
  port: {
    type: Object,
    required: true
  },
  width: Number,
});

</script>
