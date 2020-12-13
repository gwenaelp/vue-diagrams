<template>
  <circle
    :style="hover?'stroke:rgba(255,0,0,0.5);':'stroke:rgba(255,0,0,0.0);'"
    stroke-width="6"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
    @mousedown="$emit('mousedown', $event)"
    :cx="x" :cy="y" r="5"
    fill="black" />
</template>
<script>
export default {
  name: "DiagramPoint",
  props: ["x", "y"],
  data() {
    return {
      hover: false
    };
  },
  methods: {
    mouseEnter() {
      this.hover = true;
    },
    mouseLeave() {
      this.hover = false;
    }
  }
};
</script>
