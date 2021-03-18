<template>
  <g>
    <svg :y="y + 55" v-if="type === 'in'">
      <rect
        :fill="fill"
        ref="handle"
        x="0" y="0"
        rx="3" ry="3"
        width="10" height="10"
        @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup">
      </rect>
      <text x="12" y="9" font-size="8pt" fill="#000000">{{name}}</text>
    </svg>
    <svg :y="y + 55" v-else>
      <rect
        :fill="fill"
        ref="handle"
        :x="nodeWidth" y="0"
        rx="3" ry="3"
        width="10" height="10"
        @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup">
      </rect>
      <text :x="nodeWidth - 6" y="9" text-anchor="end" font-size="8pt" fill="#000000">{{name}}</text>
    </svg>
  </g>
</template>
<script>
export default {
  name: "DiagramPort",
  props: ["id", "y", "type", "name", "nodeWidth", "nodeIndex", "readonly"],
  data() {
    return {
      fill: "#444444"
    };
  },
  methods: {
    mouseup() {
      if (!this.readonly) {
        this.$emit("mouseUpPort", this.id);
      }
    },

    enter() {
      if (!this.readonly) {
        this.fill = "#888888";
      }
    },

    leave() {
      if (!this.readonly) {
        this.fill = "#444444";
      }
    },
    startDragNewLink() {
      if (!this.readonly) {
        this.$emit("onStartDragNewLink", this.id);
      }
    }
  }
};
</script>
