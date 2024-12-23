<template>
  <Story title="Port tooltips">
    <div @drop="onDrop" @dragover.prevent @dragenter.prevent>
      <diagram :model="model" width="800" height="600" ref="diagram" />
    </div>
    <button @click="serialize">Serialize</button>
    <button @click="compile">Compile</button>
    <pre>{{compiledShader}}</pre>
  </Story>
</template>
<script>
import Diagram from "./components/Diagram.vue";

export default {
  components: {
    Diagram,
  },
  data() {
    const diagramModel = new Diagram.Model();
    const n = diagramModel.addNode('Master', 300, 300, 130, 210);
    n.addInPort('Normal', { tooltip: { text: 'vec2', fill: '#ffcccc', stroke: '#ddbbbb', trigger: 'hoverPort' } });
    n.addInPort('Opacity', { tooltip: { text: 'float' } });
    n.addOutPort('UV', { tooltip: { text: 'vec2' } });
    n.addOutPort('U', { tooltip: { text: 'float' } });

    const n2 = diagramModel.addNode('Master', 550, 300, 130, 210);
    n2.addInPort('Normal', { tooltip: { text: 'vec2' } });
    n2.addInPort('Opacity', { tooltip: { text: 'float' } });
    n2.addOutPort('UV', { tooltip: { text: 'vec2' } });
    n2.addOutPort('U', { tooltip: { text: 'float' } });

    return {
      compiledShader: '',
      model: diagramModel
    };
  },
};
</script>
<style scoped>
  .nodes {
    display: flex;
    gap: 20px;
  }
  .node {
    display: block;
    width: 72px;
    border: 2px solid black;
    border-radius: 4px;
    font-size: 12px;
    margin-bottom: 20px;
    padding-left: 2px;
    cursor: grab;
  }
  pre {
    color: #ccc;
    background: #333;
    padding-left: 30px;
  }
</style>
