<template>
  <g>
    <svg :y="y + 55" v-if="type === 'in'">
      <rect
        :fill="fill"
        ref="handle"
        x="0" y="1"
        rx="3" ry="3"
        width="10" height="10"
        @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup">
      </rect>
      <text x="12" y="9" font-size="8pt" fill="#000000">{{name}}</text>
    </svg>
    <svg :y="y + 55" v-else>
      <!-- <rect
        :fill="fill"
        ref="handle_OLD"
        :x="nodeWidth" y="1"
        rx="3" ry="3"
        width="10" height="10"
        @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup">
      </rect> -->
      <!-- <path opacity="0.8" fill="#642765" stroke="none"
        :d="`
          M ${nodeWidth - (name.length * fontSize + 10)} 1
          a 5 5 0 0 0 -5 5
          a 5 5 0 0 0 5 5
          h ${name.length * fontSize + 10}
          v -10
          h ${(name.length * fontSize + 10) * -1}
          z `" />
      <path opacity="1" fill="#b0b0ff" stroke="#000000"
        :d="`
          M ${nodeWidth - 10} 1
          a 5 5 0 0 0 -5 5
          a 5 5 0 0 0 5 5
          h 10
          v -10
          h -10
          z `" /> -->
      <path opacity="0.8" fill="#642765" stroke="none" @click="configurePort" style="cursor: pointer"
        :d="`
          M ${nodeWidth - (name.length * fontSize + 5)} 0
          a 9 9 0 0 0 -9 9
          a 9 9 0 0 0 9 9
          h ${name.length * fontSize + 10}
          v -18
          h ${(name.length * fontSize + 10) * -1}
          z `" />
      <path opacity="1" stroke="#000000" stroke-width="1"
        ref="handle"
        :fill="fill"
        @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup"
        :d="`
          M ${nodeWidth - 5} 1
          a 8 8 0 0 0 -8 8
          a 8 8 0 0 0 8 8
          h 10
          v -16
          h -10
          z `" />
      <!-- <text :x="12" y="9" font-size="8pt" fill="#000000">{{name}}</text> -->
      <text :x="nodeWidth - (name.length * fontSize + 0)" :y="9 + fontSize / 2" :font-size="`${fontSize}pt`" fill="#FFFFFF" @click="configurePort" style="cursor: pointer">{{name}}</text>
      <!-- <text :x="nodeWidth - 24" y="9" font-size="8pt" fill="#000000" @click="configurePort" style="cursor: pointer">o</text> -->
      <text :x="nodeWidth - 7" :y="9 + fontSize / 2" :font-size="`${fontSize}pt`" fill="#000000" @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup">{{ connectorCategory }}</text>
      <!-- <text :x="nodeWidth - 12" y="9" font-size="8pt" fill="#000000" @click="deletePort" style="cursor: pointer">x</text> -->
    </svg>
  </g>
</template>
<script>
export default {
  name: "DiagramPort",
  props: ["id", "y", "type", "name", "nodeWidth", "nodeIndex"],
  data() {
    return {
      // fill: "#444444",
      fill: "#b0b0ff",
      fontSize: 8,
      connectorCategory: "S"
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
      this.fill = "#b0b0ff";
    },
    startDragNewLink() {
      this.$emit("onStartDragNewLink", this.id);
    },
    deletePort: function() {
      console.log("deletePort");
      this.$emit("delete");
    },
    configurePort: function() {
      console.log("configurePort");
      this.$emit("configure");
    }
  }
};
</script>
