<template>
  <g>
    <text
      :class="nodeModel.options.editableTitle ? 'title-editable': ''"
      :x="nodeModel.width / 2"
      :y="nodeModel.height / 2"
      :width="nodeModel.width"
      ref="title"
      text-anchor="middle"
      font-size="14"
      font-weight="bold"
      fill="#000000"
      @click="nodeModel.options.editableTitle ? $parent.$parent.$parent.editText(nodeModel, 'title', $refs.title) : undefined"
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
};
</script>
