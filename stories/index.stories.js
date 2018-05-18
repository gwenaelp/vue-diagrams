import { storiesOf } from "@storybook/vue";
import DiagramModel from "../src/DiagramModel";

// Add more stories here to live develop your components
storiesOf("Diagram", module).add("story as a template", () => ({
  data() {
    let diagramModel = new DiagramModel();

    let node1 = diagramModel.addNode("test2", 300, 200);
    let inPort = node1.addInPort("test");

    let node2 = diagramModel.addNode("test", 10, 300, 144, 80);
    let node2OutPort = node2.addOutPort("testOut");
    node2.addOutPort("testOut2");
    node2.color = "#00cc66";

    let node3 = diagramModel.addNode("test3", 10, 100, 72, 100);
    let node3OutPort = node3.addOutPort("testOut3");
    node3.color = "#cc6600";

    diagramModel.addLink(node2OutPort, inPort);
    diagramModel.addLink(node3OutPort, inPort);

    return {
      model: diagramModel
    };
  },
  template: `<diagram :model="model"></diagram>`
}));
