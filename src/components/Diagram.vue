<template>
  <div class="vue-diagrams">
    <Menu ref="menu" v-if="showMenu" />
    <TextInput ref="textInput" />
    <SvgPanZoom
      ref="svgpanzoom"
      class="svgpanzoom"
      :style="{ width: width + 'px', height: height + 'px'}"
      :zoomEnabled="zoomEnabled"
      id="svgroot"
      :panEnabled="panEnabled"
      :controlIconsEnabled="false"
      :fit="false"
      :center="true"
      viewportSelector="#svgroot2"
      :preventMouseEventsDefault="false"
      :beforePan="beforePan"
      @created="spzCreated"
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
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke-width="1"/>
          </pattern>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="url(#smallGrid)"/>
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke-width="1"/>
          </pattern>
        </defs>

        <rect
          ref="grid"
          class="svg-pan-zoom_viewport"
          x="-5000px"
          y="-5000px"
          width="10000px"
          height="10000px"
          fill="url(#grid)"
          @mousedown="mode !== 'select' ? detectClickOnBg($event) : undefined"
        />
        <g ref="viewPort" id="viewport" x="50" y="50">
          <g v-if="displayLinks">
          <DiagramLink
            :ref="'link-' + link.id"
            :positionFrom="link.positionFrom"
            :positionTo="link.positionTo"
            :points="link.points"
            :id="link.id"
            :key="link.id"
            :index="index"
            :options="link.options"
            :linkModel="link"
            :diagram="model"
            v-for="(link, index) in reactiveModel._model.links"
            @onStartDrag="startDragPoint"
            @onCreatePoint="createPoint"
            @delete="model.deleteLink(link)"
          />
          <line
            :x1="getPortHandlePosition(newLink.startPortId)?.x"
            :y1="(getPortHandlePosition(newLink.startPortId)?.y || 0) - 8"
            :x2="convertXYtoViewPort(mouseX, 0).x"
            :y2="convertXYtoViewPort(0, mouseY).y"
            style="stroke:rgb(255,0,0);stroke-width:2"
            v-if="newLink"
          />
        </g>
          <DiagramNode
            :ref="'node-' + nodeIndex"
            :title="node.title"
            :nodeModel="node"
            :diagram="model"
            :x="node.x"
            :y="node.y"
            :id="node.id"
            :key="node.id"
            :width="node.width"
            :height="node.height"
            :ports="node.ports"
            :mainSelection="mainSelectedItem.type === 'nodes' && mainSelectedItem.node.id === node.id"
            :selected="(mainSelectedItem.type === 'nodes' && mainSelectedItem.index === nodeIndex) || secondarySelectedNodes.indexOf(node) !== -1"
            :options="node.options"
            :index="nodeIndex"
            v-for="(node, nodeIndex) in reactiveModel._model.nodes"
            @onStartDrag="startDragItem"
            @delete="model.deleteNode(node)"
          >
            <foreignObject :width="node.width + 10" x="-5" :height="node.height - 20" y="20">
              <div class="diagram-node-content-wrapper">
                <DiagramPort
                  v-for="(port, portIndex) in node.ports"
                  :key="portIndex"
                  :ref="'port-' + port.id"
                  :id="port.id"
                  :nodeIndex="nodeIndex"
                  :y="portIndex * 20"
                  :node="node"
                  :port="port"
                  @onStartDragNewLink="startDragNewLink"
                  @mouseUpPort="mouseUpPort"
                />
              </div>
            </foreignObject>
          </DiagramNode>
          <rect
            v-if="mode === 'select' && mouseButtonIsPressed"
            :x="min(viewportMousePos.x, mouseDownViewportPos.x)"
            :y="min(viewportMousePos.y, mouseDownViewportPos.y)"
            :width="(max(viewportMousePos.x, mouseDownViewportPos.x) || 0) - (min(viewportMousePos.x, mouseDownViewportPos.x) || 0)"
            :height="(max(viewportMousePos.y, mouseDownViewportPos.y) || 0) - (min(viewportMousePos.y, mouseDownViewportPos.y) || 0)"
            fill="#000000"
            :fill-opacity="0.5"
          />
        </g>
      </svg>
      <template v-if="showThumbnail" #thumbnail>
        <svg class="thumbViewClass">
          <rect
            v-for="(node) in model._model.nodes"
            :x="node.x"
            :y="node.y"
            :width="node.width"
            :height="node.height"
            :fill="node.color || '#66cc00'"
            :key="node.id"
          />
          <DiagramLink
            :positionFrom="link.positionFrom"
            :positionTo="link.positionTo"
            :points="link.points"
            :id="link.id"
            :index="index"
            :options="link.options"
            :linkModel="link"
            :diagram="model"
            v-for="(link, index) in model._model.links"
            :key="index"
          />
        </svg>
      </template>
    </SvgPanZoom>
  </div>
