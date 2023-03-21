//We could have put this in a Vue component, but I try to make the lib framework agnostic over time :)

let startDragHandler = undefined;

const directions = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];

class ResizeHandles {
  constructor(container, width, height, startDragHandler) {
    this.container = container;
    container.innerHTML = `
      <rect class="resize-handle edge" data-direction="nw" x="-2" y="-5" width="5" height="5" />
      <rect class="resize-handle" data-direction="n" x="0" y="-3" height="3" />
      <rect class="resize-handle edge" data-direction="ne" y="-5" width="5" height="5" />
      <rect class="resize-handle" data-direction="e" y="0" width="3" />
      <rect class="resize-handle edge" data-direction="se" width="5" height="5" />
      <rect class="resize-handle" data-direction="s" x="0" height="3" />
      <rect class="resize-handle edge" data-direction="sw" x="-2" width="5" height="5" />
      <rect class="resize-handle" data-direction="w" x="-2" y="0" width="3" />
    `;

    this.startDragHandler = startDragHandler;
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    for (let d of directions) {
      container.querySelector(`[data-direction="${d}"]`).addEventListener('mousedown', this.mouseDownHandler);
    }
    this.updatePosition(width, height);
  }
  updatePosition(width, height) {
    const n = this.container.querySelector('[data-direction="n"]');
    const ne = this.container.querySelector('[data-direction="ne"]');
    const e = this.container.querySelector('[data-direction="e"]');
    const se = this.container.querySelector('[data-direction="se"]');
    const s = this.container.querySelector('[data-direction="s"]');
    const sw = this.container.querySelector('[data-direction="sw"]');
    const w = this.container.querySelector('[data-direction="w"]');

    n.setAttribute('width', width);
    ne.setAttribute('x', width);
    e.setAttribute('x', width);
    e.setAttribute('height', height);
    se.setAttribute('x', width);
    se.setAttribute('y', height);
    s.setAttribute('y', height);
    s.setAttribute('width', width);
    sw.setAttribute('y', height);
    w.setAttribute('height', height);
  }
  unmount() {
    console.log('unmount', this.startDragHandler);
    if (this.startDragHandler) {
      for (let d of directions) {
        this.container.querySelector(`[data-direction="${d}"]`).removeEventListener('mousedown', this.mouseDownHandler);
      }
    }
    this.container.innerHTML = '';
  }
  mouseDownHandler (event) {
    console.log('mouseDownHandler');
    const direction = event.target.closest('.resize-handle')
    if (this.startDragHandler) {
      this.startDragHandler(event.target.dataset.direction);
    }
  }
};

export default ResizeHandles;
