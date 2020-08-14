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
      <text x="12" y="9" font-size="8pt" fill="#000000" @click="deletePort">{{name}}</text>
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
      <text :x="12" y="9" font-size="8pt" fill="#000000" @click="deletePort">{{name}}</text>
    </svg>
  </g>
</template>
<script>
export default {
  name: "DiagramPort",
  props: ["id", "y", "type", "name", "nodeWidth", "nodeIndex"],
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
    },
    deletePort: function() {
      this.$emit("delete");
    }
  }
};
</script>
