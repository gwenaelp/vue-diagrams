import DiagramNode from "./DiagramNode";

var generateId = function() {
  return Math.trunc(Math.random() * 1000);
};

class DiagramModel {
  constructor() {
    this._model = {
      nodes: [],
      links: []
    };
  }

  addNode(title, x, y, width, height) {
    let newNode = new DiagramNode(title, x, y, width, height);
    this._model.nodes.push(newNode);
    return newNode;
  }

  addLink(from, to, points = []) {
    this._model.links.push({
      id: generateId(),
      from: from,
      to: to,
      positionFrom: {},
      positionTo: {},
      points
    });
  }
}

export default DiagramModel;
