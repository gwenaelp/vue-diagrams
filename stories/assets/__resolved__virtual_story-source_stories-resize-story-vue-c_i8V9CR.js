const __resolved__virtual_storySource_storiesResizeStoryVue = `<template>
  <Story title="Simple usage/Resize nodes">
    <div>
      <button @click="toggleResizable">
        Toggle resizable ({{resizableNode.options.resizable ? 'On': 'Off'}})
      </button>
      <div style="background: whitesmoke; padding: 20px; margin-bottom: 20px;">
        Try to resize the resizable node
      </div>
      <diagram v-if="visible" :model="model" width="500" height="700" gridSnap="10" />
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

    const node1 = diagramModel.addNode("fixed", 300, 200);
    const inPort = node1.addInPort("test");

    const resizableNode = diagramModel.addNode("resizable", 10, 300, 144, 80, {
      resizable: true,
    });
    const node2OutPort = resizableNode.addOutPort("testOut");
    resizableNode.addOutPort("testOut2");
    resizableNode.color = "#00cc66";

    diagramModel.addLink(node2OutPort, inPort);

    return {
      visible: true,
      model: diagramModel,
      resizableNode,
    };
  },
  methods: {
    toggleResizable() {
      this.resizableNode.options.resizable = !this.resizableNode.options.resizable;
    },
  },
};
<\/script>
`;
export {
  __resolved__virtual_storySource_storiesResizeStoryVue as default
};
