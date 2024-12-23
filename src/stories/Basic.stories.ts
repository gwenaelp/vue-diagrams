import type { Meta, StoryObj } from '@storybook/vue3';
import Diagram from "../components/Diagram.vue";
import { userEvent, within, expect } from '@storybook/test';
import drag from '../__tests__/utils/drag.ts';

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

  return diagramModel;
};

const meta: Meta<typeof Diagram> = {
  title: 'BasicDiagram',
  component: Diagram,
};

export default meta;

type Story = StoryObj<typeof Diagram>;

export const BasicDiagram: Story = {
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
    const canvas = within(canvasElement);

    await expect(canvas.getByText('testNode1')).toBeInTheDocument();
    await expect(canvas.getByText('testNode2')).toBeInTheDocument();
    await expect(canvas.getByText('testNode3')).toBeInTheDocument();

    const node1 = canvas.getByText('testNode1');
    await userEvent.click(node1);

    // Get the initial position of the node (for simulation purposes)
    const initialPosition = node1.getBoundingClientRect();
    const initialX = initialPosition.left;

    await drag(node1, {
      delta: {x: 100, y: 0},
    });

    const updatedNode1 = canvas.getByText('testNode1');
    const updatedPosition = updatedNode1.getBoundingClientRect();
    expect(updatedPosition.left).toBeCloseTo(initialX + 99.5, 1);

    const portHandle = canvas.getByText('testOut2').parentElement.previousSibling;
  },
};
