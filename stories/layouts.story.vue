<template>
  <Story title="Layouts">
    <button @click="doLayout">
      Tree layout (naive)
    </button>
    <button @click="doLayout2">
      Tree layout (other intent)
    </button>
    <div class="node" draggable="true">Drop this node</div>
    <div @drop="onDrop" @dragover.prevent @dragenter.prevent>
      <diagram v-if="displayed" :model="model" height="700" ref="diagram" />
    </div>
  </Story>
</template>
<script>
import Diagram from "../src/components/Diagram.vue";
export default {
  components: {
    Diagram,
  },
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("test2", 300, 200);
    const node1IP = node1.addInPort("in");

    const node2 = diagramModel.addNode("test", 10, 300, 144, 80);
    const node2OP = node2.addOutPort("out");
    const node2IP = node2.addInPort("in");

    const node3 = diagramModel.addNode("test3", 100, 100, 72, 100);
    const node3OP = node3.addOutPort("out");
    const node3IP = node3.addInPort("in");

    const node4 = diagramModel.addNode("test4", 100, 350, 72, 100);
    const node4OP = node4.addOutPort("out");
    const node4IP = node4.addInPort("in");

    const node5 = diagramModel.addNode("test5", 200, 350, 72, 100);
    const node5OP = node5.addOutPort("out");
    const node5IP = node5.addInPort("in");

    const node6 = diagramModel.addNode("test6", 200, 350, 72, 100);
    const node6OP = node6.addOutPort("out");
    const node6IP = node6.addInPort("in");

    const node7 = diagramModel.addNode("test7", 200, 350, 72, 100);
    const node7OP = node7.addOutPort("out");
    const node7IP = node7.addInPort("in");

    const node8 = diagramModel.addNode("test8", 200, 350, 72, 100);
    const node8OP = node8.addOutPort("out");
    const node8IP = node8.addInPort("in");


    diagramModel.addLink(node2OP, node3IP);
    diagramModel.addLink(node2OP, node4IP);
    diagramModel.addLink(node3OP, node1IP);
    diagramModel.addLink(node2OP, node5IP);
    diagramModel.addLink(node5OP, node6IP);

    diagramModel.addLink(node3OP, node7IP);
    diagramModel.addLink(node3OP, node8IP);
    /*

    diagramModel.deserialize('{"nodes":[{"id":966,"title":"Glucklich","x":300,"y":20,"width":72,"height":100,"ports":[{"id":225,"type":"in","name":"in"},{"id":898,"type":"out","name":"out"}]},{"id":37,"title":"Pluchon","x":300,"y":100,"width":72,"height":100,"ports":[{"id":790,"type":"in","name":"in"},{"id":8,"type":"out","name":"out"}]},{"id":790,"title":"Tabares","x":300,"y":180,"width":72,"height":100,"ports":[{"id":820,"type":"in","name":"in"},{"id":243,"type":"out","name":"out"}]},{"id":248,"title":"TANGUY","x":300,"y":260,"width":72,"height":100,"ports":[{"id":692,"type":"in","name":"in"},{"id":883,"type":"out","name":"out"}]},{"id":960,"title":"BLANC","x":300,"y":340,"width":72,"height":100,"ports":[{"id":757,"type":"in","name":"in"},{"id":341,"type":"out","name":"out"}]},{"id":362,"title":"NEIGE","x":300,"y":420,"width":72,"height":100,"ports":[{"id":935,"type":"in","name":"in"},{"id":764,"type":"out","name":"out"}]}],"links":[{"id":433,"from":243,"to":225,"positionFrom":{"x":377,"y":249},"positionTo":{"x":305,"y":69}},{"id":581,"from":243,"to":790,"positionFrom":{"x":377,"y":249},"positionTo":{"x":305,"y":149}},{"id":851,"from":898,"to":692,"positionFrom":{"x":377,"y":89},"positionTo":{"x":305,"y":309}},{"id":424,"from":898,"to":757,"positionFrom":{"x":377,"y":89},"positionTo":{"x":305,"y":389}},{"id":488,"from":8,"to":935,"positionFrom":{"x":377,"y":169},"positionTo":{"x":305,"y":469}}]}');
    */

    return {
      displayed: true,
      model: diagramModel
    };
  },
  methods: {
    onDrop(event) {
      const pan = this.$refs.diagram.$refs.svgpanzoom.spz.getPan();
      const zoom = this.$refs.diagram.$refs.svgpanzoom.spz.getZoom();
      const x = pan.x * (1/zoom) * -1;
      const y = pan.y * (1/zoom) * -1;
      const n = this.model.addNode('Node', x, y);
      n.addInPort('In');
      n.addOutPort('Out')
    },
    doLayout() {
    function treeLayout(model) {
      const nodes = model.nodes;
      const links = model.links;

      // Find the root node
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

      // Set the position of the root node
      rootNode.x = 0;
      rootNode.y = 0;

      // Recursively set the position of child nodes
      const setChildNodePosition = (parentNode, y) => {
        let lastChildYByNode = {};
        console.log('setChildNodePosition', links, nodes)
        for (let i = 0; i < links.length; i++) {
          const link = links[i];
          const isLinkFromParent = parentNode.ports.filter(p => p.id === link.from).length;
          if (isLinkFromParent) {
            const childNode = nodes.find((node) => {
              console.log('find children', link.to, node.ports)
              return node.ports.some((port) => port.id === link.to);
            });
            if (childNode) {
              const fromPort = parentNode.ports.find((port) => port.id === link.from);
              const toPort = childNode.ports.find((port) => port.id === link.to);
              const portY =
                parentNode.y +
                parentNode.height / 2 +
                childNode.height / 2;
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

      setChildNodePosition(rootNode, 0);
    }

    this.displayed = false;
    this.$nextTick(() => {
      treeLayout(this.model._model);
      this.$nextTick(() => {
        this.displayed = true;
      })
    })
    },
    doLayout2() {
      let nodeSpacing = 20,
          horizontalSpacing = 20;
      function treeLayout(nodes) {
        // Create a mapping of nodes to their children

        // Create a mapping of node IDs to their depths in the tree
        const depthMap = { byId: {}, byDepth: [], maxWidth: [] };
        const calculateDepth = (node, depth) => {
          console.log('depth', depth, node.title);
          depthMap.byId[node.id] = depth;
          if(depthMap.byDepth[depth] === undefined) {
            depthMap.byDepth[depth] = [];
          }
          depthMap.byDepth[depth].push(node);
          if(!depthMap.maxWidth[depth] || depthMap.maxWidth[depth] < node.width) {
            depthMap.maxWidth[depth] = node.width;
          }
          if(node.children) {
            node.children.forEach(childId => {
              calculateDepth(nodesMap[childId], depth + 1);
            });
          }
        };

        const rootNode = nodes.find(node => !node.parent);
        calculateDepth(rootNode, 0);

        const maxDepth = depthMap.byDepth.length - 1;
        const parentGroups = {};
        for (let d = maxDepth; d >= 0; d--) {
          const nodesByDepth = depthMap.byDepth[d];
          parentGroups[d] = {};
          for (let n of nodesByDepth) {
            if(parentGroups[d][n.parent] === undefined) {
              parentGroups[d][n.parent] = { nodes: [] };
            }
            parentGroups[d][n.parent].nodes.push(n);
          }
        }
        let currentY = 0;
        /*let currentX = 0;
        for (let d = 0; d < maxDepth; d++) {
          console.log('??currentX', depthMap[d], depthMap.maxWidth[d])
          currentX += depthMap.maxWidth[d] + horizontalSpacing;
        }*/
        let currentX = maxDepth * 160;
        for (let d = maxDepth; d >= 0; d--) {
          const nodesByDepth = depthMap.byDepth[d];
          currentX -= 160;
          for (let n of nodesByDepth) {
            if(parentGroups[d+1] && parentGroups[d+1][n.id]) {
              let avg = 0;
              for(let n2 of parentGroups[d+1][n.id].nodes){
                avg += n2.y;
              }
              avg = avg / parentGroups[d+1][n.id].nodes.length;
              n.y = avg;
            } else {
              n.y = currentY;
              currentY += n.width + nodeSpacing;
            }
            n.x = currentX;
          }
        }
      }
      const portsNodesMap = {};
      const nodesMap = {};
      for(let n of this.model._model.nodes) {
        nodesMap[n.id] = n;
        for(let p of n.ports) {
          portsNodesMap[p.id] = n.id;
        }
      }
      for(let l of this.model._model.links) {
        const to = nodesMap[portsNodesMap[l.to]];
        const from = nodesMap[portsNodesMap[l.from]];
        if(from.children === undefined) {
          from.children = [];
        }
        to.parent = from.id;
        from.children.push(to.id);
      }
      this.displayed = false;
      this.$nextTick(() => {
        treeLayout(this.model._model.nodes)
        this.$nextTick(() => {
          this.displayed = true;
        })
      });
    },
  },
};

</script>
<style scoped>
  .node {
    display: block;
    width: 72px;
    height: 100px;
    border: 2px solid black;
    border-radius: 4px;
    font-size: 12px;
    margin-bottom: 20px;
    cursor: grab;
  }
</style>
