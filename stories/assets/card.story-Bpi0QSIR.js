import { _ as _export_sfc, D as Diagram } from "./Diagram-vn3hdNnk.js";
import { as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-AwDNLYHP.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("Image 1", 300, 200, 120, 34, {
      type: "card"
    });
    const node2 = diagramModel.addNode("Image 2", 100, 100, 160, 34, {
      type: "card"
    });
    const inPort = node1.addInPort("", {
      y: 12
    });
    const outPort = node2.addOutPort("", {
      y: 12
    });
    diagramModel.addLink(outPort, inPort);
    return {
      model: diagramModel
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_diagram = resolveComponent("diagram");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Advanced usage/Custom nodes/Card nodes" }, {
    default: withCtx(() => [
      createVNode(_component_diagram, {
        model: $data.model,
        height: "700"
      }, null, 8, ["model"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "stories/nodes/card.story.vue";
const card_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/nodes/card.story.vue"]]);
export {
  card_story as default
};
