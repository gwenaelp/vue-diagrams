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
    let newWidth =
      getTextWidth(this.title, "bold 14pt sans") * 0.85 +
      20 /* for the thickness and spaces around */ +
      14; /* for the Delete/Close button */
    if (width > newWidth) {
      this.width = width;
    } else {
      this.width = newWidth;
    }
    this.height = height;
    this.ports = [];
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
      type: type
    };

    if (typeof object === "object") {
      newPort.object = object;
      newPort.name = object.title;
    } else {
      newPort.name = object;
    }

    this.ports.push(newPort);

    return newPort.id;
  }
}

export default DiagramNode;
