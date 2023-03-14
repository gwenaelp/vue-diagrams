import { n as normalizeComponent, D as Diagram } from "./Diagram-43c7bf3c.js";
import "./vendor-12611725.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("node", 300, 200, void 0, void 0, {
      editableTitle: true
    });
    node1.addInPort("test");
    diagramModel.addNode("Image", 100, 100, 160, 120, {
      type: "image",
      editableTitle: true,
      image: "https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    });
    return {
      model: diagramModel
    };
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("Story", { attrs: { "title": "Editable titles" } }, [_c("diagram", { attrs: { "model": _vm.model, "height": "300" } })], 1);
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
__component__.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/stories/editable-titles.story.vue";
_sfc_main.__file = "stories/editable-titles.story.vue";
const editableTitles_story = __component__.exports;
export {
  editableTitles_story as default
};
