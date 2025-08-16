import Diagram from "../components/Diagram.vue";
import { ref } from 'vue';

export default {
  title: 'Advanced usage/ManipulatingView',
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
  node3.deletable = false;

  diagramModel.addLink(node2OutPort, inPort);
  diagramModel.addLink(node3OutPort, inPort);

  return { diagramModel };
};

export const ManipulatingView = () => ({
  components: { Diagram },
  template: `
    <div>
      <diagram ref="diagram" :model="model" height="300" />
      <button @click="move1">Move to pos 1</button>
      <button @click="move2">Move to pos 2</button>
      <button @click="move3">Move 50px to the left</button>
      <button @click="move4">Move 50px to the right</button>
    </div>
  `,
  setup() {
    const { diagramModel } = createModel();
    const diagram = ref<typeof Diagram | null>(null);
    const move1 = () => {
      // Move to position 1 (50, 50)
      if (diagram.value) {
        diagram.value.spz.pan({x: 50, y: 50});
      }
    };

    const move2 = () => {
      // Move to position 2 (200, 200)
      if (diagram.value) {
        diagram.value.spz.pan({x: 200, y: 200});
      }
    };

    const move3 = () => {
      // Move 50px to the left
      if (diagram.value) {
        diagram.value.spz.panBy({x: 50, y: 0});
      }
    };

    const move4 = () => {
      // Move 50px to the right
      if (diagram.value) {
        diagram.value.spz.panBy({x: -50, y: 0});
      }
    };

    return {
      model: diagramModel,
      move1,
      move2,
      move3,
      move4,
      diagram,
    };
  },
});