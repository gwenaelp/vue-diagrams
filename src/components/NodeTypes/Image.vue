<template>
  <g>
    <image :href="options.image" x="5" :width="nodeModel.width - 10" :height="nodeModel.height" />
    <text
      :class="options.editableTitle ? 'title-editable': ''"
      :x="nodeModel.width / 2"
      :y="nodeModel.height + 14"
      :width="nodeModel.width"
      ref="title"
      text-anchor="middle"
      font-size="14"
      font-weight="bold"
      fill="#000000"
      :style="options.titleStyle || ''"
      @click="options.editableTitle ? $parent.$parent.$parent.editText(nodeModel, 'title', $refs.title) : undefined"
    >
      {{nodeModel.title}}
    </text>
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
    }
  },
  computed: {
    options () {
      return this.nodeModel.options || {};
    },
  },
};
</script>
