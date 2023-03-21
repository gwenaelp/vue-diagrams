import { n as normalizeComponent, D as Diagram } from "./Diagram-6fbf1a70.js";
import "./vendor-538b7fd7.js";
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("test2", 300, 200);
    const node1IP = node1.addInPort("in");
    const node2 = diagramModel.addNode("test", 10, 300, 144, 80);
    const node2OP = node2.addOutPort("out");
    node2.addInPort("in");
    const node3 = diagramModel.addNode("test3", 100, 100, 72, 100);
    const node3OP = node3.addOutPort("out");
    const node3IP = node3.addInPort("in");
    const node4 = diagramModel.addNode("test4", 100, 350, 72, 100);
    node4.addOutPort("out");
    const node4IP = node4.addInPort("in");
    const node5 = diagramModel.addNode("test5", 200, 350, 72, 100);
    const node5OP = node5.addOutPort("out");
    const node5IP = node5.addInPort("in");
    const node6 = diagramModel.addNode("test6", 200, 350, 72, 100);
    node6.addOutPort("out");
    const node6IP = node6.addInPort("in");
    const node7 = diagramModel.addNode("test7", 200, 350, 72, 100);
    node7.addOutPort("out");
    const node7IP = node7.addInPort("in");
    const node8 = diagramModel.addNode("test8", 200, 350, 72, 100);
    node8.addOutPort("out");
    const node8IP = node8.addInPort("in");
    diagramModel.addLink(node2OP, node3IP);
    diagramModel.addLink(node2OP, node4IP);
    diagramModel.addLink(node3OP, node1IP);
    diagramModel.addLink(node2OP, node5IP);
    diagramModel.addLink(node5OP, node6IP);
    diagramModel.addLink(node3OP, node7IP);
    diagramModel.addLink(node3OP, node8IP);
    return {
      displayed: true,
      model: diagramModel
    };
  },
  methods: {
    doLayout() {
      function treeLayout(model) {
        const nodes = model.nodes;
        const links = model.links;
        let rootNode = null;
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          let isRootNode = true;
          for (let j = 0; j < links.length; j++) {
            const link = links[j];
            if (link.to === node.ports[0].id) {
              isRootNode = false;
              break;
            }
          }
          if (isRootNode) {
            rootNode = node;
            break;
          }
        }
        rootNode.x = 0;
        rootNode.y = 0;
        const setChildNodePosition = (parentNode, y) => {
          let lastChildYByNode = {};
          for (let i = 0; i < links.length; i++) {
            const link = links[i];
            if (link.from === parentNode.ports[0].id) {
              const childNode = nodes.find((node) => {
                return node.ports.some((port) => port.id === link.to);
              });
              if (childNode) {
                parentNode.ports.find((port) => port.id === link.from);
                childNode.ports.find((port) => port.id === link.to);
                parentNode.y + parentNode.height / 2 + childNode.height / 2;
                if (!lastChildYByNode[parentNode.id]) {
                  lastChildYByNode[parentNode.id] = parentNode.y;
                }
                childNode.x = parentNode.x + parentNode.width + 40;
                childNode.y = lastChildYByNode[parentNode.id];
                lastChildYByNode[parentNode.id] += childNode.height + 20;
                setChildNodePosition(childNode, childNode.y);
              }
            }
          }
        };
        setChildNodePosition(rootNode);
      }
      this.displayed = false;
      this.$nextTick(() => {
        treeLayout(this.model._model);
        this.$nextTick(() => {
          this.displayed = true;
        });
      });
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("Story", { attrs: { "title": "Layouts" } }, [_c("a", { on: { "click": _vm.doLayout } }, [_vm._v(" Tree layout ")]), _vm.displayed ? _c("diagram", { attrs: { "model": _vm.model, "height": "700" } }) : _vm._e()], 1);
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
__component__.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/stories/layouts.story.vue";
_sfc_main.__file = "stories/layouts.story.vue";
const layouts_story = __component__.exports;
export {
  layouts_story as default
};
