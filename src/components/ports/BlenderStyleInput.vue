<template>
  <div class="blender-style-input">
    <label>{{props.label}}</label>
    <input type="number" />
  </div>
</template>
<script setup>
const props = defineProps({
  label: String,
});
</script>
<style scoped>
div {
  position: relative;
}
label {
  position: absolute;
  top: 3px;
  left: 10px;
  font-size: 8px;
  color: white;
  pointer-events: none;
}
input {
  outline: none;
  background: #545454;
  color: white;
  border-radius: 4px;
  width: 100%;
  border: 0;
  text-align: right;
  padding-right: 10px;
}
input:focused {
  background: #545454;
}
</style>
