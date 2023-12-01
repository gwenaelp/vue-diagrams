<template>
  <g>
    <rect
      fill="#ffffff"
      stroke="#333"
      stroke-width="1"
      x="0"
      y="0"
      :width="nodeModel.width"
      :height="nodeModel.height"
    />
    <rect fill="#ddd" x="1" y="1" width="32" height="32" />
    <g transform="translate(5, 5)">
    <path :d="nodeModel.iconPath" />
    </g>
    <text
      :x="37" :y="21"
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
import { defineComponent } from 'vue';

export default defineComponent({
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
  data() {
    let menu;
    if(this.nodeModel.options.editableTitle) {
      menu = [{
        label: 'icone',
        children: types.map(t => ({
            label: t.label,
            handler() { this.nodeModel.options.icon = t.icon; }
        }))
      }];
    }
    return {
      menu
    };
  },
});
</script>
