<template>
  <div style="display: flex;">
    <iframe
      src="stories/__sandbox.html?storyId=stories-grid-snap-story-vue&variantId=_default"
      width="390"
      height="525"
      frameborder="0"
      scrolling="no"
      style="background: white;"
    />
    <codemirror
      v-model="code"
      placeholder="Code goes here..."
      :style="{ width: '560px', height: '525px' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      @ready="handleReady"
      @change="log('change', $event)"
      @focus="log('focus', $event)"
      @blur="log('blur', $event)"
    />
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { Codemirror } from 'vue-codemirror'
  import { javascript } from '@codemirror/lang-javascript'
  import { oneDark } from '@codemirror/theme-one-dark'

  export default defineComponent({
    components: {
      Codemirror
    },
    setup() {
      const code = '<template>\r\n  <diagram :model=\"model\" gridSnap=\"16\" \/>\r\n<\/template>\r\n<script>\r\nimport { Diagram } from \"vue-diagrams\";\r\nexport default {\r\n  components: { Diagram },\r\n  data() {\r\n    const diagramModel = new Diagram.Model();\r\n\r\n    const node1 = diagramModel.addNode(\"test2\", 300, 200);\r\n    const inPort = node1.addInPort(\"test\");\r\n    \r\n    const node2 = diagramModel.addNode(\"test\", 10, 300, 144, 80);\r\n    const node2OutPort = node2.addOutPort(\"testOut\");\r\n    node2.addOutPort(\"testOut2\");\r\n    \r\n    const node3 = diagramModel.addNode(\"test3\", 10, 100, 72, 100);\r\n    const node3OutPort = node3.addOutPort(\"testOut3\");\r\n    node3.color = \"#cc6600\";\r\n\r\n    diagramModel.addLink(node2OutPort, inPort);\r\n    diagramModel.addLink(node3OutPort, inPort);\r\n\r\n    return { model: diagramModel };\r\n  },\r\n};\r\n<\/script>';
      const extensions = [javascript(), oneDark]

      // Codemirror EditorView instance ref
      const view = shallowRef()
      const handleReady = (payload) => {
        view.value = payload.view
      }

      // Status is available at all times via Codemirror EditorView
      const getCodemirrorStates = () => {
        const state = view.value.state
        const ranges = state.selection.ranges
        const selected = ranges.reduce((r, range) => r + range.to - range.from, 0)
        const cursor = ranges[0].anchor
        const length = state.doc.length
        const lines = state.doc.lines
        // more state info ...
        // return ...
      }

      return {
        code,
        extensions,
        handleReady,
        log: console.log
      }
    }
  })
</script>
