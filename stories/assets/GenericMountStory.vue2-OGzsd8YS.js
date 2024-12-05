import { Q as defineAsyncComponent, R as createRouter, S as createWebHistory, U as createWebHashHistory, V as useDark, W as useToggle, k as watch, X as markRaw, E as reactive, d as defineComponent, r as ref, Y as watchEffect, o as openBlock, q as createBlock, Z as mergeProps, _ as resolveDynamicComponent, h as createCommentVNode } from "./vendor-AwDNLYHP.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep, importerUrl);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./basic.story-OgrhPAC7.js"), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./custom-port-position.story-UO-jRJHW.js"), true ? __vite__mapDeps([3,1,2]) : void 0, import.meta.url));
const Comp2 = defineAsyncComponent(() => __vitePreload(() => import("./editable-titles.story-bpZf-hEK.js"), true ? __vite__mapDeps([4,1,2]) : void 0, import.meta.url));
const Comp3 = defineAsyncComponent(() => __vitePreload(() => import("./layouts.story-e9J1TAEY.js"), true ? __vite__mapDeps([5,1,2]) : void 0, import.meta.url));
const Comp4 = defineAsyncComponent(() => __vitePreload(() => import("./menu.story-CJ6M-R9X.js"), true ? __vite__mapDeps([6,1,2]) : void 0, import.meta.url));
const Comp5 = defineAsyncComponent(() => __vitePreload(() => import("./port-tooltips.story-wQwXOnsQ.js"), true ? __vite__mapDeps([7,1,2]) : void 0, import.meta.url));
const Comp6 = defineAsyncComponent(() => __vitePreload(() => import("./resize.story-c3ZyOjGC.js"), true ? __vite__mapDeps([8,1,2]) : void 0, import.meta.url));
const Comp7 = defineAsyncComponent(() => __vitePreload(() => import("./serialization-deserialization.story-Da1phT-f.js"), true ? __vite__mapDeps([9,1,2]) : void 0, import.meta.url));
const Comp8 = defineAsyncComponent(() => __vitePreload(() => import("./websiteDemo.story-3oMvaipI.js"), true ? __vite__mapDeps([10,1,2]) : void 0, import.meta.url));
const Comp9 = defineAsyncComponent(() => __vitePreload(() => import("./manipulating-view.story-Nod-7Max.js"), true ? __vite__mapDeps([11,1,2]) : void 0, import.meta.url));
const Comp10 = defineAsyncComponent(() => __vitePreload(() => import("./custom-nodes.story-Dn1qjK33.js"), true ? __vite__mapDeps([12,2,1]) : void 0, import.meta.url));
const Comp11 = defineAsyncComponent(() => __vitePreload(() => import("./diagram-dimensions.story-PoEMS_JY.js"), true ? __vite__mapDeps([13,1,2]) : void 0, import.meta.url));
const Comp12 = defineAsyncComponent(() => __vitePreload(() => import("./dropping-node.story--pALkmWy.js"), true ? __vite__mapDeps([14,1,2]) : void 0, import.meta.url));
const Comp13 = defineAsyncComponent(() => __vitePreload(() => import("./edit-locked.story-8qO_ETaQ.js"), true ? __vite__mapDeps([15,1,2]) : void 0, import.meta.url));
const Comp14 = defineAsyncComponent(() => __vitePreload(() => import("./grid-snap.story-PFUPofl3.js"), true ? __vite__mapDeps([16,1,2]) : void 0, import.meta.url));
const Comp15 = defineAsyncComponent(() => __vitePreload(() => import("./modes.story-yuLIcqjw.js"), true ? __vite__mapDeps([17,1,2]) : void 0, import.meta.url));
const Comp16 = defineAsyncComponent(() => __vitePreload(() => import("./thumbnail.story-MmqJXj1G.js"), true ? __vite__mapDeps([18,1,2]) : void 0, import.meta.url));
const Comp17 = defineAsyncComponent(() => __vitePreload(() => import("./card.story-Bpi0QSIR.js"), true ? __vite__mapDeps([19,1,2]) : void 0, import.meta.url));
const Comp18 = defineAsyncComponent(() => __vitePreload(() => import("./images.story-6xQprUSz.js"), true ? __vite__mapDeps([20,1,2]) : void 0, import.meta.url));
const Comp19 = defineAsyncComponent(() => __vitePreload(() => import("./styles.story-w_ZqPGeB.js"), true ? __vite__mapDeps([21,1,2]) : void 0, import.meta.url));
const Comp20 = defineAsyncComponent(() => __vitePreload(() => import("./text-nodes.story-TCAEG8j4.js"), true ? __vite__mapDeps([22,1,2]) : void 0, import.meta.url));
const Comp21 = defineAsyncComponent(() => __vitePreload(() => import("./ShaderNodes.story-7w78BE7N.js"), true ? __vite__mapDeps([23,1,2]) : void 0, import.meta.url));
let files = [
  { "id": "stories-basic-story-vue", "path": ["Simple usage", "Basic"], "filePath": "stories/basic.story.vue", "story": { "id": "stories-basic-story-vue", "title": "Basic", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-basic-story-vue-nhxL0-Ej.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-custom-port-position-story-vue", "path": ["Simple usage", "Custom port position"], "filePath": "stories/custom-port-position.story.vue", "story": { "id": "stories-custom-port-position-story-vue", "title": "Custom port position", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-custom-port-position-story-vue-VlUpy3a_.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-editable-titles-story-vue", "path": ["Simple usage", "Editable titles"], "filePath": "stories/editable-titles.story.vue", "story": { "id": "stories-editable-titles-story-vue", "title": "Editable titles", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 2, component: Comp2, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-editable-titles-story-vue-oGGcghlG.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-layouts-story-vue", "path": ["Advanced usage", "Layouts"], "filePath": "stories/layouts.story.vue", "story": { "id": "stories-layouts-story-vue", "title": "Layouts", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 3, component: Comp3, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-layouts-story-vue-E06mf9m-.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-menu-story-vue", "path": ["Advanced usage", "Menus"], "filePath": "stories/menu.story.vue", "story": { "id": "stories-menu-story-vue", "title": "Menus", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 4, component: Comp4, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-menu-story-vue-xzmNzMHp.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-port-tooltips-story-vue", "path": ["Port tooltips"], "filePath": "stories/port-tooltips.story.vue", "story": { "id": "stories-port-tooltips-story-vue", "title": "Port tooltips", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 5, component: Comp5, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-port-tooltips-story-vue-TiGlzzA3.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-resize-story-vue", "path": ["Simple usage", "Resize nodes"], "filePath": "stories/resize.story.vue", "story": { "id": "stories-resize-story-vue", "title": "Resize nodes", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 6, component: Comp6, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-resize-story-vue-c_i8V9CR.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-serialization-deserialization-story-vue", "path": ["Advanced usage", "serialization"], "filePath": "stories/serialization-deserialization.story.vue", "story": { "id": "stories-serialization-deserialization-story-vue", "title": "serialization", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 7, component: Comp7, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-serialization-deserialization-story-vue-hGSJm4Jh.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-websitedemo-story-vue", "path": ["Website Index Demo"], "filePath": "stories/websiteDemo.story.vue", "story": { "id": "stories-websitedemo-story-vue", "title": "Website Index Demo", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 8, component: Comp8, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-websitedemo-story-vue-E2c0L-hg.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-api-manipulating-view-story-vue", "path": ["Advanced usage", "Manipulating view"], "filePath": "stories/API/manipulating-view.story.vue", "story": { "id": "stories-api-manipulating-view-story-vue", "title": "Manipulating view", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 9, component: Comp9, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-api-manipulating-view-story-vue-sDqPGRf4.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-diagram-settings-custom-nodes-story-vue", "path": ["Advanced usage", "Custom Nodes"], "filePath": "stories/diagram-settings/custom-nodes.story.vue", "story": { "id": "stories-diagram-settings-custom-nodes-story-vue", "title": "Custom Nodes", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 10, component: Comp10, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-diagram-settings-custom-nodes-story-vue-0k2u5GCt.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-diagram-settings-diagram-dimensions-story-vue", "path": ["Simple usage", "Assigning diagram dimensions"], "filePath": "stories/diagram-settings/diagram-dimensions.story.vue", "story": { "id": "stories-diagram-settings-diagram-dimensions-story-vue", "title": "Assigning diagram dimensions", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 11, component: Comp11, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-diagram-settings-diagram-dimensions-story-vue-WGVX2Opv.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-diagram-settings-dropping-node-story-vue", "path": ["Advanced usage", "Drop to create nodes"], "filePath": "stories/diagram-settings/dropping-node.story.vue", "story": { "id": "stories-diagram-settings-dropping-node-story-vue", "title": "Drop to create nodes", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 12, component: Comp12, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-diagram-settings-dropping-node-story-vue-bd05wkSi.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-diagram-settings-edit-locked-story-vue", "path": ["Simple usage", "Edit locked"], "filePath": "stories/diagram-settings/edit-locked.story.vue", "story": { "id": "stories-diagram-settings-edit-locked-story-vue", "title": "Edit locked", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 13, component: Comp13, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-diagram-settings-edit-locked-story-vue-IQ4P53VB.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-diagram-settings-grid-snap-story-vue", "path": ["Simple usage", "Grid snap"], "filePath": "stories/diagram-settings/grid-snap.story.vue", "story": { "id": "stories-diagram-settings-grid-snap-story-vue", "title": "Grid snap", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 14, component: Comp14, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-diagram-settings-grid-snap-story-vue-hpXWybJU.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-diagram-settings-modes-story-vue", "path": ["Advanced usage", "Edit modes"], "filePath": "stories/diagram-settings/modes.story.vue", "story": { "id": "stories-diagram-settings-modes-story-vue", "title": "Edit modes", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 15, component: Comp15, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-diagram-settings-modes-story-vue-tKl7VJ5u.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-diagram-settings-thumbnail-story-vue", "path": ["Simple usage", "Thumbnail"], "filePath": "stories/diagram-settings/thumbnail.story.vue", "story": { "id": "stories-diagram-settings-thumbnail-story-vue", "title": "Thumbnail", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 16, component: Comp16, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-diagram-settings-thumbnail-story-vue-9N1bqkYI.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-nodes-card-story-vue", "path": ["Advanced usage", "Custom nodes", "Card nodes"], "filePath": "stories/nodes/card.story.vue", "story": { "id": "stories-nodes-card-story-vue", "title": "Card nodes", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 17, component: Comp17, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-nodes-card-story-vue-MaivU5Kp.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-nodes-images-story-vue", "path": ["Advanced usage", "Custom nodes", "Image nodes"], "filePath": "stories/nodes/images.story.vue", "story": { "id": "stories-nodes-images-story-vue", "title": "Image nodes", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 18, component: Comp18, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-nodes-images-story-vue-bZRMHMoZ.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-nodes-styles-story-vue", "path": ["Advanced usage", "Custom nodes", "Styles"], "filePath": "stories/nodes/styles.story.vue", "story": { "id": "stories-nodes-styles-story-vue", "title": "Styles", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 19, component: Comp19, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-nodes-styles-story-vue-bSC_oUOS.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-nodes-text-nodes-story-vue", "path": ["Advanced usage", "Custom nodes", "Text nodes"], "filePath": "stories/nodes/text-nodes.story.vue", "story": { "id": "stories-nodes-text-nodes-story-vue", "title": "Text nodes", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 20, component: Comp20, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-nodes-text-nodes-story-vue-xNpoHV-Z.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) },
  { "id": "stories-shaders-shadernodes-story-vue", "path": ["Shader nodes"], "filePath": "stories/shaders/ShaderNodes.story.vue", "story": { "id": "stories-shaders-shadernodes-story-vue", "title": "Shader nodes", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 21, component: Comp21, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-shaders-shadernodes-story-vue-Ac5aHEwb.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url) }
];
let tree = [{ "title": "Advanced usage", "children": [{ "title": "Custom nodes", "children": [{ "title": "Card nodes", "index": 17 }, { "title": "Image nodes", "index": 18 }, { "title": "Styles", "index": 19 }, { "title": "Text nodes", "index": 20 }] }, { "title": "Custom Nodes", "index": 10 }, { "title": "Drop to create nodes", "index": 12 }, { "title": "Edit modes", "index": 15 }, { "title": "Layouts", "index": 3 }, { "title": "Manipulating view", "index": 9 }, { "title": "Menus", "index": 4 }, { "title": "serialization", "index": 7 }] }, { "title": "Port tooltips", "index": 5 }, { "title": "Shader nodes", "index": 21 }, { "title": "Simple usage", "children": [{ "title": "Assigning diagram dimensions", "index": 11 }, { "title": "Basic", "index": 0 }, { "title": "Custom port position", "index": 1 }, { "title": "Edit locked", "index": 13 }, { "title": "Editable titles", "index": 2 }, { "title": "Grid snap", "index": 14 }, { "title": "Resize nodes", "index": 6 }, { "title": "Thumbnail", "index": 16 }] }, { "title": "Website Index Demo", "index": 8 }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/home/runner/work/vue-diagrams/vue-diagrams/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" }, "commands": [{ "id": "histoire:plugin-vue:generate-story", "label": "Generate Vue 3 story from component", "icon": "https://vuejs.org/logo.svg", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-vue/dist/commands/generate-story.client.js" }] }], "outDir": "/home/runner/work/vue-diagrams/vue-diagrams/doc/dist/stories", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc" }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "hash", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": [] };
const logos = {};
const histoireConfig = config;
const customLogos = logos;
const base = "./";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-G0iOljLO.js"), true ? __vite__mapDeps([24,25,2]) : void 0, import.meta.url)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-7FqSKp7f.js"), true ? __vite__mapDeps([26,2,25,27,28,29]) : void 0, import.meta.url)
    }
  ]
});
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file) {
      if (key === "story") {
        result.story = {
          ...result.story,
          ...file.story,
          file: markRaw(result),
          variants: file.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        };
      } else if (key !== "component") {
        result[key] = file[key];
      }
    }
  } else {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-AwDNLYHP.js").then((n) => n.aU), true ? __vite__mapDeps([]) : void 0, import.meta.url),
  "vue3": () => __vitePreload(() => import("./vendor-AwDNLYHP.js").then((n) => n.aV), true ? __vite__mapDeps([]) : void 0, import.meta.url)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: {}
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  base as e,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./basic.story-OgrhPAC7.js","./Diagram-vn3hdNnk.js","./vendor-AwDNLYHP.js","./custom-port-position.story-UO-jRJHW.js","./editable-titles.story-bpZf-hEK.js","./layouts.story-e9J1TAEY.js","./menu.story-CJ6M-R9X.js","./port-tooltips.story-wQwXOnsQ.js","./resize.story-c3ZyOjGC.js","./serialization-deserialization.story-Da1phT-f.js","./websiteDemo.story-3oMvaipI.js","./manipulating-view.story-Nod-7Max.js","./custom-nodes.story-Dn1qjK33.js","./diagram-dimensions.story-PoEMS_JY.js","./dropping-node.story--pALkmWy.js","./edit-locked.story-8qO_ETaQ.js","./grid-snap.story-PFUPofl3.js","./modes.story-yuLIcqjw.js","./thumbnail.story-MmqJXj1G.js","./card.story-Bpi0QSIR.js","./images.story-6xQprUSz.js","./styles.story-w_ZqPGeB.js","./text-nodes.story-TCAEG8j4.js","./ShaderNodes.story-7w78BE7N.js","./HomeView.vue-G0iOljLO.js","./story-r4DTz3d2.js","./StoryView.vue-7FqSKp7f.js","./MobileOverlay.vue2-sSMleygl.js","./BaseEmpty.vue-qqQVTxy4.js","./state-9Tg0wEtw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}