import { _ as _export_sfc, D as Diagram } from "./Diagram-vn3hdNnk.js";
import { as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, ax as createBaseVNode, ay as createCommentVNode, az as withModifiers, aA as pushScopeId, aB as popScopeId } from "./vendor-AwDNLYHP.js";
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
    onDrop(event) {
      const pan = this.$refs.diagram.$refs.svgpanzoom.spz.getPan();
      const zoom = this.$refs.diagram.$refs.svgpanzoom.spz.getZoom();
      const x = pan.x * (1 / zoom) * -1;
      const y = pan.y * (1 / zoom) * -1;
      const n = this.model.addNode("Node", x, y);
      n.addInPort("In");
      n.addOutPort("Out");
    },
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
            const isLinkFromParent = parentNode.ports.filter((p) => p.id === link.from).length;
            if (isLinkFromParent) {
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
    },
    doLayout2() {
      let nodeSpacing = 40, horizontalSpacing = 20;
      function treeLayout(nodes) {
        const depthMap = { byId: {}, byDepth: [], maxWidth: [] };
        const calculateDepth = (nodeMapItem, depth) => {
          depthMap.byId[nodeMapItem.node.id] = depth;
          if (depthMap.byDepth[depth] === void 0) {
            depthMap.byDepth[depth] = [];
          }
          depthMap.byDepth[depth].push(nodeMapItem);
          if (!depthMap.maxWidth[depth] || depthMap.maxWidth[depth] < nodeMapItem.node.width) {
            depthMap.maxWidth[depth] = nodeMapItem.node.width;
          }
          if (nodeMapItem.children) {
            nodeMapItem.children.forEach((childId) => {
              calculateDepth(nodesMap[childId], depth + 1);
            });
          }
        };
        const rootNode = Object.values(nodesMap).find((nodeMapItem) => !nodeMapItem.parent);
        calculateDepth(rootNode, 0);
        const maxDepth = depthMap.byDepth.length - 1;
        const parentGroups = {};
        for (let d = maxDepth; d >= 0; d--) {
          const nodesByDepth = depthMap.byDepth[d];
          parentGroups[d] = {};
          for (let n of nodesByDepth) {
            if (parentGroups[d][n.parent] === void 0) {
              parentGroups[d][n.parent] = { nodes: [] };
            }
            parentGroups[d][n.parent].nodes.push(n);
          }
        }
        let currentY = 0;
        let currentX = depthMap.maxWidth.reduce((partialSum, a) => partialSum + a, 0) + 100;
        for (let d = maxDepth; d >= 0; d--) {
          const nodesByDepth = depthMap.byDepth[d];
          currentX -= depthMap.maxWidth[d] + horizontalSpacing;
          for (let n of nodesByDepth) {
            if (parentGroups[d + 1] && parentGroups[d + 1][n.node.id]) {
              let avg = 0;
              for (let n2 of parentGroups[d + 1][n.node.id].nodes) {
                avg += n2.node.y;
              }
              avg = avg / parentGroups[d + 1][n.node.id].nodes.length;
              n.node.y = avg;
            } else {
              n.node.y = currentY;
              currentY += n.node.height + nodeSpacing;
            }
            n.node.x = currentX;
          }
        }
      }
      const portsNodesMap = {};
      const nodesMap = {};
      for (let n of this.model._model.nodes) {
        nodesMap[n.id] = { node: n };
        for (let p of n.ports) {
          portsNodesMap[p.id] = n.id;
        }
      }
      for (let l of this.model._model.links) {
        const to = nodesMap[portsNodesMap[l.to]];
        const from = nodesMap[portsNodesMap[l.from]];
        if (from.children === void 0) {
          from.children = [];
        }
        to.parent = from.node.id;
        from.children.push(to.node.id);
      }
      treeLayout(this.model._model.nodes);
      this.$refs.diagram.updateLinksPositions();
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-037acf99"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "node",
    draggable: "true"
  },
  "Drop this node",
  -1
  /* HOISTED */
));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_diagram = resolveComponent("diagram");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Advanced usage/Layouts" }, {
    default: withCtx(() => [
      createBaseVNode("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.doLayout && $options.doLayout(...args))
      }, " Tree layout (naive) "),
      createBaseVNode("button", {
        onClick: _cache[1] || (_cache[1] = (...args) => $options.doLayout2 && $options.doLayout2(...args))
      }, " Tree layout (other intent) "),
      _hoisted_1,
      createBaseVNode(
        "div",
        {
          onDrop: _cache[2] || (_cache[2] = (...args) => $options.onDrop && $options.onDrop(...args)),
          onDragover: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["prevent"])),
          onDragenter: _cache[4] || (_cache[4] = withModifiers(() => {
          }, ["prevent"]))
        },
        [
          $data.displayed ? (openBlock(), createBlock(_component_diagram, {
            key: 0,
            model: $data.model,
            height: "700",
            ref: "diagram"
          }, null, 8, ["model"])) : createCommentVNode("v-if", true)
        ],
        32
        /* HYDRATE_EVENTS */
      )
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "stories/layouts.story.vue";
const layouts_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-037acf99"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/layouts.story.vue"]]);
export {
  layouts_story as default
};
