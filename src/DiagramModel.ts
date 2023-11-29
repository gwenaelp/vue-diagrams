// @ts-check
import DiagramNode from "./DiagramNode";

var generateId = function() {
  return Math.trunc(Math.random() * 1000);
};

/**
 * @class DiagramModel
 */
class DiagramModel {
  private _model: any;

  constructor() {
    this._model = {
      nodes: [],
      links: [],
    };
  }

  /**
   * Adds a node to the diagram
   */
  addNode(title: string, x: number, y: number, width: number, height: number, options: Object): Object /* FIXME: DiagramNode */ {
    if (options === undefined) {
      options = {};
    }
    const newNode = new DiagramNode(this, generateId(), title, x, y, width, height, options);
    this._model.nodes.push(newNode);
    return newNode;
  }

  deleteNode(node: { ports: Array<any> }) { //FIXME any
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

  deleteLink(link: Object) { //FIXME link
    const index = this._model.links.indexOf(link);
    this._model.links.splice(index, 1);
  }

  /**
   * Adds a link between two ports
   */
  addLink(from: number, to: number, points:Array<any> = [], options = {}) {
    this._model.links.push({
      id: generateId(),
      from: from,
      to: to,
      positionFrom: {},
      positionTo: {},
      points,
      options,
    });
  }

  /**
   * Serializes the diagram model into a JSON object
   * @return {Object} The diagram model
   */
  serialize() {
    //FIXME
    //return JSON.stringify(this._model);
  }

  /**
   * Load into the diagram model a serialized diagram
   * @param  {Object} serializedModel
   */
  deserialize(serializedModel: string) {
    this._model = JSON.parse(serializedModel);
  }
}

export default DiagramModel;
