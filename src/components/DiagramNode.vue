<template>
  <svg :x="nodeModel.x" :y="nodeModel.y" :class="`diagram-node ${selected ? 'selected': ''} has-menu`" :data-node-id="id">
    <template v-if="options.type === undefined">
      <rect
        :fill="color"
        stroke="#000000"
        :stroke-width="selected ? 2 : 0"
        x="5" y="15"
        rx="3" ry="3"
        :width="nodeModel.width" :height="nodeModel.height"
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
          :width="nodeModel.width-4" height="16"
          class="node-dark-background"
        />
        <text
          :x="10" :y="30"
          :class="options.editableTitle ? 'title-editable': ''"
          font-size="14"
          font-weight="bold"
          fill="#000000"
        >
          {{nodeModel.title}}
        </text>
        <g v-if="deletable" @click="deleteNode">
          <rect
            :x="nodeModel.width - 12"
            y="18"
            width="14"
            height="14"
            rx="2" ry="2"
            fill="#ffffff"
            :fill-opacity="0.25"
          />
          <line
            :x1="nodeModel.width" :y1="20"
            :x2="nodeModel.width - 10" :y2="30"
            style="stroke:rgb(0,0,0);"
            stroke-width="2"
          />
          <line
            :x1="nodeModel.width - 10" :y1="20"
            :x2="nodeModel.width" :y2="30"
            style="stroke:rgb(0,0,0);"
            stroke-width="2"
          />
        </g>
      </svg>
      <rect
        fill="#ffffff"
        x="7" y="35"
        rx="3" ry="3"
        :width="nodeModel.width - 4"
        :height="nodeModel.height - 22"
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
        :width="nodeModel.width - 10"
        :height="nodeModel.height"
        class="node-dark-background"
      />
      <g
        @mousedown="mouseDown"
        @mouseenter="mouseenter"
        @mouseleave="mouseleave"
      >
        <image :href="options.image" x="10" :width="nodeModel.width - 10" :height="nodeModel.height" />
      </g>
      <text
        :class="options.editableTitle ? 'title-editable': ''"
        :x="nodeModel.width / 2"
        :width="nodeModel.width"
        text-anchor="middle"
        :y="nodeModel.height + 14"
        font-size="14"
        font-weight="bold"
        fill="#000000"
      >
        {{nodeModel.title}}
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
    index: Number,
    id: {
      type: Number,
      required: true,
    },
    ports: {
      type: Array,
      default: () => {
        return [];
      }
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
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
    nodeModel: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      nodeStrokeWidth: 0,
      titleFillOpacity: 0.25,
      resizeHandles: undefined,
      menu: [{
        label: 'Delete node',
        handler() { this.deleteNode(); },
      }],
    };
  },
  beforeDestroy () {
    if (this.resizeHandles) {
      this.resizeHandles.unmount();
    }
  },
  watch: {
    'nodeModel.x': 'resizeNode',
    'nodeModel.y': 'resizeNode',
    'nodeModel.width': 'resizeNode',
    'nodeModel.height': 'resizeNode',
    'options.resizable': {
      handler(v) {
        this.$nextTick(() => {
          if (v) {
            this.resizeHandles = new ResizeHandles(
              this.$refs.resizeHandles,
              this.nodeModel.width,
              this.nodeModel.height,
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
  computed: {
    x () {
      return this.nodeModel.x;
    },
    y () {
      return this.nodeModel.y;
    },
    color () {
      return this.nodeModel.color || '#66cc00';
    }
  },
  methods: {
    resizeNode() {
      if(this.resizeHandles) {
        this.resizeHandles.updatePosition(this.nodeModel.width, this.nodeModel.height);
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
          pos.x - this.nodeModel.x,
          pos.y - this.nodeModel.y
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
        event.x - this.nodeModel.x,
        event.y - this.nodeModel.y
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
