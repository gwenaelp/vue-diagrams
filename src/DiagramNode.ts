// @ts-check
var generateId = function() {
  return Math.trunc(Math.random() * 1000);
};

const diagramFor: { [key: number]: Object } = {};

class DiagramNode {
  id: number;
  title: string;
  diagram: Object;
  x: number;
  y: number;
  width: number;
  height: number;
  options: Object;
  ports: Array<Object>;
  /**
   *  This should not be called directly. Use the "addNode" method from the DiagramModel class
   */
  constructor(diagram: Object, id: number, title: string, x: number, y: number, width: number, height: number, options: Object) {
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
  addInPort(name: string, options: Object): number {
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
   */
  addOutPort(name: string, options: Object): number {
    let newPort = {
      id: generateId(),
      type: "out",
      name,
      options,
    };

    this.ports.push(newPort);

    return newPort.id;
  }

  removePortLinks(id: number) {
    for (let l of (diagramFor[id] as any)._model.links) {
      if (l.from === id || l.to === id) {
        (this.diagram as any).deleteLink(l);
      }
    }
  }

  deletePort(id: number) {
    this.removePortLinks(id);
    this.ports = this.ports.filter(p => (p as any).id !== id);
  }

}

export default DiagramNode;
