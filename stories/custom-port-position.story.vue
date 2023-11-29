<template>
  <Story title="Simple usage/Custom port position">
    <diagram :model="model" height="700" />
  </Story>
</template>
<script>
import Diagram from '../src/components/Diagram.vue';
export default {
  components: {
    Diagram,
  },
  data() {
    const diagramModel = new Diagram.Model();

    const node1 = diagramModel.addNode('test2', 300, 200);
    const inPort = node1.addInPort('in', { y: 80 });
    const outPort = node1.addOutPort('out', { y: 80 });

    const node2 = diagramModel.addNode('test', 10, 300, 144, 120);
    const node2OutPort = node2.addOutPort('testOut', { y: 80 });
    node2.color = '#00cc66';

    diagramModel.addLink(node2OutPort, inPort);

    return {
      model: diagramModel
    };
  },
};
</script>
