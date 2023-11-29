import { _ as _export_sfc, D as Diagram } from "./Diagram-9q_U3Cke.js";
import { as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-KOYu6fyN.js";
const _sfc_main = {
  components: { Diagram },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("test2", 300, 200);
    const inPort = node1.addInPort("test");
    const node2 = diagramModel.addNode("test", 10, 300, 144, 80);
    const node2OutPort = node2.addOutPort("testOut");
    node2.addOutPort("testOut2");
    const node3 = diagramModel.addNode("test3", 10, 100, 72, 100);
    const node3OutPort = node3.addOutPort("testOut3");
    node3.color = "#cc6600";
    diagramModel.addLink(node2OutPort, inPort);
    diagramModel.addLink(node3OutPort, inPort);
    return { model: diagramModel };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_diagram = resolveComponent("diagram");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Website Index Demo" }, {
    default: withCtx(() => [
      createVNode(_component_diagram, {
        model: $data.model,
        gridSnap: "16",
        width: "390",
        height: "525"
      }, null, 8, ["model"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "stories/websiteDemo.story.vue";
const websiteDemo_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/websiteDemo.story.vue"]]);
export {
  websiteDemo_story as default
};
