import Diagram from "../components/Diagram.vue";
import { userEvent, within, expect } from '@storybook/test';
import drag from '../__tests__/utils/drag.ts';

const meta: Meta<typeof Diagram> = {
  title: 'Simple usage/EditLocked',
  component: Diagram,
};

export default meta;

type Story = StoryObj<typeof Diagram>;

const createModel = () => {
  const diagramModel = new Diagram.Model();

  const node1 = diagramModel.addNode("testNode2", 300, 200);
  const inPort = node1.addInPort("test");

  const node2 = diagramModel.addNode("testNode1", 10, 300, 144, 80);
  const node2OutPort = node2.addOutPort("testOut");
  node2.addOutPort("testOut2");
  node2.color = "#00cc66";

  const node3 = diagramModel.addNode("testNode3", 10, 100, 72, 100);
  const node3OutPort = node3.addOutPort("testOut3");
  node3.color = "#cc6600";
  node3.deletable = false;

  diagramModel.addLink(node2OutPort, inPort);
  diagramModel.addLink(node3OutPort, inPort);

  return { diagramModel };
};

export const EditLocked: Story = {
  render: () => ({
    components: { Diagram },
    template: `
      <diagram :model="model" height="300" :editable="false" />
    `,
    setup() {
      const { diagramModel } = createModel();
      return {
        model: diagramModel
      };
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('testNode1')).toBeInTheDocument();
    await expect(canvas.getByText('testNode2')).toBeInTheDocument();
    await expect(canvas.getByText('testNode3')).toBeInTheDocument();

    const node1 = canvas.getByText('testNode1');
    const node2 = canvas.getByText('testNode2');
    const node3 = canvas.getByText('testNode3');
    await userEvent.click(node1);

    // Get the initial position of the node (for simulation purposes)
    const initialPosition1 = node1.getBoundingClientRect();
    const initialPosition2 = node2.getBoundingClientRect();
    const initialPosition3 = node3.getBoundingClientRect();

    await drag(node3, { delta: {x: 100, y: 0} });

    const updatedPosition1 = node1.getBoundingClientRect();
    const updatedPosition2 = node2.getBoundingClientRect();
    const updatedPosition3 = node3.getBoundingClientRect();

    //every node has been moved, as it is considered dragged on whole diagram
    expect(updatedPosition1.x).toBeCloseTo(initialPosition1.x + 95, 1);
    expect(updatedPosition2.x).toBeCloseTo(initialPosition2.x + 95, 1);
    expect(updatedPosition3.x).toBeCloseTo(initialPosition3.x + 95, 1);
  },

};
