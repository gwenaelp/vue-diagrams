import { _ as _export_sfc, D as Diagram } from "./Diagram-wURNfeMQ.js";
import { as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-KOYu6fyN.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    diagramModel.addNode("test2", 0, 0);
    return {
      model: diagramModel
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_diagram = resolveComponent("diagram");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Simple usage/Assigning diagram dimensions" }, {
    default: withCtx(() => [
      createVNode(_component_diagram, {
        model: $data.model,
        width: "200",
        height: "200"
      }, null, 8, ["model"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "stories/diagram-settings/diagram-dimensions.story.vue";
const diagramDimensions_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/diagram-settings/diagram-dimensions.story.vue"]]);
export {
  diagramDimensions_story as default
};
