<template>
  <Story title="Image nodes">
    <diagram :model="model" height="300"/>
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

    const node1 = diagramModel.addNode("Image 1", 300, 200, 120, 120, {
      type: 'image',
      image: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    });

    const node2 = diagramModel.addNode("Image 2", 100, 100, 160, 120, {
      type: 'image',
      image: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    });

    return {
      model: diagramModel
    };
  },
};
</script>
