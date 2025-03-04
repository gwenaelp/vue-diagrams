var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { aC as defineComponent, ax as createElementBlock, aw as createCommentVNode, aD as normalizeStyle, aE as normalizeClass, ay as Fragment, az as renderList, as as openBlock, aF as createTextVNode, aA as toDisplayString, aG as withDirectives, aH as vModelText, aI as Emitter, au as createBaseVNode, aJ as renderSlot, aK as resolveDynamicComponent, ar as createBlock, at as withCtx, aq as resolveComponent, aL as _sfc_main$d, aM as nextTick, aB as createVNode, aN as createSlots } from "./vendor-DusQfV5j.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$c = defineComponent({
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
          window.elmenu = parentDiagramElement;
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
      console.log("dataset.menuItemKey", dataset.menuItemKey);
      if (dataset == null ? void 0 : dataset.childItemKey) {
        console.log("dataset.childItemKey", dataset.childItemKey, component.menu[dataset.menuItemKey].children[dataset.childItemKey]);
        component.menu[dataset.menuItemKey].children[dataset.childItemKey].handler.call(component);
      } else {
        component.menu[dataset.menuItemKey].handler.call(component);
      }
    }
  }
});
const _hoisted_1$a = ["data-menu-item-key"];
const _hoisted_2$8 = {
  key: 0,
  style: { "float": "right" }
};
const _hoisted_3$6 = {
  key: 1,
  class: "menu-item-children-container"
};
const _hoisted_4$4 = ["data-menu-item-key", "data-child-item-key"];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
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
            ], 10, _hoisted_1$a);
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
_sfc_main$c.__file = "src/components/Menu.vue";
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__scopeId", "data-v-e065371e"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/Menu.vue"]]);
const _sfc_main$b = defineComponent({
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
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$b.__file = "src/components/TextInput.vue";
const TextInput = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__scopeId", "data-v-d8d9f755"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/TextInput.vue"]]);
const generateId$1 = () => {
  return Math.trunc(Math.random() * 1e5);
};
class DiagramNode {
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
    __publicField(this, "type");
    this.diagram = diagram;
    this.id = id;
    this.title = title;
    this.x = x || 0;
    this.y = y || 0;
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
  //FIXME DiagramPort or number as return?
  addInPort(name, options) {
    let newPort = {
      id: generateId$1(),
      type: "in",
      name,
      options
    };
    this.ports.push(newPort);
    return newPort;
  }
  /**
   * Adds a new "out" port into the node.
   */
  //FIXME return value is number or port?
  addOutPort(name, options) {
    let newPort = {
      id: generateId$1(),
      type: "out",
      name,
      options
    };
    this.ports.push(newPort);
    return newPort;
  }
  removePortLinks(_id) {
    throw "FIXME";
  }
  deletePort(_id) {
    throw "FIXME";
  }
}
class DiagramModel {
  constructor() {
    __publicField(this, "_model");
    __publicField(this, "emitter");
    this._model = {
      nodes: [],
      links: []
    };
    this.emitter = new Emitter();
  }
  /**
   * Adds a node to the diagram
   */
  addNode(title, x, y, width, height, options) {
    if (options === void 0) {
      options = {};
    }
    const newNode = new DiagramNode(this, generateId$1(), title, x, y, width, height, options);
    this._model.nodes.push(newNode);
    return newNode;
  }
  deleteNode(node) {
    let index = -1;
    for (let k = 0; k < this._model.nodes.length; k++) {
      if (node.id === this._model.nodes[k].id) {
        index = k;
      }
    }
    if (node.ports.length) {
      for (let i = 0; i < node.ports.length; i++) {
        for (let j = 0; j < this._model.links.length; j++) {
          const currentLink = this._model.links[j];
          const currentPort = node.ports[i];
          if (currentLink.from === currentPort.id || currentLink.to === currentPort.id) {
            this.deleteLink(currentLink);
            j--;
          }
        }
      }
    }
    this._model.nodes.splice(index, 1);
  }
  deleteLink(link) {
    const index = this._model.links.indexOf(link);
    this.emitter.emit("deleteLink", link);
    this._model.links.splice(index, 1);
  }
  /**
   * Adds a link between two ports
   */
  addLink(from, to, points = [], options = {}) {
    this._model.links.push({
      id: generateId$1(),
      from: from.id || from,
      to: to.id || to,
      positionFrom: {},
      positionTo: {},
      points,
      options
    });
    return this._model.links[this._model.links.length - 1];
  }
  /**
   * Serializes the diagram model into a JSON object
   * @return {string} The diagram model as a string
   */
  serialize() {
    const res = {
      nodes: [],
      links: []
    };
    for (let n of this._model.nodes) {
      const serializedNode = {};
      const nodeToProcess = n;
      for (let k of Object.keys(n)) {
        if (k !== "diagram") {
          serializedNode[k] = nodeToProcess[k];
        }
      }
      res.nodes.push(serializedNode);
    }
    for (let l of this._model.links) {
      const serializedLink = {};
      const linkToProcess = l;
      for (let k of Object.keys(l)) {
        if (k !== "diagram") {
          serializedLink[k] = linkToProcess[k];
        }
      }
      res.links.push(serializedLink);
    }
    return JSON.stringify(res);
  }
  /**
   * Load into the diagram model a serialized diagram
   * @param  {string} serializedModel
   */
  deserialize(serializedModel) {
    this._model = JSON.parse(serializedModel);
    for (let i = 0; i <= this._model.nodes.length; i++) {
      const newNode = this._model.nodes[i];
      if (newNode) {
        this._model.nodes[i] = new DiagramNode(this, newNode.id, newNode.title);
        for (let k of Object.keys(newNode)) {
          this._model.nodes[i][k] = newNode[k];
        }
      }
    }
    this.emitter.emit("deserialize");
  }
}
const directions = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
class ResizeHandles {
  constructor(container, width, height, startDragHandler) {
    __publicField(this, "container");
    __publicField(this, "startDragHandler");
    var _a;
    this.container = container;
    container.innerHTML = `
      <rect class="resize-handle edge nw" data-direction="nw" x="-2" y="-5" width="5" height="5" />
      <rect class="resize-handle horizontal n" data-direction="n" x="0" y="-3" height="3" />
      <rect class="resize-handle edge ne" data-direction="ne" y="-5" width="5" height="5" />
      <rect class="resize-handle vertical e" data-direction="e" y="0" width="3" />
      <rect class="resize-handle edge se" data-direction="se" width="5" height="5" />
      <rect class="resize-handle horizontal s" data-direction="s" x="0" height="3" />
      <rect class="resize-handle edge sw" data-direction="sw" x="-2" width="5" height="5" />
      <rect class="resize-handle vertical w" data-direction="w" x="-2" y="0" width="3" />
    `;
    this.startDragHandler = startDragHandler;
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
      if (this.startDragHandler) {
        this.startDragHandler(target.dataset.direction);
      }
    }
  }
}
const _sfc_main$a = {
  props: {
    nodeModel: {
      type: Object
    }
  },
  computed: {
    options() {
      var _a;
      return ((_a = this.nodeModel) == null ? void 0 : _a.options) || {};
    },
    parentDiagram() {
      var _a, _b;
      return (_b = (_a = this.$parent) == null ? void 0 : _a.$parent) == null ? void 0 : _b.$parent;
    }
  }
};
const _hoisted_1$9 = ["x", "y", "width"];
const _hoisted_2$7 = { class: "prevent-node-drag" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d;
  return openBlock(), createElementBlock("g", null, [
    createBaseVNode("text", {
      class: normalizeClass($options.options.editableTitle ? "title-editable" : ""),
      x: ((_a = $props.nodeModel) == null ? void 0 : _a.width) || 0 / 2,
      y: ((_b = $props.nodeModel) == null ? void 0 : _b.height) || 0 / 2,
      width: (_c = $props.nodeModel) == null ? void 0 : _c.width,
      ref: "title",
      "text-anchor": "middle",
      "font-size": "14",
      "font-weight": "bold",
      fill: "#000000",
      style: normalizeStyle($options.options.titleStyle || ""),
      onClick: _cache[0] || (_cache[0] = ($event) => {
        var _a2;
        return $options.options.editableTitle ? (_a2 = $options.parentDiagram) == null ? void 0 : _a2.editText($props.nodeModel, "title", _ctx.$refs.title) : void 0;
      })
    }, toDisplayString((_d = $props.nodeModel) == null ? void 0 : _d.title), 15, _hoisted_1$9),
    createBaseVNode("g", _hoisted_2$7, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
_sfc_main$a.__file = "src/components/NodeTypes/Text.vue";
const TextNode = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/NodeTypes/Text.vue"]]);
const _sfc_main$9 = defineComponent({
  props: {
    nodeModel: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menu: void 0
    };
  },
  computed: {
    mainDiagramComponent() {
      var _a, _b;
      if (((_b = (_a = this == null ? void 0 : this.$parent) == null ? void 0 : _a.$parent) == null ? void 0 : _b.$parent) instanceof Diagram) {
        return this.$parent.$parent.$parent;
      } else throw "Main Diagram component not found";
    }
  },
  mounted() {
  }
});
const _hoisted_1$8 = ["width", "height"];
const _hoisted_2$6 = { transform: "translate(5, 5)" };
const _hoisted_3$5 = ["d"];
const _hoisted_4$3 = { class: "prevent-node-drag" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("g", null, [
    createBaseVNode("rect", {
      fill: "#ffffff",
      stroke: "#333",
      "stroke-width": "1",
      x: "0",
      y: "0",
      width: _ctx.nodeModel.width,
      height: _ctx.nodeModel.height
    }, null, 8, _hoisted_1$8),
    _cache[1] || (_cache[1] = createBaseVNode(
      "rect",
      {
        fill: "#ddd",
        x: "1",
        y: "1",
        width: "32",
        height: "32"
      },
      null,
      -1
      /* HOISTED */
    )),
    createBaseVNode("g", _hoisted_2$6, [
      createBaseVNode("path", {
        d: _ctx.nodeModel.iconPath
      }, null, 8, _hoisted_3$5)
    ]),
    createBaseVNode(
      "text",
      {
        x: 37,
        y: 21,
        class: normalizeClass(_ctx.nodeModel.options.editableTitle ? "title-editable" : ""),
        "font-size": "14",
        "font-weight": "bold",
        fill: "#000000",
        ref: "title",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.nodeModel.options.editableTitle ? _ctx.mainDiagramComponent.editText(_ctx.nodeModel, "title", _ctx.$refs.title) : void 0)
      },
      toDisplayString(_ctx.nodeModel.title),
      3
      /* TEXT, CLASS */
    ),
    createBaseVNode("g", _hoisted_4$3, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
_sfc_main$9.__file = "src/components/NodeTypes/Card.vue";
const CardNode = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/NodeTypes/Card.vue"]]);
const _sfc_main$8 = defineComponent({
  props: {
    nodeModel: {
      type: Object
    }
  },
  computed: {
    options() {
      var _a;
      return ((_a = this.nodeModel) == null ? void 0 : _a.options) || {};
    },
    parentDiagram() {
      var _a, _b;
      return (_b = (_a = this.$parent) == null ? void 0 : _a.$parent) == null ? void 0 : _b.$parent;
    }
  }
});
const _hoisted_1$7 = ["href", "width", "height"];
const _hoisted_2$5 = ["x", "y", "width"];
const _hoisted_3$4 = { class: "prevent-node-drag" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f;
  return openBlock(), createElementBlock("g", null, [
    createBaseVNode("image", {
      href: _ctx.options.image,
      x: "5",
      width: ((_a = _ctx.nodeModel) == null ? void 0 : _a.width) - 10,
      height: (_b = _ctx.nodeModel) == null ? void 0 : _b.height
    }, null, 8, _hoisted_1$7),
    createBaseVNode("text", {
      class: normalizeClass(_ctx.options.editableTitle ? "title-editable" : ""),
      x: ((_c = _ctx.nodeModel) == null ? void 0 : _c.width) / 2,
      y: ((_d = _ctx.nodeModel) == null ? void 0 : _d.height) + 14,
      width: (_e = _ctx.nodeModel) == null ? void 0 : _e.width,
      ref: "title",
      "text-anchor": "middle",
      "font-size": "14",
      "font-weight": "bold",
      fill: "#000000",
      style: normalizeStyle(_ctx.options.titleStyle || ""),
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.options.editableTitle ? _ctx.parentDiagram.editText(_ctx.nodeModel, "title", _ctx.$refs.title) : void 0)
    }, toDisplayString((_f = _ctx.nodeModel) == null ? void 0 : _f.title), 15, _hoisted_2$5),
    createBaseVNode("g", _hoisted_3$4, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
_sfc_main$8.__file = "src/components/NodeTypes/Image.vue";
const ImageNode = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/NodeTypes/Image.vue"]]);
const _sfc_main$7 = defineComponent({
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
    NodePreviewExists() {
      return typeof resolveDynamicComponent("NodePreview") !== "string";
    },
    options() {
      var _a;
      return ((_a = this.nodeModel) == null ? void 0 : _a.options) || {};
    },
    color() {
      var _a;
      return (_a = this.nodeModel) == null ? void 0 : _a.color;
    },
    parentDiagram() {
      var _a, _b;
      return (_b = (_a = this.$parent) == null ? void 0 : _a.$parent) == null ? void 0 : _b.$parent;
    }
  }
});
const _hoisted_1$6 = { class: "node" };
const _hoisted_2$4 = ["fill", "width", "height"];
const _hoisted_3$3 = ["fill-opacity", "width"];
const _hoisted_4$2 = ["x"];
const _hoisted_5$2 = ["x1", "x2"];
const _hoisted_6$2 = ["x1", "x2"];
const _hoisted_7$2 = ["width", "height"];
const _hoisted_8$2 = { class: "prevent-node-drag" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  return openBlock(), createElementBlock("g", _hoisted_1$6, [
    createBaseVNode("rect", {
      fill: _ctx.color,
      x: "0",
      y: "0",
      rx: "3",
      ry: "3",
      width: (_a = _ctx.nodeModel) == null ? void 0 : _a.width,
      height: (_b = _ctx.nodeModel) == null ? void 0 : _b.height,
      class: "node-rect node-dark-background"
    }, null, 8, _hoisted_2$4),
    createBaseVNode("rect", {
      "fill-opacity": _ctx.titleFillOpacity,
      x: "2",
      y: "2",
      rx: "3",
      ry: "3",
      width: ((_c = _ctx.nodeModel) == null ? void 0 : _c.width) - 4,
      height: "16",
      class: "node-dark-background title-rect"
    }, null, 8, _hoisted_3$3),
    createBaseVNode(
      "text",
      {
        x: "5",
        y: "15",
        class: normalizeClass(_ctx.options.editableTitle ? "title title-editable" : "title"),
        ref: "title",
        style: normalizeStyle(_ctx.options.titleStyle || ""),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.options.editableTitle ? _ctx.parentDiagram.editText(_ctx.nodeModel, "title", _ctx.$refs.title) : void 0)
      },
      toDisplayString(((_e = (_d = _ctx.nodeModel) == null ? void 0 : _d.options) == null ? void 0 : _e.title) || ((_f = _ctx.nodeModel) == null ? void 0 : _f.title)),
      7
      /* TEXT, CLASS, STYLE */
    ),
    ((_g = _ctx.nodeModel) == null ? void 0 : _g.deletable) ? (openBlock(), createElementBlock("g", {
      key: 0,
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("deleteNode"))
    }, [
      createBaseVNode("rect", {
        x: ((_h = _ctx.nodeModel) == null ? void 0 : _h.width) - 12,
        y: "3",
        width: "14",
        height: "14",
        rx: "2",
        ry: "2",
        fill: "#ffffff",
        "fill-opacity": 0.25
      }, null, 8, _hoisted_4$2),
      createBaseVNode("line", {
        x1: (_i = _ctx.nodeModel) == null ? void 0 : _i.width,
        y1: 5,
        x2: ((_j = _ctx.nodeModel) == null ? void 0 : _j.width) - 10,
        y2: 15,
        style: { "stroke": "rgb(0,0,0)" },
        "stroke-width": "2"
      }, null, 8, _hoisted_5$2),
      createBaseVNode("line", {
        x1: ((_k = _ctx.nodeModel) == null ? void 0 : _k.width) - 10,
        y1: 5,
        x2: (_l = _ctx.nodeModel) == null ? void 0 : _l.width,
        y2: 15,
        style: { "stroke": "rgb(0,0,0)" },
        "stroke-width": "2"
      }, null, 8, _hoisted_6$2)
    ])) : createCommentVNode("v-if", true),
    createBaseVNode("rect", {
      x: "2",
      y: "20",
      rx: "3",
      ry: "3",
      width: ((_m = _ctx.nodeModel) == null ? void 0 : _m.width) - 4,
      height: ((_n = _ctx.nodeModel) == null ? void 0 : _n.height) - 22,
      class: "node-content node-light-background"
    }, null, 8, _hoisted_7$2),
    createBaseVNode("g", _hoisted_8$2, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
_sfc_main$7.__file = "src/components/NodeTypes/Shader.vue";
const ShaderNode = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-82a82c24"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/NodeTypes/Shader.vue"]]);
const DiagramElement = {
  mounted() {
    this.$el.vueComponent = this;
  }
};
const _sfc_main$6 = defineComponent({
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
    mainSelection: {
      type: Boolean,
      default: false
    },
    selected: Boolean,
    nodeModel: {
      type: Object,
      required: true
    },
    diagram: {
      type: Object,
      required: true
    }
  },
  components: {
    "vue-diagrams-node-text": TextNode,
    "vue-diagrams-node-image": ImageNode,
    "vue-diagrams-node-shader": ShaderNode,
    "vue-diagrams-node-card": CardNode
  },
  mixins: [DiagramElement],
  data() {
    const _this = this;
    return {
      resizeHandles: void 0,
      titleFillOpacity: 1,
      menu: [{
        label: "Delete node",
        handler() {
          var _a, _b, _c;
          _this.diagram.deleteNode(_this.nodeModel);
          if (((_a = _this.$parent) == null ? void 0 : _a.$parent) instanceof Diagram) {
            (_c = (_b = _this.$parent) == null ? void 0 : _b.$parent) == null ? void 0 : _c.updateLinksPositions();
          } else {
            throw "Main diagram component not found";
          }
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
      if (!diagramComponent.editable) return;
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
      if (!((_a = this == null ? void 0 : this.$parent) == null ? void 0 : _a.$parent).editable) return;
      this.$emit(
        "onStartDrag",
        { type: "resizeHandle", index: this.index, node: this.nodeModel, direction },
        0 - this.nodeModel.x,
        0 - this.nodeModel.y
      );
    },
    nodeClick() {
      var _a;
      ((_a = this == null ? void 0 : this.$parent) == null ? void 0 : _a.$parent).$emit("nodeClick", this.nodeModel);
    }
  }
});
const _hoisted_1$5 = ["x", "y", "data-node-id"];
const _hoisted_2$3 = ["stroke-width", "width", "height"];
const _hoisted_3$2 = { ref: "resizeHandles" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    x: _ctx.nodeModel.x,
    y: _ctx.nodeModel.y,
    class: normalizeClass({
      "diagram-node": true,
      selected: _ctx.selected,
      "main-selection": _ctx.mainSelection,
      "has-menu": true
    }),
    "data-node-id": _ctx.id,
    onClick: _cache[3] || (_cache[3] = (...args) => _ctx.nodeClick && _ctx.nodeClick(...args))
  }, [
    createBaseVNode("rect", {
      "stroke-width": _ctx.selected ? 2 : 0,
      x: "0",
      y: "0",
      rx: "3",
      ry: "3",
      width: _ctx.nodeModel.width,
      height: _ctx.nodeModel.height,
      class: normalizeClass({
        "node-rect": true,
        "node-dark-background": true,
        selected: _ctx.selected,
        "main-selection": _ctx.mainSelection
      })
    }, null, 10, _hoisted_2$3),
    createBaseVNode(
      "g",
      _hoisted_3$2,
      null,
      512
      /* NEED_PATCH */
    ),
    createBaseVNode(
      "g",
      {
        class: "diagram-node-content-wrapper mouse-events-wrapper",
        onMousedown: _cache[0] || (_cache[0] = (...args) => _ctx.mouseDown && _ctx.mouseDown(...args)),
        onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.mouseenter && _ctx.mouseenter(...args)),
        onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.mouseleave && _ctx.mouseleave(...args))
      },
      [
        (openBlock(), createBlock(resolveDynamicComponent(`vue-diagrams-node-${_ctx.options.type || _ctx.$parent.$parent.defaultNodeType}`), {
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
      /* NEED_HYDRATION */
    )
  ], 10, _hoisted_1$5);
}
_sfc_main$6.__file = "src/components/DiagramNode.vue";
const DiagramNodeComponent = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-1c98675c"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/DiagramNode.vue"]]);
const _sfc_main$5 = defineComponent({
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
const _hoisted_1$4 = { class: "has-menu" };
const _hoisted_2$2 = ["cx", "cy"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("g", _hoisted_1$4, [
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
    }, null, 44, _hoisted_2$2)
  ]);
}
_sfc_main$5.__file = "src/components/DiagramPoint.vue";
const DiagramPoint = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/DiagramPoint.vue"]]);
const _sfc_main$4 = defineComponent({
  name: "DiagramLink",
  props: ["positionFrom", "positionTo", "id", "index", "points", "options", "linkModel", "diagram"],
  components: {
    DiagramPoint
  },
  mixins: [DiagramElement],
  data() {
    const _this = this;
    return {
      largeStrokeStyle: "stroke:rgba(255,0,0,0.0);",
      pointStyleNormal: "stroke:rgba(255,0,0,0.0); stroke-width: 6",
      pointStyleHover: "stroke:rgba(255,0,0,0.5); stroke-width: 6",
      beginCurvePath: void 0,
      endCurvePath: void 0,
      menu: [{
        label: "Delete link",
        handler() {
          _this.diagram.deleteLink(_this.linkModel);
        }
      }]
    };
  },
  computed: {
    x1() {
      var _a;
      return (_a = this.positionFrom) == null ? void 0 : _a.x;
    },
    y1() {
      var _a;
      return ((_a = this.positionFrom) == null ? void 0 : _a.y) - 8;
    },
    x2() {
      var _a;
      return ((_a = this.positionTo) == null ? void 0 : _a.x) - 4;
    },
    y2() {
      var _a;
      return ((_a = this.positionTo) == null ? void 0 : _a.y) - 8;
    },
    curve() {
      if (this.x1 && this.y1 && this.x2 && this.y2) {
        let x1 = Math.trunc(this.x1), y1 = Math.trunc(this.y1), x2 = Math.trunc(this.x2), y2 = Math.trunc(this.y2);
        const distance = Math.trunc(4 * Math.sqrt(Math.abs(x1 - x2)));
        const path = `M${x1},${y1} C${x1 + distance},${y1} ${x2 - distance},${y2} ${x2},${y2}`;
        return path;
      }
    }
  },
  methods: {
    refreshLink() {
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
    mouseDownSegment(event, segmentIndex) {
      var _a;
      if (!((_a = this.$parent) == null ? void 0 : _a.$parent).editable) return;
      if (event.button === 2) return;
      this.createPoint(event.x, event.y, segmentIndex);
      this.mouseDownPoint(event, segmentIndex);
    },
    createPoint(x, y, pointIndex) {
      this.$emit("onCreatePoint", x, y, this.index, pointIndex);
    }
  }
});
const _hoisted_1$3 = { class: "diagram-link has-menu" };
const _hoisted_2$1 = ["onMousedown"];
const _hoisted_3$1 = ["x1", "y1", "x2", "y2"];
const _hoisted_4$1 = ["x1", "y1", "x2", "y2"];
const _hoisted_5$1 = ["x1", "y1", "x2", "y2"];
const _hoisted_6$1 = ["x1", "y1", "x2", "y2"];
const _hoisted_7$1 = ["d"];
const _hoisted_8$1 = ["d"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DiagramPoint = resolveComponent("DiagramPoint");
  return openBlock(), createElementBlock("g", _hoisted_1$3, [
    _ctx.points && _ctx.points.length ? (openBlock(), createElementBlock(
      "g",
      {
        key: 0,
        onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.mouseEnter && _ctx.mouseEnter(...args)),
        onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.mouseLeave && _ctx.mouseLeave(...args))
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
              }, null, 12, _hoisted_3$1),
              createBaseVNode("line", {
                x1: index === 0 ? _ctx.x1 : _ctx.points[index - 1].x,
                y1: index === 0 ? _ctx.y1 : _ctx.points[index - 1].y,
                x2: point.x,
                y2: point.y,
                class: "link-line",
                "stroke-width": "2"
              }, null, 8, _hoisted_4$1)
            ], 40, _hoisted_2$1);
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
            }, null, 12, _hoisted_5$1),
            createBaseVNode("line", {
              x1: _ctx.points[_ctx.points.length - 1].x,
              y1: _ctx.points[_ctx.points.length - 1].y,
              x2: _ctx.x2,
              y2: _ctx.y2,
              class: "link-line",
              "stroke-width": "2"
            }, null, 8, _hoisted_6$1)
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      32
      /* NEED_HYDRATION */
    )) : (openBlock(), createElementBlock(
      "g",
      {
        key: 1,
        onMouseenter: _cache[4] || (_cache[4] = (...args) => _ctx.mouseEnter && _ctx.mouseEnter(...args)),
        onMouseleave: _cache[5] || (_cache[5] = (...args) => _ctx.mouseLeave && _ctx.mouseLeave(...args))
      },
      [
        createBaseVNode(
          "g",
          {
            onMousedown: _cache[3] || (_cache[3] = ($event) => _ctx.mouseDownSegment($event, 0))
          },
          [
            createBaseVNode("path", {
              d: _ctx.curve,
              style: normalizeStyle(_ctx.largeStrokeStyle),
              "stroke-width": "8",
              fill: "none"
            }, null, 12, _hoisted_7$1),
            createBaseVNode("path", {
              d: _ctx.curve,
              ref: "curvePath",
              class: "link-line",
              "stroke-width": "2",
              fill: "none"
            }, null, 8, _hoisted_8$1)
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      32
      /* NEED_HYDRATION */
    )),
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(_ctx.points, (point, pointIndex) => {
        return openBlock(), createBlock(_component_DiagramPoint, {
          key: pointIndex,
          onMouseenter: _cache[6] || (_cache[6] = ($event) => _ctx.mouseEnterPoint(
            /*point*/
          )),
          onMouseleave: _cache[7] || (_cache[7] = ($event) => _ctx.mouseLeavePoint(
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
_sfc_main$4.__file = "src/components/DiagramLink.vue";
const DiagramLinkComponent = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-3e884062"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/DiagramLink.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DotPort",
  props: {
    port: Object
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = {
  class: "port-shape",
  cx: "5",
  cy: "9",
  r: "4"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("circle", _hoisted_1$2);
}
_sfc_main$3.__file = "src/components/ports/DotPort.vue";
const DotShapePort = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/ports/DotPort.vue"]]);
const horizontalPadding = 10;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PortLabel",
  props: {
    port: {
      type: Object,
      required: true
    },
    width: Number
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { horizontalPadding, props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["x"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(`port-name port-${$setup.props.port.type}`),
    y: "8",
    x: ($props.width || 0) - $setup.horizontalPadding
  }, toDisplayString($setup.props.port.name), 11, _hoisted_1$1);
}
_sfc_main$2.__file = "src/components/ports/PortLabel.vue";
const PortLabel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/ports/PortLabel.vue"]]);
const _sfc_main$1 = defineComponent({
  name: "DiagramPort",
  props: ["id", "x", "y", "node", "nodeIndex", "port"],
  components: {
    "vue-diagrams-port-shape-dot": DotShapePort,
    PortLabel
  },
  data() {
    return {
      hover: false,
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
          console.warn("deleteLink event not fired here");
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
        return this.y + 30;
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
    getPortShapeComponent(shape) {
      if (shape === void 0) {
        return "DotShapePort";
      }
      const component = resolveComponent(`vue-diagrams-port-shape-${shape}`);
      return typeof component !== "string" ? `vue-diagrams-port-shape-${shape}` : "DotShapePort";
    },
    getPortLabelComponent(valueType) {
      if (valueType) {
        const component = resolveComponent(`vue-diagrams-port-label-${valueType}`);
        console.log("component?", valueType, component, `vue-diagrams-port-label-${valueType}`);
        return typeof component !== "string" ? `vue-diagrams-port-label-${valueType}` : void 0;
      }
    },
    mouseup() {
      this.$emit("mouseUpPort", this.id);
    },
    enter() {
      var _a, _b, _c, _d;
      this.fill = "#999999";
      console.log("hover port", this.port, (_b = (_a = this.$parent.$parent) == null ? void 0 : _a.$parent) == null ? void 0 : _b.$parent.model._model.links.filter((l) => l.from === this.port.id || l.to === this.port.id), (_d = (_c = this.$parent.$parent) == null ? void 0 : _c.$parent) == null ? void 0 : _d.$parent.model);
      this.hover = true;
    },
    leave() {
      this.hover = false;
      this.fill = "#666666";
    },
    startDragNewLink() {
      this.$emit("onStartDragNewLink", this.id);
    }
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PortLabel = resolveComponent("PortLabel");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass({
        "diagram-port": true,
        "has-menu": true,
        hover: _ctx.hover
      }),
      style: { "overflow": "visible", "position": "relative", "padding-left": "10px" }
    },
    [
      createCommentVNode('<rect\n      :fill="fill"\n      ref="handle"\n      :x="displayedX" y="0"\n      rx="3" ry="3"\n      width="10" height="10"\n      @mouseenter="enter" @mouseleave="leave" @mousedown="startDragNewLink" @mouseup="mouseup"\n    />\n  '),
      _ctx.port.type !== "option" ? (openBlock(), createElementBlock(
        "svg",
        {
          key: 0,
          onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.enter && _ctx.enter(...args)),
          onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.leave && _ctx.leave(...args)),
          onMousedown: _cache[2] || (_cache[2] = (...args) => _ctx.startDragNewLink && _ctx.startDragNewLink(...args)),
          onMouseup: _cache[3] || (_cache[3] = (...args) => _ctx.mouseup && _ctx.mouseup(...args)),
          class: normalizeClass({
            "port-shape-container": true,
            [`port-type-${_ctx.port.type}`]: true
          })
        },
        [
          (openBlock(), createBlock(resolveDynamicComponent(`vue-diagrams-port-shape-${_ctx.port.display_shape || "dot"}`), { port: _ctx.port }, null, 8, ["port"]))
        ],
        34
        /* CLASS, NEED_HYDRATION */
      )) : createCommentVNode("v-if", true),
      createBaseVNode(
        "div",
        {
          class: normalizeClass({
            "label-wrapper": true,
            [`port-type-${_ctx.port.type}`]: true
          })
        },
        [
          _ctx.getPortLabelComponent(_ctx.port.value_type) ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.getPortLabelComponent(_ctx.port.value_type)), {
            key: 0,
            port: _ctx.port,
            width: _ctx.width
          }, null, 8, ["port", "width"])) : (openBlock(), createBlock(_component_PortLabel, {
            key: 1,
            port: _ctx.port,
            width: _ctx.width
          }, null, 8, ["port", "width"]))
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
_sfc_main$1.__file = "src/components/DiagramPort.vue";
const DiagramPortComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-76468725"], ["__file", "/home/runner/work/vue-diagrams/vue-diagrams/src/components/DiagramPort.vue"]]);
const generateId = () => {
  return Math.trunc(Math.random() * 1e3);
};
const snapToGrip = (val, gridSize) => {
  return gridSize * Math.round(val / gridSize);
};
const _sfc_main = defineComponent({
  name: "Diagram",
  Model: DiagramModel,
  props: {
    defaultNodeType: {
      type: String,
      default: "shader"
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
    return {
      reactiveModel: this.model,
      mode: "move",
      document,
      displayLinks: false,
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
    SvgPanZoom: _sfc_main$d
  },
  computed: {
    querySelector() {
      return document.querySelector("#viewport");
    }
  },
  watch: {
    mode: {
      handler(v) {
        this.$emit("changeMode", v);
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
    "model": {
      handler(newV) {
        newV.emitter.on("deleteNode", (n) => {
          this.notifyDeleteNode(n);
        });
        newV.emitter.on("deserialize", () => {
          nextTick(() => this.updateLinksPositions());
        });
        newV.emitter.on("deletePort", () => {
          this.updateLinksPositions();
        });
        newV.emitter.on("deleteLink", (l) => {
          this.notifyDeleteLink(l);
          this.updateLinksPositions();
        });
      },
      immediate: true
    },
    "model._model": {
      handler() {
        this.$emit("model-updated", this.reactiveModel._model);
      },
      deep: true
    },
    "model._model.links"() {
      this.updateLinksPositions();
    }
  },
  methods: {
    detectClickOnBg(event) {
      if (event.target.classList.contains("svg-pan-zoom_viewport")) {
        this.$emit("clickOnBackground");
        this.clearSelection();
      }
    },
    getAbsoluteXY(element) {
      const box = element.getBoundingClientRect();
      const x = box.left;
      const y = box.top;
      return { x, y };
    },
    notifyDeleteNode(n) {
      this.$emit("deleteNode", n);
    },
    notifyDeleteLink(l) {
      this.$emit("deleteLink", l);
    },
    spzCreated(spz) {
      this.spz = spz;
      spz.setBeforePan((...args) => {
        return this.beforePan.apply(this, args);
      });
    },
    editText(object, property, element) {
      if (!this.editable) return;
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
      let rootelt = this.$refs.dragramRoot;
      let rec = this.$refs.viewPort;
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
      } else return true;
    },
    createPoint(x, y, linkIndex, pointIndex) {
      let coords = this.convertXYtoViewPort(x, y);
      let links = this.reactiveModel._model.links;
      if (links[linkIndex].points === void 0) links[linkIndex].points = [];
      var points = links[linkIndex].points;
      points.splice(pointIndex, 0, coords);
      links[linkIndex].points = points;
    },
    clearSelection(skipPrimary, skipSecondary, skipSendEvent) {
      if (!skipPrimary) {
        this.mainSelectedItem = {};
        if (!skipSendEvent) {
          this.$emit("primarySelectionChanged", this.mainSelectedItem);
        }
      }
      if (!skipSecondary) {
        this.secondarySelectedNodes = [];
        if (!skipSendEvent) {
          this.$emit("secondarySelectionChanged", this.secondarySelectedNodes);
        }
      }
    },
    updateLinksPositions() {
      let links = [];
      if (this.reactiveModel && this.reactiveModel._model) links = this.reactiveModel._model.links;
      for (let i = 0; i < links.length; i++) {
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
    },
    startDragNewLink(startPortId) {
      if (!this.editable) return;
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
    mouseMoveMagnetismAnchors(coords) {
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
    },
    mouseMove(pos) {
      if (!this.editable) return;
      const links = this.reactiveModel._model.links;
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
          this.mouseMoveMagnetismAnchors(coords);
          if (type === "points") {
            const linkIndex = this.draggedItem.linkIndex;
            const pointIndex = this.draggedItem.pointIndex;
            links[linkIndex].points[pointIndex].x = coords.x;
            links[linkIndex].points[pointIndex].y = coords.y;
          }
          if (type === "resizeHandle") {
            if (this.draggedItem.direction.indexOf("e") !== -1) {
              this.reactiveModel._model.nodes[index].width = coords.x - this.reactiveModel._model.nodes[index].x;
            }
            if (this.draggedItem.direction.indexOf("s") !== -1) {
              this.reactiveModel._model.nodes[index].height = coords.y - this.reactiveModel._model.nodes[index].y;
            }
            if (this.draggedItem.direction.indexOf("n") !== -1) {
              const bottom = this.reactiveModel._model.nodes[index].y + this.reactiveModel._model.nodes[index].height;
              this.reactiveModel._model.nodes[index].y = coords.y;
              this.reactiveModel._model.nodes[index].height = bottom - coords.y;
            }
            if (this.draggedItem.direction.indexOf("w") !== -1) {
              const right = this.reactiveModel._model.nodes[index].x + this.reactiveModel._model.nodes[index].width;
              this.reactiveModel._model.nodes[index].x = coords.x;
              this.reactiveModel._model.nodes[index].width = right - coords.x;
            }
          } else {
            if (this.reactiveModel._model[type] && this.reactiveModel._model[type][index]) {
              const initialItemX = this.reactiveModel._model[type][index].x;
              const initialItemY = this.reactiveModel._model[type][index].y;
              this.reactiveModel._model[type][index].x = coords.x - this.initialDragX;
              this.reactiveModel._model[type][index].y = coords.y - this.initialDragY;
              const moveDeltaX = this.reactiveModel._model[type][index].x - initialItemX;
              const moveDeltaY = this.reactiveModel._model[type][index].y - initialItemY;
              for (let n of this.secondarySelectedNodes) {
                if (!(type === "nodes" && n === this.reactiveModel._model[type][index])) {
                  n.x += moveDeltaX;
                  n.y += moveDeltaY;
                }
              }
            }
          }
          this.updateLinksPositions();
        }
      }
    },
    mouseDown(event) {
      if (!this.editable) return;
      this.mouseButtonIsPressed = true;
      if (!event.target.classList.contains("title-editable")) {
        let textInput = this.$refs.textInput;
        textInput.editText();
      }
      if (this.mode === "select") {
        this.mouseDownViewportPos = this.convertXYtoViewPort(event.x, event.y);
      }
    },
    mouseUp() {
      if (!this.editable) return;
      this.mouseButtonIsPressed = false;
      if (this.mode === "move") {
        if (this.secondarySelectedNodes && this.secondarySelectedNodes.length) {
          if (!this.draggedItem || this.draggedItem.type !== "nodes" || this.secondarySelectedNodes.filter((n) => n === this.reactiveModel._model.nodes[this.draggedItem.index]).length === 0) {
            this.secondarySelectedNodes = [];
            this.$emit("secondarySelectionChanged", this.secondarySelectedNodes);
          }
        }
      }
      this.draggedItem = void 0;
      this.newLink = void 0;
      if (this.mode === "select") {
        this.secondarySelectedNodes = [];
        for (let n of this.reactiveModel._model.nodes) {
          const x1 = Math.min(this.viewportMousePos.x, this.mouseDownViewportPos.x);
          const y1 = Math.min(this.viewportMousePos.y, this.mouseDownViewportPos.y);
          const x2 = Math.max(this.viewportMousePos.x, this.mouseDownViewportPos.x);
          const y2 = Math.max(this.viewportMousePos.y, this.mouseDownViewportPos.y);
          if (n.x < x2 && n.y < y2 && n.x + n.width > x1 && n.y + n.height > y1) {
            this.secondarySelectedNodes.push(n);
          }
          this.mode = "move";
        }
        this.$emit("secondarySelectionChanged", this.secondarySelectedNodes);
      }
    },
    mouseUpPort(portId) {
      if (!this.editable) return;
      const links = this.reactiveModel._model.links;
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
        if (newLink) {
          links.push(newLink);
        }
        this.$emit("newLink", newLink);
        this.updateLinksPositions();
      }
    },
    startDragPoint(pointInfo) {
      this.draggedItem = pointInfo;
    },
    startDragItem(item, x, y) {
      this.draggedItem = item;
      this.mainSelectedItem = item;
      this.$emit("primarySelectionChanged", this.mainSelectedItem);
      this.initialDragX = x;
      this.initialDragY = y;
      this.listMagnetismAnchors();
    },
    listMagnetismAnchors() {
      const anchors = [];
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
  }
});
const _hoisted_1 = { class: "vue-diagrams" };
const _hoisted_2 = ["viewBox", "width", "height"];
const _hoisted_3 = {
  ref: "viewPort",
  id: "viewport",
  x: "50",
  y: "50"
};
const _hoisted_4 = { key: 0 };
const _hoisted_5 = ["x1", "y1", "x2", "y2"];
const _hoisted_6 = ["fill", "stroke", "x", "y"];
const _hoisted_7 = ["x", "y"];
const _hoisted_8 = ["width", "height"];
const _hoisted_9 = { class: "diagram-node-content-wrapper" };
const _hoisted_10 = ["x", "y", "width", "height"];
const _hoisted_11 = { class: "thumbViewClass" };
const _hoisted_12 = ["x", "y", "width", "height", "fill"];
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
      class: "svgpanzoom",
      style: normalizeStyle({ width: _ctx.width + "px", height: _ctx.height + "px" }),
      zoomEnabled: _ctx.zoomEnabled,
      id: "svgroot",
      panEnabled: _ctx.panEnabled,
      controlIconsEnabled: false,
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
            _cache[5] || (_cache[5] = createBaseVNode(
              "defs",
              null,
              [
                createBaseVNode("pattern", {
                  id: "smallGrid",
                  width: "16",
                  height: "16",
                  patternUnits: "userSpaceOnUse"
                }, [
                  createBaseVNode("path", {
                    d: "M 16 0 L 0 0 0 16",
                    fill: "none",
                    "stroke-width": "1"
                  })
                ]),
                createBaseVNode("pattern", {
                  id: "grid",
                  width: "80",
                  height: "80",
                  patternUnits: "userSpaceOnUse"
                }, [
                  createBaseVNode("rect", {
                    width: "80",
                    height: "80",
                    fill: "url(#smallGrid)"
                  }),
                  createBaseVNode("path", {
                    d: "M 80 0 L 0 0 0 80",
                    fill: "none",
                    "stroke-width": "1"
                  })
                ])
              ],
              -1
              /* HOISTED */
            )),
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
                onMousedown: _cache[0] || (_cache[0] = ($event) => _ctx.mode !== "select" ? _ctx.detectClickOnBg($event) : void 0)
              },
              null,
              544
              /* NEED_HYDRATION, NEED_PATCH */
            ),
            createBaseVNode(
              "g",
              _hoisted_3,
              [
                _ctx.displayLinks ? (openBlock(), createElementBlock("g", _hoisted_4, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(_ctx.reactiveModel._model.links, (link, index) => {
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
                        linkModel: link,
                        diagram: _ctx.model,
                        onOnStartDrag: _ctx.startDragPoint,
                        onOnCreatePoint: _ctx.createPoint,
                        onDelete: ($event) => _ctx.model.deleteLink(link)
                      }, null, 8, ["positionFrom", "positionTo", "points", "id", "index", "options", "linkModel", "diagram", "onOnStartDrag", "onOnCreatePoint", "onDelete"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )),
                  _ctx.newLink ? (openBlock(), createElementBlock("line", {
                    key: 0,
                    x1: (_a = _ctx.getPortHandlePosition(_ctx.newLink.startPortId)) == null ? void 0 : _a.x,
                    y1: (((_b = _ctx.getPortHandlePosition(_ctx.newLink.startPortId)) == null ? void 0 : _b.y) || 0) - 8,
                    x2: _ctx.convertXYtoViewPort(_ctx.mouseX, 0).x,
                    y2: _ctx.convertXYtoViewPort(0, _ctx.mouseY).y,
                    style: { "stroke": "rgb(255,0,0)", "stroke-width": "2" }
                  }, null, 8, _hoisted_5)) : createCommentVNode("v-if", true)
                ])) : createCommentVNode("v-if", true),
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(_ctx.reactiveModel._model.nodes, (node, nodeIndex) => {
                    return openBlock(), createBlock(_component_DiagramNode, {
                      ref_for: true,
                      ref: "node-" + nodeIndex,
                      class: "node-abstract-wrapper",
                      title: node.title,
                      nodeModel: node,
                      diagram: _ctx.model,
                      x: node.x,
                      y: node.y,
                      id: node.id,
                      key: node.id,
                      width: node.width,
                      height: node.height,
                      ports: node.ports,
                      mainSelection: _ctx.mainSelectedItem.type === "nodes" && _ctx.mainSelectedItem.node.id === node.id,
                      selected: _ctx.mainSelectedItem.type === "nodes" && _ctx.mainSelectedItem.index === nodeIndex || _ctx.secondarySelectedNodes.indexOf(node) !== -1,
                      options: node.options,
                      index: nodeIndex,
                      onOnStartDrag: _ctx.startDragItem,
                      onDelete: ($event) => _ctx.model.deleteNode(node)
                    }, {
                      default: withCtx(() => [
                        _cache[4] || (_cache[4] = createBaseVNode(
                          "g",
                          { class: "tooltips" },
                          null,
                          -1
                          /* HOISTED */
                        )),
                        (openBlock(true), createElementBlock(
                          Fragment,
                          null,
                          renderList(node.ports, (port, portIndex) => {
                            var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                            return openBlock(), createElementBlock(
                              Fragment,
                              null,
                              [
                                ((_b2 = (_a2 = port.options) == null ? void 0 : _a2.tooltip) == null ? void 0 : _b2.text) ? (openBlock(), createElementBlock(
                                  "g",
                                  {
                                    key: 0,
                                    class: normalizeClass({
                                      "tooltip": true,
                                      "tooltip-show-on-port-hover": ((_d = (_c = port.options) == null ? void 0 : _c.tooltip) == null ? void 0 : _d.trigger) === "hoverPort"
                                    }),
                                    style: normalizeStyle({
                                      opacity: (_f = (_e = port.options) == null ? void 0 : _e.tooltip) == null ? void 0 : _f.opacity
                                    })
                                  },
                                  [
                                    createBaseVNode("rect", {
                                      fill: ((_h = (_g = port.options) == null ? void 0 : _g.tooltip) == null ? void 0 : _h.fill) || "#eeeeee",
                                      stroke: ((_j = (_i = port.options) == null ? void 0 : _i.tooltip) == null ? void 0 : _j.stroke) || "#bbbbbb",
                                      x: port.type === "in" ? -50 : node.width + 10,
                                      y: portIndex * 20 + 25,
                                      rx: 3,
                                      ry: 3,
                                      width: 40,
                                      height: 16
                                    }, null, 8, _hoisted_6),
                                    createBaseVNode("text", {
                                      x: port.type === "in" ? -42 : node.width + 18,
                                      y: portIndex * 20 + 36,
                                      "font-size": "8pt",
                                      fill: "#000000"
                                    }, toDisplayString((_l = (_k = port.options) == null ? void 0 : _k.tooltip) == null ? void 0 : _l.text), 9, _hoisted_7)
                                  ],
                                  6
                                  /* CLASS, STYLE */
                                )) : createCommentVNode("v-if", true)
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            );
                          }),
                          256
                          /* UNKEYED_FRAGMENT */
                        )),
                        (openBlock(), createElementBlock("foreignObject", {
                          width: node.width + 10,
                          x: "-5",
                          height: node.height - 20,
                          y: "20"
                        }, [
                          createBaseVNode("div", _hoisted_9, [
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
                          ])
                        ], 8, _hoisted_8))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["title", "nodeModel", "diagram", "x", "y", "id", "width", "height", "ports", "mainSelection", "selected", "options", "index", "onOnStartDrag", "onDelete"]);
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
                }, null, 8, _hoisted_10)) : createCommentVNode("v-if", true)
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
          (openBlock(), createElementBlock("svg", _hoisted_11, [
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
                }, null, 8, _hoisted_12);
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
                  linkModel: link,
                  diagram: _ctx.model,
                  key: index
                }, null, 8, ["positionFrom", "positionTo", "points", "id", "index", "options", "linkModel", "diagram"]);
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
