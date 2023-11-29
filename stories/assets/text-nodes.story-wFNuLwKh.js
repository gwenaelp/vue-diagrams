import { _ as _export_sfc, D as Diagram } from "./Diagram-yHqcoCwn.js";
import { as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-T1hNz32x.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("Node 1", 300, 200, 120, 120, { type: "text" });
    const node2 = diagramModel.addNode("Node 2", 100, 100, 160, 120, { type: "text" });
    const inPort = node1.addInPort();
    const outPort = node2.addOutPort();
    diagramModel.addLink(outPort, inPort);
    return {
      model: diagramModel
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_diagram = resolveComponent("diagram");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Nodes/Text nodes" }, {
    default: withCtx(() => [
      createVNode(_component_diagram, {
        model: $data.model,
        height: "300"
      }, null, 8, ["model"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "stories/nodes/text-nodes.story.vue";
const textNodes_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/nodes/text-nodes.story.vue"]]);
export {
  textNodes_story as default
};
