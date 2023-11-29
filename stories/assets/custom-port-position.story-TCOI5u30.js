import { _ as _export_sfc, D as Diagram } from "./Diagram-h50yppbl.js";
import { aq as resolveComponent, ar as openBlock, as as createBlock, at as withCtx, au as createVNode } from "./vendor-KRb7ggD7.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("test2", 300, 200);
    const inPort = node1.addInPort("in", { y: 80 });
    node1.addOutPort("out", { y: 80 });
    const node2 = diagramModel.addNode("test", 10, 300, 144, 80);
    const node2OutPort = node2.addOutPort("testOut", { y: 80 });
    node2.color = "#00cc66";
    diagramModel.addLink(node2OutPort, inPort);
    return {
      model: diagramModel
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_diagram = resolveComponent("diagram");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Custom port position" }, {
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
_sfc_main.__file = "stories/custom-port-position.story.vue";
const customPortPosition_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/custom-port-position.story.vue"]]);
export {
  customPortPosition_story as default
};
