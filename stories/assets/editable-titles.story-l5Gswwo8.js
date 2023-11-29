import { _ as _export_sfc, D as Diagram } from "./Diagram-FOYRSu56.js";
import { as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-KOYu6fyN.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("node", 300, 200, void 0, void 0, {
      editableTitle: true
    });
    node1.addInPort("test");
    diagramModel.addNode("Image", 100, 100, 160, 120, {
      type: "image",
      editableTitle: true,
      image: "https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    });
    return {
      model: diagramModel
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_diagram = resolveComponent("diagram");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Editable titles" }, {
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
_sfc_main.__file = "stories/editable-titles.story.vue";
const editableTitles_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/editable-titles.story.vue"]]);
export {
  editableTitles_story as default
};
