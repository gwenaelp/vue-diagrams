import Diagram from '../components/Diagram.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Diagram> = {
  title: 'Simple usage/CustomPortPosition',
  component: Diagram,
};

export default meta;

type Story = StoryObj<typeof Diagram>;

const createModel = () => {
  const diagramModel = new Diagram.Model();

  const node1 = diagramModel.addNode('test2', 300, 200);
  const inPort = node1.addInPort('in', { y: 80 });
  const outPort = node1.addOutPort('out', { y: 80 });

  const node2 = diagramModel.addNode('test', 10, 300, 144, 120);
  const node2OutPort = node2.addOutPort('testOut', { y: 80 });
  node2.color = '#00cc66';

  diagramModel.addLink(node2OutPort, inPort);

  return diagramModel;
};

export const CustomPortPosition: Story = {
  render: () => ({
    components: { Diagram },
    template: '<diagram :model="model" height="700" />',
    setup() {
      return {
        model: createModel(),
      };
    },
  }),
  play: async ({ canvasElement }) => {
    throw 'Not displaying correctly';
  }
};
