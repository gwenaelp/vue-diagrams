import { Q as createRouter, R as createWebHistory, S as createWebHashHistory, U as useDark, V as useToggle, k as watch, W as markRaw, E as reactive, d as defineComponent, r as ref, X as watchEffect, o as openBlock, q as createBlock, Y as mergeProps, Z as resolveDynamicComponent, h as createCommentVNode } from "./vendor-12611725.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
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
  })).then(() => baseModule());
};
const Comp0 = () => __vitePreload(() => import(
  /* @vite-ignore */
  "./basic.story-426b29a9.js"
), true ? ["assets/basic.story-426b29a9.js","assets/Diagram-43c7bf3c.js","assets/vendor-12611725.js"] : void 0);
const Comp1 = () => __vitePreload(() => import(
  /* @vite-ignore */
  "./diagram-dimensions.story-5a9d594f.js"
), true ? ["assets/diagram-dimensions.story-5a9d594f.js","assets/Diagram-43c7bf3c.js","assets/vendor-12611725.js"] : void 0);
const Comp2 = () => __vitePreload(() => import(
  /* @vite-ignore */
  "./dropping-node.story-19b02c48.js"
), true ? ["assets/dropping-node.story-19b02c48.js","assets/Diagram-43c7bf3c.js","assets/vendor-12611725.js"] : void 0);
const Comp3 = () => __vitePreload(() => import(
  /* @vite-ignore */
  "./editable-titles.story-b923377e.js"
), true ? ["assets/editable-titles.story-b923377e.js","assets/Diagram-43c7bf3c.js","assets/vendor-12611725.js"] : void 0);
const Comp4 = () => __vitePreload(() => import(
  /* @vite-ignore */
  "./grid-snap.story-cc27825a.js"
), true ? ["assets/grid-snap.story-cc27825a.js","assets/Diagram-43c7bf3c.js","assets/vendor-12611725.js"] : void 0);
const Comp5 = () => __vitePreload(() => import(
  /* @vite-ignore */
  "./images.story-f7ce723a.js"
), true ? ["assets/images.story-f7ce723a.js","assets/Diagram-43c7bf3c.js","assets/vendor-12611725.js"] : void 0);
const Comp6 = () => __vitePreload(() => import(
  /* @vite-ignore */
  "./menu.story-f48f8534.js"
), true ? ["assets/menu.story-f48f8534.js","assets/Diagram-43c7bf3c.js","assets/vendor-12611725.js"] : void 0);
const Comp7 = () => __vitePreload(() => import(
  /* @vite-ignore */
  "./modes.story-ce0250fe.js"
), true ? ["assets/modes.story-ce0250fe.js","assets/Diagram-43c7bf3c.js","assets/vendor-12611725.js"] : void 0);
const Comp8 = () => __vitePreload(() => import(
  /* @vite-ignore */
  "./resize.story-920f598a.js"
), true ? ["assets/resize.story-920f598a.js","assets/Diagram-43c7bf3c.js","assets/vendor-12611725.js"] : void 0);
const Comp9 = () => __vitePreload(() => import(
  /* @vite-ignore */
  "./serialization-deserialization.story-0134e369.js"
), true ? ["assets/serialization-deserialization.story-0134e369.js","assets/Diagram-43c7bf3c.js","assets/vendor-12611725.js"] : void 0);
let files = [
  { "id": "stories-basic-story-vue", "path": ["Simple"], "filePath": "stories/basic.story.vue", "story": { "id": "stories-basic-story-vue", "title": "Simple", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue2", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-basic-story-vue-f7265202.js"), true ? [] : void 0) },
  { "id": "stories-diagram-dimensions-story-vue", "path": ["Assigning dimensions"], "filePath": "stories/diagram-dimensions.story.vue", "story": { "id": "stories-diagram-dimensions-story-vue", "title": "Assigning dimensions", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue2", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-diagram-dimensions-story-vue-b4b4d1d8.js"), true ? [] : void 0) },
  { "id": "stories-dropping-node-story-vue", "path": ["Drop to create nodes"], "filePath": "stories/dropping-node.story.vue", "story": { "id": "stories-dropping-node-story-vue", "title": "Drop to create nodes", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue2", "index": 2, component: Comp2, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-dropping-node-story-vue-51d08a91.js"), true ? [] : void 0) },
  { "id": "stories-editable-titles-story-vue", "path": ["Editable titles"], "filePath": "stories/editable-titles.story.vue", "story": { "id": "stories-editable-titles-story-vue", "title": "Editable titles", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue2", "index": 3, component: Comp3, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-editable-titles-story-vue-fa1c7eef.js"), true ? [] : void 0) },
  { "id": "stories-grid-snap-story-vue", "path": ["Grid snap"], "filePath": "stories/grid-snap.story.vue", "story": { "id": "stories-grid-snap-story-vue", "title": "Grid snap", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue2", "index": 4, component: Comp4, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-grid-snap-story-vue-26a43b9e.js"), true ? [] : void 0) },
  { "id": "stories-images-story-vue", "path": ["Image nodes"], "filePath": "stories/images.story.vue", "story": { "id": "stories-images-story-vue", "title": "Image nodes", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue2", "index": 5, component: Comp5, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-images-story-vue-4bbb0ed6.js"), true ? [] : void 0) },
  { "id": "stories-menu-story-vue", "path": ["Menu", "Basic"], "filePath": "stories/menu.story.vue", "story": { "id": "stories-menu-story-vue", "title": "Basic", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue2", "index": 6, component: Comp6, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-menu-story-vue-9c61cde7.js"), true ? [] : void 0) },
  { "id": "stories-modes-story-vue", "path": ["Edit modes"], "filePath": "stories/modes.story.vue", "story": { "id": "stories-modes-story-vue", "title": "Edit modes", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue2", "index": 7, component: Comp7, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-modes-story-vue-54652f1c.js"), true ? [] : void 0) },
  { "id": "stories-resize-story-vue", "path": ["Resize nodes"], "filePath": "stories/resize.story.vue", "story": { "id": "stories-resize-story-vue", "title": "Resize nodes", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue2", "index": 8, component: Comp8, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-resize-story-vue-4735d264.js"), true ? [] : void 0) },
  { "id": "stories-serialization-deserialization-story-vue", "path": ["serialization deserialization"], "filePath": "stories/serialization-deserialization.story.vue", "story": { "id": "stories-serialization-deserialization-story-vue", "title": "serialization deserialization", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue2", "index": 9, component: Comp9, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-serialization-deserialization-story-vue-7c88dc57.js"), true ? [] : void 0) }
];
let tree = [{ "title": "Assigning dimensions", "index": 1 }, { "title": "Drop to create nodes", "index": 2 }, { "title": "Edit modes", "index": 7 }, { "title": "Editable titles", "index": 3 }, { "title": "Grid snap", "index": 4 }, { "title": "Image nodes", "index": 5 }, { "title": "Menu", "children": [{ "title": "Basic", "index": 6 }] }, { "title": "Resize nodes", "index": 8 }, { "title": "serialization deserialization", "index": 9 }, { "title": "Simple", "index": 0 }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/home/runner/work/vue-diagrams/vue-diagrams/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue2", "supportPlugin": { "id": "vue2", "moduleName": "@histoire/plugin-vue2", "setupFn": "setupVue2" } }], "outDir": "/home/runner/work/vue-diagrams/vue-diagrams/doc/dist/stories", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue2"] }], "tree": { "file": "title", "order": "asc" }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "history", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": [] };
const logos = {};
const histoireConfig = config;
const customLogos = logos;
const base = "/";
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
      component: () => __vitePreload(() => import("./HomeView.vue-3b595856.js"), true ? ["assets/HomeView.vue-3b595856.js","assets/vendor-12611725.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-39b6c84c.js"), true ? ["assets/StoryView.vue-39b6c84c.js","assets/vendor-12611725.js","assets/MobileOverlay.vue2-a5854b43.js","assets/BaseEmpty.vue-697faf9f.js","assets/state-33ab5296.js"] : void 0)
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
  "vanilla": () => __vitePreload(() => import("./vendor-12611725.js").then((n) => n.at), true ? [] : void 0),
  "vue2": () => __vitePreload(() => import("./vendor-12611725.js").then((n) => n.au), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: null
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
        story: __props.story
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
