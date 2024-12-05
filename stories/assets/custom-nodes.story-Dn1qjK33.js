import { at as openBlock, aD as createElementBlock, ax as createBaseVNode, aC as toDisplayString, aE as normalizeClass, aF as renderSlot, as as resolveComponent, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-AwDNLYHP.js";
import { _ as _export_sfc, D as Diagram } from "./Diagram-vn3hdNnk.js";
const _sfc_main$1 = {
  props: {
    nodeModel: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
};
const _hoisted_1 = ["width", "height"];
const _hoisted_2 = { class: "prevent-node-drag" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("g", null, [
    createBaseVNode("rect", {
      fill: "#CC0000",
      x: "5",
      y: "15",
      width: $props.nodeModel.width,
      height: $props.nodeModel.height
    }, null, 8, _hoisted_1),
    createBaseVNode(
      "text",
      {
        x: 10,
        y: 30,
        class: normalizeClass($props.nodeModel.options.editableTitle ? "title-editable" : ""),
        "font-size": "14",
        "font-weight": "bold",
        fill: "#000000",
        ref: "title",
        onClick: _cache[0] || (_cache[0] = ($event) => $props.nodeModel.options.editableTitle ? _ctx.$parent.$parent.$parent.editText($props.nodeModel, "title", _ctx.$refs.title) : void 0)
      },
      toDisplayString($props.nodeModel.title),
      3
      /* TEXT, CLASS */
    ),
    createBaseVNode("g", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
_sfc_main$1.__file = "stories/diagram-settings/CustomNode.vue";
const CustomNode = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/diagram-settings/CustomNode.vue"]]);
const __default__ = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("test2", 300, 200);
    const inPort = node1.addInPort("test");
    const node2 = diagramModel.addNode("test", 10, 300, 144, 80, { type: "custom" });
    const node2OutPort = node2.addOutPort("testOut");
    node2.addOutPort("testOut2");
    node2.color = "#00cc66";
    diagramModel.addLink(node2OutPort, inPort);
    return {
      model: diagramModel
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "custom-nodes.story",
  setup(__props, { expose: __expose }) {
    __expose();
    function mySetupApp({ app, story, variant }) {
      app.component("vue-diagrams-node-custom", CustomNode);
    }
    const __returned__ = { mySetupApp, Diagram, CustomNode };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Advanced usage/Custom Nodes",
    "setup-app": $setup.mySetupApp
  }, {
    default: withCtx(() => [
      createVNode($setup["Diagram"], {
        model: $data.model,
        height: "300"
      }, null, 8, ["model"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "stories/diagram-settings/custom-nodes.story.vue";
const customNodes_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/diagram-settings/custom-nodes.story.vue"]]);
export {
  customNodes_story as default
};
