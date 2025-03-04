<template>
  <div class="port-label-vector">
    <template v-if="port.type === 'in'">
      {{port.name}}:
      <BlenderStyleInput label="X" />
      <BlenderStyleInput label="Y" />
      <BlenderStyleInput label="Z" />
    </template>
    <PortLabel v-else :port="port" :width="width" />
  </div>
</template>
<script lang="ts">
import PortLabel from './PortLabel.vue';
import BlenderStyleInput from './BlenderStyleInput.vue';

export default {
  components: {
    BlenderStyleInput,
    PortLabel,
  },
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
