<template>
  <svg
    :x="nodeModel.x"
    :y="nodeModel.y"
    :class="{
      'diagram-node': true,
      selected,
      'main-selection': mainSelection,
      'has-menu': true,
    }"
    :data-node-id="id"
    @click="nodeClick"
  >
    <rect
      :stroke-width="selected ? 2 : 0"
      x="0" y="0"
      rx="3" ry="3"
      :width="nodeModel.width" :height="nodeModel.height"
      :class="{
        'node-rect': true,
        'node-dark-background': true,
        selected,
        'main-selection': mainSelection,
      }"
    />
    <g ref="resizeHandles" />
    <g
      class="diagram-node-content-wrapper mouse-events-wrapper"
      @mousedown="mouseDown"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
    >
      <component
        :is="`vue-diagrams-node-${options.type || this.$parent.$parent.defaultNodeType}`"
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
<script lang="ts">
import ResizeHandles from '../NodeResizeHandles';
import TextNode from './NodeTypes/Text.vue';
import CardNode from './NodeTypes/Card.vue';
import ImageNode from './NodeTypes/Image.vue';
import ShaderNode from './NodeTypes/Shader.vue';
import DiagramElement from '../mixins/DiagramElement';
import { defineComponent } from 'vue';

export default defineComponent({
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
    mainSelection: {
      type: Boolean,
      default: false,
    },
    selected: Boolean,
    nodeModel: {
      type: Object,
      required: true,
    },
    diagram: {
      type: Object,
      required: true,
    }
  },
  components: {
    'vue-diagrams-node-text': TextNode,
    'vue-diagrams-node-image': ImageNode,
    'vue-diagrams-node-shader': ShaderNode,
    'vue-diagrams-node-card': CardNode,
  },
  mixins: [DiagramElement],
  data(): any {
    return {
      resizeHandles: undefined,
      titleFillOpacity: 1,
      menu: [{
        label: 'Delete node',
        handler() {
          this.diagram.deleteNode(this.nodeModel);
          this.$parent.$parent.updateLinksPositions();
        },
        classes: [],
      }],
    };
  },
  beforeUnmount () {
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
      handler(v: Boolean) {
        this.$nextTick(() => {
          if (v) {
            this.resizeHandles = new ResizeHandles(
              this.$refs.resizeHandles as HTMLElement,
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
        this.menu = this.menu.filter((menuItem: any) => menuItem.from !== 'nodeType');
        this.$nextTick(() => {
          const nodeType = this.$refs.nodeType as any;
          
          if (nodeType && nodeType.menu) {
            if (nodeType.menu.length) {
              this.menu.unshift({ classes:['separator'], from: 'nodeType' });
            }
            for(let mi of nodeType.menu) {
              this.menu.unshift({ ...mi, from: 'nodeType' });
            }
          }
        });
      },
      immediate: true,
    },
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

    mouseDown (event: any) {
      const diagramComponent = this?.$parent?.$parent as any;
      if (!diagramComponent.editable) return;

      if (!event.target.classList.contains('title-editable') && event.target.closest('.prevent-node-drag') === null) {
        const pos = diagramComponent.convertXYtoViewPort(event.x, event.y);
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
    startDragResizeHandle(direction: any) {
      if (!(this?.$parent?.$parent as any).editable) return;

      this.$emit(
        'onStartDrag',
        { type: "resizeHandle", index: this.index, node: this.nodeModel, direction },
        0 /*event.x*/ - this.nodeModel.x,
        0 /*event.y*/ - this.nodeModel.y
      );
    },
    nodeClick() {
      (this?.$parent?.$parent as any).$emit('nodeClick', this.nodeModel);
    },
  }
});
</script>
<style scoped>
  .diagram-node {
    overflow: visible;
  }
  .diagram-node :deep(.title-editable:hover) {
    fill: blue;
    cursor: pointer;
  }
  .node-rect {
    fill: #00000000;
    stroke: #000000;
  }
</style>
