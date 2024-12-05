<template>
  <span :class="`port-name port-${props.port.type}`" y="8" :x="width - horizontalPadding" >{{props.port.name}}</span>
</template>
<script setup>
const horizontalPadding = 10;

const props = defineProps({
  port: Object,
  width: Number,
});

</script>
