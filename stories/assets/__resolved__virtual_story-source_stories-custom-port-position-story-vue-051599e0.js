const __resolved__virtual_storySource_storiesCustomPortPositionStoryVue = '<template>\n  <Story title="Custom port position">\n    <diagram :model="model" height="300" />\n  </Story>\n</template>\n<script>\nimport Diagram from "../src/components/Diagram.vue";\nexport default {\n  components: {\n    Diagram,\n  },\n  data() {\n    const diagramModel = new Diagram.Model();\n\n    const node1 = diagramModel.addNode("test2", 300, 200);\n    const inPort = node1.addInPort("in", { y: 80 });\n    const outPort = node1.addOutPort("out", { y: 80 });\n\n    const node2 = diagramModel.addNode("test", 10, 300, 144, 80);\n    const node2OutPort = node2.addOutPort("testOut", { y: 80 });\n    node2.color = "#00cc66";\n\n    diagramModel.addLink(node2OutPort, inPort);\n\n    return {\n      model: diagramModel\n    };\n  },\n};\n\n<\/script>\n';
export {
  __resolved__virtual_storySource_storiesCustomPortPositionStoryVue as default
};
