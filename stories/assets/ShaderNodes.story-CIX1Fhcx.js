import { _ as _export_sfc, D as Diagram } from "./Diagram-CPNCjZ7L.js";
import { aq as resolveComponent, ar as createBlock, as as openBlock, at as withCtx, au as createBaseVNode, ax as createElementBlock, ay as Fragment, az as renderList, aA as toDisplayString, av as withModifiers, aB as createVNode } from "./vendor-CVfEhs-R.js";
const nodes = {
  add: (model, x, y) => {
    const n = model.addNode("add", x, y);
    n.addInPort("A");
    n.addInPort("B");
    n.addOutPort("Out");
  },
  substract: (model, x, y) => {
    const n = model.addNode("substract", x, y);
    n.addInPort("A");
    n.addInPort("B");
    n.addOutPort("Out");
  },
  multiply: (model, x, y) => {
    const n = model.addNode("multiply", x, y);
    n.addInPort("A");
    n.addInPort("B");
    n.addOutPort("Out");
  },
  divide: (model, x, y) => {
    const n = model.addNode("divide", x, y);
    n.addInPort("A");
    n.addInPort("B");
    n.addOutPort("Out");
  },
  step: (model, x, y) => {
    const n = model.addNode("step", x, y);
    n.addInPort("A");
    n.addInPort("B");
    n.addOutPort("Out");
  },
  smoothstep: (model, x, y) => {
    const n = model.addNode("smoothstep", x, y);
    n.addInPort("A");
    n.addInPort("min");
    n.addInPort("max");
    n.addOutPort("Out");
  },
  noiseGenerator: (model, x, y) => {
    const n = model.addNode("noiseGenerator", x, y);
    n.addInPort("UV");
    n.addInPort("Scale");
    n.addOutPort("Out");
  },
  color: (model, x, y) => {
    const n = model.addNode("color", x, y, 120, 160);
    n.addOutPort("RGBA");
    n.addOutPort("R");
    n.addOutPort("G");
    n.addOutPort("B");
    n.addOutPort("A");
    n.portValues = {};
  }
};
let compilationFlags = {};
let compilationHeader = "";
const nodeOperations = {
  color_RGBA: (node, port) => {
    return `  vec4 outport_${port.id} = vec4(1.0,0.0,1.0,1.0);

`;
  },
  multiply: (node, inputA, inputB) => {
    return `vec3 ${node.title}_${node.id}_Out = ${inputA} * ${inputB};`;
  },
  noiseGenerator_Out: (node, port) => {
    if (!compilationFlags.noiseIncluded) {
      compilationFlags.noiseIncluded = true;
      compilationHeader += `
// GLSL textureless classic 2D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-08-22
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec2 fade(vec2 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec2 P, vec2 rep)
{
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod(Pi, rep.xyxy); // To create noise with explicit period
  Pi = mod289(Pi);        // To avoid truncation effects in permutation
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;

  vec4 i = permute(permute(ix) + iy);

  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
  vec4 gy = abs(gx) - 0.5 ;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;

  vec2 g00 = vec2(gx.x,gy.x);
  vec2 g10 = vec2(gx.y,gy.y);
  vec2 g01 = vec2(gx.z,gy.z);
  vec2 g11 = vec2(gx.w,gy.w);

  vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;

  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));

  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}
`;
    }
    return `  float outport_${port.id} = pnoise(vec2(20.,20.),vec2(.6,.7));

`;
  },
  Master_Albedo: (node, port, linkedOutPort) => {
    console.log("OP", "Master_Albedo");
    if (linkedOutPort) {
      return `  gl_FragColor = outport_${linkedOutPort.from};

`;
    }
  }
  // Add other node types here
};
const _sfc_main = {
  components: {
    Diagram
  },
  data() {
    const diagramModel = new Diagram.Model();
    const n = diagramModel.addNode("Master", 300, 300, 130, 210);
    n.addInPort("Albedo");
    n.addInPort("Normal");
    n.addInPort("Emission");
    n.addInPort("Roughness");
    n.addInPort("Metallic");
    n.addInPort("Ambiant occlusion");
    n.addInPort("Opacity");
    n.addInPort("Vertex offset");
    return {
      nodes,
      compiledShader: "",
      model: diagramModel
    };
  },
  methods: {
    onDrag(ev) {
      console.log("onDrag", ev);
      ev.dataTransfer.setData("node", ev.target.dataset.node);
    },
    onDrop(event) {
      const pan = this.$refs.diagram.spz.getPan();
      const zoom = this.$refs.diagram.spz.getZoom();
      const x = pan.x * (1 / zoom) * -1;
      const y = pan.y * (1 / zoom) * -1;
      nodes[event.dataTransfer.getData("node")](this.model, x, y);
    },
    serialize() {
      console.log(this.model.serialize());
    },
    compile() {
      const graph = JSON.parse(this.model.serialize());
      let masterId;
      graph.nodesById = {};
      graph.inPortsById = {};
      graph.outPortsById = {};
      graph.leaves = [];
      for (let n of graph.nodes) {
        if (n.title === "Master") {
          masterId = n.id;
        }
        graph.nodesById[n.id] = n;
        const inPorts = n.ports.filter((p) => p.type === "in");
        const outPorts = n.ports.filter((p) => p.type === "out");
        for (let p of inPorts) {
          graph.inPortsById = p;
        }
        for (let p of outPorts) {
          graph.outPortsById = p;
        }
        if (inPorts.length === 0) {
          graph.leaves.push(n);
        } else {
          const foundLinks = {};
          for (let p of inPorts) {
            const linksForPort = graph.links.filter((l) => l.to === p.id);
            if (linksForPort.length) {
              foundLinks[p.id] = linksForPort;
            }
          }
          console.log("??", n.title, foundLinks, inPorts);
          if (Object.keys(foundLinks).length === 0) {
            graph.leaves.push(n);
          }
        }
      }
      this.compiledShader = "";
      compilationFlags = {};
      compilationHeader = "";
      const computeNode = (graph2, nodeId, compiledShaderMain2) => {
        for (let p of graph2.nodesById[nodeId].ports) {
          const nodeTitle = graph2.nodesById[nodeId].title;
          const linkedOutLink = graph2.links.filter((l) => l.to === p.id)[0];
          if (nodeOperations[`${nodeTitle}_${p.name}`]) {
            compiledShaderMain2 = nodeOperations[`${nodeTitle}_${p.name}`](graph2.nodesById[nodeId], p, linkedOutLink) + compiledShaderMain2;
          } else {
            console.warn("unknown operation", `${nodeTitle}_${p.name}`);
          }
          if (linkedOutLink) {
            const linkedOutNode = graph2.nodes.filter((n) => {
              return n.ports.filter((p2) => p2.id === linkedOutLink.from).length !== 0;
            })[0];
            compiledShaderMain2 = computeNode(graph2, linkedOutNode.id, compiledShaderMain2);
          }
        }
        return compiledShaderMain2;
      };
      const compiledShaderMain = computeNode(graph, masterId, "");
      this.compiledShader = `#ifdef GL_ES
precision mediump float;
#endif
${compilationHeader}

void main() {
${compiledShaderMain}}`;
    }
  }
};
const _hoisted_1 = { class: "nodes" };
const _hoisted_2 = ["data-node"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_diagram = resolveComponent("diagram");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Shader nodes" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($data.nodes, (n, key) => {
            return openBlock(), createElementBlock("div", {
              onDragstart: _cache[0] || (_cache[0] = (...args) => $options.onDrag && $options.onDrag(...args)),
              class: "node",
              "data-node": key,
              draggable: "true"
            }, toDisplayString(key), 41, _hoisted_2);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ]),
      createBaseVNode(
        "div",
        {
          onDrop: _cache[1] || (_cache[1] = (...args) => $options.onDrop && $options.onDrop(...args)),
          onDragover: _cache[2] || (_cache[2] = withModifiers(() => {
          }, ["prevent"])),
          onDragenter: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["prevent"]))
        },
        [
          createVNode(_component_diagram, {
            model: $data.model,
            width: "800",
            height: "600",
            ref: "diagram"
          }, null, 8, ["model"])
        ],
        32
        /* NEED_HYDRATION */
      ),
      createBaseVNode("button", {
        onClick: _cache[4] || (_cache[4] = (...args) => $options.serialize && $options.serialize(...args))
      }, "Serialize"),
      createBaseVNode("button", {
        onClick: _cache[5] || (_cache[5] = (...args) => $options.compile && $options.compile(...args))
      }, "Compile"),
      createBaseVNode(
        "pre",
        null,
        toDisplayString($data.compiledShader),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "stories/shaders/ShaderNodes.story.vue";
const ShaderNodes_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-76583137"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/stories/shaders/ShaderNodes.story.vue"]]);
export {
  ShaderNodes_story as default
};
