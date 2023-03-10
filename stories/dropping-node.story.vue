<template>
  <Story title="Drop to create nodes">
    <div class="node" draggable="true">Drop this node</div>
    <div @drop="onDrop" @dragover.prevent @dragenter.prevent>
      <diagram :model="model" width="400" height="400"/>
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

    return {
      model: diagramModel
    };
  },
  methods: {
    onDrop(event) {
      const n = this.model.addNode('Node', 0, 0);
      n.addInPort('In');
      n.addOutPort('Out')
    },
  }
};
</script>
<style scoped>
  .node {
    display: block;
    width: 72px;
    height: 100px;
    border: 2px solid black;
    border-radius: 4px;
    font-size: 12px;
    margin-bottom: 20px;
    cursor: grab;
  }
</style>
