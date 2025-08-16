import Diagram from "../components/Diagram.vue";

export default {
  title: 'Advanced usage/Custom nodes/TextNodes',
  component: Diagram,
};

const createModel = () => {
  const diagramModel = new Diagram.Model();

  const node1 = diagramModel.addNode("Node 1", 300, 200, 120, 120, { type: 'text' });
  const node2 = diagramModel.addNode("Node 2", 100, 100, 160, 120, { type: 'text' });

  const inPort = node1.addInPort();
  const outPort = node2.addOutPort();
  diagramModel.addLink(outPort, inPort);

  return { diagramModel };
};

export const TextNodes = () => ({
  components: { Diagram },
  template: `
    <div>
      <diagram :model="model" :height="700" />
    </div>
  `,
  setup() {
    const { diagramModel } = createModel();

    return {
      model: diagramModel,
    };
  },
});
