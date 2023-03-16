<template>
  <g class="has-menu">
    <circle
      :style="hover?'stroke:rgba(255,0,0,0.5);':'stroke:rgba(255,0,0,0.0);'"
      stroke-width="6"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      @mousedown="$emit('mousedown', $event)"
      :cx="x" :cy="y" r="5"
      fill="black"
    />
  </g>
</template>
<script>
export default {
  name: 'DiagramPoint',
  props: {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      hover: false,
      menu: [{
        label: 'Delete point',
        handler() { this.$emit('delete'); },
      }],
    };
  },
  methods: {
    mouseEnter() {
      this.hover = true;
    },
    mouseLeave() {
      this.hover = false;
    },
  },
};
</script>
