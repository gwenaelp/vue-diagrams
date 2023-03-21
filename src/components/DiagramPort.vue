<template>
  <g class="diagram-port has-menu">
    <svg :y="displayedY" v-if="port.type === 'in'" style="overflow: visible;">
      <rect
        :fill="fill"
        ref="handle"
        x="-5" y="0"
        rx="3" ry="3"
        width="10" height="10"
        @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup">
      </rect>
      <text x="12" y="9" font-size="8pt" fill="#000000">{{port.name}}</text>
    </svg>
    <svg :y="displayedY" v-else>
      <rect
        :fill="fill"
        ref="handle"
        :x="width - 5" y="0"
        rx="3" ry="3"
        width="10" height="10"
        @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup">
      </rect>
      <text :x="width - 6" y="9" text-anchor="end" font-size="8pt" fill="#000000">{{port.name}}</text>
    </svg>
  </g>
</template>
<script>
export default {
  name: 'DiagramPort',
  props: ['id', 'y', 'node', 'nodeIndex', 'port'],
  data() {
    return {
      fill: '#666666',
      menu: [{
        label: 'Delete port',
        handler() {
          this.$parent.nodeModel.deletePort(this.id);
          this.$parent.$parent.$parent.updateLinksPositions();
        },
      }, {
        label: 'Remove port links',
        handler() { this.$parent.nodeModel.removePortLinks(this.id); },
      }],
    };
  },
  computed: {
    width () {
      return this.node.width || 72;
    },
    displayedY () {
      if(this.port.options && this.port.options.y) {
        return this.port.options.y;
      } else {
        return this.y + 40;
      }
    },
  },
  methods: {
    mouseup() {
      this.$emit("mouseUpPort", this.id);
    },

    enter() {
      this.fill = "#999999";
    },

    leave() {
      console.log('leave', this.id);
      this.fill = "#666666";
    },
    startDragNewLink() {
      this.$emit("onStartDragNewLink", this.id);
    },
  }
};
</script>
