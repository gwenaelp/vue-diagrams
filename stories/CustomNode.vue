<template>
  <g>
    <rect
      fill="#CC0000"
      x="5"
      y="15"
      :width="nodeModel.width"
      :height="nodeModel.height"
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
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
