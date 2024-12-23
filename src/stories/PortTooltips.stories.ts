import Diagram from "../components/Diagram.vue";
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Diagram> = {
  title: 'Advanced usage/PortTooltips',
  component: Diagram,
};

export default meta;

type Story = StoryObj<typeof Diagram>;

const createModel = () => {
  const diagramModel = new Diagram.Model();

  const n = diagramModel.addNode('Master', 300, 300, 130, 210);
  n.addInPort('Normal', { tooltip: { text: 'vec2', fill: '#ffcccc', stroke: '#ddbbbb', trigger: 'hoverPort' } });
  n.addInPort('Opacity', { tooltip: { text: 'float' } });
  n.addOutPort('UV', { tooltip: { text: 'vec2' } });
  n.addOutPort('U', { tooltip: { text: 'float' } });

  const n2 = diagramModel.addNode('Master', 550, 300, 130, 210);
  n2.addInPort('Normal', { tooltip: { text: 'vec2' } });
  n2.addInPort('Opacity', { tooltip: { text: 'float' } });
  n2.addOutPort('UV', { tooltip: { text: 'vec2' } });
  n2.addOutPort('U', { tooltip: { text: 'float' } });

  return diagramModel;
};

export const PortTooltips: StoryObj = {
  render: () => ({
    components: { Diagram },
    template: `<diagram :model="model" width="800" height="600" />`,
    setup() {
      const model = createModel();
      return {
        model,
      };
    },
  }),
  play: async ({ canvasElement }) => {
    throw 'Not displayed correctly';
  }
}
