import Diagram from "../components/Diagram.vue";

export default {
  title: 'Simple usage/ResizeNodes',
  component: Diagram,
};

const createModel = () => {
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

  return { diagramModel, resizableNode };
};

export const ResizeNodes = () => ({
  components: { Diagram },
  template: `
    <div>
      <button @click="toggleResizable">
        Toggle resizable ({{ resizableNode.options.resizable ? 'On' : 'Off' }})
      </button>
      <div style="background: whitesmoke; padding: 20px; margin-bottom: 20px;">
        Try to resize the resizable node
      </div>
      <diagram v-if="visible" :model="model" width="500" height="700" gridSnap="10" />
    </div>
  `,
  setup() {
    const { diagramModel, resizableNode } = createModel();
    const visible = true;

    const toggleResizable = () => {
      resizableNode.options.resizable = !resizableNode.options.resizable;
    };

    return {
      model: diagramModel,
      resizableNode,
      visible,
      toggleResizable,
    };
  },
});
