<template>
  <Story title="Diagram settings/Custom Nodes">
    <diagram :model="model" height="300" />
  </Story>
</template>
<script>
import Diagram from "../../src/components/Diagram.vue";
import CustomNode from "./CustomNode.vue";
import Vue from 'vue';

Vue.component('vue-diagrams-node-custom', CustomNode);

export default {
  components: {
    Diagram,
  },
  data() {
    const diagramModel = new Diagram.Model();

    const node1 = diagramModel.addNode("test2", 300, 200);
    const inPort = node1.addInPort("test");

    const node2 = diagramModel.addNode("test", 10, 300, 144, 80, { type: 'custom' });
    const node2OutPort = node2.addOutPort("testOut");
    node2.addOutPort("testOut2");
    node2.color = "#00cc66";

    diagramModel.addLink(node2OutPort, inPort);

    return {
      model: diagramModel
    };
  },
};
</script>
