import { n as normalizeComponent, D as Diagram } from "./Diagram-43c7bf3c.js";
import "./vendor-12611725.js";
const droppingNode_story_vue_vue_type_style_index_0_scoped_dc44d06b_lang = "";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    return {
      model: diagramModel
    };
  },
  methods: {
    onDrop(event) {
      const pan = this.$refs.diagram.$refs.svgpanzoom.spz.getPan();
      const zoom = this.$refs.diagram.$refs.svgpanzoom.spz.getZoom();
      const x = pan.x * (1 / zoom) * -1;
      const y = pan.y * (1 / zoom) * -1;
      const n = this.model.addNode("Node", x, y);
      n.addInPort("In");
      n.addOutPort("Out");
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("Story", { attrs: { "title": "Drop to create nodes" } }, [_c("div", { staticClass: "node", attrs: { "draggable": "true" } }, [_vm._v("Drop this node")]), _c("div", { on: { "drop": _vm.onDrop, "dragover": function($event) {
    $event.preventDefault();
  }, "dragenter": function($event) {
    $event.preventDefault();
  } } }, [_c("diagram", { ref: "diagram", attrs: { "model": _vm.model, "width": "400", "height": "400" } })], 1)]);
};
var _sfc_staticRenderFns = [];
_sfc_render._withStripped = true;
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "dc44d06b",
  null,
  null
);
__component__.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/stories/dropping-node.story.vue";
_sfc_main.__file = "stories/dropping-node.story.vue";
const droppingNode_story = __component__.exports;
export {
  droppingNode_story as default
};
