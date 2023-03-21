import { n as normalizeComponent, D as Diagram } from "./Diagram-6fbf1a70.js";
import "./vendor-538b7fd7.js";
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
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("Story", { attrs: { "title": "Resize nodes" } }, [_c("div", [_c("button", { on: { "click": _vm.toggleResizable } }, [_vm._v(" Toggle resizable (" + _vm._s(_vm.resizableNode.options.resizable ? "On" : "Off") + ") ")]), _c("div", { staticStyle: { "background": "whitesmoke", "padding": "20px", "margin-bottom": "20px" } }, [_vm._v(" Try to resize the resizable node ")]), _vm.visible ? _c("diagram", { attrs: { "model": _vm.model, "width": "500", "height": "500", "gridSnap": "10" } }) : _vm._e()], 1)]);
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
__component__.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/stories/resize.story.vue";
_sfc_main.__file = "stories/resize.story.vue";
const resize_story = __component__.exports;
export {
  resize_story as default
};
