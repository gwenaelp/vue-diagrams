import Diagram from "../components/Diagram.vue";

export default {
  title: 'Advanced usage/SerializationDeserialization',
  component: Diagram,
};

const createModel = () => {
  const diagramModel = new Diagram.Model();

  const node1 = diagramModel.addNode("test2", 300, 200);
  const inPort = node1.addInPort("test");

  const node2 = diagramModel.addNode("test", 10, 300, 144, 80);
  const node2OutPort = node2.addOutPort("testOut");
  node2.addOutPort("testOut2");
  node2.color = "#00cc66";

  const node3 = diagramModel.addNode("test3", 10, 100, 72, 100);
  const node3OutPort = node3.addOutPort("testOut3");
  node3.color = "#cc6600";

  diagramModel.addLink(node2OutPort, inPort);
  diagramModel.addLink(node3OutPort, inPort);

  return { diagramModel, serializedModel: diagramModel.serialize() };
};

export const SerializationDeserialization = () => ({
  components: { Diagram },
  template: `
    <div>
      <diagram :model="model" height="700"/>
      <button @click="serializeModel">serialize</button>
      <button @click="deserializeModel">deserialize</button>
    </div>
  `,
  setup() {
    const { diagramModel, serializedModel } = createModel();

    const serializeModel = () => {
      console.log(diagramModel.serialize());
    };

    const deserializeModel = () => {
      diagramModel.deserialize(serializedModel);
    };

    return {
      model: diagramModel,
      serializeModel,
      deserializeModel,
    };
  },
});
