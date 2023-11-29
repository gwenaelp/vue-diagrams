import { _ as _export_sfc, D as Diagram } from "./Diagram-h50yppbl.js";
import { aq as resolveComponent, ar as openBlock, as as createBlock, at as withCtx, au as createVNode } from "./vendor-KRb7ggD7.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("Image", 300, 150, 120, 120, {
      type: "image",
      image: "https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      titleStyle: "fill: red; font-size: 150%"
    });
    const node2 = diagramModel.addNode("Shader", 50, 50, 160, 120, {
      titleStyle: "fill: #005511; font-size: 120%"
    });
    diagramModel.addNode("Text", 250, 50, 160, 120, {
      type: "text",
      titleStyle: "fill: red; font-size: 150%"
    });
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
  return openBlock(), createBlock(_component_Story, { title: "Nodes/Styles" }, {
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
_sfc_main.__file = "stories/nodes/styles.story.vue";
const styles_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/nodes/styles.story.vue"]]);
export {
  styles_story as default
};
