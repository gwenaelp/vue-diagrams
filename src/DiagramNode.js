// @ts-check
var generateId = function() {
  return Math.trunc(Math.random() * 1000);
};

const diagramFor = {};

/**
 * @class DiagramNode
 */
class DiagramNode {
  /**
   *  This should not be called directly. Use the "addNode" method from the DiagramModel class
   * @param {Object} diagram
   * @param {number} id
   * @param {String} title
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param {Object} options
   */
  constructor(diagram, id, title, x, y, width, height, options) {
    //This is done like that to avoid circular deps and keep this class to work with stringify :)
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
      id: generateId(),
      type: "in",
      name,
      options,
    };

    this.ports.push(newPort);

    return newPort.id;
  }

  /**
   * Adds a new "out" port into the node.
   * @param {String} name
   * @return {number} The port id
   */
  addOutPort(name, options) {
    let newPort = {
      id: generateId(),
      type: "out",
      name,
      options,
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
    this.ports = this.ports.filter(p => p.id !== id);
  }

}

export default DiagramNode;
