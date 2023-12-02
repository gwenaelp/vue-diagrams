<template>
  <diagram :model="model" height="700" />
</template>

<script setup>
import CustomNode from "./CustomNode.vue";
import { getCurrentInstance } from 'vue';

getCurrentInstance().appContext.components['vue-diagrams-node-custom'] = CustomNode;

</script>
<script>
import { Diagram } from "vue-diagrams";

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
