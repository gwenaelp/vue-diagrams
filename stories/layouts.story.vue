<template>
  <Story title="Layouts">
    <a @click="doLayout">
      Tree layout
    </a>
    <diagram v-if="displayed" :model="model" height="700" />
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
        for (let i = 0; i < links.length; i++) {
          const link = links[i];
          if (link.from === parentNode.ports[0].id) {
            const childNode = nodes.find((node) => {
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
  }
};

</script>
