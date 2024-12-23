<template>
  <div :class="{
    'diagram-port': true,
    'has-menu': true,
    hover
  }" :aria-label="port.id" data-cooltipz-dir="bottom-right"
  style="overflow: visible; position: relative; padding-left: 10px;"
  >
    <!--<rect
      :fill="fill"
      ref="handle"
      :x="displayedX" y="0"
      rx="3" ry="3"
      width="10" height="10"
      @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup"
    />
  -->
    <svg
      v-if="port.type !== 'option'"
      @mouseenter="enter"
      @mouseleave="leave"
      @mousedown="startDragNewLink"
      @mouseup="mouseup"
      :class="{
        'port-shape-container': true,
        [`port-type-${port.type}`]: true
      }"
    >
      <component
        :is="`vue-diagrams-port-shape-${port.display_shape || 'dot'}`"
        :port="port"
      />
    </svg>
    <div :class="{
      'label-wrapper': true,
      [`port-type-${port.type}`]: true,
      }">
      <component
        v-if="getPortLabelComponent(port.value_type)"
        :is="getPortLabelComponent(port.value_type)"
        :port="port"
        :width="width"
      />
      <PortLabel v-else :port="port" :width="width" />
    </div>
    <div
      v-if="port.options?.tooltip?.text"
      :class="{
        'tooltip': true,
        'tooltip-show-on-port-hover': port.options?.tooltip?.trigger === 'hoverPort'
      }"
    >
    <!--
      <component
        :is="getPortShapeComponent(port.display_shape)"
        class="label"
        :port="port"
      />
    -->
      <!--
      <rect
        :fill="port.options?.tooltip?.fill || '#eeeeee'"
        :stroke="port.options?.tooltip?.stroke || '#bbbbbb'"
        :x="0" y="0"
        rx="3" ry="3"
        width="40" height="18"
      />
      -->
      <span x="10" y="13" font-size="8pt" fill="#000000">{{port.options?.tooltip?.text}}</span>
    </div>
  </div>
</template>
<script lang="ts">
import DiagramElement from '../mixins/DiagramElement';
import { defineComponent, resolveComponent } from 'vue'
import DotShapePort from './ports/DotPort.vue';
import PortLabel from './ports/PortLabel.vue';

export default defineComponent({
  name: 'DiagramPort',
  props: ['id', 'x', 'y', 'node', 'nodeIndex', 'port'],
  components: {
    'vue-diagrams-port-shape-dot': DotShapePort,
    PortLabel,
  },
  data() {
    return {
      hover: false,
      fill: '#666666',
      menu: [{
        label: 'Delete port',
        handler: () => {
          const parentComponent = this.$parent as any;
          parentComponent.nodeModel.deletePort(this.id);
          parentComponent.$parent?.$parent.updateLinksPositions();
        },
      }, {
        label: 'Remove port links',
        handler: () => {
          console.warn('deleteLink event not fired here');
          const parentComponent = this.$parent as any;
          parentComponent.nodeModel.removePortLinks(this.id);
        },
      }],
    };
  },
  mixins: [DiagramElement],
  computed: {
    width () {
      return this.node.width || 72;
    },
    displayedY () {
      if(this.port.options && this.port.options.y) {
        return this.port.options.y;
      } else {
        return this.y + 30;
      }
    },
    displayedX () {
      if(this.port.options && this.port.options.x) {
        return this.port.options.x;
      }
      if(this.port.type === 'out') {
        return this.width - 5;
      } else {
        return -5
      }
    }
  },
  methods: {
    getPortShapeComponent(shape) {
      if(shape === undefined) {
        return 'DotShapePort';
      }
      const component = resolveComponent(`vue-diagrams-port-shape-${shape}`);
      return typeof component !== 'string' ? `vue-diagrams-port-shape-${shape}` : 'DotShapePort';
    },
    getPortLabelComponent(valueType) {
      if (valueType) {
        const component = resolveComponent(`vue-diagrams-port-label-${valueType}`);
        console.log('component?', valueType, component, `vue-diagrams-port-label-${valueType}`)
        return typeof component !== 'string' ? `vue-diagrams-port-label-${valueType}` : undefined;
      }
    },

    mouseup() {
      this.$emit("mouseUpPort", this.id);
    },

    enter() {
      this.fill = "#999999";
      this.hover = true;
    },

    leave() {
      this.hover = false;
      this.fill = "#666666";
    },
    startDragNewLink() {
      this.$emit("onStartDragNewLink", this.id);
    },
  }
});
</script>
<style scoped>
.diagram-port {
  position: relative;
}
.tooltip {
  position: absolute;
  left: -40px;
  top: 0;
  opacity: 0.8;
  transition: opacity 0.2s;
}
.tooltip-show-on-port-hover {
  opacity: 0;
}
.hover .tooltip-show-on-port-hover {
  opacity: 0.8;
}
.port-name {
  font-size: 8pt;
  fill: #000000;
}
.label-wrapper {
  padding-right: 14px;
  padding-left: 4px;
  padding-top: 2px;
}
.label-wrapper.port-type-out {
  text-align: right;
}
.port-shape-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 3px;
  left: 1px;
}
.port-shape-container.port-type-out {
  left: calc(100% - 11px);
}
</style>
