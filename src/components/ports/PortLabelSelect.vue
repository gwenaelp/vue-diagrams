<template>
  <div class="port-label-select">
    <select>
      <option v-for="v in port.values">{{v}}</option>
    </select>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    port: Object,
    width: Number,
  },
}
</script>
<style scoped>
.port-label-vector {
  padding-top: 5px;
  font-size: 11px;
}
</style>
