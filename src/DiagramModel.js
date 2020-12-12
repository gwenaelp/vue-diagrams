import DiagramNode from "./DiagramNode";

/**
 * Generate a UUID (v1)
 * @param {Integer} c clock-seq-and-reserved clock-seq-low
 * @return {String} The UUID
 * http://www.rfcreader.com/#rfc4122_line385 allows random instead of MAC address
 * https://www.famkruithof.net/uuid/uuidgen
 * https://realityripple.com/Tools/UnUUID/
 */
export function generateId(c = 9999) {
  const t = ((Date.now() + 12219292800000) * 1e4).toString(16);
  const n = crypto.getRandomValues(new Uint8Array(6)).reduce((sum, x, i) => {
    return sum + (i === 0 ? x | 1 : x).toString(16).padStart(2, "0");
  }, "");
  return `${t.slice(-8)}-${t.slice(-12, -8)}-1${t.slice(0, 3)}-${c}-${n}`;
}

/**
 * @class DiagramModel
 */
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
   * @return {Node} The node created
   */
  addNode(object, x, y, width, height) {
    let id = null;
    if (typeof object === "object") {
      if (object.id != undefined) {
        id = object.id;
      }
    }
    if (id === null) {
      id = generateId();
    }
    const newNode = new DiagramNode(id, object, x, y, width, height);
    this._model.nodes.push(newNode);
    return newNode;
  }

  deleteNode(node) {
    const index = this._model.nodes.indexOf(node);
    for (var j = 0; j < this._model.links.length; j++) {
      const currentLink = this._model.links[j];

      for (var i = 0; i < node.ports.length; i++) {
        const currentPort = node.ports[i];

        if (
          currentLink.from === currentPort.id ||
          currentLink.to === currentPort.id
        ) {
          this.deleteLink(currentLink);
          j--;
        }
      }
    }
    this._model.nodes.splice(index, 1);
  }

  /**
   * Removes a port.
   */
  removePort(node, port) {
    const index = node.ports.indexOf(port);
    for (var j = 0; j < this._model.links.length; j++) {
      const currentLink = this._model.links[j];
      if (currentLink.from === port.id || currentLink.to === port.id) {
        this.deleteLink(currentLink);
        j--;
      }
    }
    node.ports.splice(index, 1);
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
   */
  addLink(from, to, points = []) {
    this._model.links.push({
      id: generateId(),
      from: from,
      to: to,
      positionFrom: { x: 0, y: 0 },
      positionTo: { x: 0, y: 0 },
      points
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

export default DiagramModel;
