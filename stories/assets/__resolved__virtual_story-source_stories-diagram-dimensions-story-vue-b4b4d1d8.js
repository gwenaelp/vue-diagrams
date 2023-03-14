const __resolved__virtual_storySource_storiesDiagramDimensionsStoryVue = '<template>\n  <Story title="Assigning dimensions">\n    <diagram :model="model" width="200" height="200" />\n  </Story>\n</template>\n<script>\nimport Diagram from "../src/components/Diagram.vue";\nexport default {\n  components: {\n    Diagram,\n  },\n  data() {\n    const diagramModel = new Diagram.Model();\n\n    diagramModel.addNode("test2", 0, 0);\n\n    return {\n      model: diagramModel\n    };\n  },\n};\n<\/script>\n';
export {
  __resolved__virtual_storySource_storiesDiagramDimensionsStoryVue as default
};
