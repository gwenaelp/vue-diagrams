<template>
  <Story title="Advanced usage/Manipulating view">
    <diagram ref="diagram" :model="model" height="300" />
    <button @click="move1">
      Move to pos 1
    </button>
    <button @click="move2">
      Move to pos 2
    </button>
    <button @click="move3">
      Move 50px to the left
    </button>
    <button @click="move4">
      Move 50px to the right
    </button>
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
      model: diagramModel
    };
  },
  methods: {
    move1() {
      this.$refs.diagram.spz.pan({x: 50, y: 50});
    },
    move2() {
      this.$refs.diagram.spz.pan({x: 200, y: 200});
    },
    move3() {
      this.$refs.diagram.spz.panBy({x: 50, y: 0});
    },
    move4() {
      this.$refs.diagram.spz.panBy({x: -50, y: 0});
    },
  }
};

</script>
