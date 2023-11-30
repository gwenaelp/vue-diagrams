/// <reference types="vite/client" />
declare module '*';

declare namespace SvgPanZoom {
  interface Instance {}
  interface Point {}
}


declare interface ClickEvent {
  x: number,
  y: number,
  target: EventTarget,
}
