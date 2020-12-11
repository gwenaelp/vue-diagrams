<template>
  <g>
    <svg :y="y + 55" v-if="type === 'in'">
      <path opacity="0.8" fill="#642765" stroke="none" @click="configurePort" style="cursor: pointer"
        filter="url(#filter_gaus_20)"
        :d="`
          M 5 0
          v 19
          h ${name.length * fontSize + 10}
          a 9.5 9.5 0 0 0 0 -19
          h ${(name.length * fontSize + 10) * -1}
          z `" />
      <path opacity=".6" stroke="none"
        filter="url(#filter_gaus_20)"
        fill="#00000"
        :d="`
          M 5 0
          v 19
          h 10
          a 9.5 9.5 0 0 0 0 -19
          h -10
          z `" />
      <path opacity="1" stroke="none"
        ref="handle"
         style="cursor: crosshair"
        :fill="fill"
        @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup"
        :d="`
          M 5 0.5
          v 18
          h 10
          a 9 -9 0 0 0 0 -18
          h -10
          z `" />
      <text :x="30" :y="9 + fontSize / 2" :font-size="`${fontSize}pt`" fill="#FFFFFF" @click="configurePort" style="cursor: pointer">{{name}}</text>
      <text :x="10" :y="9 + fontSize / 2" :font-size="`${fontSize}pt`" fill="#000000" style="cursor: crosshair" @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup">{{ connectorCategory }}</text>
    </svg>
    <svg :y="y + 55" v-else>
      <path opacity="0.8" fill="#642765" stroke="none" @click="configurePort" style="cursor: pointer"
        filter="url(#filter_gaus_20)"
        :d="`
          M ${nodeWidth - (name.length * fontSize + 5)} 0
          a 9.5 9.5 0 0 0 0 19
          h ${name.length * fontSize + 10}
          v -19
          h ${(name.length * fontSize + 10) * -1}
          z `" />
      <path opacity=".6" stroke="none"
        filter="url(#filter_gaus_20)"
        fill="#00000"
        :d="`
          M ${nodeWidth - 5} 0
          a 9.5 9.5 0 0 0 0 19
          h 10
          v -19
          h -10
          z `" />
      <path opacity="1" stroke="none"
        ref="handle"
         style="cursor: crosshair"
        :fill="fill"
        @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup"
        :d="`
          M ${nodeWidth - 5} 0.5
          a 9 9 0 0 0 0 18
          h 10
          v -18
          h -10
          z `" />
      <!-- <text :x="12" y="9" font-size="8pt" fill="#000000">{{name}}</text> -->
      <text :x="nodeWidth - (name.length * fontSize + 0)" :y="9 + fontSize / 2" :font-size="`${fontSize}pt`" fill="#FFFFFF" @click="configurePort" style="cursor: pointer">{{name}}</text>
      <!-- <text :x="nodeWidth - 24" y="9" font-size="8pt" fill="#000000" @click="configurePort" style="cursor: pointer">o</text> -->
      <text :x="nodeWidth - 7" :y="9 + fontSize / 2" :font-size="`${fontSize}pt`" fill="#000000" style="cursor: crosshair" @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup">{{ connectorCategory }}</text>
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
