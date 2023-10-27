/// <reference types="vite/client" />
declare module '*';

declare namespace SvgPanZoom {
  interface Instance {}
  interface Point {}
}


declare interface SVGElement {
  getCTM: Function,
  createSVGPoint: Function
}

declare type SvgInHtml = HTMLElement & SVGElement;

declare interface Point {
  x: number,
  y: number,
}

declare interface ClickEvent {
  x: number,
  y: number,
  target: any,
}
