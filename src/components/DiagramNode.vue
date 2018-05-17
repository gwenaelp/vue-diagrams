<template>
  <svg :x="x" :y="y">
    <rect
      fill="#66cc00"
      stroke="#000000"
      :stroke-width="selected ? 2 : 0"
      x="5" y="25"
      rx="3" ry="3"
      :width="width" :height="height"
      class="node-dark-background">
    </rect>
    <svg
      x="0" y="0"
      @mousedown="mouseDown"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave">
      <rect
        fill="#000000"
        :fill-opacity="titleFillOpacity"
        x="7" y="27"
        rx="3" ry="3"
        :width="width-4" height="16"
        class="node-dark-background"
        >
      </rect>
      <text :x="15" :y="40" font-size="14" font-weight="bold" fill="#000000">{{title}}</text>
    </svg>
    <rect
      fill="#ffffff"
      x="7" y="45"
      rx="3" ry="3"
      :width="width-4" :height="height - 22"
      class="node-light-background">
    </rect>
    <slot></slot>
  </svg>
</template>
<script>
export default {
  name: "DiagramNode",

  props: ["title", "index", "ports", "x", "y", "width", "height", "selected"],

  data() {
    return {
      nodeStrokeWidth: 0,
      titleFillOpacity: 0.25
    };
  },

  methods: {
    mouseDown: function(event) {
      this.$emit(
        "onStartDrag",
        { type: "nodes", index: this.index },
        event.x - this.x,
        event.y - this.y
      );
    },

    mouseenter() {
      this.titleFillOpacity = 0.5;
    },

    mouseleave() {
      this.titleFillOpacity = 0.25;
    }
  }
};
</script>
