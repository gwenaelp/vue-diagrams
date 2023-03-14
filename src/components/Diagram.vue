<template>
  <div class="vue-diagrams" :contenteditable="!!editedSvgText">
    <Menu v-if="showMenu" />
    <SvgPanZoom
      ref="svgpanzoom"
      :style="{ width: width + 'px', height: height + 'px', border:'1px solid black'}"
      :zoomEnabled="zoomEnabled"
      id="svgroot"
      :panEnabled="panEnabled"
      :controlIconsEnabled="true"
      :fit="false"
      :center="true"
      viewportSelector="#svgroot2"
      :preventMouseEventsDefault="false"
      :beforePan="beforePan"
    >
      <svg
        id="svgroot2"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="'0 0 ' + width + ' ' + height"
        :width="width"
        :height="height"
        preserveAspectRatio="xMinYMin meet"
        class="svg-content"
        ref="dragramRoot"
        @mousemove="mouseMove"
        @mouseup="mouseUp"
        @mousedown="mouseDown"
      >
        <defs>
          <pattern id="smallGrid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#ccc" stroke-width="1"/>
          </pattern>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="url(#smallGrid)"/>
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1"/>
          </pattern>
        </defs>

        <rect x="-5000px" y="-5000px" width="10000px" height="10000px" fill="url(#grid)" @mousedown="clearSelection" ref="grid" class="svg-pan-zoom_viewport"/>
        <g ref="viewPort" id="viewport" x="50" y="50">
          <DiagramNode
            :ref="'node-' + nodeIndex"
            :title="node.title"
            :x="node.x"
            :y="node.y"
            :width="node.width"
            :height="node.height"
            :color="node.color"
            :deletable="node.deletable"
            :ports="node.ports"
            :selected="selectedItem.type === 'nodes' && selectedItem.index === nodeIndex"
            :options="node.options"
            :index="nodeIndex"
            v-for="(node, nodeIndex) in model._model.nodes"
            @onStartDrag="startDragItem"
            @delete="model.deleteNode(node)"
          >
            <DiagramPort
              v-for="(port, portIndex) in node.ports"
              :ref="'port-' + port.id"
              :id="port.id"
              :nodeIndex="nodeIndex"
              :y="portIndex * 20"
              :nodeWidth="node.width"
              :type="port.type"
              :name="port.name"
              @onStartDragNewLink="startDragNewLink"
              @mouseUpPort="mouseUpPort"
            />
          </DiagramNode>
          <DiagramLink
            :ref="'link-' + link.id"
            :positionFrom="link.positionFrom"
            :positionTo="link.positionTo"
            :points="link.points"
            :id="link.id"
            :index="index"
            :options="link.options"
            v-for="(link, index) in model._model.links"
            @onStartDrag="startDragPoint"
            @onCreatePoint="createPoint"
            @delete="model.deleteLink(link)"
          />
          <line
            :x1="getPortHandlePosition(newLink.startPortId).x"
            :y1="getPortHandlePosition(newLink.startPortId).y"
            :x2="convertXYtoViewPort(mouseX, 0).x"
            :y2="convertXYtoViewPort(0, mouseY).y"
            style="stroke:rgb(255,0,0);stroke-width:2"
            v-if="newLink"
          />
        </g>
      </svg>
    </SvgPanZoom>
  </div>
</template>
<script>
import SvgPanZoom from 'vue-svg-pan-zoom';

import Menu from './Menu.vue';

import DiagramModel from './../DiagramModel';
import DiagramNode from './DiagramNode.vue';
import DiagramLink from './DiagramLink.vue';
import DiagramPort from './DiagramPort.vue';


var generateId = function() {
  return Math.trunc(Math.random() * 1000);
};

function getAbsoluteXY(element) {
  var viewportElement = document.documentElement;
  var box = element.getBoundingClientRect();
  var scrollLeft = viewportElement.scrollLeft;
  var scrollTop = viewportElement.scrollTop;
  var x = box.left + scrollLeft;
  var y = box.top + scrollTop;
  return { x, y };
}

function snapToGrip(val, gridSize) {
  return gridSize * Math.round(val / gridSize);
}

