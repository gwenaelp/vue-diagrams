import { n as normalizeComponent, D as Diagram } from "./Diagram-43c7bf3c.js";
import "./vendor-12611725.js";
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
    diagramModel.addLink(node2OutPort, inPort);
    diagramModel.addLink(node3OutPort, inPort);
    return {
      console,
      serializedModel: diagramModel.serialize(),
      model: diagramModel
    };
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("Story", { attrs: { "title": "serialization deserialization" } }, [_c("div", [_c("diagram", { attrs: { "model": _vm.model } }), _c("button", { on: { "click": function($event) {
    _vm.console.log(_vm.model.serialize());
  } } }, [_vm._v("serialize")]), _c("button", { on: { "click": function($event) {
    return _vm.model.deserialize(_vm.serializedModel);
  } } }, [_vm._v("deserialize")])], 1)]);
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
__component__.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/stories/serialization-deserialization.story.vue";
_sfc_main.__file = "stories/serialization-deserialization.story.vue";
const serializationDeserialization_story = __component__.exports;
export {
  serializationDeserialization_story as default
};
