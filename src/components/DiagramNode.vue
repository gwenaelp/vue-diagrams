<template>
  <svg :x="x" :y="y">
    <!-- stroke="#000000" -->
    <!-- :stroke="borderColor" -->
    <!-- :stroke-width="selected ? 2 : 0" -->
    <!-- :fill="color" -->
    <!-- class="node-dark-background" -->
    <rect
      fill="none"
      :stroke="selected ? borderColorSelected : borderColor"
      stroke-width="2"
      x="5" y="15"
      rx="3" ry="3"
      :width="width" :height="computedHeight"
      filter="url(#filter_gaus_40)"
      >
    </rect>
    <svg
      x="0" y="0"
      @mousedown="mouseDownTitleBar"
      @mouseenter="mouseEnterTitleBar"
      @mouseleave="mouseLeaveTitleBar"
      style="cursor: move"
      >
      <rect
        :fill="titleBarColor"
        :fill-opacity="titleBarFillOpacity * titleFillOpacityCorrection"
        x="6" y="16"
        rx="2" ry="2"
        :width="width - 2" height="18"
        >
      </rect>
      <text :x="12" :y="30" font-size="14" font-weight="bold" :fill="titleTextColor">{{title}}</text>
      <g v-if="deletable && !readOnly" @click="deleteNode" style="cursor: pointer">
        <rect
          :x="width - 12"
          y="18"
          width="14"
          height="14"
          rx="2" ry="2"
          fill="#ffffff"
          :fill-opacity="0.25"
          />
        <line
          :x1="width" :y1="20"
          :x2="width - 10" :y2="30"
          style="stroke:rgb(0,0,0);"
          stroke-width="2"
        />
        <line
          :x1="width - 10" :y1="20"
          :x2="width" :y2="30"
          style="stroke:rgb(0,0,0);"
          stroke-width="2"
        />
      </g>
    </svg>
    <rect
      :fill="backgroundColor"
      :fill-opacity="backgroundOpacity"
      x="6" y="34"
      rx="2" ry="2"
      :width="width - 2" :height="computedHeight - 20"
      @drop="onDrop($event)"
      @dragover.prevent
      @dragenter.prevent
      >
      <!-- class="node-light-background" -->
    </rect>
    <slot></slot>
  </svg>
</template>
<script>
export default {
  name: "DiagramNode",

  props: {
    title: {
      type: String,
      required: true
    },
    index: Number,
    ports: {
      type: Array,
      default: () => {
        return [];
      }
    },
    x: Number,
    y: Number,
    width: {
      type: Number,
      default: 72
    },
    height: {
      type: Number,
      default: 100
    },
    color: {
      type: String,
      default: "#66cc00"
    },
    backgroundColor: {
      type: String,
      default: "#000000"
    },
    backgroundOpacity: {
      type: Number,
      default: 0.3
    },
    borderColor: {
      type: String,
      default: "#000000"
    },
    borderColorSelected: {
      type: String,
      default: "#ED7D31"
    },
    titleTextColor: {
      type: String,
      default: "#FFFFFF"
    },
    titleBarColor: {
      type: String,
      default: "#606060"
    },
    titleBarFillOpacity: {
      type: Number,
      default: 0.5
    },
    deletable: {
      type: Boolean,
      default: true
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    selected: Boolean
  },

  data() {
    return {
      nodeStrokeWidth: 0,
      titleFillOpacityCorrection: 1
    };
  },

  computed: {
    computedHeight() {
      let newHeight = this.ports.length * 20 + 50;
      if (this.height > newHeight) {
        return this.height;
      } else {
        return newHeight;
      }
    }
  },

  methods: {
    deleteNode: function() {
      this.$emit("delete");
    },

    mouseDownTitleBar: function(event) {
      this.$emit(
        "onStartDrag",
        { type: "nodes", index: this.index },
        event.x - this.x,
        event.y - this.y
      );
    },

    mouseEnterTitleBar() {
      this.titleFillOpacityCorrection = 1.5;
    },

    mouseLeaveTitleBar() {
      this.titleFillOpacityCorrection = 1;
    },

    onDrop: function(event) {
      this.$emit("drop", event);
    }
  }
};
</script>
