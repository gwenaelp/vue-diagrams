// @ts-check
import DiagramNode from "./DiagramNode";
import Emitter from 'tiny-emitter';
import generateId from './generateId.ts';

/**
 * @class DiagramModel
 */
class DiagramModel {
  private _model: any;
  public emitter: any;

  constructor() {
    this._model = {
      nodes: [],
      links: [],
    };
    this.emitter = new Emitter();
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

      if (node.ports.length) {
        for (let i = 0; i < node.ports.length; i++) {
          const currentPort = node.ports[i];

          if (currentLink.from === currentPort.id || currentLink.to === currentPort.id) {
            this.deleteLink(currentLink);
            j--;
          }
        }
      }
    }
    this.emitter.emit('deleteNode', node);
    this._model.nodes.splice(index, 1);
  }

  deleteLink(link: Object) { //FIXME link
    const index = this._model.links.indexOf(link);
    this.emitter.emit('deleteLink', link);
    this._model.links.splice(index, 1);
  }

  /**
   * Adds a link between two ports
   */
  addLink(from: number, to: number, points:Array<Point> = [], options = {}) {
    this._model.links.push({
      id: generateId(),
      from: from,
      to: to,
      positionFrom: {},
      positionTo: {},
      points,
      options,
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
      links: [],
    }
    for (let n of this._model.nodes) {
      const serializedNode = {};
      for(let k of Object.keys(n)) {
        if(k !== 'diagram') {
          serializedNode[k] = n[k];
        }
      }
      res.nodes.push(serializedNode);
    }
    for (let l of this._model.links) {
      const serializedLink = {};
      for(let k of Object.keys(l)) {
        if(k !== 'diagram') {
          serializedLink[k] = l[k];
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
  deserialize(serializedModel: string) {
    this._model = JSON.parse(serializedModel);
    for(let i = 0 ; i <= this._model.nodes.length; i++) {
      const newNode = this._model.nodes[i];
      if (newNode) {
        this._model.nodes[i] = new DiagramNode(this, newNode.id, newNode.title);
        for (let k of Object.keys(newNode)) {
          this._model.nodes[i][k] = newNode[k];
        }
      }
    }
  }
}

export default DiagramModel;
