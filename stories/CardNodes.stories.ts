import Diagram from "../components/Diagram.vue";

export default {
  title: 'Advanced usage/Custom nodes/CardNodes',
  component: Diagram,
};

const createModel = () => {
  const diagramModel = new Diagram.Model();

  const node1 = diagramModel.addNode("Image 1", 300, 200, 120, 34, {
    type: 'card',
  });

  const node2 = diagramModel.addNode("Image 2", 100, 100, 160, 34, {
    type: 'card',
  });

  const inPort = node1.addInPort('', {
    y: 12,
  });
  const outPort = node2.addOutPort('', {
    y: 12,
  });

  diagramModel.addLink(outPort, inPort);

  return { diagramModel };
};

export const CardNodes = () => ({
  components: { Diagram },
  template: `
    <div>
      <diagram :model="model" height="700" />
    </div>
  `,
  setup() {
    const { diagramModel } = createModel();

    return {
      model: diagramModel,
    };
  },
});
