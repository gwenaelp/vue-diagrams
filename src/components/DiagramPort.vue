<template>
  <g>
    <svg :y="y + 35" v-if="type === 'in'">
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
    <svg :y="y + 35" v-else-if="type === 'out'">
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
    <svg :y="y + 45" v-else-if="type === 'right'">
      <rect
        :fill="fill"
        ref="handle"
        :x="nodeWidth" y="0"
        rx="3" ry="3"
        width="10" height="10"
        @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup">
      </rect>
  </svg>
  <svg :y="y + 55" v-else-if="type === 'left'">
      <rect
        :fill="fill"
        ref="handle"
        :x="0" y="0"
        rx="3" ry="3"
        width="10" height="10"
        @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup">
      </rect>
      <text :x="(nodeWidth+16)/2" y="9" text-anchor="middle" font-size="8pt" fill="#000000">{{name}}</text>
    </svg>
    <svg :y="y + 20" v-else-if="type === 'node'">
      <rect
        :fill="fill"
        ref="handle"
        :x="nodeWidth/2" y="0"
        rx="3" ry="3"
        width="10" height="10"
        @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup">
      </rect>
    </svg>
  </g>
</template>
<script>
export default {
  name: "DiagramPort",
  props: ["id", "y", "type", "name", "nodeWidth", "nodeHeight", "nodeIndex"],
  data() {
    return {
      fill: "#444444"
    };
  },
  methods: {
    mouseup() {
      this.$emit("mouseUpPort", this.id);
    },

    enter() {
      this.fill = "#888888";
    },

    leave() {
      this.fill = "#444444";
    },
    startDragNewLink() {
      this.$emit("onStartDragNewLink", this.id);
    }
  }
};
</script>
