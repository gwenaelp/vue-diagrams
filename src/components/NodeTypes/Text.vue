<template>
  <g>
    <text
      :class="options.editableTitle ? 'title-editable': ''"
      :x="nodeModel?.width || 0 / 2"
      :y="nodeModel?.height || 0 / 2"
      :width="nodeModel.width"
      ref="title"
      text-anchor="middle"
      font-size="14"
      font-weight="bold"
      fill="#000000"
      :style="options.titleStyle || ''"
      @click="options.editableTitle ? parentDiagram.editText(nodeModel, 'title', $refs.title) : undefined"
    >
      {{nodeModel.title}}
    </text>
    <g class="prevent-node-drag">
      <slot />
    </g>
  </g>
</template>
<script lang="ts">
export default {
  props: {
    nodeModel: {
      type: Object,
    }
  },
  computed: {
    options () {
      return this.nodeModel?.options || {};
    },
    parentDiagram() {
      return this.$parent?.$parent?.$parent;
    },
  },
};
</script>