</template>
<script lang="ts">
import { defineComponent, nextTick } from 'vue';
import { SvgPanZoom } from 'vue-svg-pan-zoom';
import Menu from './Menu.vue';

import TextInput from './TextInput.vue';

import DiagramModel from './../DiagramModel';
import { default as DiagramNodeComponent } from './DiagramNode.vue';
import { default as DiagramLinkComponent } from './DiagramLink.vue';
import { default as DiagramPortComponent } from './DiagramPort.vue';
import '../style.css';
import type DiagramNode from '../DiagramNode.ts';
import type { DiagramLink } from '../types/DiagramLink.ts';

type Point = {
  x?: number;
  y?: number;
}

declare interface SVGElement {
  getCTM: Function,
  createSVGPoint: Function
}

declare type SvgInHtml = HTMLElement & SVGElement;
//this.$parent?.$parent?.$emit('deleteLink', this.linkModel);


const generateId = () => {
  return Math.trunc(Math.random() * 1000);
};


const snapToGrip = (val: number, gridSize: number) => {
  return gridSize * Math.round(val / gridSize);
}

export default defineComponent({
  name: 'Diagram',
  Model: DiagramModel,
  props: {
    defaultNodeType: {
      type: String,
      default: 'shader',
    },
    model: {
      type: Object,
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
    showThumbnail: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    controlIconsEnabled: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      reactiveModel: this.model,
      mode: 'move',
      document,
      displayLinks: false,
      zoomEnabled: true,
      panEnabled: true,
      draggedItem: undefined as any,
      mainSelectedItem: {
        index: undefined,
        type: undefined,
      } as any,
      secondarySelectedNodes: [] as Array<any>,
      initialDragX: 0,
      initialDragY: 0,
      mouseButtonIsPressed: false,
      mouseDownViewportPos: {
        x: undefined as number | undefined,
        y: undefined as number | undefined,
      },
      viewportMousePos: {
        x: undefined as number | undefined,
        y: undefined as number | undefined,
      },
      newLink: undefined as any,
      mouseX: 0,
      mouseY: 0,
      viewPosition: undefined,
      magnetismAnchors: [] as Array<any>,
      spz: undefined as any,
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.updateLinksPositions();
        this.displayLinks = true;
      }, 100);
    });
  },
  components: {
    Menu,
    TextInput,
    DiagramNode: DiagramNodeComponent,
    DiagramLink: DiagramLinkComponent,
    DiagramPort: DiagramPortComponent,
    SvgPanZoom,
  },
  computed: {
    querySelector() {
      return document.querySelector("#viewport");
    },
  },
  watch: {
    mode: {
      handler (v) {
        this.$emit('changeMode', v);
        this.$nextTick(() => {
          if (v === 'move') {
            if (this.panEnabled) {
              this.spz?.enablePan();
            } else {
              this.spz?.disablePan();
            }
          } else {
            this.spz?.disablePan();
          }
        });
      },
      immediate: true,
    },
    'model': {
      handler(newV) {
        newV.emitter.on('deleteNode', (n: DiagramNode) => {
          this.notifyDeleteNode(n);
        });
        newV.emitter.on('deserialize', () => {
          nextTick(() => this.updateLinksPositions());
        });
        newV.emitter.on('deletePort', () => {
          //this.notifyDeleteNode(n);
          this.updateLinksPositions();
        });
        newV.emitter.on('deleteLink', (l: DiagramLink) => {
          this.notifyDeleteLink(l);
          this.updateLinksPositions();
        });
      },
      immediate: true,
    },
    'model._model': {
      handler () {
        this.$emit('model-updated', this.reactiveModel._model);
      },
      deep: true,
    },
    'model._model.links'() {
      this.updateLinksPositions();
    },
  },
  methods: {
    detectClickOnBg(event: MouseEvent) {
      if ((event.target as any).classList.contains('svg-pan-zoom_viewport')) {
        this.$emit('clickOnBackground');
        this.clearSelection();
      }
    },
    getAbsoluteXY (element: { getBoundingClientRect: () => any; }) {
      //var viewportElement = document.documentElement;
      const box = element.getBoundingClientRect();
      const x = box.left;
      const y = box.top;
      return { x, y };
    },
    notifyDeleteNode(n: DiagramNode) {
      this.$emit('deleteNode', n);
    },
    notifyDeleteLink(l: DiagramLink) {
      this.$emit('deleteLink', l);
    },
    spzCreated(spz: any) {
      this.spz = spz;
      spz.setBeforePan((...args: any) => { return this.beforePan.apply(this, args); });
    },
    editText(object: any, property: any, element: any) {
      if (!this.editable) return;

      (this.$refs.textInput as any).editText(object, property, element);
    },
    min (a: number | undefined, b: number | undefined) {
      if(a === undefined) {
        return b;
      } else if(b === undefined) {
        return a;
      } else {
        return Math.min(a, b);
      }
    },
    max (a: number | undefined, b: number | undefined) {
      if (a === undefined) {
        return b;
      }
      if (b === undefined) {
        return a;
      }
      return Math.max(a, b);
    },
    convertXYtoViewPort(x: number, y: number) {
      let rootelt:SvgInHtml = this.$refs.dragramRoot as SvgInHtml;
      let rec:SvgInHtml = this.$refs.viewPort as SvgInHtml;
      let point = rootelt.createSVGPoint();
      let rooteltPosition = this.getAbsoluteXY(this.$el);
      point.x = x - rooteltPosition.x;
      point.y = y - rooteltPosition.y;
      let ctm = rec.getCTM().inverse();
      return point.matrixTransform(ctm);
    },
    beforePan() {
      if (this.mainSelectedItem.type || this.draggedItem || this.newLink) {
        return false;
      }
      else return true;
    },
    createPoint(x: number, y: number, linkIndex: string | number, pointIndex: number) {
      let coords = this.convertXYtoViewPort(x, y);
      let links = this.reactiveModel._model.links;

      //FIXME works well only on links created at startup
      if (links[linkIndex].points === undefined) links[linkIndex].points = [];

      var points = links[linkIndex].points;
      points.splice(pointIndex, 0, coords);
      links[linkIndex].points = points;
    },

    clearSelection(skipPrimary?: boolean, skipSecondary?: boolean, skipSendEvent?: boolean) {
      if (!skipPrimary) {
        this.mainSelectedItem = {};
        if (!skipSendEvent) {
          this.$emit('primarySelectionChanged', this.mainSelectedItem);
        }
      }
      if (!skipSecondary) {
        this.secondarySelectedNodes = [];
        if (!skipSendEvent) {
          this.$emit('secondarySelectionChanged', this.secondarySelectedNodes);
        }
      }
    },

    updateLinksPositions() {
      let links: DiagramLink[] = [];

      if (this.reactiveModel && this.reactiveModel._model) links = this.reactiveModel._model.links;

      for (let i = 0; i < links.length; i++) {
        let coords: void | Point;
        coords = this.getPortHandlePosition(links[i].from);
        links[i].positionFrom = { x: coords?.x, y: coords?.y };
        coords = this.getPortHandlePosition(links[i].to);
        links[i].positionTo = { x: coords?.x, y: coords?.y };
        if (this.$refs['link-' + links[i].id]) {
          let linkComponent = this.$refs['link-' + links[i].id] as any;
          if(Array.isArray(linkComponent)) {
            linkComponent = linkComponent[0];
          }
          if(linkComponent && linkComponent.refreshLink) {
            linkComponent.refreshLink();
          }
        }
      }
    },

    startDragNewLink(startPortId: any) {
      if (!this.editable) return;

      //this.panEnabled = false;
      this.newLink = { startPortId };
    },

    getPortHandlePosition(portId: number): Point | void {
      if (this.$refs["port-" + portId] && (this.$refs['port-' + portId] as any)[0]) {
        const portComponent = (this.$refs['port-' + portId] as any)[0];
        const node = (this.$refs['node-' + portComponent.nodeIndex] as any)[0];
        let x;
        let y;
        if (portComponent.port.type === "in") {
          x = node.x + portComponent.displayedX + 5;
          y = node.y + portComponent.displayedY + 9;
        } else {
          x = node.x + portComponent.displayedX + 5;
          y = node.y + portComponent.displayedY + 9;
        }

        return { x, y };
      } else {
        console.warn(
          `port "${portId}" not found. you must call this method after the first render`
        );
        return undefined;
      }
    },

    mouseMoveMagnetismAnchors(coords: { x: number; y: number; }) {
      for (let a of this.magnetismAnchors) {
        a.show = false;
        if (a.x && (Math.abs(a.x - (coords.x - this.initialDragX)) < 10)) {
          coords.x = a.x + this.initialDragX;
          a.show = true;
        }
        if (a.y && (Math.abs(a.y - (coords.y - this.initialDragY)) < 10)) {
          coords.y = a.y + this.initialDragY;
          a.show = true;
        }

        if (this.draggedItem.node) {
          if(a.x && (Math.abs(a.x - (coords.x - this.initialDragX + this.draggedItem.node.width)) < 10)) {
            coords.x = a.x + this.initialDragX - this.draggedItem.node.width;
            a.show = true;
          }
          if (a.y && (Math.abs(a.y - (coords.y - this.initialDragY + this.draggedItem.node.height)) < 10)) {
            coords.y = a.y + this.initialDragY - this.draggedItem.node.height;
            a.show = true;
          }
        }
      }      
    },

    mouseMove(pos: { clientX: number; clientY: number; x: any; y: any; }) {
      if (!this.editable) return;

      const links = this.reactiveModel._model.links;
      //const bbox = this.$el.getBoundingClientRect();
      this.mouseX = pos.clientX;
      this.mouseY = pos.clientY;
      this.viewportMousePos = this.convertXYtoViewPort(pos.x, pos.y);
      if (this.mode === 'move') {
        if (this.draggedItem) {
          const index = this.draggedItem.index;
          const type = this.draggedItem.type;

          let coords = this.convertXYtoViewPort(this.mouseX, this.mouseY);
          coords.x = snapToGrip(coords.x, this.gridSnap) - this.gridSnap / 2;
          coords.y = snapToGrip(coords.y, this.gridSnap);

          this.mouseMoveMagnetismAnchors(coords);

          if (type === 'points') {
            const linkIndex = this.draggedItem.linkIndex;
            const pointIndex = this.draggedItem.pointIndex;
            links[linkIndex].points[pointIndex].x = coords.x;
            links[linkIndex].points[pointIndex].y = coords.y;
            //this.updateLinksPositions();
          }
          if (type === 'resizeHandle') {
            if (this.draggedItem.direction.indexOf('e') !== -1) {
              this.reactiveModel._model.nodes[index].width = coords.x - this.reactiveModel._model.nodes[index].x;
              //this.updateLinksPositions();
            }
            if(this.draggedItem.direction.indexOf('s') !== -1) {
              this.reactiveModel._model.nodes[index].height = coords.y - this.reactiveModel._model.nodes[index].y;
              //this.updateLinksPositions();
            }
            if (this.draggedItem.direction.indexOf('n') !== -1) {
              const bottom = this.reactiveModel._model.nodes[index].y + this.reactiveModel._model.nodes[index].height;
              this.reactiveModel._model.nodes[index].y = coords.y;
              this.reactiveModel._model.nodes[index].height = bottom - coords.y;
              //this.updateLinksPositions();
            }
            if (this.draggedItem.direction.indexOf('w') !== -1) {
              const right = this.reactiveModel._model.nodes[index].x + this.reactiveModel._model.nodes[index].width;
              this.reactiveModel._model.nodes[index].x = coords.x;
              this.reactiveModel._model.nodes[index].width = right - coords.x;
              //this.updateLinksPositions();
            }
          } else {
            if (this.reactiveModel._model[type] && this.reactiveModel._model[type][index]) {
              const initialItemX = this.reactiveModel._model[type][index].x
              const initialItemY = this.reactiveModel._model[type][index].y;
              this.reactiveModel._model[type][index].x = coords.x - this.initialDragX;
              this.reactiveModel._model[type][index].y = coords.y - this.initialDragY;
              const moveDeltaX = this.reactiveModel._model[type][index].x - initialItemX;
              const moveDeltaY = this.reactiveModel._model[type][index].y - initialItemY;

              for (let n of this.secondarySelectedNodes) {
                if (!(type === 'nodes' && n === this.reactiveModel._model[type][index])) {
                  n.x += moveDeltaX;
                  n.y += moveDeltaY;
                }
              }
            }
            //this.updateLinksPositions();
          }
          this.updateLinksPositions();
        }
      }
    },
    mouseDown (event: MouseEvent) {
      if (!this.editable) return;

      this.mouseButtonIsPressed = true;
      if (!(event.target as HTMLElement).classList.contains('title-editable')) {
        let textInput: any = this.$refs.textInput;
        textInput.editText();
      }
      if (this.mode === 'select') {
        this.mouseDownViewportPos = this.convertXYtoViewPort(event.x, event.y);
      }
    },
    mouseUp () {
      if (!this.editable) return;

      this.mouseButtonIsPressed = false;
      if (this.mode === 'move') {
        if(this.secondarySelectedNodes && this.secondarySelectedNodes.length)
         if(!this.draggedItem || this.draggedItem.type !== 'nodes' || this.secondarySelectedNodes.filter(n => n === this.reactiveModel._model.nodes[this.draggedItem.index]).length === 0) {
          this.secondarySelectedNodes = [];
          this.$emit('secondarySelectionChanged', this.secondarySelectedNodes);
         }
      }
      this.draggedItem = undefined;
      this.newLink = undefined;
      if (this.mode === 'select') {
        this.secondarySelectedNodes = [];
        for (let n of this.reactiveModel._model.nodes) {
          const x1 = Math.min(this.viewportMousePos.x as number, this.mouseDownViewportPos.x as number);
          const y1 = Math.min(this.viewportMousePos.y as number, this.mouseDownViewportPos.y as number);
          const x2 = Math.max(this.viewportMousePos.x as number, this.mouseDownViewportPos.x as number);
          const y2 = Math.max(this.viewportMousePos.y as number, this.mouseDownViewportPos.y as number);
          if (n.x < x2 && n.y < y2 && n.x + n.width > x1 && n.y + n.height > y1) {
            this.secondarySelectedNodes.push(n);
          }
          this.mode = 'move';
        }
        this.$emit('secondarySelectionChanged', this.secondarySelectedNodes);
      }
    },

    mouseUpPort(portId: string) {
      if (!this.editable) return;

      const links = this.reactiveModel._model.links;

      if (this.draggedItem && this.draggedItem.type === "points") {
        const pointIndex = this.draggedItem.pointIndex;
        const linkIndex = this.draggedItem.linkIndex;

        if ((this.$refs["port-" + portId] as any)[0].type === "in") {
          const l = links[linkIndex].points.length;
          links[linkIndex].points.splice(pointIndex, l - this.draggedItem.pointIndex);
        } else {
          links[linkIndex].points.splice(0, pointIndex + 1);
        }
        this.updateLinksPositions();
      }

      if (this.newLink !== undefined) {
        const port1Id = this.newLink.startPortId;
        const port2Id = portId;

        const port1 = (this.$refs["port-" + port1Id] as any)[0];
        const port2 = (this.$refs["port-" + port2Id] as any)[0];
        let newLink;
        if (port1.type === "in" && port2.type === "out") {
          newLink = {
            id: generateId(),
            from: port2.id,
            to: port1.id,
            points: []
          };
        } else if (port2.port.type === "in" && port1.port.type === "out") {
          newLink = {
            id: generateId(),
            from: port1.id,
            to: port2.id,
            points: []
          };
        } else {
          console.warn("You must link one out port and one in port");
        }
        if(newLink) {
          // newLink.positionFrom = {x: 0, y: 0};
          // newLink.positionTo = {x: 300, y: 300};
          links.push(newLink);
        }
        this.$emit('newLink', newLink);
        //this.reactiveModel._model.links = [...links];
        this.updateLinksPositions();
      }
    },

    startDragPoint(pointInfo: undefined) {
      this.draggedItem = pointInfo;
    },

    startDragItem(item: { index: undefined; type: undefined; } | undefined, x: number, y: number) {
      //this.panEnabled = false;
      this.draggedItem = item;
      this.mainSelectedItem = item;
      this.$emit('primarySelectionChanged', this.mainSelectedItem);
      this.initialDragX = x;
      this.initialDragY = y;
      this.listMagnetismAnchors();
    },

    listMagnetismAnchors() {
      const anchors: Array<{ x?: number, y?: number, node: DiagramNode}> = [];

      for (let n of this.reactiveModel._model.nodes) {
        if (n.id !== this.draggedItem.node.id) {
          anchors.push({ x: n.x || 0, node: n });
          anchors.push({ y: n.y || 0, node: n });

          anchors.push({ x: n.x + n.width || 0, node: n });
          anchors.push({ y: n.y + n.height || 0, node: n });
        }
      }
      this.magnetismAnchors = anchors;
    }
  },
});
</script>
<style scoped>
  svg{
    user-select: none;
    font-family: Helvetica;
  }
  .thumbViewClass {
    position: absolute;
    width: 100px;
    height: 70px;
    background: white;
    border: 1px solid black;
  }
  .vue-diagrams :deep(.svg-pan-zoom__scope) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 120;
  }
  .vue-diagrams :deep(.svg-pan-zoom__thumbnail) {
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .vue-diagrams :deep(.svg-pan-zoom__scope .scope) {
    fill: red;
    fill-opacity: 0.1;
    stroke: red;
    stroke-width: 2px;
  }
  #smallGrid path {
    stroke: #ccc;
  }
  #grid path {
    stroke: gray;
  }
</style>
