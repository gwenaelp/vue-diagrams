<template>
  <Story title="Advanced usage/Custom nodes/Image nodes">
    <diagram :model="model" height="700"/>
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

    const node1 = diagramModel.addNode("Image 1", 300, 200, 120, 120, {
      type: 'image',
      image: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    });

    const node2 = diagramModel.addNode("Image 2", 100, 100, 160, 120, {
      type: 'image',
      image: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    });

    const inPort = node1.addInPort();
    const outPort = node2.addOutPort();
    diagramModel.addLink(outPort, inPort);

    return {
      model: diagramModel
    };
  },
};
</script>
