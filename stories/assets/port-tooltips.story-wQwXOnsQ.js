import { _ as _export_sfc, D as Diagram } from "./Diagram-vn3hdNnk.js";
import { as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, ax as createBaseVNode, aw as createVNode, az as withModifiers, aC as toDisplayString } from "./vendor-AwDNLYHP.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const n = diagramModel.addNode("Master", 300, 300, 130, 210);
    n.addInPort("Normal", { tooltip: { text: "vec2", fill: "#ffcccc", stroke: "#ddbbbb", trigger: "hoverPort" } });
    n.addInPort("Opacity", { tooltip: { text: "float" } });
    n.addOutPort("UV", { tooltip: { text: "vec2" } });
    n.addOutPort("U", { tooltip: { text: "float" } });
    const n2 = diagramModel.addNode("Master", 550, 300, 130, 210);
    n2.addInPort("Normal", { tooltip: { text: "vec2" } });
    n2.addInPort("Opacity", { tooltip: { text: "float" } });
    n2.addOutPort("UV", { tooltip: { text: "vec2" } });
    n2.addOutPort("U", { tooltip: { text: "float" } });
    return {
      compiledShader: "",
      model: diagramModel
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_diagram = resolveComponent("diagram");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Port tooltips" }, {
    default: withCtx(() => [
      createBaseVNode(
        "div",
        {
          onDrop: _cache[0] || (_cache[0] = (...args) => _ctx.onDrop && _ctx.onDrop(...args)),
          onDragover: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["prevent"])),
          onDragenter: _cache[2] || (_cache[2] = withModifiers(() => {
          }, ["prevent"]))
        },
        [
          createVNode(_component_diagram, {
            model: $data.model,
            width: "800",
            height: "600",
            ref: "diagram"
          }, null, 8, ["model"])
        ],
        32
        /* HYDRATE_EVENTS */
      ),
      createBaseVNode("button", {
        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.serialize && _ctx.serialize(...args))
      }, "Serialize"),
      createBaseVNode("button", {
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.compile && _ctx.compile(...args))
      }, "Compile"),
      createBaseVNode(
        "pre",
        null,
        toDisplayString($data.compiledShader),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "stories/port-tooltips.story.vue";
const portTooltips_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6a9bbca1"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/port-tooltips.story.vue"]]);
export {
  portTooltips_story as default
};
