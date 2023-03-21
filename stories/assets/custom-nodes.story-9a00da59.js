import { n as normalizeComponent, D as Diagram } from "./Diagram-19a509e4.js";
import { ap as Vue } from "./vendor-538b7fd7.js";
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
var _sfc_render$1 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("g", [_c("rect", { attrs: { "fill": "#CC0000", "x": "5", "y": "15", "width": _vm.nodeModel.width, "height": _vm.nodeModel.height } }), _c("text", { ref: "title", class: _vm.nodeModel.options.editableTitle ? "title-editable" : "", attrs: { "x": 10, "y": 30, "font-size": "14", "font-weight": "bold", "fill": "#000000" }, on: { "click": function($event) {
    _vm.nodeModel.options.editableTitle ? _vm.$parent.$parent.$parent.editText(_vm.nodeModel, "title", _vm.$refs.title) : void 0;
  } } }, [_vm._v(" " + _vm._s(_vm.nodeModel.title) + " ")]), _c("g", { staticClass: "prevent-node-drag" }, [_vm._t("default")], 2)]);
};
var _sfc_staticRenderFns$1 = [];
_sfc_render$1._withStripped = true;
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null,
  null,
  null
);
__component__$1.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/stories/diagram-settings/CustomNode.vue";
_sfc_main$1.__file = "stories/diagram-settings/CustomNode.vue";
const CustomNode = __component__$1.exports;
Vue.component("vue-diagrams-node-custom", CustomNode);
const _sfc_main = {
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
var _sfc_render = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("Story", { attrs: { "title": "Diagram settings/Custom Nodes" } }, [_c("diagram", { attrs: { "model": _vm.model, "height": "300" } })], 1);
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
__component__.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/stories/diagram-settings/custom-nodes.story.vue";
_sfc_main.__file = "stories/diagram-settings/custom-nodes.story.vue";
const customNodes_story = __component__.exports;
export {
  customNodes_story as default
};
