var generateId = function() {
  return Math.trunc(Math.random() * 1000);
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
  constructor(id, title, x, y, width, height) {
    this.title = title;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ports = [];
    this.directedPorts = [];
    this.undirectedPorts = [];
  }

  /**
   * Adds a new "in" port into the node.
   * @param {String} name
   * @return {Integer} The port id
   */
  addInPort(name) {
    let newPort = {
      id: generateId(),
      type: "in",
      name
    };

    this.ports.push(newPort);
    this.directedPorts.push(newPort);

    return newPort.id;
  }

  /**
   * Adds a new "out" port into the node.
   * @param {String} name
   * @return {Integer} The port id
   */
  addOutPort(name) {
    let newPort = {
      id: generateId(),
      type: "out",
      name
    };

    this.ports.push(newPort);
    this.directedPorts.push(newPort);

    return newPort.id;
  }

  /**
   * Adds a new "both" port into the node.
   * @param {String} name
   * @return {Integer} The port id
   */
  addBothPort(name) {
    let newPort = {
      id: generateId(),
      type: "left",
      name
    };

    this.ports.push(newPort);
    this.undirectedPorts.push(newPort);

    newPort = {
      id: generateId(),
      type: "right",
      name
    };

    this.ports.push(newPort);
    this.undirectedPorts.push(newPort);

    return newPort.id;
  }

  /**
   * Adds a new "node" port into the node.
   * @param {String} name
   * @return {Integer} The port id
   */
  addNodePort(name) {
    let newPort = {
      id: generateId(),
      type: "node",
      name
    };

    this.ports.push(newPort);
    this.directedPorts.push(newPort);

    return newPort.id;
  }
}

export default DiagramNode;
