import { storiesOf } from "@storybook/vue";
import DiagramModel from "../src/DiagramModel";

// Add more stories here to live develop your components
storiesOf("Diagram", module).add("Diagram dimensions", () => ({
  data() {
    const diagramModel = new DiagramModel();

    diagramModel.addNode("test2", 0, 0);

    return {
      model: diagramModel
    };
  },
  template: `<diagram :model="model" width="200" height="200"></diagram>`
}));
