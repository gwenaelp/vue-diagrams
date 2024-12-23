import Diagram from "../components/Diagram.vue";
import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { userEvent,  fireEvent, within, expect } from '@storybook/test';

import drag from '../__tests__/utils/drag.ts';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const meta: Meta<typeof Diagram> = {
  title: 'Advanced usage/DropToCreateNodes',
  component: Diagram,
};

export default meta;

type Story = StoryObj<typeof Diagram>;

const createModel = () => {
  const diagramModel = new Diagram.Model();
  return { diagramModel };
};

const styles = `
  .node {
    display: block;
    width: 72px;
    height: 100px;
    border: 2px solid black;
    border-radius: 4px;
    font-size: 12px;
    margin-bottom: 20px;
    cursor: grab;
  }
`;

export const DropToCreateNodes = {
  render: () => ({
    components: { Diagram },
    template: `
      <div>
        <div class="node droppable-node" draggable="true">Drop this node</div>
        <div @drop="onDrop" @dragover.prevent @dragenter.prevent>
          <diagram :model="model" width="400" height="400" ref="diagram" />
        </div>
      </div>
    `,
    setup() {
      const { diagramModel } = createModel();
      
      const diagram = ref(null);
      const onDrop = (event) => {
        const pan = diagram.value.spz.getPan();
        const zoom = diagram.value.spz.getZoom();
        const x = pan.x * (1/zoom) * -1;
        const y = pan.y * (1/zoom) * -1;
        const node = diagram.value.reactiveModel.addNode('Node', x, y);
        node.addInPort('In');
        node.addOutPort('Out');
        diagram.value.updateLinksPositions();
      };

      return {
        model: diagramModel,
        onDrop,
        diagram,
      };
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const newNodeElement = canvasElement.querySelector('.droppable-node');  // Get the SVG element
    const svgElement = canvasElement.querySelector('#svgroot2');
    console.log('newNodeElement', newNodeElement, svgElement.querySelectorAll('.node'), svgElement.querySelectorAll('.node').length);
    expect(svgElement.querySelectorAll('.node').length).toBe(0);
    
    await fireEvent.dragStart(newNodeElement);
    await fireEvent.dragEnter(svgElement);
    await fireEvent.dragOver(svgElement);

    await fireEvent.drop(svgElement);
    await fireEvent.dragEnd(newNodeElement);

    expect(svgElement.querySelectorAll('.node').length).toBe(1);
  },
};
