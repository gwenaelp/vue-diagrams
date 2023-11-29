import { _ as _export_sfc, D as Diagram } from "./Diagram-_SjiVfCl.js";
import { as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, ax as createBaseVNode, aC as toDisplayString, ay as createCommentVNode } from "./vendor-KOYu6fyN.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("fixed", 300, 200);
    const inPort = node1.addInPort("test");
    const resizableNode = diagramModel.addNode("resizable", 10, 300, 144, 80, {
      resizable: true
    });
    const node2OutPort = resizableNode.addOutPort("testOut");
    resizableNode.addOutPort("testOut2");
    resizableNode.color = "#00cc66";
    diagramModel.addLink(node2OutPort, inPort);
    return {
      visible: true,
      model: diagramModel,
      resizableNode
    };
  },
  methods: {
    toggleResizable() {
      this.resizableNode.options.resizable = !this.resizableNode.options.resizable;
    }
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "background": "whitesmoke", "padding": "20px", "margin-bottom": "20px" } },
  " Try to resize the resizable node ",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_diagram = resolveComponent("diagram");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Resize nodes" }, {
    default: withCtx(() => [
      createBaseVNode("div", null, [
        createBaseVNode(
          "button",
          {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleResizable && $options.toggleResizable(...args))
          },
          " Toggle resizable (" + toDisplayString($data.resizableNode.options.resizable ? "On" : "Off") + ") ",
          1
          /* TEXT */
        ),
        _hoisted_1,
        $data.visible ? (openBlock(), createBlock(_component_diagram, {
          key: 0,
          model: $data.model,
          width: "500",
          height: "500",
          gridSnap: "10"
        }, null, 8, ["model"])) : createCommentVNode("v-if", true)
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "stories/resize.story.vue";
const resize_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/resize.story.vue"]]);
export {
  resize_story as default
};
