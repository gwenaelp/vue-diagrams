import Diagram from "../components/Diagram.vue";

export default {
  title: 'Advanced usage/Custom nodes/Styles',
  component: Diagram,
};

const createModel = () => {
  const diagramModel = new Diagram.Model();

  const node1 = diagramModel.addNode("Image", 300, 150, 120, 120, {
    type: 'image',
    image: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    titleStyle: 'fill: red; font-size: 150%'
  });

  const node2 = diagramModel.addNode("Shader", 50, 50, 160, 120, {
    titleStyle: 'fill: #005511; font-size: 120%'
  });

  const node3 = diagramModel.addNode("Text", 250, 50, 160, 120, {
    type: 'text',
    titleStyle: 'fill: red; font-size: 150%'
  });

  const inPort = node1.addInPort();
  const outPort = node2.addOutPort();
  diagramModel.addLink(outPort, inPort);

  return { diagramModel };
};

export const Styles = () => ({
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
