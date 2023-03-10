<template>
  <Story title="Assigning dimensions">
    <diagram :model="model" width="200" height="200" />
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

    diagramModel.addNode("test2", 0, 0);

    return {
      model: diagramModel
    };
  },
};
</script>
