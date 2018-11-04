import { storiesOf } from "@storybook/vue";
import Diagram from "../src/components/Diagram";

// Add more stories here to live develop your components
storiesOf("Diagram", module).add("undirected-port", () => ({
  data() {
    const diagramModel = new Diagram.Model();
    const node1 = diagramModel.addNode("test", 300, 200, 150, 150);
    node1.addBothPort("testBoth");

    const node2 = diagramModel.addNode("test", 10, 200, 100, 100);
    node2.addBothPort("testBoth");
    node2.addBothPort("testBoth2");

    // const node1 = diagramModel.addNode("test2", 300, 200);
    // const inPort = node1.addBothPort("testBoth");
    //
    // const node2 = diagramModel.addNode("test", 10, 300, 144, 80);
    // const node2OutPort = node2.addOutPort("testOut");
    // node2.addOutPort("testOut2");
    // node2.addBothPort("testBoth2");
    // node2.color = "#00cc66";
    //
    // const node3 = diagramModel.addNode("test3", 10, 100, 72, 100);
    // const node3OutPort = node3.addOutPort("testOut3");
    // node3.color = "#cc6600";
    // node3.deletable = false;
    //
    // diagramModel.addLink(node2OutPort, inPort);
    // diagramModel.addLink(node3OutPort, inPort);

    return {
      model: diagramModel
    };
  },
  template: `<diagram :model="model" gridSnap="16"></diagram>`
}));
