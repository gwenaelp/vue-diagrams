<template>
  <diagram :model="model" height="700" />
</template>

<script>
import { Diagram } from "vue-diagrams";

export default {
  components: {
    Diagram,
  },
  data() {
    const diagramModel = new Diagram.Model();

    const node1 = diagramModel.addNode("fixed", 300, 200);
    const inPort = node1.addInPort("test");

    const resizableNode = diagramModel.addNode("resizable", 10, 300, 144, 80, {
      resizable: true,
    });
    const node2OutPort = resizableNode.addOutPort("testOut");
    resizableNode.addOutPort("testOut2");
    resizableNode.color = "#00cc66";

    diagramModel.addLink(node2OutPort, inPort);

    return {
      visible: true,
      model: diagramModel,
      resizableNode,
    };
  },
  methods: {
    toggleResizable() {
      this.resizableNode.options.resizable = !this.resizableNode.options.resizable;
    },
  },
};
</script>
