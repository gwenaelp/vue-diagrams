import Diagram from "../components/Diagram.vue";
import type { Meta, StoryObj } from '@storybook/vue3';
import { userEvent, within, expect } from '@storybook/test';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const meta: Meta<typeof Diagram> = {
  title: 'Advanced usage/Menus',
  component: Diagram,
};

export default meta;

type Story = StoryObj<typeof Diagram>;

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
  node3.deletable = false;

  const node4 = diagramModel.addNode("testNode4", 10, 400, 72, 100);
  const node4OutPort = node4.addOutPort("testOut4");
  node4.color = "#cc6600";

  diagramModel.addLink(node2OutPort, inPort);
  diagramModel.addLink(node3OutPort, inPort);
  diagramModel.addLink(node4OutPort, inPort);

  return diagramModel;
};

export const Menus: Story = {
  render: () => ({
    components: { Diagram },
    template: `
      <div>
        <div style="background: whitesmoke; padding: 20px; margin-bottom: 20px;">
          Right click on nodes and link to show the edit menu
        </div>
        <diagram :model="model" height="700" show-menu />
      </div>
    `,
    setup() {
      return {
        model: createModel(),
      };
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await sleep(100);
    const svgElement = canvasElement.querySelector('.svg-pan-zoom__default > svg');  // Get the SVG element

    // Now query within the SVG context
    const links = svgElement.querySelectorAll('.diagram-link');
    expect(links).toHaveLength(3);

    const testNode4 = await canvas.getByText('testNode4');
    await userEvent.pointer({ keys: '[MouseRight]', target: svgElement.querySelectorAll('.node')[3] });
    await userEvent.pointer({ keys: '[MouseLeft]', target: canvasElement.querySelector('.menu-item') });
    await sleep(100);

    await userEvent.pointer({ keys: '[MouseRight]', target: svgElement.querySelectorAll('.diagram-link')[0] });
    await userEvent.pointer({ keys: '[MouseLeft]', target: canvasElement.querySelector('.menu-item') });

    expect(testNode4).not.toBeInTheDocument();
    expect(svgElement.querySelectorAll('.diagram-link').length).toBe(1);
  },
};
