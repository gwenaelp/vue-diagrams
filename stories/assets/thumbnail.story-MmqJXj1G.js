import { _ as _export_sfc, D as Diagram } from "./Diagram-vn3hdNnk.js";
import { as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-AwDNLYHP.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("test2", 800, 200);
    const inPort = node1.addInPort("test");
    const node2 = diagramModel.addNode("test", 160, 600, 144, 80);
    const node2OutPort = node2.addOutPort("testOut");
    node2.addOutPort("testOut2");
    node2.color = "#00cc66";
    const node3 = diagramModel.addNode("test3", -100, -50, 72, 100);
    const node3OutPort = node3.addOutPort("testOut3");
    node3.color = "#cc6600";
    node3.deletable = false;
    const test4 = diagramModel.addNode("test4", 50, 50);
    test4.color = "red";
    const test5 = diagramModel.addNode("test5", 350, 150);
    test5.color = "green";
    const test6 = diagramModel.addNode("test6", -150, 650);
    test6.color = "pink";
    diagramModel.addLink(node2OutPort, inPort);
    diagramModel.addLink(node3OutPort, inPort);
    return {
      model: diagramModel
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_diagram = resolveComponent("diagram");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Simple usage/Thumbnail" }, {
    default: withCtx(() => [
      createVNode(_component_diagram, {
        class: "diagram",
        model: $data.model,
        width: "700",
        height: "500",
        "show-thumbnail": ""
      }, null, 8, ["model"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "stories/diagram-settings/thumbnail.story.vue";
const thumbnail_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-76565ac9"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/diagram-settings/thumbnail.story.vue"]]);
export {
  thumbnail_story as default
};
