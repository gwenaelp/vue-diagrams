<template>
  <g class="diagram-link has-menu">
    <g
      v-if="points && points.length"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      @mousedown="mouseDown"
    >
      <g
        v-for="(point, index) in points"
        :key="index"
        @mousedown="mouseDownSegment($event, index)"
        >
        <line
          :x1="index === 0 ? x1 : points[index - 1].x" :y1="index === 0 ? y1 : points[index - 1].y"
          :x2="point.x" :y2="point.y"
          :style="largeStrokeStyle"
          stroke-width="8"
        />
        <line
          :x1="index === 0 ? x1 : points[index - 1].x" :y1="index === 0 ? y1 : points[index - 1].y"
          :x2="point.x" :y2="point.y"
          style="stroke:rgb(0,0,0);"
          stroke-width="2"
        />
      </g>
      <g @mousedown="mouseDownSegment($event, points.length)" >
        <line
          :x1="points[points.length - 1].x" :y1="points[points.length - 1].y"
          :x2="x2" :y2="y2"
          :style="largeStrokeStyle"
          stroke-width="8"
        />
        <line
          :x1="points[points.length - 1].x" :y1="points[points.length - 1].y"
          :x2="x2" :y2="y2"
          style="stroke:rgb(0,0,0);"
          stroke-width="2"
        />
      </g>
    </g>
    <g
      v-else
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      @mousedown="mouseDown"
    >
      <g @mousedown="mouseDownSegment($event, 0)">
        <path
          :d="curve"
          :style="largeStrokeStyle"
          stroke-width="8"
          fill="none"
        />
        <path
          :d="curve"
          ref="curvePath"
          style="stroke:rgb(0,0,0);"
          stroke-width="2"
          fill="none"
        />
      </g>
    </g>
    <DiagramPoint
      v-for="(point, pointIndex) in points"
      :key="pointIndex"
      @mouseenter="mouseEnterPoint(/*point*/)"
      @mouseleave="mouseLeavePoint(/*point*/)"
      @mousedown="mouseDownPoint($event, pointIndex)"
      :x="point.x" :y="point.y"
      @delete="points.splice(pointIndex, 1)"
    />
  </g>
</template>
<script lang="ts">
import DiagramPoint from "./DiagramPoint.vue";
import { defineComponent } from 'vue';

type Point = {
  x: number,
  y: number,
};

export default defineComponent({
  name: 'DiagramLink',
  props: ['positionFrom', 'positionTo', 'id', 'index', 'points', 'options'],

  components: {
    DiagramPoint
  },

  data() {
    return {
      largeStrokeStyle: "stroke:rgba(255,0,0,0.0);",
      pointStyleNormal: "stroke:rgba(255,0,0,0.0); stroke-width: 6",
      pointStyleHover: "stroke:rgba(255,0,0,0.5); stroke-width: 6",
      beginCurvePath: undefined,
      endCurvePath: undefined,
      menu: [{
        label: 'Delete link',
        handler() {
          //this.deleteLink();
        },
      }],
    };
  },
  computed: {
    x1() {
      return this.positionFrom.x;
    },

    y1() {
      return this.positionFrom.y - 4;
    },

    x2() {
      return this.positionTo.x - 4;
    },

    y2() {
      return this.positionTo.y - 4;
    },

    curve() {
      if(this.positionFrom.x && this.positionFrom.y && this.positionTo.x && this.positionTo.y) {
        var x1 = Math.trunc(this.positionFrom.x),
          y1 = Math.trunc(this.positionFrom.y - 4),
          x2 = Math.trunc(this.positionTo.x - 4),
          y2 = Math.trunc(this.positionTo.y - 4);

        const distance = Math.trunc(4 * Math.sqrt(Math.abs(x1 - x2)));
        const path = `M${x1},${y1} C${x1 + distance},${y1} ${x2 -
          distance},${y2} ${x2},${y2}`;
        return path;
      }
    },
  },
  methods: {
    refreshLink() {},
    deleteLink: function() {
      this.$emit("delete");
    },

    mouseEnter() {
      this.largeStrokeStyle = "stroke:rgba(255,0,0,0.5);";
    },
    mouseLeave() {
      this.largeStrokeStyle = "stroke:rgba(255,0,0,0.0);";
    },
    mouseEnterPoint(/*point*/) {},
    mouseLeavePoint(/*point*/) {},
    mouseDownPoint($event: Event | Point, pointIndex: number) {
      this.$emit("onStartDrag", {
        $event,
        type: "points",
        linkIndex: this.index,
        pointIndex
      });
    },
    mouseDown(/*pos*/) {},
    mouseDownSegment(pos: Point, segmentIndex: number) {
      if(!(this.$parent?.$parent as any).editable) return;

      this.createPoint(pos.x, pos.y, segmentIndex);
      this.mouseDownPoint(pos, segmentIndex);
    },
    createPoint(x: number, y: number, pointIndex: number) {
      this.$emit("onCreatePoint", x, y, this.index, pointIndex);
    }
  },
});
</script>
