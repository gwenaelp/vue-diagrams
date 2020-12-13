import { storiesOf } from "@storybook/vue";
import Diagram from "../src/components/Diagram";

// Add more stories here to live develop your components
storiesOf("Diagram", module).add("SRP - Logic", () => ({
  data() {
    const diagramModel = new Diagram.Model();

    const node1 = diagramModel.addNode("t", 300, 200);
    const inPort = node1.addInPort("test");

    const node2 = diagramModel.addNode("test", 10, 320, 144, 80);
    const node2OutPort = node2.addOutPort("testOut");
    node2.addOutPort("testOut2");
    node2.color = "#00cc66"; // #66cc00

    const node3 = diagramModel.addNode("test3 Bla blo blu", 10, 100, 72, 100);
    const node3OutPort = node3.addOutPort("testOut3");
    node3.color = "#cc6600";

    const node4 = diagramModel.addNode("test3 Bla blo bl", 10, 205, 72, 100);
    const node4OutPort = node4.addOutPort("testOut4");
    // node4.color = "#cc6600";
    // node4.deletable = false;

    diagramModel.addLink(node2OutPort, inPort);
    diagramModel.addLink(node3OutPort, inPort);
    diagramModel.addLink(node4OutPort, inPort);

    return {
      console,
      serializedModel: diagramModel.serialize(),
      model: diagramModel,
      newNodeName: "SRP - Open Case",
      serialisedConf_1:
        '{"nodes":[{"title":"test3 Bla blo bl","x":10,"y":205,"width":134.90464706420897,"height":100,"ports":[{"id":857352,"type":"out","name":"testOut4"}],"color":"#cc6600","deletable":false},{"title":"SRP - Open Case","x":320.5,"y":272,"width":150.75793304443357,"ports":[{"id":601392,"type":"in","name":"Subject"}]}],"links":[]}'
    };
  }, // data
  computed: {
    prettyModel: {
      get() {
        return JSON.stringify(this.model, undefined, 2);
      },
      set(value) {
        this.model.deserialize(value);
      }
    },
    prettySerializedModel: {
      get() {
        return JSON.stringify(JSON.parse(this.serializedModel), undefined, 2);
        // return this.serializedModel;
      },
      set(value) {
        this.serializedModel = value;
      }
    }
  }, // computed
  methods: {
    addNode() {
      const newNode = this.model.addNode(this.newNodeName, 350, 200);
      newNode.addInPort({ title: "Case Name", connectorCategory: "S" });
      newNode.addInPort({ title: "Alarm ID", connectorCategory: "N" });
      newNode.addInPort({ isASpacer: true, title: "in - spacer" });
      newNode.addOutPort({ isASpacer: true, title: "out - spacer" });
      newNode.addInPort({ title: "", connectorCategory: "A" });
      newNode.addInPort({ title: "" });

      newNode.addOutPort({
        title: "Logic A",
        connectorCategory: "L",
        connectorCategoryTagColor: "#BF5000",
        connectorCategoryTagColorHover: "#AB4700",
        connectorCategoryTextColor: "#FFFFFF",
        connectorNameTagColor: "#7A3300",
        connectorNameTextColor: "#FFFFFF"
      });
      newNode.addOutPort({
        title: "Logic B",
        connectorCategory: "L",
        connectorCategoryTagColor: "#BF5000",
        connectorCategoryTagColorHover: "#AB4700",
        connectorCategoryTextColor: "#FFFFFF",
        connectorNameTagColor: "#7A3300",
        connectorNameTextColor: "#FFFFFF"
      });
      newNode.addOutPort({ title: "Case ID", connectorCategory: "N" });
      newNode.addOutPort("Some other output");
      // newNode.color = "#cc6600";
      // newNode.deletable = false;
    },
    selectNode(node) {
      this.console.log("selectNode:");
      this.console.log(node);
    },
    svgReset() {
      this.model.svgReset();
    }
  }, // methods
  template: `<div style="background-color: #423661; background-image: radial-gradient(#413561, #473d58);">
    <div>
      <div>
        <diagram :model="model" width="800" height="400" @SelectNode="selectNode"></diagram>
        <button @click="console.log(model.serialize())">serialize</button>
        <button @click="model.deserialize(serializedModel)">deserialize</button>
        <button @click="model.deserialize(serialisedConf_1)">deserialize Conf 1</button>
        <input v-model="newNodeName" type="text" name="newName"/>
        <button @click="addNode">Add Node</button>
        <button @click="svgReset">Reset View</button>
      </div>
      <hr>
      <input v-model="serializedModel" type="text" size="250" style="background-color: rgb(76 67 99);" />
      <div style="font-family: sans-serif; font-size: x-small;">
       {{ serializedModel }}
      </div>
      <hr>
      <div style="font-size: x-small;">
        <pre>
          {{ prettyModel }}
        </pre>
      </div>
      <hr>
      <b>SerializedModel:</b><br>
      <button @click="model.deserialize(serializedModel)">deserialize</button><br>
      <textarea
        name="prettyModelSerializedTextArea"
        cols="80" rows="250"
        style="background-color: rgb(76 90 99);"
      >{{ prettySerializedModel }}</textarea>
      <hr>
      <b>Model:</b><br>
      <textarea
        name="prettyModelTextArea"
        cols="80" rows="250"
        style="background-color: rgb(255 67 99);"
      >{{ prettyModel }}</textarea>
      <hr>
    </div>
  </div>`
}));
