import { storiesOf } from "@storybook/vue";
import Diagram from "../src/components/Diagram";

// Add more stories here to live develop your components
storiesOf("Diagram", module).add(
  "serialization/deserialization - Dark - Calculated Width",
  () => ({
    data() {
      const diagramModel = new Diagram.Model();

      const node1 = diagramModel.addNode("t", 300, 200);
      const inPort = node1.addInPort("test");

      const node2 = diagramModel.addNode("test", 10, 320, 144, 80);
      const node2OutPort = node2.addOutPort("testOut");
      node2.addOutPort("testOut2");
      node2.color = "#00cc66";

      const node3 = diagramModel.addNode("test3 Bla blo blu", 10, 100, 72, 100);
      const node3OutPort = node3.addOutPort("testOut3");
      node3.color = "#cc6600";

      const node4 = diagramModel.addNode("test3 Bla blo bl", 10, 205, 72, 100);
      const node4OutPort = node4.addOutPort("testOut4");
      node4.color = "#cc6600";
      node4.deletable = false;

      diagramModel.addLink(node2OutPort, inPort);
      diagramModel.addLink(node3OutPort, inPort);
      diagramModel.addLink(node4OutPort, inPort);

      return {
        console,
        serializedModel: diagramModel.serialize(),
        model: diagramModel
      };
    },
    template: `<div style="background-color: #423661; background-image: radial-gradient(#413561, #473d58);">
    <diagram :model="model"></diagram>
    <button @click="console.log(model.serialize())">serialize</button>
    <button @click="model.deserialize(serializedModel)">deserialize</button>
  </div>`
  })
);
