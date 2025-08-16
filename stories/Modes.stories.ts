import Diagram from "../components/Diagram.vue";
import { ref } from 'vue';

export default {
  title: 'Advanced usage/EditModes',
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

export const EditModes = () => ({
  components: { Diagram },
  template: `
    <div>
      <a :class="mode === 'move' ? 'is-active': ''" @click="mode = 'move'">
        Move
      </a>
      <a :class="mode === 'select' ? 'is-active': ''" @click="mode = 'select'">
        Select
      </a>
      <diagram ref="diagram" :model="model" height="400" />
    </div>
  `,
  setup() {
    const { diagramModel } = createModel();
    const mode = ref('move'); // Default mode is 'move'
    const diagram = ref(null);

    const setMode = (newMode) => {
      mode.value = newMode;
      if (diagram.value) {
        diagram.value.mode = newMode;
      }
    };

    return {
      model: diagramModel,
      diagram,
      mode,
      setMode,
    };
  },
});
