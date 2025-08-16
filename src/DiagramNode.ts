// @ts-check
import generateId from './generateId';
import type { DiagramPort } from './types/DiagramPort.ts';

const diagramFor: { [key: number]: Object } = {};

class DiagramNode {
  id: number;
  title: string;
  diagram: Object;
  x: number;
  y: number;
  width: number;
  height: number;
  options: Record<string, any>;
  ports: Array<DiagramPort>;
  type?: string;
  /**
   *  This should not be called directly. Use the "addNode" method from the DiagramModel class
   */
  constructor(diagram: Object, id: number, title: string, x?: number, y?: number, width?: number, height?: number, options?: Object) {
    //This is done like that to avoid circular deps and keep this class to work with stringify :)
    diagramFor[id] = diagram;
    this.diagram = diagram;
    this.id = id;
    this.title = title;
    //this.diagram = diagram;
    this.x = x || 0;
    this.y = y || 0;
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
  //FIXME DiagramPort or number as return?
  addInPort(name: string, options?: Object): DiagramPort {
    let newPort = {
      id: generateId(),
      type: "in",
      name,
      options,
    };

    this.ports.push(newPort);

    return newPort;
  }

  /**
   * Adds a new "out" port into the node.
   */
  //FIXME return value is number or port?
  addOutPort(name: string, options?: Object): DiagramPort {
    let newPort = {
      id: generateId(),
      type: "out",
      name,
      options,
    };

    this.ports.push(newPort);

    return newPort;
  }

  removePortLinks(id: number) {
    for (let l of (this.diagram as any)._model.links) {
      if (l.from === id || l.to === id) {
        (this.diagram as any).deleteLink(l);
      }
    }
  }

  deletePort(_id: number) {
    /*
    this.removePortLinks(id);
    this.diagram._model.nodes = this.diagram._model.nodes.map(n => {
      if (n.id === this.id) {
        const oldLength = n.ports.length;
        n.ports = n.ports.filter(p => p.id !== id);
        console.log('found node', n, oldLength, n.ports.length);

      }
      return n;
    });
    this.ports = this.ports.filter(p => (p as any).id !== id);
    (this.diagram as any).emitter.emit('deletePort', id);
    */
    throw 'FIXME';
  }
  [key: string]: any;
}

export default DiagramNode;
