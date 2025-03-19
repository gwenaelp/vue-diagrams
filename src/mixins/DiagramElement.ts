import type { ComponentOptions } from "vue";

const mixin:ComponentOptions = {
  mounted () {
    this.$el.vueComponent = this;
  },
};

export default mixin;