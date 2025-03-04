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
      @click="nodeModel.options.editableTitle ? mainDiagramComponent.editText(nodeModel, 'title', $refs.title) : undefined"
    >
      {{nodeModel.title}}
    </text>

    <g class="prevent-node-drag">
      <slot />
    </g>
  </g>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Diagram from '../Diagram.vue';

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
    return {
      menu: undefined,
    };
  },
  computed: {
    mainDiagramComponent () {
      if (this?.$parent?.$parent?.$parent instanceof Diagram) {
        return this.$parent.$parent.$parent;
      } else throw 'Main Diagram component not found';
    }
  },
  mounted() {
    /*
    let menu;
    if(this.nodeModel.options.editableTitle) {
      const _this = this;
      menu = [{
        label: 'icone',
        children: types.map(t => ({
            label: t.label,
            handler() { _this.nodeModel.options.icon = t.icon; }
        }))
      }];
    }
    */
  }
});
</script>
