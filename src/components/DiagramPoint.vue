<template>
  <g>
    <circle
      stroke="none"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      @mousedown="$emit('mousedown', $event)"
      :cx="x" :cy="y" r="5"
      fill="#00000055"
      filter="url(#filter_gaus_20)"
      />
    <circle
      stroke="none"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      @mousedown="$emit('mousedown', $event)"
      :cx="x" :cy="y" r="3"
      :fill="hover ? hoverStrokeStyle : normalStrokeStyle"
      filter="url(#filter_gaus_40)"
      />
      <!-- :fill="rgba(0,0,0,.3)" -->
    <!-- <circle
      style="stroke:rgba(0,0,0,.3);"
      stroke-width="3"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      @mousedown="$emit('mousedown', $event)"
      :cx="x" :cy="y" r="3"
      :fill="hover ? hoverStrokeStyle : normalStrokeStyle"
      /> -->
  </g>
</template>
<script>
export default {
  name: "DiagramPoint",
  props: ["x", "y"],
  data() {
    return {
      hover: false,
      normalStrokeStyle: "rgba(255,255,255,.75)",
      hoverStrokeStyle: "rgba(255,0,0,.75)"
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
