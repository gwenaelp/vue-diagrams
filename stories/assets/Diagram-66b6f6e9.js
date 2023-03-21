import { aq as SvgPanZoom } from "./vendor-538b7fd7.js";
const Menu_vue_vue_type_style_index_0_scoped_e065371e_lang = "";
function normalizeComponent(scriptExports, render11, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render11) {
    options.render = render11;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(
        this,
        (options.functional ? this.parent : this).$root.$options.shadowRoot
      );
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const _sfc_main$9 = {
  data() {
    return {
      onContextMenu: (event2) => {
        event2.preventDefault();
      },
      onMouseDown: (event2) => {
        const parentContextMenu = event2.target.closest(".diagram-context-menu");
        const parentDiagramElement = event2.target.closest(".has-menu");
        this.menuX = event2.pageX;
        this.menuY = event2.pageY;
        if (parentContextMenu) {
          event2.stopPropagation();
          this.menuItemClick(event2, this.showMenuComponent);
          this.showMenuComponent = void 0;
        } else if (parentDiagramElement && event2.button === 2) {
          this.showMenuComponent = parentDiagramElement.__vue__;
          event2.stopPropagation();
        } else {
          this.showMenuComponent = void 0;
        }
        if (!event2.defaultPrevented) {
          this.$parent.$el.dispatchEvent(event2);
        }
      },
      menuX: 0,
      menuY: 0,
      showMenuComponent: void 0
    };
  },
  mounted() {
    this.$parent.$el.addEventListener("mousedown", this.onMouseDown, true);
    this.$parent.$el.addEventListener("contextmenu", this.onContextMenu);
  },
  beforeDestroy() {
    this.$parent.$el.removeEventListener("mousedown", this.onMouseDown);
    this.$parent.$el.addEventListener("contextmenu", this.onContextMenu);
  },
  methods: {
    menuItemClick(event2, component) {
      component.menu[event2.target.dataset.menuItemKey].handler.call(component);
    }
  }
};
var _sfc_render$9 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", [_vm.showMenuComponent ? _c("div", { class: `menu diagram-context-menu`, style: `left: ${_vm.menuX}px; top: ${_vm.menuY}px` }, _vm._l(_vm.showMenuComponent.menu, function(menuItem, menuItemKey) {
    return _c("div", { staticClass: "menu-item", attrs: { "data-menu-item-key": menuItemKey } }, [_vm._v(" " + _vm._s(menuItem.label) + " ")]);
  }), 0) : _vm._e()]);
};
var _sfc_staticRenderFns$9 = [];
_sfc_render$9._withStripped = true;
var __component__$9 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$9,
  _sfc_render$9,
  _sfc_staticRenderFns$9,
  false,
  null,
  "e065371e",
  null,
  null
);
__component__$9.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/src/components/Menu.vue";
_sfc_main$9.__file = "src/components/Menu.vue";
const Menu = __component__$9.exports;
const TextInput_vue_vue_type_style_index_0_scoped_d8d9f755_lang = "";
const _sfc_main$8 = {
  data() {
    return {
      style: "display: none;",
      object: void 0,
      property: void 0,
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
};
var _sfc_render$8 = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.value, expression: "value" }], staticClass: "text-input", style: _vm.style, attrs: { "type": "text" }, domProps: { "value": _vm.value }, on: { "input": function($event) {
    if ($event.target.composing)
      return;
    _vm.value = $event.target.value;
  } } });
};
var _sfc_staticRenderFns$8 = [];
_sfc_render$8._withStripped = true;
var __component__$8 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$8,
  _sfc_render$8,
  _sfc_staticRenderFns$8,
  false,
  null,
  "d8d9f755",
  null,
  null
);
__component__$8.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/src/components/TextInput.vue";
_sfc_main$8.__file = "src/components/TextInput.vue";
const TextInput = __component__$8.exports;
var generateId$2 = function() {
  return Math.trunc(Math.random() * 1e3);
};
const diagramFor = {};
let DiagramNode$1 = class DiagramNode {
  /**
   *  This should not be called directly. Use the "addNode" method from the DiagramModel class
   * @param  {Integer} id [description]
   * @param  {String} title
   * @param  {Integer} x
   * @param  {Integer} y
   * @param  {Integer} width
   * @param  {Integer} height
   * @param  {Object} options
   */
  constructor(diagram, id, title, x, y, width, height, options) {
    diagramFor[id] = diagram;
    this.id = id;
    this.title = title;
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
   * @return {Integer} The port id
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
   * @param {String} name
   * @return {Integer} The port id
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
  /**
   */
  constructor() {
    this._model = {
      nodes: [],
      links: []
    };
  }
  /**
   * Adds a node to the diagram
   * @param {String} title  The title of the node
   * @param {Integer} x      X coordinate
   * @param {Integer} y      Y Coordinate
   * @param {Integer} width  Width
   * @param {Integer} height Height
   * @param {Object} options Optional
   * @return {Node} The node created
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
    for (var j = 0; j < this._model.links.length; j++) {
      const currentLink = this._model.links[j];
      for (var i = 0; i < node.ports.length; i++) {
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
   * @param {Integer} from   Port id. Must be an out port
   * @param {Integer} to     Port id. Must be an in port
   * @param {Array}  points  Optional. Array of points to make the link represented as a segmented line
   * @param {Object} options Optional
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
    return JSON.stringify(this._model);
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
  constructor(container, width, height, startDragHandler) {
    this.container = container;
    container.innerHTML = `
      <rect class="resize-handle edge" data-direction="nw" x="3" y="10" width="5" height="5" />
      <rect class="resize-handle" data-direction="n" x="5" y="12" height="3" />
      <rect class="resize-handle edge" data-direction="ne" y="10" width="5" height="5" />
      <rect class="resize-handle" data-direction="e" y="15" width="3" />
      <rect class="resize-handle edge" data-direction="se" width="5" height="5" />
      <rect class="resize-handle" data-direction="s" x="5" height="3" />
      <rect class="resize-handle edge" data-direction="sw" x="3" width="5" height="5" />
      <rect class="resize-handle" data-direction="w" x="3" y="15" width="3" />
    `;
    this.startDragHandler = startDragHandler;
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    for (let d of directions) {
      container.querySelector(`[data-direction="${d}"]`).addEventListener("mousedown", this.mouseDownHandler);
    }
    this.updatePosition(width, height);
  }
  updatePosition(width, height) {
    const n = this.container.querySelector('[data-direction="n"]');
    const ne = this.container.querySelector('[data-direction="ne"]');
    const e = this.container.querySelector('[data-direction="e"]');
    const se = this.container.querySelector('[data-direction="se"]');
    const s = this.container.querySelector('[data-direction="s"]');
    const sw = this.container.querySelector('[data-direction="sw"]');
    const w = this.container.querySelector('[data-direction="w"]');
    n.setAttribute("width", width);
    ne.setAttribute("x", width + 5);
    e.setAttribute("x", width + 5);
    e.setAttribute("height", height);
    se.setAttribute("x", width + 5);
    se.setAttribute("y", height + 15);
    s.setAttribute("y", height + 15);
    s.setAttribute("width", width);
    sw.setAttribute("y", height + 15);
    w.setAttribute("height", height);
  }
  unmount() {
    console.log("unmount", this.startDragHandler);
    if (this.startDragHandler) {
      for (let d of directions) {
        this.container.querySelector(`[data-direction="${d}"]`).removeEventListener("mousedown", this.mouseDownHandler);
      }
    }
    this.container.innerHTML = "";
  }
  mouseDownHandler(event2) {
    console.log("mouseDownHandler");
    event2.target.closest(".resize-handle");
    if (this.startDragHandler) {
      this.startDragHandler(event2.target.dataset.direction);
    }
  }
}
const _sfc_main$7 = {
  props: {
    nodeModel: {
      type: Object
    }
  }
};
var _sfc_render$7 = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _c("g", [_c("text", { ref: "title", class: _vm.nodeModel.options.editableTitle ? "title-editable" : "", attrs: { "x": _vm.nodeModel.width / 2, "y": _vm.nodeModel.height / 2, "width": _vm.nodeModel.width, "text-anchor": "middle", "font-size": "14", "font-weight": "bold", "fill": "#000000" }, on: { "click": function($event) {
    _vm.nodeModel.options.editableTitle ? _vm.$parent.$parent.$parent.editText(_vm.nodeModel, "title", _vm.$refs.title) : void 0;
  } } }, [_vm._v(" " + _vm._s(_vm.nodeModel.title) + " ")]), _c("g", { staticClass: "prevent-node-drag" }, [_vm._t("default")], 2)]);
};
var _sfc_staticRenderFns$7 = [];
_sfc_render$7._withStripped = true;
var __component__$7 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$7,
  _sfc_render$7,
  _sfc_staticRenderFns$7,
  false,
  null,
  null,
  null,
  null
);
__component__$7.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/src/components/NodeTypes/Text.vue";
_sfc_main$7.__file = "src/components/NodeTypes/Text.vue";
const TextNode = __component__$7.exports;
const _sfc_main$6 = {
  props: {
    nodeModel: {
      type: Object
    }
  }
};
var _sfc_render$6 = function render4() {
  var _vm = this, _c = _vm._self._c;
  return _c("g", [_c("image", { attrs: { "href": _vm.nodeModel.options.image, "x": "10", "width": _vm.nodeModel.width - 10, "height": _vm.nodeModel.height } }), _c("text", { ref: "title", class: _vm.nodeModel.options.editableTitle ? "title-editable" : "", attrs: { "x": _vm.nodeModel.width / 2, "y": _vm.nodeModel.height + 14, "width": _vm.nodeModel.width, "text-anchor": "middle", "font-size": "14", "font-weight": "bold", "fill": "#000000" }, on: { "click": function($event) {
    _vm.nodeModel.options.editableTitle ? _vm.$parent.$parent.$parent.editText(_vm.nodeModel, "title", _vm.$refs.title) : void 0;
  } } }, [_vm._v(" " + _vm._s(_vm.nodeModel.title) + " ")]), _c("g", { staticClass: "prevent-node-drag" }, [_vm._t("default")], 2)]);
};
var _sfc_staticRenderFns$6 = [];
_sfc_render$6._withStripped = true;
var __component__$6 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$6,
  _sfc_render$6,
  _sfc_staticRenderFns$6,
  false,
  null,
  null,
  null,
  null
);
__component__$6.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/src/components/NodeTypes/Image.vue";
_sfc_main$6.__file = "src/components/NodeTypes/Image.vue";
const ImageNode = __component__$6.exports;
const _sfc_main$5 = {
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
    color() {
      return this.nodeModel.color || "#66cc00";
    }
  }
};
var _sfc_render$5 = function render5() {
  var _vm = this, _c = _vm._self._c;
  return _c("g", [_c("rect", { staticClass: "node-dark-background", attrs: { "fill": _vm.color, "x": "5", "y": "15", "rx": "3", "ry": "3", "width": _vm.nodeModel.width, "height": _vm.nodeModel.height } }), _c("rect", { staticClass: "node-dark-background", attrs: { "fill": "#000000", "fill-opacity": _vm.titleFillOpacity, "x": "7", "y": "17", "rx": "3", "ry": "3", "width": _vm.nodeModel.width - 4, "height": "16" } }), _c("text", { ref: "title", class: _vm.nodeModel.options.editableTitle ? "title-editable" : "", attrs: { "x": 10, "y": 30, "font-size": "14", "font-weight": "bold", "fill": "#000000" }, on: { "click": function($event) {
    _vm.nodeModel.options.editableTitle ? _vm.$parent.$parent.$parent.editText(_vm.nodeModel, "title", _vm.$refs.title) : void 0;
  } } }, [_vm._v(" " + _vm._s(_vm.nodeModel.title) + " ")]), _vm.nodeModel.deletable ? _c("g", { on: { "click": function($event) {
    return _vm.$emit("deleteNode");
  } } }, [_c("rect", { attrs: { "x": _vm.nodeModel.width - 12, "y": "18", "width": "14", "height": "14", "rx": "2", "ry": "2", "fill": "#ffffff", "fill-opacity": 0.25 } }), _c("line", { staticStyle: { "stroke": "rgb(0,0,0)" }, attrs: { "x1": _vm.nodeModel.width, "y1": 20, "x2": _vm.nodeModel.width - 10, "y2": 30, "stroke-width": "2" } }), _c("line", { staticStyle: { "stroke": "rgb(0,0,0)" }, attrs: { "x1": _vm.nodeModel.width - 10, "y1": 20, "x2": _vm.nodeModel.width, "y2": 30, "stroke-width": "2" } })]) : _vm._e(), _c("rect", { staticClass: "node-light-background", attrs: { "fill": "#ffffff", "x": "7", "y": "35", "rx": "3", "ry": "3", "width": _vm.nodeModel.width - 4, "height": _vm.nodeModel.height - 22 } }), _c("g", { staticClass: "prevent-node-drag" }, [_vm._t("default")], 2)]);
};
var _sfc_staticRenderFns$5 = [];
_sfc_render$5._withStripped = true;
var __component__$5 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$5,
  _sfc_render$5,
  _sfc_staticRenderFns$5,
  false,
  null,
  null,
  null,
  null
);
__component__$5.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/src/components/NodeTypes/Shader.vue";
_sfc_main$5.__file = "src/components/NodeTypes/Shader.vue";
const ShaderNode = __component__$5.exports;
const DiagramNode_vue_vue_type_style_index_0_scoped_1c98675c_lang = "";
const _sfc_main$4 = {
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
  data() {
    return {
      resizeHandles: void 0,
      menu: [{
        label: "Delete node",
        handler() {
          this.deleteNode();
        }
      }]
    };
  },
  beforeDestroy() {
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
    mouseDown(event2) {
      if (!this.$parent.$parent.editable)
        return;
      if (!event2.target.classList.contains("title-editable") && event2.target.closest(".prevent-node-drag") === null) {
        const pos = this.$parent.$parent.convertXYtoViewPort(event2.x, event2.y);
        this.$emit(
          "onStartDrag",
          { type: "nodes", index: this.index },
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
      if (!this.$parent.$parent.editable)
        return;
      this.$emit(
        "onStartDrag",
        { type: "resizeHandle", index: this.index, direction },
        event.x - this.nodeModel.x,
        event.y - this.nodeModel.y
      );
    }
  }
};
var _sfc_render$4 = function render6() {
  var _vm = this, _c = _vm._self._c;
  return _c("svg", { class: `diagram-node ${_vm.selected ? "selected" : ""} has-menu`, attrs: { "x": _vm.nodeModel.x, "y": _vm.nodeModel.y, "data-node-id": _vm.id } }, [_c("rect", { staticClass: "node-dark-background", attrs: { "fill": "#00000000", "stroke": "#000000", "stroke-width": _vm.selected ? 2 : 0, "x": "5", "y": "15", "rx": "3", "ry": "3", "width": _vm.nodeModel.width, "height": _vm.nodeModel.height } }), _c("g", { ref: "resizeHandles" }), _c("g", { on: { "mousedown": _vm.mouseDown, "mouseenter": _vm.mouseenter, "mouseleave": _vm.mouseleave } }, [_c(`vue-diagrams-node-${_vm.options.type || "shader"}`, { tag: "component", attrs: { "nodeModel": _vm.nodeModel, "selected": _vm.selected }, on: { "deleteNode": _vm.deleteNode } }, [_vm._t("default")], 2)], 1)]);
};
var _sfc_staticRenderFns$4 = [];
_sfc_render$4._withStripped = true;
var __component__$4 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$4,
  _sfc_render$4,
  _sfc_staticRenderFns$4,
  false,
  null,
  "1c98675c",
  null,
  null
);
__component__$4.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/src/components/DiagramNode.vue";
_sfc_main$4.__file = "src/components/DiagramNode.vue";
const DiagramNode2 = __component__$4.exports;
const _sfc_main$3 = {
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
  data() {
    return {
      hover: false,
      menu: [{
        label: "Delete point",
        handler() {
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
};
var _sfc_render$3 = function render7() {
  var _vm = this, _c = _vm._self._c;
  return _c("g", { staticClass: "has-menu" }, [_c("circle", { style: _vm.hover ? "stroke:rgba(255,0,0,0.5);" : "stroke:rgba(255,0,0,0.0);", attrs: { "stroke-width": "6", "cx": _vm.x, "cy": _vm.y, "r": "5", "fill": "black" }, on: { "mouseenter": _vm.mouseEnter, "mouseleave": _vm.mouseLeave, "mousedown": function($event) {
    return _vm.$emit("mousedown", $event);
  } } })]);
};
var _sfc_staticRenderFns$3 = [];
_sfc_render$3._withStripped = true;
var __component__$3 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$3,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  false,
  null,
  null,
  null,
  null
);
__component__$3.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/src/components/DiagramPoint.vue";
_sfc_main$3.__file = "src/components/DiagramPoint.vue";
const DiagramPoint = __component__$3.exports;
const _sfc_main$2 = {
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
          this.deleteLink();
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
        var distance = Math.trunc(4 * Math.sqrt(Math.abs(x1 - x2)));
        var path = `M${x1},${y1} C${x1 + distance},${y1} ${x2 - distance},${y2} ${x2},${y2}`;
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
    mouseDownPoint(pos, pointIndex) {
      this.$emit("onStartDrag", {
        type: "points",
        linkIndex: this.index,
        pointIndex
      });
    },
    mouseDown(pos) {
    },
    mouseDownSegment(pos, segmentIndex) {
      if (!this.$parent.editable)
        return;
      this.createPoint(pos.x, pos.y, segmentIndex);
      this.mouseDownPoint(pos, segmentIndex);
    },
    createPoint(x, y, pointIndex) {
      this.$emit("onCreatePoint", x, y, this.index, pointIndex);
    }
  }
};
var _sfc_render$2 = function render8() {
  var _vm = this, _c = _vm._self._c;
  return _c("g", { staticClass: "diagram-link has-menu" }, [_vm.points && _vm.points.length ? _c("g", { on: { "mouseenter": _vm.mouseEnter, "mouseleave": _vm.mouseLeave, "mousedown": _vm.mouseDown } }, [_vm._l(_vm.points, function(point, index) {
    return _c("g", { key: index, on: { "mousedown": function($event) {
      return _vm.mouseDownSegment($event, index);
    } } }, [_c("line", { style: _vm.largeStrokeStyle, attrs: { "x1": index === 0 ? _vm.x1 : _vm.points[index - 1].x, "y1": index === 0 ? _vm.y1 : _vm.points[index - 1].y, "x2": point.x, "y2": point.y, "stroke-width": "8" } }), _c("line", { staticStyle: { "stroke": "rgb(0,0,0)" }, attrs: { "x1": index === 0 ? _vm.x1 : _vm.points[index - 1].x, "y1": index === 0 ? _vm.y1 : _vm.points[index - 1].y, "x2": point.x, "y2": point.y, "stroke-width": "2" } })]);
  }), _c("g", { on: { "mousedown": function($event) {
    return _vm.mouseDownSegment($event, _vm.points.length);
  } } }, [_c("line", { style: _vm.largeStrokeStyle, attrs: { "x1": _vm.points[_vm.points.length - 1].x, "y1": _vm.points[_vm.points.length - 1].y, "x2": _vm.x2, "y2": _vm.y2, "stroke-width": "8" } }), _c("line", { staticStyle: { "stroke": "rgb(0,0,0)" }, attrs: { "x1": _vm.points[_vm.points.length - 1].x, "y1": _vm.points[_vm.points.length - 1].y, "x2": _vm.x2, "y2": _vm.y2, "stroke-width": "2" } })])], 2) : _c("g", { on: { "mouseenter": _vm.mouseEnter, "mouseleave": _vm.mouseLeave, "mousedown": _vm.mouseDown } }, [_c("g", { on: { "mousedown": function($event) {
    return _vm.mouseDownSegment($event, 0);
  } } }, [_c("path", { style: _vm.largeStrokeStyle, attrs: { "d": _vm.curve, "stroke-width": "8", "fill": "none" } }), _c("path", { ref: "curvePath", staticStyle: { "stroke": "rgb(0,0,0)" }, attrs: { "d": _vm.curve, "stroke-width": "2", "fill": "none" } })])]), _vm._l(_vm.points, function(point, pointIndex) {
    return _c("DiagramPoint", { attrs: { "x": point.x, "y": point.y }, on: { "mouseenter": function($event) {
      return _vm.mouseEnterPoint(point);
    }, "mouseleave": function($event) {
      return _vm.mouseLeavePoint(point);
    }, "mousedown": function($event) {
      return _vm.mouseDownPoint($event, pointIndex);
    }, "delete": function($event) {
      return _vm.points.splice(pointIndex, 1);
    } } });
  })], 2);
};
var _sfc_staticRenderFns$2 = [];
_sfc_render$2._withStripped = true;
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  null,
  null,
  null
);
__component__$2.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/src/components/DiagramLink.vue";
_sfc_main$2.__file = "src/components/DiagramLink.vue";
const DiagramLink = __component__$2.exports;
const _sfc_main$1 = {
  name: "DiagramPort",
  props: ["id", "y", "node", "nodeIndex", "port"],
  data() {
    return {
      fill: "#666666",
      menu: [{
        label: "Delete port",
        handler() {
          this.$parent.nodeModel.deletePort(this.id);
          this.$parent.$parent.$parent.updateLinksPositions();
        }
      }, {
        label: "Remove port links",
        handler() {
          this.$parent.nodeModel.removePortLinks(this.id);
        }
      }]
    };
  },
  computed: {
    width() {
      return this.node.width || 72;
    },
    displayedY() {
      if (this.port.options && this.port.options.y) {
        return this.port.options.y;
      } else {
        return this.y + 55;
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
};
var _sfc_render$1 = function render9() {
  var _vm = this, _c = _vm._self._c;
  return _c("g", { staticClass: "diagram-port has-menu" }, [_vm.port.type === "in" ? _c("svg", { attrs: { "y": _vm.displayedY } }, [_c("rect", { ref: "handle", attrs: { "fill": _vm.fill, "x": "0", "y": "0", "rx": "3", "ry": "3", "width": "10", "height": "10" }, on: { "mouseenter": _vm.enter, "mouseleave": _vm.leave, "mousedown": _vm.startDragNewLink, "mouseup": _vm.mouseup } }), _c("text", { attrs: { "x": "12", "y": "9", "font-size": "8pt", "fill": "#000000" } }, [_vm._v(_vm._s(_vm.port.name))])]) : _c("svg", { attrs: { "y": _vm.displayedY } }, [_c("rect", { ref: "handle", attrs: { "fill": _vm.fill, "x": _vm.width, "y": "0", "rx": "3", "ry": "3", "width": "10", "height": "10" }, on: { "mouseenter": _vm.enter, "mouseleave": _vm.leave, "mousedown": _vm.startDragNewLink, "mouseup": _vm.mouseup } }), _c("text", { attrs: { "x": _vm.width - 6, "y": "9", "text-anchor": "end", "font-size": "8pt", "fill": "#000000" } }, [_vm._v(_vm._s(_vm.port.name))])])]);
};
var _sfc_staticRenderFns$1 = [];
_sfc_render$1._withStripped = true;
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null,
  null,
  null
);
__component__$1.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/src/components/DiagramPort.vue";
_sfc_main$1.__file = "src/components/DiagramPort.vue";
const DiagramPort = __component__$1.exports;
const style = "";
const Diagram_vue_vue_type_style_index_0_scoped_2c52bd4f_lang = "";
var generateId = function() {
  return Math.trunc(Math.random() * 1e3);
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
const _sfc_main = {
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
      default: false
    },
    showThumbnail: {
      type: Boolean,
      default: false
    },
    editable: {
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
      mainSelectedItem: {},
      secondarySelectedNodes: [],
      initialDragX: 0,
      initialDragY: 0,
      initialDragY: 0,
      mouseButtonIsPressed: false,
      mouseDownViewportPos: {},
      viewportMousePos: {},
      newLink: void 0,
      mouseX: 0,
      mouseY: 0,
      viewPosition: void 0
    };
  },
  components: {
    Menu,
    TextInput,
    DiagramNode: DiagramNode2,
    DiagramLink,
    DiagramPort,
    SvgPanZoom
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
          if (v === "move") {
            if (this.panEnabled) {
              this.$refs.svgpanzoom.spz.enablePan();
            } else {
              this.$refs.svgpanzoom.spz.disablePan();
            }
          } else {
            this.$refs.svgpanzoom.spz.disablePan();
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
    editText(object, property, element) {
      if (!this.editable)
        return;
      this.$refs.textInput.editText(object, property, element);
    },
    min(a, b) {
      return Math.min(a, b);
    },
    max(a, b) {
      return Math.max(a, b);
    },
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
      if (this.mainSelectedItem.type || this.draggedItem || this.newLink)
        return false;
      else
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
            links[i].positionFrom = { x: coords.x, y: coords.y };
            coords = this.getPortHandlePosition(links[i].to);
            links[i].positionTo = { x: coords.x, y: coords.y };
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
          x = node.x + 10;
          y = node.y + portComponent.displayedY + 9;
        } else {
          x = node.x + node.width + 10;
          y = node.y + portComponent.displayedY + 9;
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
      if (!this.editable)
        return;
      const links = this.model._model.links;
      this.mouseX = pos.x;
      this.mouseY = pos.y;
      this.viewportMousePos = this.convertXYtoViewPort(pos.x, pos.y);
      if (this.mode === "move") {
        if (this.draggedItem) {
          const index = this.draggedItem.index;
          const type = this.draggedItem.type;
          let coords = this.convertXYtoViewPort(this.mouseX, this.mouseY);
          coords.x = snapToGrip(coords.x, this.gridSnap) - this.gridSnap / 2;
          coords.y = snapToGrip(coords.y, this.gridSnap);
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
    mouseDown(event2) {
      if (!this.editable)
        return;
      this.mouseButtonIsPressed = true;
      if (!event2.target.classList.contains("title-editable")) {
        this.$refs.textInput.editText();
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
    }
  }
};
var _sfc_render = function render10() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "vue-diagrams" }, [_vm.showMenu ? _c("Menu") : _vm._e(), _c("TextInput", { ref: "textInput" }), _c("SvgPanZoom", { ref: "svgpanzoom", style: { width: _vm.width + "px", height: _vm.height + "px", border: "1px solid black" }, attrs: { "zoomEnabled": _vm.zoomEnabled, "id": "svgroot", "panEnabled": _vm.panEnabled, "controlIconsEnabled": true, "fit": false, "center": true, "viewportSelector": "#svgroot2", "preventMouseEventsDefault": false, "beforePan": _vm.beforePan } }, [_c("svg", { ref: "dragramRoot", staticClass: "svg-content", attrs: { "id": "svgroot2", "version": "1.1", "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 " + _vm.width + " " + _vm.height, "width": _vm.width, "height": _vm.height, "preserveAspectRatio": "xMinYMin meet" }, on: { "mousemove": _vm.mouseMove, "mouseup": _vm.mouseUp, "mousedown": _vm.mouseDown } }, [_c("defs", [_c("pattern", { attrs: { "id": "smallGrid", "width": "16", "height": "16", "patternUnits": "userSpaceOnUse" } }, [_c("path", { attrs: { "d": "M 16 0 L 0 0 0 16", "fill": "none", "stroke": "#ccc", "stroke-width": "1" } })]), _c("pattern", { attrs: { "id": "grid", "width": "80", "height": "80", "patternUnits": "userSpaceOnUse" } }, [_c("rect", { attrs: { "width": "80", "height": "80", "fill": "url(#smallGrid)" } }), _c("path", { attrs: { "d": "M 80 0 L 0 0 0 80", "fill": "none", "stroke": "gray", "stroke-width": "1" } })])]), _c("rect", { ref: "grid", staticClass: "svg-pan-zoom_viewport", attrs: { "x": "-5000px", "y": "-5000px", "width": "10000px", "height": "10000px", "fill": "url(#grid)" }, on: { "mousedown": _vm.clearSelection } }), _c("g", { ref: "viewPort", attrs: { "id": "viewport", "x": "50", "y": "50" } }, [_vm._l(_vm.model._model.links, function(link, index) {
    return _c("DiagramLink", { ref: "link-" + link.id, refInFor: true, attrs: { "positionFrom": link.positionFrom, "positionTo": link.positionTo, "points": link.points, "id": link.id, "index": index, "options": link.options }, on: { "onStartDrag": _vm.startDragPoint, "onCreatePoint": _vm.createPoint, "delete": function($event) {
      return _vm.model.deleteLink(link);
    } } });
  }), _vm.newLink ? _c("line", { staticStyle: { "stroke": "rgb(255,0,0)", "stroke-width": "2" }, attrs: { "x1": _vm.getPortHandlePosition(_vm.newLink.startPortId).x, "y1": _vm.getPortHandlePosition(_vm.newLink.startPortId).y, "x2": _vm.convertXYtoViewPort(_vm.mouseX, 0).x, "y2": _vm.convertXYtoViewPort(0, _vm.mouseY).y } }) : _vm._e(), _vm._l(_vm.model._model.nodes, function(node, nodeIndex) {
    return _c("DiagramNode", { ref: "node-" + nodeIndex, refInFor: true, attrs: { "title": node.title, "nodeModel": node, "x": node.x, "y": node.y, "id": node.id, "width": node.width, "height": node.height, "ports": node.ports, "selected": _vm.mainSelectedItem.type === "nodes" && _vm.mainSelectedItem.index === nodeIndex || _vm.secondarySelectedNodes.indexOf(node) !== -1, "options": node.options, "index": nodeIndex }, on: { "onStartDrag": _vm.startDragItem, "delete": function($event) {
      return _vm.model.deleteNode(node);
    } } }, _vm._l(node.ports, function(port, portIndex) {
      return _c("DiagramPort", { ref: "port-" + port.id, refInFor: true, attrs: { "id": port.id, "nodeIndex": nodeIndex, "y": portIndex * 20, "node": node, "port": port }, on: { "onStartDragNewLink": _vm.startDragNewLink, "mouseUpPort": _vm.mouseUpPort } });
    }), 1);
  }), _vm.mode === "select" && _vm.mouseButtonIsPressed ? _c("rect", { attrs: { "x": _vm.min(_vm.viewportMousePos.x, _vm.mouseDownViewportPos.x), "y": _vm.min(_vm.viewportMousePos.y, _vm.mouseDownViewportPos.y), "width": _vm.max(_vm.viewportMousePos.x, _vm.mouseDownViewportPos.x) - _vm.min(_vm.viewportMousePos.x, _vm.mouseDownViewportPos.x), "height": _vm.max(_vm.viewportMousePos.y, _vm.mouseDownViewportPos.y) - _vm.min(_vm.viewportMousePos.y, _vm.mouseDownViewportPos.y), "fill": "#000000", "fill-opacity": 0.5 } }) : _vm._e()], 2)]), _vm.showThumbnail ? _c("svg", { staticClass: "thumbViewClass", attrs: { "slot": "thumbnail" }, slot: "thumbnail" }, [_vm._l(_vm.model._model.nodes, function(node, nodeIndex) {
    return _c("rect", { key: node.id, attrs: { "x": node.x, "y": node.y, "width": node.width, "height": node.height, "fill": node.color || "#66cc00" } });
  }), _vm._l(_vm.model._model.links, function(link, index) {
    return _c("DiagramLink", { attrs: { "positionFrom": link.positionFrom, "positionTo": link.positionTo, "points": link.points, "id": link.id, "index": index, "options": link.options } });
  })], 2) : _vm._e()])], 1);
};
var _sfc_staticRenderFns = [];
_sfc_render._withStripped = true;
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "2c52bd4f",
  null,
  null
);
__component__.options.__file = "/home/runner/work/vue-diagrams/vue-diagrams/src/components/Diagram.vue";
_sfc_main.__file = "src/components/Diagram.vue";
const Diagram = __component__.exports;
export {
  Diagram as D,
  normalizeComponent as n
};
