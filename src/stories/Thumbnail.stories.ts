import Diagram from "../components/Diagram.vue";

export default {
  title: 'Simple usage/Thumbnail',
  component: Diagram,
};

const createModel = () => {
  const diagramModel = new Diagram.Model();

  const node1 = diagramModel.addNode('test2', 800, 200);
  const inPort = node1.addInPort('test');

  const node2 = diagramModel.addNode('test', 160, 600, 144, 80);
  const node2OutPort = node2.addOutPort('testOut');
  node2.addOutPort('testOut2');
  node2.color = '#00cc66';

  const node3 = diagramModel.addNode('test3', -100, -50, 72, 100);
  const node3OutPort = node3.addOutPort('testOut3');
  node3.color = '#cc6600';
  node3.deletable = false;

  const test4 = diagramModel.addNode('test4', 50, 50);
  test4.color = 'red';
  const test5 = diagramModel.addNode('test5', 350, 150);
  test5.color = 'green';
  const test6 = diagramModel.addNode('test6', -150, 650);
  test6.color = 'pink';

  diagramModel.addLink(node2OutPort, inPort);
  diagramModel.addLink(node3OutPort, inPort);

  return { diagramModel };
};

export const Thumbnail = () => ({
  components: { Diagram },
  template: `
    <div>
      <diagram class="diagram" :model="model" width="700" height="500" show-thumbnail />
    </div>
  `,
  setup() {
    const { diagramModel } = createModel();
    return {
      model: diagramModel
    };
  },
});
