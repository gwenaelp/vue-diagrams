<template>
  <g>
    <g
      v-if="points && points.length"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      @mousedown="mouseDown"
    >
      <g
        v-for="(point, index) in points"
        @mousedown="mouseDownSegment($event, index)"
        >
        <line
          :x1="index === 0 ? x1 : points[index - 1].x" :y1="index === 0 ? y1 : points[index - 1].y"
          :x2="point.x" :y2="point.y"
          style="stroke:rgba(0,0,0,.3);"
          stroke-width="4"
          filter="url(#filter_gaus_20)"
        />
        <line
          :x1="index === 0 ? x1 : points[index - 1].x" :y1="index === 0 ? y1 : points[index - 1].y"
          :x2="point.x" :y2="point.y"
          :style="isHighlighted ? hoverStrokeStyle : normalStrokeStyle"
          stroke-width="1"
          filter="url(#filter_gaus_30)"
        />
      </g>
      <g
        @mousedown="mouseDownSegment($event, points.length)"
        >
        <line
          :x1="points[points.length - 1].x" :y1="points[points.length - 1].y"
          :x2="x2" :y2="y2"
          style="stroke:rgba(0,0,0,.3);"
          stroke-width="4"
          filter="url(#filter_gaus_20)"
        />
        <line
          :x1="points[points.length - 1].x" :y1="points[points.length - 1].y"
          :x2="x2" :y2="y2"
          :style="isHighlighted ? hoverStrokeStyle : normalStrokeStyle"
          stroke-width="1"
          filter="url(#filter_gaus_30)"
        />
      </g>
    </g>
    <g
      v-else
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      @mousedown="mouseDown"
    >
      <g
        @mousedown="mouseDownSegment($event, 0)"
      >
        <path
          :d="curve"
          style="stroke:rgba(0,0,0,.3);"
          stroke-width="4"
          fill="none"
          filter="url(#filter_gaus_20)"
        />
        <path
          :d="curve"
          :style="isHighlighted ? hoverStrokeStyle : normalStrokeStyle"
          stroke-width="1"
          filter="url(#filter_gaus_30)"
          fill="none"
        />
      </g>
    </g>
    <DiagramPoint
      v-for="(point, pointIndex) in points"
      @mouseenter="mouseEnterPoint(point)"
      @mouseleave="mouseLeavePoint(point)"
      @mousedown="mouseDownPoint($event, pointIndex)"
      :x="point.x" :y="point.y"
      />
  </g>
</template>
<script>
import DiagramPoint from "./DiagramPoint";

export default {
  name: "DiagramLink",
  props: ["positionFrom", "positionTo", "id", "index", "points"],

  components: {
    DiagramPoint
  },

  data() {
    return {
      largeStrokeStyle: "stroke:rgba(255,0,0,0.0);",
      pointStyleNormal: "stroke:rgba(255,0,0,0.0); stroke-width: 6",
      pointStyleHover: "stroke:rgba(255,0,0,0.5); stroke-width: 6",

      isHighlighted: false,
      normalStrokeStyle: "stroke:rgba(255,255,255,.75);",
      hoverStrokeStyle: "stroke:rgba(255,0,0,.75);"
    };
  },
  methods: {
    mouseEnter() {
      this.largeStrokeStyle = "stroke:rgba(255,0,0,0.5);";
      this.isHighlighted = true;
    },
    mouseLeave() {
      this.largeStrokeStyle = "stroke:rgba(255,0,0,0.0);";
      this.isHighlighted = false;
    },
    mouseDownPoint(pos, pointIndex) {
      console.log("mouseDownPoint", arguments);
      this.$emit("onStartDrag", {
        type: "points",
        linkIndex: this.index,
        pointIndex
      });
    },
    mouseDown(pos) {},
    mouseDownSegment(pos, segmentIndex) {
      this.createPoint(pos.x, pos.y, segmentIndex);
      this.mouseDownPoint(pos, segmentIndex);
    },
    createPoint(x, y, pointIndex) {
      this.$emit("onCreatePoint", x, y, this.index, pointIndex);
    }
  },
  computed: {
    x1() {
      return this.positionFrom.x - 5;
    },

    y1() {
      return this.positionFrom.y - 0;
    },

    x2() {
      return this.positionTo.x - 5;
    },

    y2() {
      return this.positionTo.y - 0;
    },

    curve() {
      var x1 = Math.trunc(this.positionFrom.x - 5),
        y1 = Math.trunc(this.positionFrom.y - 0),
        x2 = Math.trunc(this.positionTo.x - 5),
        y2 = Math.trunc(this.positionTo.y - 0);

      var distance = Math.trunc(4 * Math.sqrt(Math.abs(x1 - x2)));
      var path = `M${x1},${y1} C${x1 + distance},${y1} ${x2 -
        distance},${y2} ${x2},${y2}`;
      return path;
    }
  }
};
</script>
