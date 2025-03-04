// @ts-check
import DiagramNode from "./DiagramNode";
import Emitter from 'tiny-emitter';
import generateId from './generateId';
import type { Point } from "./types/Point";

type Port = any;
type DiagramLink = any;
export type InternalDiagramModel = {
  nodes: Array<DiagramNode>;
  links: Array<DiagramLink>;
}
/**
 * @class DiagramModel
 */
class DiagramModel {
  _model: InternalDiagramModel;
  public emitter: any;

  constructor() {
    this._model = {
      nodes: [],
      links: [],
    };
    this.emitter = new (Emitter as any)();
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

  deleteNode(node: DiagramNode) { //FIXME any
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
    //this.emitter.emit('deleteNode', node);
  }

  deleteLink(link: Object) { //FIXME link
    const index = this._model.links.indexOf(link);
    this.emitter.emit('deleteLink', link);
    this._model.links.splice(index, 1);
  }

  /**
   * Adds a link between two ports
   */
  addLink(from: Port, to: Port, points:Array<Point> = [], options = {}) {
    this._model.links.push({
      id: generateId(),
      from: from.id || from,
      to: to.id || to,
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
      nodes: [] as any[],
      links: [] as any[],
    };
    for (let n of this._model.nodes) {
      const serializedNode: Record<string, any> = {};
      const nodeToProcess = n as any;
      for (let k of Object.keys(n)) {
        if (k !== 'diagram') {
          serializedNode[k] = nodeToProcess[k];
        }
      }
      res.nodes.push(serializedNode);
    }
    for (let l of this._model.links) {
      const serializedLink: Record<string, any> = {};
      const linkToProcess = l as any;
      for (let k of Object.keys(l)) {
        if (k !== 'diagram') {
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
  deserialize(serializedModel: string) {
    this._model = JSON.parse(serializedModel);
    for (let i = 0 ; i <= this._model.nodes.length; i++) {
      const newNode = this._model.nodes[i];
      if (newNode) {
        this._model.nodes[i] = new DiagramNode(this, newNode.id, newNode.title);
        for (let k of Object.keys(newNode)) {
          this._model.nodes[i][k] = newNode[k];
        }
      }
    }
    this.emitter.emit('deserialize');
  }
}

export default DiagramModel;
