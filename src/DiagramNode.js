var generateId = function() {
  return Math.trunc(Math.random() * 1000000);
};

/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 *
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 *
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
function getTextWidth(text, font) {
  // re-use canvas object for better performance
  var canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement("canvas"));
  var context = canvas.getContext("2d");
  context.font = font;
  var metrics = context.measureText(text);
  return metrics.width;
}

/**
 * @class DiagramNode
 */
class DiagramNode {
  /**
   *  This should not be called directly. Use the "addNode" method from the DiagramModel class
   * @param  {String} title  [description]
   * @param  {Integer} x      [description]
   * @param  {Integer} y      [description]
   * @param  {Integer} width  [description]
   * @param  {Integer} height [description]
   * @param  {Integer} id [description]
   */
  constructor(id, object, x, y, width, height) {
    if (typeof object === "object") {
      this.object = object;
      this.title = object.title;
    } else {
      this.title = object;
    }
    this.x = x;
    this.y = y;

    this.width = width ? width : 10;
    this.height = height ? height : 10;
    this.ports = [];
    this.recalculateNodeWidth();
  }

  /**
   * Adds a new "in" port into the node.
   * @param {String} name
   * @return {Integer} The port id
   */
  addInPort(object) {
    return this.addPort(object, "in");
  }

  /**
   * Adds a new "out" port into the node.
   * @param {String} name
   * @return {Integer} The port id
   */
  addOutPort(object) {
    return this.addPort(object, "out");
  }

  /**
   * Adds a new port into the node.
   * @param {String} name
   * @param {String} type
   * @return {Integer} The port id
   */
  addPort(object, type) {
    let newPort = {
      id: generateId(),
      type: type,
      deletable: undefined,
      isASpacer: undefined,
      fontSize: 8,
      fontFamily: "sans-serif",
      connectorCategory: "",
      connectorCategoryTextColor: undefined,
      connectorCategoryTagColor: undefined,
      connectorCategoryTagColorHover: undefined,
      connectorNameTagColor: undefined,
      connectorNameTextColor: undefined
    };

    if (typeof object === "object") {
      newPort.object = object;
      newPort.name = object.title;
      newPort.deletable = object.deletable;
      newPort.isASpacer = object.isASpacer;
      newPort.fontSize = object.fontSize;
      newPort.fontFamily = object.fontFamily;
      newPort.connectorCategory = object.connectorCategory;
      newPort.connectorCategoryTextColor = object.connectorCategoryTextColor;
      newPort.connectorCategoryTagColor = object.connectorCategoryTagColor;
      newPort.connectorCategoryTagColorHover =
        object.connectorCategoryTagColorHover;
      newPort.connectorNameTagColor = object.connectorNameTagColor;
      newPort.connectorNameTextColor = object.connectorNameTextColor;
    } else {
      newPort.name = object;
    }

    this.ports.push(newPort);

    this.recalculateNodeWidth();

    return newPort.id;
  }

  /**
   * Recalculate the width of the node based on its ports sizes.
   */
  recalculateNodeWidth() {
    let maxWidthIn = 0;
    let maxWidthOut = 0;
    let portWidth = 0;
    const widthMargin = 70 + 5;

    // Check the width required for the Title
    let newWidth =
      getTextWidth(this.title, "bold 14pt sans-serif") * 0.85 +
      20 /* for the thickness and spaces around */ +
      14; /* for the Delete/Close button */
    if (this.width < newWidth) {
      this.width = newWidth;
    }

    // Check the width required for the longest In and Out ports
    this.ports.forEach(p => {
      portWidth = getTextWidth(p.name, p.fontSize + "pt " + p.fontFamily);

      if (p.type === "in" && portWidth > maxWidthIn) {
        maxWidthIn = portWidth;
      }
      if (p.type === "out" && portWidth > maxWidthOut) {
        maxWidthOut = portWidth;
      }
    });

    if (this.width < maxWidthIn + maxWidthOut + widthMargin) {
      this.width = maxWidthIn + maxWidthOut + widthMargin;
    }
  }
}

export default DiagramNode;
