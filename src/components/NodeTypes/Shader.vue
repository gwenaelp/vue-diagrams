<template>
  <g>
    <rect
      :fill="color"
      x="5" y="15"
      rx="3" ry="3"
      :width="nodeModel.width" :height="nodeModel.height"
      class="node-dark-background"
    />
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
      :class="nodeModel.options.editableTitle ? 'title-editable': ''"
      font-size="14"
      font-weight="bold"
      fill="#000000"
      ref="title"
      @click="nodeModel.options.editableTitle ? $parent.$parent.$parent.editText(nodeModel, 'title', $refs.title) : undefined"
    >
      {{nodeModel.title}}
    </text>
    <g v-if="nodeModel.deletable" @click="$emit('deleteNode')">
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
    <rect
      fill="#ffffff"
      x="7" y="35"
      rx="3" ry="3"
      :width="nodeModel.width - 4"
      :height="nodeModel.height - 22"
      class="node-light-background"
    />
    <g class="prevent-node-drag">
      <slot />
    </g>
  </g>
</template>
<script>
export default {
  props: {
    nodeModel: {
      type: Object,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      titleFillOpacity: 0.25,
    };
  },
  computed: {
    color () {
      return this.nodeModel.color || '#66cc00';
    },
  },
};
</script>
