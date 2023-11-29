var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { aE as defineComponent, ar as openBlock, aB as createElementBlock, aC as normalizeClass, aF as normalizeStyle, aG as Fragment, aH as renderList, aI as createTextVNode, aA as toDisplayString, aw as createCommentVNode, aJ as withDirectives, aK as vModelText, av as createBaseVNode, aD as renderSlot, as as createBlock, at as withCtx, aL as resolveDynamicComponent, aq as resolveComponent, aM as _sfc_main$a, au as createVNode, aN as createSlots, ay as pushScopeId, az as popScopeId } from "./vendor-KRb7ggD7.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$9 = defineComponent({
  data() {
    return {
      onContextMenu: (event) => {
        event.preventDefault();
      },
      onMouseDown: (event) => {
        const component = this;
        const parentContextMenu = event == null ? void 0 : event.target.closest(".diagram-context-menu");
        const parentDiagramElement = event == null ? void 0 : event.target.closest(".has-menu");
        this.menuX = event.pageX;
        this.menuY = event.pageY;
        if (parentContextMenu) {
          event.stopPropagation();
          this.menuItemClick(event, this.showMenuComponent);
          component.showMenuComponent = void 0;
        } else if (parentDiagramElement && event.button === 2) {
          this.showMenuComponent = parentDiagramElement.vueComponent;
          event.stopPropagation();
        } else {
          component.showMenuComponent = void 0;
        }
      },
      menuX: 0,
      menuY: 0,
      showMenuComponent: void 0
    };
  },
  mounted() {
    this.$parent.$el.addEventListener("mousedown", this.onMouseDown, { capture: true });
    this.$parent.$el.addEventListener("contextmenu", this.onContextMenu);
  },
  beforeUnmount() {
    this.$parent.$el.removeEventListener("mousedown", this.onMouseDown);
    this.$parent.$el.addEventListener("contextmenu", this.onContextMenu);
  },
  methods: {
    menuItemClick(event, component) {
      var _a;
      const dataset = (_a = event == null ? void 0 : event.target) == null ? void 0 : _a.dataset;
      if (dataset == null ? void 0 : dataset.childItemKey) {
        component.menu[dataset.menuItemKey].children[dataset.childItemKey].handler.call(component);
      } else {
        component.menu[dataset.menuItemKey].handler.call(component);
      }
    }
  }
});
const _hoisted_1$8 = ["data-menu-item-key"];
const _hoisted_2$8 = {
  key: 0,
  style: { "float": "right" }
};
const _hoisted_3$6 = {
  key: 1,
  class: "menu-item-children-container"
};
const _hoisted_4$4 = ["data-menu-item-key", "data-child-item-key"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    _ctx.showMenuComponent ? (openBlock(), createElementBlock(
      "div",
      {
        key: 0,
        class: normalizeClass(`menu diagram-context-menu`),
        style: normalizeStyle(`left: ${_ctx.menuX}px; top: ${_ctx.menuY}px`)
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.showMenuComponent.menu, (menuItem, menuItemKey) => {
            return openBlock(), createElementBlock("div", {
              key: menuItemKey,
              class: normalizeClass(`menu-item ${menuItem.classes ? menuItem.classes.join(" ") : ""}`),
              "data-menu-item-key": menuItemKey
            }, [
              createTextVNode(
                toDisplayString(menuItem.label) + " ",
                1
                /* TEXT */
              ),
              menuItem.children ? (openBlock(), createElementBlock("span", _hoisted_2$8, " > ")) : createCommentVNode("v-if", true),
              menuItem.children ? (openBlock(), createElementBlock("div", _hoisted_3$6, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(menuItem.children, (childItem, childItemKey) => {
                    return openBlock(), createElementBlock("div", {
                      key: childItemKey,
                      class: normalizeClass(`menu-item child-menu-item ${childItem.classes ? childItem.classes.join(" ") : ""}`),
                      "data-menu-item-key": menuItemKey,
                      "data-child-item-key": childItemKey
                    }, toDisplayString(childItem.label), 11, _hoisted_4$4);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : createCommentVNode("v-if", true)
            ], 10, _hoisted_1$8);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      4
      /* STYLE */
    )) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main$9.__file = "src/components/Menu.vue";
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-e065371e"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/Menu.vue"]]);
const _sfc_main$8 = defineComponent({
  data() {
    return {
      style: "display: none;",
      object: void 0,
      property: "",
      element: void 0
    };
  },
  computed: {
    value: {
      get() {
        if (this.object) {
          return this.object[this.property];
        } else {
          return void 0;
        }
      },
      set(v) {
        if (this.object) {
          this.object[this.property] = v;
          this.computeStyle();
        }
      }
    }
  },
  watch: {
    element(v, oldV) {
      if (oldV) {
        oldV.classList.remove("opacity-0");
      }
      if (v) {
        v.classList.add("opacity-0");
      }
    }
  },
  methods: {
    computeStyle() {
      if (!this.element) {
        this.style = "display: none;";
      } else {
        this.style = `
          top: ${this.element.getBoundingClientRect().top}px;
          left: ${this.element.getBoundingClientRect().left}px;
          width: ${this.element.getBoundingClientRect().width}px;
          height: ${this.element.getBoundingClientRect().height}px;
        `;
      }
    },
    editText(object, property, element) {
      this.object = object;
      this.property = property;
      this.element = element;
      this.computeStyle();
    }
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock(
    "input",
    {
      type: "text",
      class: "text-input",
      style: normalizeStyle(_ctx.style),
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event)
    },
    null,
    4
    /* STYLE */
  )), [
    [vModelText, _ctx.value]
  ]);
}
_sfc_main$8.__file = "src/components/TextInput.vue";
const TextInput = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-d8d9f755"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/TextInput.vue"]]);
var generateId$2 = function() {
  return Math.trunc(Math.random() * 1e3);
};
const diagramFor = {};
let DiagramNode$1 = class DiagramNode {
  /**
   *  This should not be called directly. Use the "addNode" method from the DiagramModel class
   */
  constructor(diagram, id, title, x, y, width, height, options) {
    __publicField(this, "id");
    __publicField(this, "title");
    __publicField(this, "diagram");
    __publicField(this, "x");
    __publicField(this, "y");
    __publicField(this, "width");
    __publicField(this, "height");
    __publicField(this, "options");
    __publicField(this, "ports");
    diagramFor[id] = diagram;
    this.id = id;
    this.title = title;
    this.diagram = diagram;
    this.x = x;
    this.y = y;
    this.width = width || 72;
    this.height = height || 100;
    this.options = options || {};
    this.ports = [];
  }
  /**
   * Adds a new "in" port into the node.
   * @param {String} name
   * @return {number} The port id
   */
  addInPort(name, options) {
    let newPort = {
      id: generateId$2(),
      type: "in",
      name,
      options
    };
    this.ports.push(newPort);
    return newPort.id;
  }
  /**
   * Adds a new "out" port into the node.
   */
  addOutPort(name, options) {
    let newPort = {
      id: generateId$2(),
      type: "out",
      name,
      options
    };
    this.ports.push(newPort);
    return newPort.id;
  }
  removePortLinks(id) {
    for (let l of diagramFor[id]._model.links) {
      if (l.from === id || l.to === id) {
        this.diagram.deleteLink(l);
      }
    }
  }
  deletePort(id) {
    this.removePortLinks(id);
    this.ports = this.ports.filter((p) => p.id !== id);
  }
};
var generateId$1 = function() {
  return Math.trunc(Math.random() * 1e3);
};
class DiagramModel {
  constructor() {
    __publicField(this, "_model");
    this._model = {
      nodes: [],
      links: []
    };
  }
  /**
   * Adds a node to the diagram
   */
  addNode(title, x, y, width, height, options) {
    if (options === void 0) {
      options = {};
    }
    const newNode = new DiagramNode$1(this, generateId$1(), title, x, y, width, height, options);
    this._model.nodes.push(newNode);
    return newNode;
  }
  deleteNode(node) {
    const index = this._model.nodes.indexOf(node);
    for (let j = 0; j < this._model.links.length; j++) {
      const currentLink = this._model.links[j];
      for (let i = 0; i < node.ports.length; i++) {
        const currentPort = node.ports[i];
        if (currentLink.from === currentPort.id || currentLink.to === currentPort.id) {
          this.deleteLink(currentLink);
          j--;
        }
      }
    }
    this._model.nodes.splice(index, 1);
  }
  deleteLink(link) {
    const index = this._model.links.indexOf(link);
    this._model.links.splice(index, 1);
  }
  /**
   * Adds a link between two ports
   */
  addLink(from, to, points = [], options = {}) {
    this._model.links.push({
      id: generateId$1(),
      from,
      to,
      positionFrom: {},
      positionTo: {},
      points,
      options
    });
  }
  /**
   * Serializes the diagram model into a JSON object
   * @return {Object} The diagram model
   */
  serialize() {
  }
  /**
   * Load into the diagram model a serialized diagram
   * @param  {Object} serializedModel
   */
  deserialize(serializedModel) {
    this._model = JSON.parse(serializedModel);
  }
}
const directions = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
class ResizeHandles {
  constructor(container, width, height, startDragHandler2) {
    __publicField(this, "container");
    __publicField(this, "startDragHandler");
    var _a;
    this.container = container;
    container.innerHTML = `
      <rect class="resize-handle edge" data-direction="nw" x="-2" y="-5" width="5" height="5" />
      <rect class="resize-handle" data-direction="n" x="0" y="-3" height="3" />
      <rect class="resize-handle edge" data-direction="ne" y="-5" width="5" height="5" />
      <rect class="resize-handle" data-direction="e" y="0" width="3" />
      <rect class="resize-handle edge" data-direction="se" width="5" height="5" />
      <rect class="resize-handle" data-direction="s" x="0" height="3" />
      <rect class="resize-handle edge" data-direction="sw" x="-2" width="5" height="5" />
      <rect class="resize-handle" data-direction="w" x="-2" y="0" width="3" />
    `;
    this.startDragHandler = startDragHandler2;
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    for (let d of directions) {
      (_a = container.querySelector(`[data-direction="${d}"]`)) == null ? void 0 : _a.addEventListener("mousedown", this.mouseDownHandler);
    }
    this.updatePosition(width, height);
  }
  /**
   * @param  {number} width
   * @param  {number} height
   */
  updatePosition(width, height) {
    const n = this.container.querySelector('[data-direction="n"]');
    const ne = this.container.querySelector('[data-direction="ne"]');
    const e = this.container.querySelector('[data-direction="e"]');
    const se = this.container.querySelector('[data-direction="se"]');
    const s = this.container.querySelector('[data-direction="s"]');
    const sw = this.container.querySelector('[data-direction="sw"]');
    const w = this.container.querySelector('[data-direction="w"]');
    n == null ? void 0 : n.setAttribute("width", width.toString());
    ne == null ? void 0 : ne.setAttribute("x", width.toString());
    e == null ? void 0 : e.setAttribute("x", width.toString());
    e == null ? void 0 : e.setAttribute("height", height.toString());
    se == null ? void 0 : se.setAttribute("x", width.toString());
    se == null ? void 0 : se.setAttribute("y", height.toString());
    s == null ? void 0 : s.setAttribute("y", height.toString());
    s == null ? void 0 : s.setAttribute("width", width.toString());
    sw == null ? void 0 : sw.setAttribute("y", height.toString());
    w == null ? void 0 : w.setAttribute("height", height.toString());
  }
  unmount() {
    var _a;
    if (this.startDragHandler) {
      for (let d of directions) {
        (_a = this.container.querySelector(`[data-direction="${d}"]`)) == null ? void 0 : _a.removeEventListener("mousedown", this.mouseDownHandler);
      }
    }
    this.container.innerHTML = "";
  }
  mouseDownHandler(event) {
    console.log("mouseDownHandler");
    if (event.target) {
      const target = event.target;
      target == null ? void 0 : target.closest(".resize-handle");
      if (this.startDragHandler) {
        this.startDragHandler(target.dataset.direction);
      }
    }
  }
}
const _sfc_main$7 = {
  props: {
    nodeModel: {
      type: Object
    }
  },
  computed: {
    options() {
      return this.nodeModel.options || {};
    },
    parentDiagram() {
      return this.$parent.$parent.$parent;
    }
  }
};
const _hoisted_1$7 = ["x", "y", "width"];
const _hoisted_2$7 = { class: "prevent-node-drag" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("g", null, [
    createBaseVNode("text", {
      class: normalizeClass($options.options.editableTitle ? "title-editable" : ""),
      x: $props.nodeModel.width / 2,
      y: $props.nodeModel.height / 2,
      width: $props.nodeModel.width,
      ref: "title",
      "text-anchor": "middle",
      "font-size": "14",
      "font-weight": "bold",
      fill: "#000000",
      style: normalizeStyle($options.options.titleStyle || ""),
      onClick: _cache[0] || (_cache[0] = ($event) => $options.options.editableTitle ? $options.parentDiagram.editText($props.nodeModel, "title", _ctx.$refs.title) : void 0)
    }, toDisplayString($props.nodeModel.title), 15, _hoisted_1$7),
    createBaseVNode("g", _hoisted_2$7, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
_sfc_main$7.__file = "src/components/NodeTypes/Text.vue";
const TextNode = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/NodeTypes/Text.vue"]]);
const _sfc_main$6 = defineComponent({
  props: {
    nodeModel: {
      type: Object
    }
  },
  computed: {
    options() {
      return this.nodeModel.options || {};
    },
    parentDiagram() {
      return this.$parent.$parent.$parent;
    }
  }
});
const _hoisted_1$6 = ["href", "width", "height"];
const _hoisted_2$6 = ["x", "y", "width"];
const _hoisted_3$5 = { class: "prevent-node-drag" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("g", null, [
    createBaseVNode("image", {
      href: _ctx.options.image,
      x: "5",
      width: _ctx.nodeModel.width - 10,
      height: _ctx.nodeModel.height
    }, null, 8, _hoisted_1$6),
    createBaseVNode("text", {
      class: normalizeClass(_ctx.options.editableTitle ? "title-editable" : ""),
      x: _ctx.nodeModel.width / 2,
      y: _ctx.nodeModel.height + 14,
      width: _ctx.nodeModel.width,
      ref: "title",
      "text-anchor": "middle",
      "font-size": "14",
      "font-weight": "bold",
      fill: "#000000",
      style: normalizeStyle(_ctx.options.titleStyle || ""),
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.options.editableTitle ? _ctx.parentDiagram.editText(_ctx.nodeModel, "title", _ctx.$refs.title) : void 0)
    }, toDisplayString(_ctx.nodeModel.title), 15, _hoisted_2$6),
    createBaseVNode("g", _hoisted_3$5, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
_sfc_main$6.__file = "src/components/NodeTypes/Image.vue";
const ImageNode = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/NodeTypes/Image.vue"]]);
const _sfc_main$5 = defineComponent({
  props: {
    nodeModel: {
      type: Object
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      titleFillOpacity: 0.25
    };
  },
  computed: {
    options() {
      var _a;
      return ((_a = this.nodeModel) == null ? void 0 : _a.options) || {};
    },
    color() {
      var _a;
      return ((_a = this.nodeModel) == null ? void 0 : _a.color) || "#66cc00";
    },
    parentDiagram() {
      var _a, _b;
      return (_b = (_a = this.$parent) == null ? void 0 : _a.$parent) == null ? void 0 : _b.$parent;
    }
  }
});
const _hoisted_1$5 = ["fill", "width", "height"];
const _hoisted_2$5 = ["fill-opacity", "width"];
const _hoisted_3$4 = ["x"];
const _hoisted_4$3 = ["x1", "x2"];
const _hoisted_5$3 = ["x1", "x2"];
const _hoisted_6$3 = ["width", "height"];
const _hoisted_7$3 = { class: "prevent-node-drag" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c;
  return openBlock(), createElementBlock("g", null, [
    createBaseVNode("rect", {
      fill: _ctx.color,
      x: "0",
      y: "0",
      rx: "3",
      ry: "3",
      width: (_a = _ctx.nodeModel) == null ? void 0 : _a.width,
      height: (_b = _ctx.nodeModel) == null ? void 0 : _b.height,
      class: "node-dark-background"
    }, null, 8, _hoisted_1$5),
    createBaseVNode("rect", {
      fill: "#000000",
      "fill-opacity": _ctx.titleFillOpacity,
      x: "2",
      y: "2",
      rx: "3",
      ry: "3",
      width: ((_c = _ctx.nodeModel) == null ? void 0 : _c.width) - 4,
      height: "16",
      class: "node-dark-background"
    }, null, 8, _hoisted_2$5),
    createBaseVNode(
      "text",
      {
        x: "5",
        y: "15",
        class: normalizeClass(_ctx.options.editableTitle ? "title-editable" : ""),
        "font-size": "14",
        "font-weight": "bold",
        fill: "#000000",
        ref: "title",
        style: normalizeStyle(_ctx.options.titleStyle || ""),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.options.editableTitle ? _ctx.parentDiagram.editText(_ctx.nodeModel, "title", _ctx.$refs.title) : void 0)
      },
      toDisplayString(_ctx.nodeModel.title),
      7
      /* TEXT, CLASS, STYLE */
    ),
    _ctx.nodeModel.deletable ? (openBlock(), createElementBlock("g", {
      key: 0,
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("deleteNode"))
    }, [
      createBaseVNode("rect", {
        x: _ctx.nodeModel.width - 12,
        y: "3",
        width: "14",
        height: "14",
        rx: "2",
        ry: "2",
        fill: "#ffffff",
        "fill-opacity": 0.25
      }, null, 8, _hoisted_3$4),
      createBaseVNode("line", {
        x1: _ctx.nodeModel.width,
        y1: 5,
        x2: _ctx.nodeModel.width - 10,
        y2: 15,
        style: { "stroke": "rgb(0,0,0)" },
        "stroke-width": "2"
      }, null, 8, _hoisted_4$3),
      createBaseVNode("line", {
        x1: _ctx.nodeModel.width - 10,
        y1: 5,
        x2: _ctx.nodeModel.width,
        y2: 15,
        style: { "stroke": "rgb(0,0,0)" },
        "stroke-width": "2"
      }, null, 8, _hoisted_5$3)
    ])) : createCommentVNode("v-if", true),
    createBaseVNode("rect", {
      fill: "#ffffff",
      x: "2",
      y: "20",
      rx: "3",
      ry: "3",
      width: _ctx.nodeModel.width - 4,
      height: _ctx.nodeModel.height - 22,
      class: "node-light-background"
    }, null, 8, _hoisted_6$3),
    createBaseVNode("g", _hoisted_7$3, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
_sfc_main$5.__file = "src/components/NodeTypes/Shader.vue";
const ShaderNode = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/NodeTypes/Shader.vue"]]);
const DiagramElement = {
  mounted() {
    this.$el.vueComponent = this;
  }
};
const _sfc_main$4 = defineComponent({
  name: "DiagramNode",
  props: {
    index: Number,
    id: {
      type: Number,
      required: true
    },
    ports: {
      type: Array,
      default: () => {
        return [];
      }
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    deletable: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default: () => ({})
    },
    selected: Boolean,
    nodeModel: {
      type: Object,
      required: true
    }
  },
  components: {
    "vue-diagrams-node-text": TextNode,
    "vue-diagrams-node-image": ImageNode,
    "vue-diagrams-node-shader": ShaderNode
  },
  mixins: [DiagramElement],
  data() {
    return {
      resizeHandles: void 0,
      titleFillOpacity: 1,
      menu: [{
        label: "Delete node",
        handler() {
        },
        classes: []
      }]
    };
  },
  beforeUnmount() {
    if (this.resizeHandles) {
      this.resizeHandles.unmount();
    }
  },
  watch: {
    "nodeModel.x": "resizeNode",
    "nodeModel.y": "resizeNode",
    "nodeModel.width": "resizeNode",
    "nodeModel.height": "resizeNode",
    "options.resizable": {
      handler(v) {
        this.$nextTick(() => {
          if (v) {
            this.resizeHandles = new ResizeHandles(
              this.$refs.resizeHandles,
              this.nodeModel.width,
              this.nodeModel.height,
              this.startDragResizeHandle
            );
          } else if (this.resizeHandles) {
            this.resizeHandles.unmount();
            this.resizeHandles = void 0;
          }
        });
      },
      immediate: true
    },
    "options.type": {
      handler() {
        this.menu = this.menu.filter((menuItem) => menuItem.from !== "nodeType");
        this.$nextTick(() => {
          const nodeType = this.$refs.nodeType;
          console.log("this.$refs.nodeType.menu?", nodeType ? nodeType.menu : nodeType);
          if (nodeType && nodeType.menu) {
            if (nodeType.menu.length) {
              this.menu.unshift({ classes: ["separator"], from: "nodeType" });
            }
            for (let mi of nodeType.menu) {
              this.menu.unshift({ ...mi, from: "nodeType" });
            }
          }
        });
      },
      immediate: true
    }
  },
  computed: {
    x() {
      return this.nodeModel.x;
    },
    y() {
      return this.nodeModel.y;
    }
  },
  methods: {
    resizeNode() {
      if (this.resizeHandles) {
        this.resizeHandles.updatePosition(this.nodeModel.width, this.nodeModel.height);
      }
    },
    deleteNode() {
      this.$emit("delete");
    },
    mouseDown(event) {
      var _a;
      const diagramComponent = (_a = this == null ? void 0 : this.$parent) == null ? void 0 : _a.$parent;
      if (!diagramComponent.editable)
        return;
      if (!event.target.classList.contains("title-editable") && event.target.closest(".prevent-node-drag") === null) {
        const pos = diagramComponent.convertXYtoViewPort(event.x, event.y);
        this.$emit(
          "onStartDrag",
          { type: "nodes", index: this.index, node: this.nodeModel },
          pos.x - this.nodeModel.x,
          pos.y - this.nodeModel.y
        );
      }
    },
    mouseenter() {
      this.titleFillOpacity = 0.5;
    },
    mouseleave() {
      this.titleFillOpacity = 0.25;
    },
    startDragResizeHandle(direction) {
      var _a;
      if (!((_a = this == null ? void 0 : this.$parent) == null ? void 0 : _a.$parent).editable)
        return;
      this.$emit(
        "onStartDrag",
        { type: "resizeHandle", index: this.index, node: this.nodeModel, direction },
        0 - this.nodeModel.x,
        0 - this.nodeModel.y
      );
    }
  }
});
const _hoisted_1$4 = ["x", "y", "data-node-id"];
const _hoisted_2$4 = ["stroke-width", "width", "height"];
const _hoisted_3$3 = { ref: "resizeHandles" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    x: _ctx.nodeModel.x,
    y: _ctx.nodeModel.y,
    class: normalizeClass(`diagram-node ${_ctx.selected ? "selected" : ""} has-menu`),
    "data-node-id": _ctx.id
  }, [
    createBaseVNode("rect", {
      fill: "#00000000",
      stroke: "#000000",
      "stroke-width": _ctx.selected ? 2 : 0,
      x: "0",
      y: "0",
      rx: "3",
      ry: "3",
      width: _ctx.nodeModel.width,
      height: _ctx.nodeModel.height,
      class: "node-dark-background"
    }, null, 8, _hoisted_2$4),
    createBaseVNode(
      "g",
      _hoisted_3$3,
      null,
      512
      /* NEED_PATCH */
    ),
    createBaseVNode(
      "g",
      {
        onMousedown: _cache[0] || (_cache[0] = (...args) => _ctx.mouseDown && _ctx.mouseDown(...args)),
        onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.mouseenter && _ctx.mouseenter(...args)),
        onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.mouseleave && _ctx.mouseleave(...args))
      },
      [
        (openBlock(), createBlock(resolveDynamicComponent(`vue-diagrams-node-${_ctx.options.type || "shader"}`), {
          ref: "nodeType",
          nodeModel: _ctx.nodeModel,
          selected: _ctx.selected,
          onDeleteNode: _ctx.deleteNode
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          _: 3
          /* FORWARDED */
        }, 40, ["nodeModel", "selected", "onDeleteNode"]))
      ],
      32
      /* HYDRATE_EVENTS */
    )
  ], 10, _hoisted_1$4);
}
_sfc_main$4.__file = "src/components/DiagramNode.vue";
const DiagramNode2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-1c98675c"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/DiagramNode.vue"]]);
const _sfc_main$3 = defineComponent({
  name: "DiagramPoint",
  props: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    }
  },
  mixins: [DiagramElement],
  data() {
    return {
      hover: false,
      menu: [{
        label: "Delete point",
        handler: () => {
          this.$emit("delete");
        }
      }]
    };
  },
  methods: {
    mouseEnter() {
      this.hover = true;
    },
    mouseLeave() {
      this.hover = false;
    }
  }
});
const _hoisted_1$3 = { class: "has-menu" };
const _hoisted_2$3 = ["cx", "cy"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("g", _hoisted_1$3, [
    createBaseVNode("circle", {
      style: normalizeStyle(_ctx.hover ? "stroke:rgba(255,0,0,0.5);" : "stroke:rgba(255,0,0,0.0);"),
      "stroke-width": "6",
      onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.mouseEnter && _ctx.mouseEnter(...args)),
      onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.mouseLeave && _ctx.mouseLeave(...args)),
      onMousedown: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("mousedown", $event)),
      cx: _ctx.x,
      cy: _ctx.y,
      r: "5",
      fill: "black"
    }, null, 44, _hoisted_2$3)
  ]);
}
_sfc_main$3.__file = "src/components/DiagramPoint.vue";
const DiagramPoint = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/DiagramPoint.vue"]]);
const _sfc_main$2 = defineComponent({
  name: "DiagramLink",
  props: ["positionFrom", "positionTo", "id", "index", "points", "options"],
  components: {
    DiagramPoint
  },
  data() {
    return {
      largeStrokeStyle: "stroke:rgba(255,0,0,0.0);",
      pointStyleNormal: "stroke:rgba(255,0,0,0.0); stroke-width: 6",
      pointStyleHover: "stroke:rgba(255,0,0,0.5); stroke-width: 6",
      beginCurvePath: void 0,
      endCurvePath: void 0,
      menu: [{
        label: "Delete link",
        handler() {
        }
      }]
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
      if (this.positionFrom.x && this.positionFrom.y && this.positionTo.x && this.positionTo.y) {
        var x1 = Math.trunc(this.positionFrom.x), y1 = Math.trunc(this.positionFrom.y - 4), x2 = Math.trunc(this.positionTo.x - 4), y2 = Math.trunc(this.positionTo.y - 4);
        const distance = Math.trunc(4 * Math.sqrt(Math.abs(x1 - x2)));
        const path = `M${x1},${y1} C${x1 + distance},${y1} ${x2 - distance},${y2} ${x2},${y2}`;
        return path;
      }
    }
  },
  methods: {
    refreshLink() {
    },
    deleteLink: function() {
      this.$emit("delete");
    },
    mouseEnter() {
      this.largeStrokeStyle = "stroke:rgba(255,0,0,0.5);";
    },
    mouseLeave() {
      this.largeStrokeStyle = "stroke:rgba(255,0,0,0.0);";
    },
    mouseEnterPoint() {
    },
    mouseLeavePoint() {
    },
    mouseDownPoint($event, pointIndex) {
      this.$emit("onStartDrag", {
        $event,
        type: "points",
        linkIndex: this.index,
        pointIndex
      });
    },
    mouseDown() {
    },
    mouseDownSegment(pos, segmentIndex) {
      var _a;
      if (!((_a = this.$parent) == null ? void 0 : _a.$parent).editable)
        return;
      this.createPoint(pos.x, pos.y, segmentIndex);
      this.mouseDownPoint(pos, segmentIndex);
    },
    createPoint(x, y, pointIndex) {
      this.$emit("onCreatePoint", x, y, this.index, pointIndex);
    }
  }
});
const _hoisted_1$2 = { class: "diagram-link has-menu" };
const _hoisted_2$2 = ["onMousedown"];
const _hoisted_3$2 = ["x1", "y1", "x2", "y2"];
const _hoisted_4$2 = ["x1", "y1", "x2", "y2"];
const _hoisted_5$2 = ["x1", "y1", "x2", "y2"];
const _hoisted_6$2 = ["x1", "y1", "x2", "y2"];
const _hoisted_7$2 = ["d"];
const _hoisted_8$1 = ["d"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DiagramPoint = resolveComponent("DiagramPoint");
  return openBlock(), createElementBlock("g", _hoisted_1$2, [
    _ctx.points && _ctx.points.length ? (openBlock(), createElementBlock(
      "g",
      {
        key: 0,
        onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.mouseEnter && _ctx.mouseEnter(...args)),
        onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.mouseLeave && _ctx.mouseLeave(...args)),
        onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.mouseDown && _ctx.mouseDown(...args))
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.points, (point, index) => {
            return openBlock(), createElementBlock("g", {
              key: index,
              onMousedown: ($event) => _ctx.mouseDownSegment($event, index)
            }, [
              createBaseVNode("line", {
                x1: index === 0 ? _ctx.x1 : _ctx.points[index - 1].x,
                y1: index === 0 ? _ctx.y1 : _ctx.points[index - 1].y,
                x2: point.x,
                y2: point.y,
                style: normalizeStyle(_ctx.largeStrokeStyle),
                "stroke-width": "8"
              }, null, 12, _hoisted_3$2),
              createBaseVNode("line", {
                x1: index === 0 ? _ctx.x1 : _ctx.points[index - 1].x,
                y1: index === 0 ? _ctx.y1 : _ctx.points[index - 1].y,
                x2: point.x,
                y2: point.y,
                style: { "stroke": "rgb(0,0,0)" },
                "stroke-width": "2"
              }, null, 8, _hoisted_4$2)
            ], 40, _hoisted_2$2);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        createBaseVNode(
          "g",
          {
            onMousedown: _cache[0] || (_cache[0] = ($event) => _ctx.mouseDownSegment($event, _ctx.points.length))
          },
          [
            createBaseVNode("line", {
              x1: _ctx.points[_ctx.points.length - 1].x,
              y1: _ctx.points[_ctx.points.length - 1].y,
              x2: _ctx.x2,
              y2: _ctx.y2,
              style: normalizeStyle(_ctx.largeStrokeStyle),
              "stroke-width": "8"
            }, null, 12, _hoisted_5$2),
            createBaseVNode("line", {
              x1: _ctx.points[_ctx.points.length - 1].x,
              y1: _ctx.points[_ctx.points.length - 1].y,
              x2: _ctx.x2,
              y2: _ctx.y2,
              style: { "stroke": "rgb(0,0,0)" },
              "stroke-width": "2"
            }, null, 8, _hoisted_6$2)
          ],
          32
          /* HYDRATE_EVENTS */
        )
      ],
      32
      /* HYDRATE_EVENTS */
    )) : (openBlock(), createElementBlock(
      "g",
      {
        key: 1,
        onMouseenter: _cache[5] || (_cache[5] = (...args) => _ctx.mouseEnter && _ctx.mouseEnter(...args)),
        onMouseleave: _cache[6] || (_cache[6] = (...args) => _ctx.mouseLeave && _ctx.mouseLeave(...args)),
        onMousedown: _cache[7] || (_cache[7] = (...args) => _ctx.mouseDown && _ctx.mouseDown(...args))
      },
      [
        createBaseVNode(
          "g",
          {
            onMousedown: _cache[4] || (_cache[4] = ($event) => _ctx.mouseDownSegment($event, 0))
          },
          [
            createBaseVNode("path", {
              d: _ctx.curve,
              style: normalizeStyle(_ctx.largeStrokeStyle),
              "stroke-width": "8",
              fill: "none"
            }, null, 12, _hoisted_7$2),
            createBaseVNode("path", {
              d: _ctx.curve,
              ref: "curvePath",
              style: { "stroke": "rgb(0,0,0)" },
              "stroke-width": "2",
              fill: "none"
            }, null, 8, _hoisted_8$1)
          ],
          32
          /* HYDRATE_EVENTS */
        )
      ],
      32
      /* HYDRATE_EVENTS */
    )),
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(_ctx.points, (point, pointIndex) => {
        return openBlock(), createBlock(_component_DiagramPoint, {
          key: pointIndex,
          onMouseenter: _cache[8] || (_cache[8] = ($event) => _ctx.mouseEnterPoint(
            /*point*/
          )),
          onMouseleave: _cache[9] || (_cache[9] = ($event) => _ctx.mouseLeavePoint(
            /*point*/
          )),
          onMousedown: ($event) => _ctx.mouseDownPoint($event, pointIndex),
          x: point.x,
          y: point.y,
          onDelete: ($event) => _ctx.points.splice(pointIndex, 1)
        }, null, 8, ["onMousedown", "x", "y", "onDelete"]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}
_sfc_main$2.__file = "src/components/DiagramLink.vue";
const DiagramLink = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/DiagramLink.vue"]]);
const _sfc_main$1 = defineComponent({
  name: "DiagramPort",
  props: ["id", "x", "y", "node", "nodeIndex", "port"],
  data() {
    return {
      fill: "#666666",
      menu: [{
        label: "Delete port",
        handler: () => {
          var _a;
          const parentComponent = this.$parent;
          parentComponent.nodeModel.deletePort(this.id);
          (_a = parentComponent.$parent) == null ? void 0 : _a.$parent.updateLinksPositions();
        }
      }, {
        label: "Remove port links",
        handler: () => {
          const parentComponent = this.$parent;
          parentComponent.nodeModel.removePortLinks(this.id);
        }
      }]
    };
  },
  mixins: [DiagramElement],
  computed: {
    width() {
      return this.node.width || 72;
    },
    displayedY() {
      if (this.port.options && this.port.options.y) {
        return this.port.options.y;
      } else {
        return this.y + 40;
      }
    },
    displayedX() {
      if (this.port.options && this.port.options.x) {
        return this.port.options.x;
      }
      if (this.port.type === "out") {
        return this.width - 5;
      } else {
        return -5;
      }
    }
  },
  methods: {
    mouseup() {
      this.$emit("mouseUpPort", this.id);
    },
    enter() {
      this.fill = "#999999";
    },
    leave() {
      console.log("leave", this.id);
      this.fill = "#666666";
    },
    startDragNewLink() {
      this.$emit("onStartDragNewLink", this.id);
    }
  }
});
const _hoisted_1$1 = { class: "diagram-port has-menu" };
const _hoisted_2$1 = ["y"];
const _hoisted_3$1 = ["fill", "x"];
const _hoisted_4$1 = {
  x: "12",
  y: "9",
  "font-size": "8pt",
  fill: "#000000"
};
const _hoisted_5$1 = ["y"];
const _hoisted_6$1 = ["fill", "x"];
const _hoisted_7$1 = ["x"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("g", _hoisted_1$1, [
    _ctx.port.type === "in" ? (openBlock(), createElementBlock("svg", {
      key: 0,
      y: _ctx.displayedY,
      style: { "overflow": "visible" }
    }, [
      createBaseVNode("rect", {
        fill: _ctx.fill,
        ref: "handle",
        x: _ctx.displayedX,
        y: "0",
        rx: "3",
        ry: "3",
        width: "10",
        height: "10",
        onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.enter && _ctx.enter(...args)),
        onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.leave && _ctx.leave(...args)),
        onMousedown: _cache[2] || (_cache[2] = (...args) => _ctx.startDragNewLink && _ctx.startDragNewLink(...args)),
        onMouseup: _cache[3] || (_cache[3] = (...args) => _ctx.mouseup && _ctx.mouseup(...args))
      }, null, 40, _hoisted_3$1),
      createBaseVNode(
        "text",
        _hoisted_4$1,
        toDisplayString(_ctx.port.name),
        1
        /* TEXT */
      )
    ], 8, _hoisted_2$1)) : (openBlock(), createElementBlock("svg", {
      key: 1,
      y: _ctx.displayedY
    }, [
      createBaseVNode("rect", {
        fill: _ctx.fill,
        ref: "handle",
        x: _ctx.displayedX,
        y: "0",
        rx: "3",
        ry: "3",
        width: "10",
        height: "10",
        onMouseenter: _cache[4] || (_cache[4] = (...args) => _ctx.enter && _ctx.enter(...args)),
        onMouseleave: _cache[5] || (_cache[5] = (...args) => _ctx.leave && _ctx.leave(...args)),
        onMousedown: _cache[6] || (_cache[6] = (...args) => _ctx.startDragNewLink && _ctx.startDragNewLink(...args)),
        onMouseup: _cache[7] || (_cache[7] = (...args) => _ctx.mouseup && _ctx.mouseup(...args))
      }, null, 40, _hoisted_6$1),
      createBaseVNode("text", {
        x: _ctx.width - 6,
        y: "9",
        "text-anchor": "end",
        "font-size": "8pt",
        fill: "#000000"
      }, toDisplayString(_ctx.port.name), 9, _hoisted_7$1)
    ], 8, _hoisted_5$1))
  ]);
}
_sfc_main$1.__file = "src/components/DiagramPort.vue";
const DiagramPort = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/DiagramPort.vue"]]);
const generateId = () => {
  return Math.trunc(Math.random() * 1e3);
};
const getAbsoluteXY = (element) => {
  var box = element.getBoundingClientRect();
  var x = box.left;
  var y = box.top;
  return { x, y };
};
const snapToGrip = (val, gridSize) => {
  return gridSize * Math.round(val / gridSize);
};
const _sfc_main = defineComponent({
  name: "Diagram",
  Model: DiagramModel,
  props: {
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
      default: false
    },
    showThumbnail: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    controlIconsEnabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    this.updateLinksPositions();
    return {
      mode: "move",
      document,
      zoomEnabled: true,
      panEnabled: true,
      draggedItem: void 0,
      mainSelectedItem: {
        index: void 0,
        type: void 0
      },
      secondarySelectedNodes: [],
      initialDragX: 0,
      initialDragY: 0,
      mouseButtonIsPressed: false,
      mouseDownViewportPos: {
        x: void 0,
        y: void 0
      },
      viewportMousePos: {
        x: void 0,
        y: void 0
      },
      newLink: void 0,
      mouseX: 0,
      mouseY: 0,
      viewPosition: void 0,
      magnetismAnchors: [],
      spz: void 0
    };
  },
  components: {
    Menu,
    TextInput,
    DiagramNode: DiagramNode2,
    DiagramLink,
    DiagramPort,
    SvgPanZoom: _sfc_main$a
  },
  computed: {
    querySelector() {
      return document.querySelector("#viewport");
    }
  },
  watch: {
    mode: {
      handler(v) {
        this.$nextTick(() => {
          var _a, _b, _c;
          if (v === "move") {
            if (this.panEnabled) {
              (_a = this.spz) == null ? void 0 : _a.enablePan();
            } else {
              (_b = this.spz) == null ? void 0 : _b.disablePan();
            }
          } else {
            (_c = this.spz) == null ? void 0 : _c.disablePan();
          }
        });
      },
      immediate: true
    },
    "model._model": {
      handler() {
        this.$emit("model-updated", this.model._model);
      },
      deep: true
    },
    "model._model.links"() {
      this.updateLinksPositions();
    }
  },
  methods: {
    spzCreated(spz) {
      this.spz = spz;
      spz.setBeforePan((...args) => {
        return this.beforePan.apply(this, args);
      });
    },
    editText(object, property, element) {
      if (!this.editable)
        return;
      this.$refs.textInput.editText(object, property, element);
    },
    min(a, b) {
      if (a === void 0) {
        return b;
      } else if (b === void 0) {
        return a;
      } else {
        return Math.min(a, b);
      }
    },
    max(a, b) {
      if (a === void 0) {
        return b;
      }
      if (b === void 0) {
        return a;
      }
      return Math.max(a, b);
    },
    convertXYtoViewPort(x, y) {
      let rootelt = document.getElementById("svgroot2");
      let rec = document.getElementById("viewport");
      let point = rootelt.createSVGPoint();
      let rooteltPosition = getAbsoluteXY(this.$el);
      point.x = x - rooteltPosition.x;
      point.y = y - rooteltPosition.y;
      let ctm = rec.getCTM().inverse();
      return point.matrixTransform(ctm);
    },
    beforePan() {
      if (this.mainSelectedItem.type || this.draggedItem || this.newLink) {
        return false;
      } else
        return true;
    },
    createPoint(x, y, linkIndex, pointIndex) {
      let coords = this.convertXYtoViewPort(x, y);
      let links = this.model._model.links;
      if (links[linkIndex].points === void 0)
        links[linkIndex].points = [];
      var points = links[linkIndex].points;
      points.splice(pointIndex, 0, coords);
      links[linkIndex].points = points;
    },
    clearSelection() {
      this.mainSelectedItem = {};
    },
    updateLinksPositions() {
      var links = [];
      if (this.model && this.model._model)
        links = this.model._model.links;
      this.$nextTick(() => {
        setTimeout(() => {
          for (var i = 0; i < links.length; i++) {
            let coords;
            coords = this.getPortHandlePosition(links[i].from);
            links[i].positionFrom = { x: coords == null ? void 0 : coords.x, y: coords == null ? void 0 : coords.y };
            coords = this.getPortHandlePosition(links[i].to);
            links[i].positionTo = { x: coords == null ? void 0 : coords.x, y: coords == null ? void 0 : coords.y };
            if (this.$refs["link-" + links[i].id]) {
              let linkComponent = this.$refs["link-" + links[i].id];
              if (Array.isArray(linkComponent)) {
                linkComponent = linkComponent[0];
              }
              if (linkComponent && linkComponent.refreshLink) {
                linkComponent.refreshLink();
              }
            }
          }
        }, 100);
      });
    },
    startDragNewLink(startPortId) {
      if (!this.editable)
        return;
      this.panEnabled = false;
      this.newLink = { startPortId };
    },
    getPortHandlePosition(portId) {
      if (this.$refs["port-" + portId] && this.$refs["port-" + portId][0]) {
        const portComponent = this.$refs["port-" + portId][0];
        const node = this.$refs["node-" + portComponent.nodeIndex][0];
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
        return void 0;
      }
    },
    mouseMove(pos) {
      if (!this.editable)
        return;
      const links = this.model._model.links;
      this.$el.getBoundingClientRect();
      this.mouseX = pos.clientX;
      this.mouseY = pos.clientY;
      this.viewportMousePos = this.convertXYtoViewPort(pos.x, pos.y);
      if (this.mode === "move") {
        if (this.draggedItem) {
          const index = this.draggedItem.index;
          const type = this.draggedItem.type;
          let coords = this.convertXYtoViewPort(this.mouseX, this.mouseY);
          coords.x = snapToGrip(coords.x, this.gridSnap) - this.gridSnap / 2;
          coords.y = snapToGrip(coords.y, this.gridSnap);
          for (let a of this.magnetismAnchors) {
            a.show = false;
            if (a.x && Math.abs(a.x - (coords.x - this.initialDragX)) < 10) {
              coords.x = a.x + this.initialDragX;
              a.show = true;
            }
            if (a.y && Math.abs(a.y - (coords.y - this.initialDragY)) < 10) {
              coords.y = a.y + this.initialDragY;
              a.show = true;
            }
            if (this.draggedItem.node) {
              if (a.x && Math.abs(a.x - (coords.x - this.initialDragX + this.draggedItem.node.width)) < 10) {
                coords.x = a.x + this.initialDragX - this.draggedItem.node.width;
                a.show = true;
              }
              if (a.y && Math.abs(a.y - (coords.y - this.initialDragY + this.draggedItem.node.height)) < 10) {
                coords.y = a.y + this.initialDragY - this.draggedItem.node.height;
                a.show = true;
              }
            }
          }
          if (type === "points") {
            const linkIndex = this.draggedItem.linkIndex;
            const pointIndex = this.draggedItem.pointIndex;
            links[linkIndex].points[pointIndex].x = coords.x;
            links[linkIndex].points[pointIndex].y = coords.y;
            this.updateLinksPositions();
          }
          if (type === "resizeHandle") {
            if (this.draggedItem.direction.indexOf("e") !== -1) {
              this.model._model.nodes[index].width = coords.x - this.model._model.nodes[index].x;
              this.updateLinksPositions();
            }
            if (this.draggedItem.direction.indexOf("s") !== -1) {
              this.model._model.nodes[index].height = coords.y - this.model._model.nodes[index].y;
              this.updateLinksPositions();
            }
            if (this.draggedItem.direction.indexOf("n") !== -1) {
              const bottom = this.model._model.nodes[index].y + this.model._model.nodes[index].height;
              this.model._model.nodes[index].y = coords.y;
              this.model._model.nodes[index].height = bottom - coords.y;
              this.updateLinksPositions();
            }
            if (this.draggedItem.direction.indexOf("w") !== -1) {
              const right = this.model._model.nodes[index].x + this.model._model.nodes[index].width;
              this.model._model.nodes[index].x = coords.x;
              this.model._model.nodes[index].width = right - coords.x;
              this.updateLinksPositions();
            }
          } else {
            if (this.model._model[type] && this.model._model[type][index]) {
              const initialItemX = this.model._model[type][index].x;
              const initialItemY = this.model._model[type][index].y;
              this.model._model[type][index].x = coords.x - this.initialDragX;
              this.model._model[type][index].y = coords.y - this.initialDragY;
              const moveDeltaX = this.model._model[type][index].x - initialItemX;
              const moveDeltaY = this.model._model[type][index].y - initialItemY;
              for (let n of this.secondarySelectedNodes) {
                if (!(type === "nodes" && n === this.model._model[type][index])) {
                  n.x += moveDeltaX;
                  n.y += moveDeltaY;
                }
              }
            }
            this.updateLinksPositions();
          }
        }
      }
    },
    mouseDown(event) {
      if (!this.editable)
        return;
      this.mouseButtonIsPressed = true;
      if (!event.target.classList.contains("title-editable")) {
        let textInput = this.$refs.textInput;
        textInput.editText();
      }
    },
    mouseUp() {
      if (!this.editable)
        return;
      this.mouseButtonIsPressed = false;
      if (this.mode === "move") {
        if (this.secondarySelectedNodes && this.secondarySelectedNodes.length) {
          if (!this.draggedItem || this.draggedItem.type !== "nodes" || this.secondarySelectedNodes.filter((n) => n === this.model._model.nodes[this.draggedItem.index]).length === 0) {
            this.secondarySelectedNodes = [];
          }
        }
      }
      this.draggedItem = void 0;
      this.newLink = void 0;
      if (this.mode === "select") {
        this.secondarySelectedNodes = [];
        for (let n of this.model._model.nodes) {
          const x1 = Math.min(this.viewportMousePos.x, this.mouseDownViewportPos.x);
          const y1 = Math.min(this.viewportMousePos.y, this.mouseDownViewportPos.y);
          const x2 = Math.max(this.viewportMousePos.x, this.mouseDownViewportPos.x);
          const y2 = Math.max(this.viewportMousePos.y, this.mouseDownViewportPos.y);
          if (n.x < x2 && n.y < y2 && n.x + n.width > x1 && n.y + n.height > y1) {
            this.secondarySelectedNodes.push(n);
          }
          this.mode = "move";
        }
      }
    },
    mouseUpPort(portId) {
      if (!this.editable)
        return;
      var links = this.model._model.links;
      if (this.draggedItem && this.draggedItem.type === "points") {
        const pointIndex = this.draggedItem.pointIndex;
        const linkIndex = this.draggedItem.linkIndex;
        if (this.$refs["port-" + portId][0].type === "in") {
          const l = links[linkIndex].points.length;
          links[linkIndex].points.splice(pointIndex, l - this.draggedItem.pointIndex);
        } else {
          links[linkIndex].points.splice(0, pointIndex + 1);
        }
        this.updateLinksPositions();
      }
      if (this.newLink !== void 0) {
        const port1Id = this.newLink.startPortId;
        const port2Id = portId;
        const port1 = this.$refs["port-" + port1Id][0];
        const port2 = this.$refs["port-" + port2Id][0];
        if (port1.type === "in" && port2.type === "out") {
          links.push({
            id: generateId(),
            from: port2.id,
            to: port1.id,
            positionFrom: {},
            positionTo: {},
            points: []
          });
        } else if (port2.port.type === "in" && port1.port.type === "out") {
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
      this.mainSelectedItem = item;
      this.initialDragX = x;
      this.initialDragY = y;
      this.listMagnetismAnchors();
    },
    listMagnetismAnchors() {
      const anchors = [];
      for (let n of this.model._model.nodes) {
        if (n.id !== this.draggedItem.node.id) {
          anchors.push({ x: n.x || 0, node: n });
          anchors.push({ y: n.y || 0, node: n });
          anchors.push({ x: n.x + n.width || 0, node: n });
          anchors.push({ y: n.y + n.height || 0, node: n });
        }
      }
      this.magnetismAnchors = anchors;
    }
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-2c52bd4f"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "vue-diagrams" };
const _hoisted_2 = ["viewBox", "width", "height"];
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "defs",
  null,
  [
    /* @__PURE__ */ createBaseVNode("pattern", {
      id: "smallGrid",
      width: "16",
      height: "16",
      patternUnits: "userSpaceOnUse"
    }, [
      /* @__PURE__ */ createBaseVNode("path", {
        d: "M 16 0 L 0 0 0 16",
        fill: "none",
        stroke: "#ccc",
        "stroke-width": "1"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("pattern", {
      id: "grid",
      width: "80",
      height: "80",
      patternUnits: "userSpaceOnUse"
    }, [
      /* @__PURE__ */ createBaseVNode("rect", {
        width: "80",
        height: "80",
        fill: "url(#smallGrid)"
      }),
      /* @__PURE__ */ createBaseVNode("path", {
        d: "M 80 0 L 0 0 0 80",
        fill: "none",
        stroke: "gray",
        "stroke-width": "1"
      })
    ])
  ],
  -1
  /* HOISTED */
));
const _hoisted_4 = {
  ref: "viewPort",
  id: "viewport",
  x: "50",
  y: "50"
};
const _hoisted_5 = ["x1", "y1", "x2", "y2"];
const _hoisted_6 = ["x", "y", "width", "height"];
const _hoisted_7 = { class: "thumbViewClass" };
const _hoisted_8 = ["x", "y", "width", "height", "fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Menu = resolveComponent("Menu");
  const _component_TextInput = resolveComponent("TextInput");
  const _component_DiagramLink = resolveComponent("DiagramLink");
  const _component_DiagramPort = resolveComponent("DiagramPort");
  const _component_DiagramNode = resolveComponent("DiagramNode");
  const _component_SvgPanZoom = resolveComponent("SvgPanZoom");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _ctx.showMenu ? (openBlock(), createBlock(
      _component_Menu,
      {
        key: 0,
        ref: "menu"
      },
      null,
      512
      /* NEED_PATCH */
    )) : createCommentVNode("v-if", true),
    createVNode(
      _component_TextInput,
      { ref: "textInput" },
      null,
      512
      /* NEED_PATCH */
    ),
    createVNode(_component_SvgPanZoom, {
      ref: "svgpanzoom",
      style: normalizeStyle({ width: _ctx.width + "px", height: _ctx.height + "px", border: "1px solid black" }),
      zoomEnabled: _ctx.zoomEnabled,
      id: "svgroot",
      panEnabled: _ctx.panEnabled,
      controlIconsEnabled: true,
      fit: false,
      center: true,
      viewportSelector: "#svgroot2",
      preventMouseEventsDefault: false,
      beforePan: _ctx.beforePan,
      onCreated: _ctx.spzCreated
    }, createSlots({
      default: withCtx(() => {
        var _a, _b;
        return [
          (openBlock(), createElementBlock("svg", {
            id: "svgroot2",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 " + _ctx.width + " " + _ctx.height,
            width: _ctx.width,
            height: _ctx.height,
            preserveAspectRatio: "xMinYMin meet",
            class: "svg-content",
            ref: "dragramRoot",
            onMousemove: _cache[1] || (_cache[1] = (...args) => _ctx.mouseMove && _ctx.mouseMove(...args)),
            onMouseup: _cache[2] || (_cache[2] = (...args) => _ctx.mouseUp && _ctx.mouseUp(...args)),
            onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.mouseDown && _ctx.mouseDown(...args))
          }, [
            _hoisted_3,
            createBaseVNode(
              "rect",
              {
                ref: "grid",
                class: "svg-pan-zoom_viewport",
                x: "-5000px",
                y: "-5000px",
                width: "10000px",
                height: "10000px",
                fill: "url(#grid)",
                onMousedown: _cache[0] || (_cache[0] = (...args) => _ctx.clearSelection && _ctx.clearSelection(...args))
              },
              null,
              544
              /* HYDRATE_EVENTS, NEED_PATCH */
            ),
            createBaseVNode(
              "g",
              _hoisted_4,
              [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(_ctx.model._model.links, (link, index) => {
                    return openBlock(), createBlock(_component_DiagramLink, {
                      ref_for: true,
                      ref: "link-" + link.id,
                      positionFrom: link.positionFrom,
                      positionTo: link.positionTo,
                      points: link.points,
                      id: link.id,
                      key: link.id,
                      index,
                      options: link.options,
                      onOnStartDrag: _ctx.startDragPoint,
                      onOnCreatePoint: _ctx.createPoint,
                      onDelete: ($event) => _ctx.model.deleteLink(link)
                    }, null, 8, ["positionFrom", "positionTo", "points", "id", "index", "options", "onOnStartDrag", "onOnCreatePoint", "onDelete"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                _ctx.newLink ? (openBlock(), createElementBlock("line", {
                  key: 0,
                  x1: (_a = _ctx.getPortHandlePosition(_ctx.newLink.startPortId)) == null ? void 0 : _a.x,
                  y1: (_b = _ctx.getPortHandlePosition(_ctx.newLink.startPortId)) == null ? void 0 : _b.y,
                  x2: _ctx.convertXYtoViewPort(_ctx.mouseX, 0).x,
                  y2: _ctx.convertXYtoViewPort(0, _ctx.mouseY).y,
                  style: { "stroke": "rgb(255,0,0)", "stroke-width": "2" }
                }, null, 8, _hoisted_5)) : createCommentVNode("v-if", true),
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(_ctx.model._model.nodes, (node, nodeIndex) => {
                    return openBlock(), createBlock(_component_DiagramNode, {
                      ref_for: true,
                      ref: "node-" + nodeIndex,
                      title: node.title,
                      nodeModel: node,
                      x: node.x,
                      y: node.y,
                      id: node.id,
                      key: node.id,
                      width: node.width,
                      height: node.height,
                      ports: node.ports,
                      selected: _ctx.mainSelectedItem.type === "nodes" && _ctx.mainSelectedItem.index === nodeIndex || _ctx.secondarySelectedNodes.indexOf(node) !== -1,
                      options: node.options,
                      index: nodeIndex,
                      onOnStartDrag: _ctx.startDragItem,
                      onDelete: ($event) => _ctx.model.deleteNode(node)
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(
                          Fragment,
                          null,
                          renderList(node.ports, (port, portIndex) => {
                            return openBlock(), createBlock(_component_DiagramPort, {
                              key: portIndex,
                              ref_for: true,
                              ref: "port-" + port.id,
                              id: port.id,
                              nodeIndex,
                              y: portIndex * 20,
                              node,
                              port,
                              onOnStartDragNewLink: _ctx.startDragNewLink,
                              onMouseUpPort: _ctx.mouseUpPort
                            }, null, 8, ["id", "nodeIndex", "y", "node", "port", "onOnStartDragNewLink", "onMouseUpPort"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["title", "nodeModel", "x", "y", "id", "width", "height", "ports", "selected", "options", "index", "onOnStartDrag", "onDelete"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                _ctx.mode === "select" && _ctx.mouseButtonIsPressed ? (openBlock(), createElementBlock("rect", {
                  key: 1,
                  x: _ctx.min(_ctx.viewportMousePos.x, _ctx.mouseDownViewportPos.x),
                  y: _ctx.min(_ctx.viewportMousePos.y, _ctx.mouseDownViewportPos.y),
                  width: (_ctx.max(_ctx.viewportMousePos.x, _ctx.mouseDownViewportPos.x) || 0) - (_ctx.min(_ctx.viewportMousePos.x, _ctx.mouseDownViewportPos.x) || 0),
                  height: (_ctx.max(_ctx.viewportMousePos.y, _ctx.mouseDownViewportPos.y) || 0) - (_ctx.min(_ctx.viewportMousePos.y, _ctx.mouseDownViewportPos.y) || 0),
                  fill: "#000000",
                  "fill-opacity": 0.5
                }, null, 8, _hoisted_6)) : createCommentVNode("v-if", true)
              ],
              512
              /* NEED_PATCH */
            )
          ], 40, _hoisted_2))
        ];
      }),
      _: 2
      /* DYNAMIC */
    }, [
      _ctx.showThumbnail ? {
        name: "thumbnail",
        fn: withCtx(() => [
          (openBlock(), createElementBlock("svg", _hoisted_7, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.model._model.nodes, (node) => {
                return openBlock(), createElementBlock("rect", {
                  x: node.x,
                  y: node.y,
                  width: node.width,
                  height: node.height,
                  fill: node.color || "#66cc00",
                  key: node.id
                }, null, 8, _hoisted_8);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.model._model.links, (link, index) => {
                return openBlock(), createBlock(_component_DiagramLink, {
                  positionFrom: link.positionFrom,
                  positionTo: link.positionTo,
                  points: link.points,
                  id: link.id,
                  index,
                  options: link.options,
                  key: index
                }, null, 8, ["positionFrom", "positionTo", "points", "id", "index", "options"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["style", "zoomEnabled", "panEnabled", "beforePan", "onCreated"])
  ]);
}
_sfc_main.__file = "src/components/Diagram.vue";
const Diagram = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2c52bd4f"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/Diagram.vue"]]);
export {
  Diagram as D,
  _export_sfc as _
};
