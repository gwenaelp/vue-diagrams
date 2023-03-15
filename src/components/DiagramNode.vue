<template>
  <svg :x="x" :y="y" class="diagram-node">
    <template v-if="options.type === undefined">
      <rect
        :fill="color"
        stroke="#000000"
        :stroke-width="selected ? 2 : 0"
        x="5" y="15"
        rx="3" ry="3"
        :width="width" :height="height"
        class="node-dark-background">
      </rect>
      <g ref="resizeHandles" />
      <svg
        x="0" y="0"
        @mousedown="mouseDown"
        @mouseenter="mouseenter"
        @mouseleave="mouseleave"
      >
        <rect
          fill="#000000"
          :fill-opacity="titleFillOpacity"
          x="7" y="17"
          rx="3" ry="3"
          :width="width-4" height="16"
          class="node-dark-background"
        />
        <text
          :x="10" :y="30"
          :class="options.editableTitle ? 'title-editable': ''"
          font-size="14"
          font-weight="bold"
          fill="#000000"
        >
          {{title}}
        </text>
        <g v-if="deletable" @click="deleteNode">
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
        fill="#ffffff"
        x="7" y="35"
        rx="3" ry="3"
        :width="width-4" :height="height - 22"
        class="node-light-background"
      />
      <slot />
    </template>
    <template v-else>
      <rect fill="#ffffff00"
        stroke="#000000"
        :stroke-width="selected ? 2 : 0"
        x="10" y="0"
        rx="3" ry="3"
        :width="width - 10"
        :height="height"
        class="node-dark-background"
      />
      <g
        @mousedown="mouseDown"
        @mouseenter="mouseenter"
        @mouseleave="mouseleave"
      >
        <image :href="options.image" x="10" :width="width - 10" :height="height" />
      </g>
      <text
        :class="options.editableTitle ? 'title-editable': ''"
        :x="width/2"
        :width="width"
        text-anchor="middle"
        :y="height + 14"
        font-size="14"
        font-weight="bold"
        fill="#000000"
      >
          {{title}}
        </text>
      <slot />
    </template>
  </svg>
</template>
<script>
import ResizeHandles from '../NodeResizeHandles';

export default {
  name: 'DiagramNode',

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
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      default: "#66cc00"
    },
    deletable: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    selected: Boolean,
  },

  data() {
    return {
      nodeStrokeWidth: 0,
      titleFillOpacity: 0.25,
      resizeHandles: undefined,
    };
  },
  beforeDestroy () {
    if (this.resizeHandles) {
      this.resizeHandles.unmount();
    }
  },
  watch: {
    x: 'resizeNode',
    y: 'resizeNode',
    width: 'resizeNode',
    height: 'resizeNode',
    'options.resizable': {
      handler(v) {
        this.$nextTick(() => {
          if (v) {
            this.resizeHandles = new ResizeHandles(
              this.$refs.resizeHandles,
              this.width,
              this.height,
              this.startDragResizeHandle,
            );
          } else if(this.resizeHandles) {
            this.resizeHandles.unmount();
            this.resizeHandles = undefined;
          }
        });
      },
      immediate: true,
    }
  },
  methods: {
    resizeNode() {
      if(this.resizeHandles) {
        this.resizeHandles.updatePosition(this.x, this.y, this.width, this.height);
      }
    },
    deleteNode () {
      this.$emit('delete');
    },

    mouseDown (event) {
      if (!event.target.classList.contains('title-editable')) {
        const pos = this.$parent.$parent.convertXYtoViewPort(event.x, event.y);
        this.$emit(
          'onStartDrag',
          { type: 'nodes', index: this.index, },
          pos.x - this.x,
          pos.y - this.y
        );
      }
    },

    mouseenter() {
      this.titleFillOpacity = 0.5;
    },

    mouseleave() {
      this.titleFillOpacity = 0.25;
    },
    startDragResizeHandle(direction) {
        this.$emit(
          'onStartDrag',
          { type: "resizeHandle", index: this.index, direction },
          event.x - this.x,
          event.y - this.y
        );
    },
  }
};
</script>
<style scoped>
  .title-editable:hover {
    fill: blue;
    cursor: pointer;
  }

</style>
