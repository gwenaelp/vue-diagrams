const __resolved__virtual_storySource_storiesNodesCardStoryVue = `<template>
    <Story title="Custom nodes/Card nodes">
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
  
      const node1 = diagramModel.addNode("Image 1", 300, 200, 120, 34, {
        type: 'card',
      });
  
      const node2 = diagramModel.addNode("Image 2", 100, 100, 160, 34, {
        type: 'card',
      });
  
      const inPort = node1.addInPort('', {
        y: 12
      });
      const outPort = node2.addOutPort('', {
        y: 12
      });
      diagramModel.addLink(outPort, inPort);
  
      return {
        model: diagramModel
      };
    },
  };
  <\/script>
  `;
export {
  __resolved__virtual_storySource_storiesNodesCardStoryVue as default
};
