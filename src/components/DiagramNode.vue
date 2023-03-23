<template>
  <svg :x="nodeModel.x" :y="nodeModel.y" :class="`diagram-node ${selected ? 'selected': ''} has-menu`" :data-node-id="id">
    <rect
      fill="#00000000"
      stroke="#000000"
      :stroke-width="selected ? 2 : 0"
      x="0" y="0"
      rx="3" ry="3"
      :width="nodeModel.width" :height="nodeModel.height"
      class="node-dark-background"
    />
    <g ref="resizeHandles" />
    <g
      @mousedown="mouseDown"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
    >
      <component
        :is="`vue-diagrams-node-${options.type || 'shader'}`"
        ref="nodeType"
        :nodeModel="nodeModel"
        :selected="selected"
        @deleteNode="deleteNode"
      >
        <slot />
      </component>
    </g>
  </svg>
</template>
<script>
import ResizeHandles from '../NodeResizeHandles';
import TextNode from './NodeTypes/Text.vue';
import ImageNode from './NodeTypes/Image.vue';
import ShaderNode from './NodeTypes/Shader.vue';

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
  components: {
    'vue-diagrams-node-text': TextNode,
    'vue-diagrams-node-image': ImageNode,
    'vue-diagrams-node-shader': ShaderNode,
  },
  data() {
    return {
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
    },
    'options.type': {
      handler() {
        this.menu = this.menu.filter(menuItem => menuItem.from !== 'nodeType');
        console.log('this.$refs.nodeType.menu?', this.$refs.nodeType ? this.$refs.nodeType.menu: this.$refs.nodeType);
        this.$nextTick(() => {
          if (this.$refs.nodeType && this.$refs.nodeType.menu) {
            console.log('add elements to menu', this.$refs.nodeType.menu)
            if(this.$refs.nodeType.menu.length) {
              this.menu.unshift({ classes:['separator'], from: 'nodeType' });
            }
            for(let mi of this.$refs.nodeType.menu) {
              this.menu.unshift({ ...mi, from: 'nodeType' });
            }
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
      if (!this.$parent.$parent.editable) return;

      if (!event.target.classList.contains('title-editable') && event.target.closest('.prevent-node-drag') === null) {
        const pos = this.$parent.$parent.convertXYtoViewPort(event.x, event.y);
        this.$emit(
          'onStartDrag',
          { type: 'nodes', index: this.index, node: this.nodeModel },
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
      if (!this.$parent.$parent.editable) return;

      this.$emit(
        'onStartDrag',
        { type: "resizeHandle", index: this.index, node: this.nodeModel, direction },
        event.x - this.nodeModel.x,
        event.y - this.nodeModel.y
      );
    },
  }
};
</script>
<style scoped>
  .diagram-node {
    overflow: visible;
  }
  .diagram-node >>> .title-editable:hover {
    fill: blue;
    cursor: pointer;
  }
</style>