export default {
  name: "Diagram",
  Model: DiagramModel,
  props: {
    model: {
      required: true
    },
    width: {
      default: 500
    },
    height: {
      default: 500
    },
    gridSnap: {
      default: 1
    },
    showMenu: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    this.updateLinksPositions();

    return {
      editedSvgText: undefined,
      document,
      zoomEnabled: true,
      panEnabled: true,
      draggedItem: undefined,
      selectedItem: {},
      initialDragX: 0,
      initialDragY: 0,
      newLink: undefined,
      mouseX: 0,
      mouseY: 0,
      viewPosition: undefined,
    };
  },
  components: {
    Menu,
    DiagramNode,
    DiagramLink,
    DiagramPort,
    SvgPanZoom,
  },
  computed: {
    querySelector() {
      return document.querySelector("#viewport");
    }
  },
  watch: {
    editedSvgText(v) {
      if (v) {
        this.$refs.svgpanzoom.spz.disablePan();
        this.$refs.svgpanzoom.spz.disableZoom();
      } else {
        if (this.zoomEnabled) {
          this.$refs.svgpanzoom.spz.enableZoom();
        }
        if (this.panEnabled) {
          this.$refs.svgpanzoom.spz.enablePan();
        }
      }
    },
    "model._model": {
      handler () {
        this.$emit('model-updated', this.model._model);
      },
      deep: true,
    },
    "model._model.links"() {
      this.updateLinksPositions();
    },
  },
  methods: {
    convertXYtoViewPort(x, y) {
      let rootelt = document.getElementById('svgroot2');
      let rec = document.getElementById('viewport');
      let point = rootelt.createSVGPoint();
      let rooteltPosition = getAbsoluteXY(rootelt);
      point.x = x - rooteltPosition.x;
      point.y = y - rooteltPosition.y;
      let ctm = rec.getCTM().inverse();
      return point.matrixTransform(ctm);
    },
    beforePan() {
      if (this.selectedItem.type || this.draggedItem || this.newLink)
        return false;
      else return true;
    },
    createPoint(x, y, linkIndex, pointIndex) {
      let coords = this.convertXYtoViewPort(x, y);
      let links = this.model._model.links;

      //FIXME works well only on links created at startup
      if (links[linkIndex].points === undefined) links[linkIndex].points = [];

      var points = links[linkIndex].points;
      points.splice(pointIndex, 0, coords);
      links[linkIndex].points = points;
    },

    clearSelection() {
      this.selectedItem = {};
    },

    updateLinksPositions() {
      var links = [];

      if (this.model && this.model._model) links = this.model._model.links;

      this.$nextTick(() => {
        setTimeout(() => {
          for (var i = 0; i < links.length; i++) {
            let coords;
            coords = this.getPortHandlePosition(links[i].from);
            links[i].positionFrom = { x: coords.x, y: coords.y };
            coords = this.getPortHandlePosition(links[i].to);
            links[i].positionTo = { x: coords.x, y: coords.y };
            if (this.$refs['link-' + links[i].id]) {
              let linkComponent = this.$refs['link-' + links[i].id];
              if(Array.isArray(linkComponent)) {
                linkComponent = linkComponent[0];
              }
              if(linkComponent && linkComponent.refreshLink) {
                linkComponent.refreshLink();
              }
            }
          }
        }, 100);
      });
    },

    startDragNewLink(startPortId) {
      this.panEnabled = false;
      this.newLink = {
        startPortId
      };
    },

    getPortHandlePosition(portId) {
      if (this.$refs["port-" + portId] && this.$refs["port-" + portId][0]) {
        var port = this.$refs["port-" + portId][0];
        var node = this.$refs["node-" + port.nodeIndex][0];
        var x;
        var y;
        if (port.type === "in") {
          x = node.x + 10;
          y = node.y + port.y + 64;
        } else {
          x = node.x + node.width + 10;
          y = node.y + port.y + 64;
        }

        return { x, y };
      } else {
        console.warn(
          `port "${portId}" not found. you must call this method after the first render`
        );
        return 0;
      }
    },

    mouseMove(pos) {
      var links = this.model._model.links;
      this.mouseX = pos.x;
      this.mouseY = pos.y;
      if (this.draggedItem) {
        const index = this.draggedItem.index;
        const type = this.draggedItem.type;

        let coords = this.convertXYtoViewPort(this.mouseX, this.mouseY);

        coords.x = snapToGrip(coords.x, this.gridSnap) - this.gridSnap / 2;
        coords.y = snapToGrip(coords.y, this.gridSnap);

        if (type === 'points') {
          const linkIndex = this.draggedItem.linkIndex;
          const pointIndex = this.draggedItem.pointIndex;
          links[linkIndex].points[pointIndex].x = coords.x;
          links[linkIndex].points[pointIndex].y = coords.y;
          this.updateLinksPositions();
        } if (type === 'resizeHandle') {
          console.log('drag handle', this.draggedItem);
          if (this.draggedItem.direction.indexOf('e') !== -1) {
            this.model._model.nodes[index].width = coords.x - this.model._model.nodes[index].x;
            this.updateLinksPositions();
          }
          if(this.draggedItem.direction.indexOf('s') !== -1) {
            this.model._model.nodes[index].height = coords.y - this.model._model.nodes[index].y;
            this.updateLinksPositions();
          }
          if (this.draggedItem.direction.indexOf('n') !== -1) {
            const bottom = this.model._model.nodes[index].y + this.model._model.nodes[index].height;
            this.model._model.nodes[index].y = coords.y;
            this.model._model.nodes[index].height = bottom - coords.y;
            this.updateLinksPositions();
          }
          if (this.draggedItem.direction.indexOf('w') !== -1) {
            const right = this.model._model.nodes[index].x + this.model._model.nodes[index].width;
            this.model._model.nodes[index].x = coords.x;
            this.model._model.nodes[index].width = right - coords.x;
            this.updateLinksPositions();
          }
        } else {
          this.model._model[type][index].x = coords.x - 30;
          this.model._model[type][index].y = coords.y - 30;
          this.updateLinksPositions();
        }
      }
    },
    mouseDown (event) {
      if (event.target.classList.contains('title-editable')) {
        this.editedSvgText = event.target;
      } else {
        if (this.editedSvgText && this.editedSvgText.closest('.diagram-node')) {
          const nodeComponent = this.editedSvgText.closest('.diagram-node').__vue__;
          this.model._model.nodes[nodeComponent.index].title = this.editedSvgText.innerHTML;
        }
        this.editedSvgText = undefined;
      }
    },
    mouseUp() {
      this.draggedItem = undefined;
      this.newLink = undefined;
    },

    mouseUpPort(portId) {
      var links = this.model._model.links;

      if (this.draggedItem && this.draggedItem.type === "points") {
        var pointIndex = this.draggedItem.pointIndex;
        var linkIndex = this.draggedItem.linkIndex;

        if (this.$refs["port-" + portId][0].type === "in") {
          var l = links[linkIndex].points.length;
          links[linkIndex].points.splice(
            pointIndex,
            l - this.draggedItem.pointIndex
          );
        } else {
          links[linkIndex].points.splice(0, pointIndex + 1);
        }
        this.updateLinksPositions();
      }

      if (this.newLink !== undefined) {
        var port1Id = this.newLink.startPortId;
        var port2Id = portId;

        var port1 = this.$refs["port-" + port1Id][0];
        var port2 = this.$refs["port-" + port2Id][0];

        if (port1.type === "in" && port2.type === "out") {
          links.push({
            id: generateId(),
            from: port2.id,
            to: port1.id,
            positionFrom: {},
            positionTo: {},
            points: []
          });
        } else if (port2.type === "in" && port1.type === "out") {
          links.push({
            id: generateId(),
            from: port1.id,
            to: port2.id,
            positionFrom: {},
            positionTo: {},
            points: []
          });
        } else {
          console.warn("You must link one out port and one in port");
        }

        this.model._model.links = links;

        this.updateLinksPositions();
      }
    },

    startDragPoint(pointInfo) {
      this.draggedItem = pointInfo;
    },

    startDragItem(item, x, y) {
      this.panEnabled = false;
      this.draggedItem = item;
      this.selectedItem = item;
      this.initialDragX = x;
      this.initialDragY = y;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  svg{
    user-select: none;
    font-family: Helvetica;
  }
</style>
