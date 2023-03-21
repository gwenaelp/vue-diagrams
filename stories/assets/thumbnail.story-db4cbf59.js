import { n as normalizeComponent, D as Diagram } from "./Diagram-19a509e4.js";
import "./vendor-538b7fd7.js";
const thumbnail_story_vue_vue_type_style_index_0_scoped_76565ac9_lang = "";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("test2", 800, 200);
    const inPort = node1.addInPort("test");
    const node2 = diagramModel.addNode("test", 160, 600, 144, 80);
    const node2OutPort = node2.addOutPort("testOut");
    node2.addOutPort("testOut2");
    node2.color = "#00cc66";
    const node3 = diagramModel.addNode("test3", -100, -50, 72, 100);
    const node3OutPort = node3.addOutPort("testOut3");
    node3.color = "#cc6600";
    node3.deletable = false;
    const test4 = diagramModel.addNode("test4", 50, 50);
    test4.color = "red";
    const test5 = diagramModel.addNode("test5", 350, 150);
    test5.color = "green";
    const test6 = diagramModel.addNode("test6", -150, 650);
    test6.color = "pink";
    diagramModel.addLink(node2OutPort, inPort);
    diagramModel.addLink(node3OutPort, inPort);
    return {
      model: diagramModel
    };
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("Story", { attrs: { "title": "Diagram settings/Thumbnail" } }, [_c("diagram", { staticClass: "diagram", attrs: { "model": _vm.model, "width": "700", "height": "500", "show-thumbnail": "" } })], 1);
};
var _sfc_staticRenderFns = [];
_sfc_render._withStripped = true;
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "76565ac9",
  null,
  null
);
__component__.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/stories/diagram-settings/thumbnail.story.vue";
_sfc_main.__file = "stories/diagram-settings/thumbnail.story.vue";
const thumbnail_story = __component__.exports;
export {
  thumbnail_story as default
};
