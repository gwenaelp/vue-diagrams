import { _ as _export_sfc, D as Diagram } from "./Diagram-h50yppbl.js";
import { aq as resolveComponent, ar as openBlock, as as createBlock, at as withCtx, av as createBaseVNode, au as createVNode } from "./vendor-KRb7ggD7.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("test2", 300, 200);
    const inPort = node1.addInPort("test");
    const node2 = diagramModel.addNode("test", 10, 300, 144, 80);
    const node2OutPort = node2.addOutPort("testOut");
    node2.addOutPort("testOut2");
    node2.color = "#00cc66";
    const node3 = diagramModel.addNode("test3", 10, 100, 72, 100);
    const node3OutPort = node3.addOutPort("testOut3");
    node3.color = "#cc6600";
    diagramModel.addLink(node2OutPort, inPort);
    diagramModel.addLink(node3OutPort, inPort);
    return {
      console,
      serializedModel: diagramModel.serialize(),
      model: diagramModel
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_diagram = resolveComponent("diagram");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "serialization/deserialization" }, {
    default: withCtx(() => [
      createBaseVNode("div", null, [
        createVNode(_component_diagram, { model: $data.model }, null, 8, ["model"]),
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => console.log($data.model.serialize()))
        }, "serialize"),
        createBaseVNode("button", {
          onClick: _cache[1] || (_cache[1] = ($event) => $data.model.deserialize($data.serializedModel))
        }, "deserialize")
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "stories/serialization-deserialization.story.vue";
const serializationDeserialization_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/serialization-deserialization.story.vue"]]);
export {
  serializationDeserialization_story as default
};