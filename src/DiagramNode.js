var generateId = function() {
  return Math.trunc(Math.random() * 1000000);
};

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
    this.width = width;
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
