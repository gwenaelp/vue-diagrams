import { _ as _export_sfc, D as Diagram } from "./Diagram-FOYRSu56.js";
import { as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode, ax as createBaseVNode } from "./vendor-KOYu6fyN.js";
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
      model: diagramModel
    };
  },
  methods: {
    move1() {
      this.$refs.diagram.spz.pan({ x: 50, y: 50 });
    },
    move2() {
      this.$refs.diagram.spz.pan({ x: 200, y: 200 });
    },
    move3() {
      this.$refs.diagram.spz.panBy({ x: 50, y: 0 });
    },
    move4() {
      this.$refs.diagram.spz.panBy({ x: -50, y: 0 });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_diagram = resolveComponent("diagram");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Advanced usage/Manipulating view" }, {
    default: withCtx(() => [
      createVNode(_component_diagram, {
        ref: "diagram",
        model: $data.model,
        height: "300"
      }, null, 8, ["model"]),
      createBaseVNode("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.move1 && $options.move1(...args))
      }, " Move to pos 1 "),
      createBaseVNode("button", {
        onClick: _cache[1] || (_cache[1] = (...args) => $options.move2 && $options.move2(...args))
      }, " Move to pos 2 "),
      createBaseVNode("button", {
        onClick: _cache[2] || (_cache[2] = (...args) => $options.move3 && $options.move3(...args))
      }, " Move 50px to the left "),
      createBaseVNode("button", {
        onClick: _cache[3] || (_cache[3] = (...args) => $options.move4 && $options.move4(...args))
      }, " Move 50px to the right ")
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "stories/API/manipulating-view.story.vue";
const manipulatingView_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/API/manipulating-view.story.vue"]]);
export {
  manipulatingView_story as default
};
