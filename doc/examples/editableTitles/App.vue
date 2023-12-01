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

    const node1 = diagramModel.addNode("node", 300, 200, undefined, undefined, {
      editableTitle: true,
    });
    const inPort = node1.addInPort("test");

    const node2 = diagramModel.addNode("Image", 100, 100, 160, 120, {
      type: 'image',
      editableTitle: true,
      image: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    });

    return {
      model: diagramModel
    };
  },
};
</script>
