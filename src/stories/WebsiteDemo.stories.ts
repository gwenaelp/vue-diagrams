import Diagram from "../components/Diagram.vue";

export default {
  title: 'Website Index Demo',
  component: Diagram,
};

const createModel = () => {
  const diagramModel = new Diagram.Model();

  const node1 = diagramModel.addNode("test2", 300, 200);
  const inPort = node1.addInPort("test");

  const node2 = diagramModel.addNode("test", 10, 300, 144, 80);
  const node2OutPort = node2.addOutPort("testOut");
  node2.addOutPort("testOut2");

  const node3 = diagramModel.addNode("test3", 10, 100, 72, 100);
  const node3OutPort = node3.addOutPort("testOut3");
  node3.color = "#cc6600";

  diagramModel.addLink(node2OutPort, inPort);
  diagramModel.addLink(node3OutPort, inPort);

  return { diagramModel };
};

export const WebsiteIndexDemo = () => ({
  components: { Diagram },
  template: `
    <div>
      <diagram :model="model" gridSnap="16" width="390" height="525" />
    </div>
  `,
  setup() {
    const { diagramModel } = createModel();

    return {
      model: diagramModel,
    };
  },
});
