<template>
  <div class="node" draggable="true">Drop this node</div>
  <div @drop="onDrop" @dragover.prevent @dragenter.prevent>
    <diagram :model="model" width="400" height="400" ref="diagram" />
  </div>
</template>

<script>
import { Diagram } from "vue-diagrams";

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
      const pan = this.$refs.diagram.spz.getPan();
      const zoom = this.$refs.diagram.spz.getZoom();
      const x = pan.x * (1/zoom) * -1;
      const y = pan.y * (1/zoom) * -1;
      const n = this.model.addNode('Node', x, y);
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
