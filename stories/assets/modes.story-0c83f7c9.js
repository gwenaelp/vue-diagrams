import { n as normalizeComponent, D as Diagram } from "./Diagram-f86c74aa.js";
import "./vendor-12611725.js";
const modes_story_vue_vue_type_style_index_0_scoped_9d91c643_lang = "";
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
    node3.deletable = false;
    diagramModel.addLink(node2OutPort, inPort);
    diagramModel.addLink(node3OutPort, inPort);
    return {
      model: diagramModel,
      diagram: void 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.diagram = this.$refs.diagram;
    });
  },
  computed: {
    mode: {
      get() {
        return this.diagram ? this.diagram.mode : void 0;
      },
      set(v) {
        if (this.diagram)
          this.diagram.mode = v;
      }
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("Story", { attrs: { "title": "Edit modes" } }, [_c("a", { class: _vm.mode === "move" ? "is-active" : "", on: { "click": function($event) {
    _vm.mode = "move";
  } } }, [_vm._v(" Move ")]), _c("a", { class: _vm.mode === "select" ? "is-active" : "", on: { "click": function($event) {
    _vm.mode = "select";
  } } }, [_vm._v(" Select ")]), _c("diagram", { ref: "diagram", attrs: { "model": _vm.model, "height": "400", "mode": _vm.mode } })], 1);
};
var _sfc_staticRenderFns = [];
_sfc_render._withStripped = true;
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "9d91c643",
  null,
  null
);
__component__.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/stories/modes.story.vue";
_sfc_main.__file = "stories/modes.story.vue";
const modes_story = __component__.exports;
export {
  modes_story as default
};
