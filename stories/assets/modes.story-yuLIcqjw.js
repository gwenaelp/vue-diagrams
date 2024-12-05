import { _ as _export_sfc, D as Diagram } from "./Diagram-vn3hdNnk.js";
import { as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, ax as createBaseVNode, aE as normalizeClass, aw as createVNode } from "./vendor-AwDNLYHP.js";
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
    node3.deletable = false;
    diagramModel.addLink(node2OutPort, inPort);
    diagramModel.addLink(node3OutPort, inPort);
    return {
      model: diagramModel,
      diagram: void 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.diagram = this.$refs.diagram;
    });
  },
  computed: {
    mode: {
      get() {
        return this.diagram ? this.diagram.mode : void 0;
      },
      set(v) {
        if (this.diagram)
          this.diagram.mode = v;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_diagram = resolveComponent("diagram");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Advanced usage/Edit modes" }, {
    default: withCtx(() => [
      createBaseVNode(
        "a",
        {
          class: normalizeClass($options.mode === "move" ? "is-active" : ""),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.mode = "move")
        },
        " Move ",
        2
        /* CLASS */
      ),
      createBaseVNode(
        "a",
        {
          class: normalizeClass($options.mode === "select" ? "is-active" : ""),
          onClick: _cache[1] || (_cache[1] = ($event) => $options.mode = "select")
        },
        " Select ",
        2
        /* CLASS */
      ),
      createVNode(_component_diagram, {
        ref: "diagram",
        model: $data.model,
        height: "400"
      }, null, 8, ["model"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "stories/diagram-settings/modes.story.vue";
const modes_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f93d910"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/diagram-settings/modes.story.vue"]]);
export {
  modes_story as default
};
