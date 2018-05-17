var generateId = function() {
  return Math.trunc(Math.random() * 1000);
};

class DiagramNode {
  constructor(title, x, y, width, height) {
    this.title = title;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ports = [];
  }

  addInPort(name) {
    let newPort = {
      id: generateId(),
      type: "in",
      name
    };

    this.ports.push(newPort);

    return newPort.id;
  }

  addOutPort(name) {
    let newPort = {
      id: generateId(),
      type: "out",
      name
    };

    this.ports.push(newPort);

    return newPort.id;
  }
}

export default DiagramNode;
