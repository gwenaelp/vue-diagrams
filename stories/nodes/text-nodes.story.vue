<template>
  <Story title="Nodes/Text nodes">
    <diagram :model="model" height="300"/>
  </Story>
</template>
<script>
import Diagram from "../../src/components/Diagram.vue";

export default {
  components: {
    Diagram,
  },
  data() {
    const diagramModel = new Diagram.Model();

    const node1 = diagramModel.addNode("Node 1", 300, 200, 120, 120, { type: 'text' });
    const node2 = diagramModel.addNode("Node 2", 100, 100, 160, 120, { type: 'text' });

    const inPort = node1.addInPort();
    const outPort = node2.addOutPort();
    diagramModel.addLink(outPort, inPort);

    return {
      model: diagramModel
    };
  },
};
</script>
