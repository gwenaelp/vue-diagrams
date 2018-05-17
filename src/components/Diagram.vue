<template>
  <div>
   <SvgPanZoom
      style="width: 500px; height: 500px; border:1px solid black;"
      xmlns="http://www.w3.org/2000/svg"
      :zoomEnabled="zoomEnabled"
      id="svgroot"
      :panEnabled="panEnabled"
      :controlIconsEnabled="true"
      :fit="false"
      :center="true"
      viewportSelector="#svgroot2"
      :beforePan="beforePan"
    >
    <svg
    id="svgroot2"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    width="500"
    height="500"
    preserveAspectRatio="xMinYMin meet"
    class="svg-content"
    ref="dragramRoot"
    @mousemove="mouseMove"
    @mouseup="mouseUp" >
     <defs>
        <pattern id="smallGrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="gray" stroke-width="0.5"/>
        </pattern>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="url(#smallGrid)"/>
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1"/>
        </pattern>
      </defs>

      <rect x="-5000px" y="-5000px" width="10000px" height="10000px" fill="url(#grid)" @mousedown="clearSelection" ref="grid" class="svg-pan-zoom_viewport"/>
      <g ref="viewPort" id="viewport" x="50" y="50">
        <DiagramLink
          :ref="'link-' + index"
          :positionFrom="link.positionFrom"
          :positionTo="link.positionTo"
          :points="link.points"
          :id="link.id"
          :index="index"
          v-for="(link, index) in links"
          @onStartDrag="startDragPoint"
          @onCreatePoint="createPoint"
        />
        <line
          :x1="getPortHandlePosition(newLink.startPortId).x"
          :y1="getPortHandlePosition(newLink.startPortId).y"
          :x2="convertXYtoViewPort(mouseX, 0).x"
          :y2="convertXYtoViewPort(0, mouseY).y"
          style="stroke:rgb(255,0,0);stroke-width:2"
          v-if="newLink"
        />
        <DiagramNode
          :ref="'node-' + nodeIndex"
          :title="node.title + links.length"
          :x="node.x"
          :y="node.y"
          :width="node.width"
          :height="node.height"
          :ports="node.ports"
          :selected="selectedItem.type === 'nodes' && selectedItem.index === nodeIndex"
          :index="nodeIndex"
          v-for="(node, nodeIndex) in nodes"
          @onStartDrag="startDragItem"
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
      </g>
    </svg>
  </SvgPanZoom>
  </div>
</template>
<script>
import SvgPanZoom from "vue-svg-pan-zoom";

import DiagramNode from "./DiagramNode";
import DiagramLink from "./DiagramLink";
import DiagramPort from "./DiagramPort";

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
  return { x: x, y: y };
}

function snapToGrip(val, gridSize) {
  return gridSize * Math.round(val / gridSize);
}

export default {
  name: "Diagram",

  props: ["nodes", "links"],

  data() {
    this.updateLinksPositions();

    return {
      console,
      document,
      zoomEnabled: true,
      panEnabled: true,
      draggedItem: undefined,
      selectedItem: {},
      initialDragX: 0,
      initialDragY: 0,
      newLink: undefined,
      mouseX: 0,
      mouseY: 0
    };
  },
  components: {
    DiagramNode,
    DiagramLink,
    DiagramPort,
    SvgPanZoom
  },

  methods: {
    convertXYtoViewPort(x, y) {
      let rootelt = document.getElementById("svgroot2");
      let rec = document.getElementById("viewport");
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

      //FIXME works well only on links created at startup
      if (this.links[linkIndex].points === undefined)
        this.links[linkIndex].points = [];

      var points = this.links[linkIndex].points;
      points.splice(pointIndex, 0, coords);
      this.links[linkIndex].points = points;
    },

    clearSelection() {
      this.selectedItem = {};
    },

    updateLinksPositions() {
      this.$nextTick(() => {
        setTimeout(() => {
          for (var i = 0; i < this.links.length; i++) {
            var coords;
            coords = this.getPortHandlePosition(this.links[i].from);
            this.links[i].positionFrom = { x: coords.x, y: coords.y };
            coords = this.getPortHandlePosition(this.links[i].to);
            this.links[i].positionTo = { x: coords.x, y: coords.y };
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
      if (this.$refs["port-" + portId]) {
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
      this.mouseX = pos.x;
      this.mouseY = pos.y;
      if (this.draggedItem) {
        var index = this.draggedItem.index;
        var type = this.draggedItem.type;
        if (type === "points") {
          let coords = this.convertXYtoViewPort(this.mouseX, this.mouseY);
          this.links[this.draggedItem.linkIndex].points[
            this.draggedItem.pointIndex
          ].x =
            coords.x;
          this.links[this.draggedItem.linkIndex].points[
            this.draggedItem.pointIndex
          ].y =
            coords.y;
          this.updateLinksPositions();
        } else {
          let coords = this.convertXYtoViewPort(this.mouseX, this.mouseY);

          this[type][index].x = coords.x - 30;
          this[type][index].y = coords.y - 30;
          this.updateLinksPositions();
        }
      }
    },

    mouseUp() {
      this.draggedItem = undefined;
      this.newLink = undefined;
    },

    mouseUpPort(portId) {
      if (this.draggedItem && this.draggedItem.type === "points") {
        console.log(this.draggedItem);
        var pointIndex = this.draggedItem.pointIndex;
        var linkIndex = this.draggedItem.linkIndex;

        if (this.$refs["port-" + portId][0].type === "in") {
          var l = this.links[linkIndex].points.length;
          this.links[linkIndex].points.splice(
            pointIndex,
            l - this.draggedItem.pointIndex
          );
        } else {
          this.links[linkIndex].points.splice(0, pointIndex + 1);
        }
        this.updateLinksPositions();
      }

      if (this.newLink !== undefined) {
        var port1Id = this.newLink.startPortId;
        var port2Id = portId;

        var port1 = this.$refs["port-" + port1Id][0];
        var port2 = this.$refs["port-" + port2Id][0];
        var links = this.links;

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

        this.links = links;

        this.updateLinksPositions();
      }
    },

    startDragPoint(pointInfo) {
      console.log("startDragPoint", pointInfo);
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
  computed: {
    querySelector: function() {
      return document.querySelector("#viewport");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  svg{
    user-select: none;
    font-family: Helvetica;
  }
</style>
