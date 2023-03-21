import { n as normalizeComponent, D as Diagram } from "./Diagram-66b6f6e9.js";
import "./vendor-538b7fd7.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("test2", 300, 200);
    const inPort = node1.addInPort("in", { y: 80 });
    node1.addOutPort("out", { y: 80 });
    const node2 = diagramModel.addNode("test", 10, 300, 144, 80);
    const node2OutPort = node2.addOutPort("testOut", { y: 80 });
    node2.color = "#00cc66";
    diagramModel.addLink(node2OutPort, inPort);
    return {
      model: diagramModel
    };
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("Story", { attrs: { "title": "Custom port position" } }, [_c("diagram", { attrs: { "model": _vm.model, "height": "300" } })], 1);
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
__component__.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/stories/custom-port-position.story.vue";
_sfc_main.__file = "stories/custom-port-position.story.vue";
const customPortPosition_story = __component__.exports;
export {
  customPortPosition_story as default
};
