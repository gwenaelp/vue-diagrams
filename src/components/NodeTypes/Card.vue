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
    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
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
