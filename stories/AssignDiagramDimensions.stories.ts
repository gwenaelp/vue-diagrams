import Diagram from "../components/Diagram.vue";

export default {
  title: 'Simple usage/AssigningDiagramDimensions',
  component: Diagram,
};

const createModel = () => {
  const diagramModel = new Diagram.Model();

  diagramModel.addNode("test2", 0, 0);

  return { diagramModel };
};

export const AssigningDiagramDimensions = () => ({
  components: { Diagram },
  template: `
    <div>
      <diagram :model="model" width="200" height="200" />
    </div>
  `,
  setup() {
    const { diagramModel } = createModel();

    return {
      model: diagramModel,
    };
  },
});
