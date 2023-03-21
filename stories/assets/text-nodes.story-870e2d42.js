import { n as normalizeComponent, D as Diagram } from "./Diagram-6fbf1a70.js";
import "./vendor-538b7fd7.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("Node 1", 300, 200, 120, 120, { type: "text" });
    const node2 = diagramModel.addNode("Node 2", 100, 100, 160, 120, { type: "text" });
    const inPort = node1.addInPort();
    const outPort = node2.addOutPort();
    diagramModel.addLink(outPort, inPort);
    return {
      model: diagramModel
    };
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("Story", { attrs: { "title": "Nodes/Text nodes" } }, [_c("diagram", { attrs: { "model": _vm.model, "height": "300" } })], 1);
};
var _sfc_staticRenderFns = [];
_sfc_render._withStripped = true;
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
__component__.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/stories/nodes/text-nodes.story.vue";
_sfc_main.__file = "stories/nodes/text-nodes.story.vue";
const textNodes_story = __component__.exports;
export {
  textNodes_story as default
};
