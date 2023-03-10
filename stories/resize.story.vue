<template>
  <Story title="Resize">
    <div>
      <diagram :model="model" :width="width" :height="height" />
      <input type="range" id="width" v-model="width" min="200" max="400" />
      <label for="width">Width</label><br/>
      <input type="range" id="height" v-model="height" min="200" max="400" />
      <label for="height">Width</label>
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
      width: 200,
      height: 200,
    };
  },
};
</script>
