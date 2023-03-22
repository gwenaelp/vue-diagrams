import { n as normalizeComponent, D as Diagram } from "./Diagram-f325a641.js";
import "./vendor-538b7fd7.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("Image", 300, 150, 120, 120, {
      type: "image",
      image: "https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      titleStyle: "fill: red; font-size: 150%"
    });
    const node2 = diagramModel.addNode("Shader", 50, 50, 160, 120, {
      titleStyle: "fill: #005511; font-size: 120%"
    });
    diagramModel.addNode("Text", 250, 50, 160, 120, {
      type: "text",
      titleStyle: "fill: red; font-size: 150%"
    });
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
  return _c("Story", { attrs: { "title": "Nodes/Styles" } }, [_c("diagram", { attrs: { "model": _vm.model, "height": "300" } })], 1);
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
__component__.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/stories/nodes/styles.story.vue";
_sfc_main.__file = "stories/nodes/styles.story.vue";
const styles_story = __component__.exports;
export {
  styles_story as default
};
