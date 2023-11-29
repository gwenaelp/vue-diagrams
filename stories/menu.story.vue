<template>
  <Story title="Menu/Basic">
    <div style="background: whitesmoke; padding: 20px; margin-bottom: 20px;">
      Right click on nodes and link to show the edit menu
    </div>
    <diagram :model="model" height="700" show-menu />
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
    };
  },
};
</script>
