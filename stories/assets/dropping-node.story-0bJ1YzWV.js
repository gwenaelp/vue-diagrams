import { _ as _export_sfc, D as Diagram } from "./Diagram-9q_U3Cke.js";
import { as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, ax as createBaseVNode, aw as createVNode, az as withModifiers, aA as pushScopeId, aB as popScopeId } from "./vendor-KOYu6fyN.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    return {
      model: diagramModel
    };
  },
  methods: {
    onDrop(event) {
      const pan = this.$refs.diagram.spz.getPan();
      const zoom = this.$refs.diagram.spz.getZoom();
      const x = pan.x * (1 / zoom) * -1;
      const y = pan.y * (1 / zoom) * -1;
      const n = this.model.addNode("Node", x, y);
      n.addInPort("In");
      n.addOutPort("Out");
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-86da32fc"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "node",
    draggable: "true"
  },
  "Drop this node",
  -1
  /* HOISTED */
));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_diagram = resolveComponent("diagram");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Diagram settings/Drop to create nodes" }, {
    default: withCtx(() => [
      _hoisted_1,
      createBaseVNode(
        "div",
        {
          onDrop: _cache[0] || (_cache[0] = (...args) => $options.onDrop && $options.onDrop(...args)),
          onDragover: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["prevent"])),
          onDragenter: _cache[2] || (_cache[2] = withModifiers(() => {
          }, ["prevent"]))
        },
        [
          createVNode(_component_diagram, {
            model: $data.model,
            width: "400",
            height: "400",
            ref: "diagram"
          }, null, 8, ["model"])
        ],
        32
        /* HYDRATE_EVENTS */
      )
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "stories/diagram-settings/dropping-node.story.vue";
const droppingNode_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-86da32fc"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/diagram-settings/dropping-node.story.vue"]]);
export {
  droppingNode_story as default
};
