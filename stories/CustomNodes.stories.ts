import Diagram from "../components/Diagram.vue";
import CustomNode from "./CustomNode.vue";

export default {
  title: 'Advanced usage/CustomNodes',
  component: Diagram,
  parameters: {
    setupApp: ({ app }) => {
      app.component('vue-diagrams-node-custom', CustomNode);
    }
  },
};

const createModel = () => {
  const diagramModel = new Diagram.Model();

  const node1 = diagramModel.addNode("test2", 300, 200);
  const inPort = node1.addInPort("test");

  const node2 = diagramModel.addNode("test", 10, 300, 144, 80, { type: 'custom' });
  const node2OutPort = node2.addOutPort("testOut");
  node2.addOutPort("testOut2");
  node2.color = "#00cc66";

  diagramModel.addLink(node2OutPort, inPort);

  return { diagramModel };
};

export const CustomNodes = () => ({
  components: { Diagram },
  template: `
    <div>
      <diagram :model="model" height="300" />
    </div>
  `,
  setup() {
    const { diagramModel } = createModel();

    return {
      model: diagramModel,
    };
  },
});
