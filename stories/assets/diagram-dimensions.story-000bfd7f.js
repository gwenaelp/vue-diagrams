import { n as normalizeComponent, D as Diagram } from "./Diagram-19a509e4.js";
import "./vendor-538b7fd7.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    diagramModel.addNode("test2", 0, 0);
    return {
      model: diagramModel
    };
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("Story", { attrs: { "title": "Diagram settings/Assigning dimensions" } }, [_c("diagram", { attrs: { "model": _vm.model, "width": "200", "height": "200" } })], 1);
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
__component__.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/stories/diagram-settings/diagram-dimensions.story.vue";
_sfc_main.__file = "stories/diagram-settings/diagram-dimensions.story.vue";
const diagramDimensions_story = __component__.exports;
export {
  diagramDimensions_story as default
};
