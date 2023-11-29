// @ts-check
//We could have put this in a Vue component, but I try to make the lib framework agnostic over time :)

let startDragHandler = undefined;

const directions = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];

/**
 * @class ResizeHandles
 */
 class ResizeHandles {
  container: HTMLElement;
  startDragHandler?: (event: any) => void;

  constructor(container: HTMLElement, width: number, height: number, startDragHandler?: (event: any) => void) {
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
      container.querySelector<HTMLElement>(`[data-direction="${d}"]`)?.addEventListener('mousedown', this.mouseDownHandler);
    }
    this.updatePosition(width, height);
  }
  /**
   * @param  {number} width
   * @param  {number} height
   */
  updatePosition(width: number, height:number) {
    const n = this.container.querySelector('[data-direction="n"]');
    const ne = this.container.querySelector('[data-direction="ne"]');
    const e = this.container.querySelector('[data-direction="e"]');
    const se = this.container.querySelector('[data-direction="se"]');
    const s = this.container.querySelector('[data-direction="s"]');
    const sw = this.container.querySelector('[data-direction="sw"]');
    const w = this.container.querySelector('[data-direction="w"]');

    n?.setAttribute('width', width.toString());
    ne?.setAttribute('x', width.toString());
    e?.setAttribute('x', width.toString());
    e?.setAttribute('height', height.toString());
    se?.setAttribute('x', width.toString());
    se?.setAttribute('y', height.toString());
    s?.setAttribute('y', height.toString());
    s?.setAttribute('width', width.toString());
    sw?.setAttribute('y', height.toString());
    w?.setAttribute('height', height.toString());
  }
  unmount() {
    if (this.startDragHandler) {
      for (let d of directions) {
        this.container.querySelector<HTMLElement>(`[data-direction="${d}"]`)?.removeEventListener('mousedown', this.mouseDownHandler);
      }
    }
    this.container.innerHTML = '';
  }
  mouseDownHandler (event: MouseEvent) {
    console.log('mouseDownHandler');
    if(event.target) {
      const target = event.target as HTMLElement;
      const direction = target?.closest('.resize-handle')
      if (this.startDragHandler) {
        this.startDragHandler(target.dataset.direction);
      }
    }
  }
};

export default ResizeHandles;
