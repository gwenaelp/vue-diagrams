const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./layouts.story-DBaOSyvf.js","./Diagram-CH6wIVIw.js","./vendor-BvBmhImZ.js","./ShaderNodes.story-DxMf-PoN.js","./HomeView.vue-CSwkrwKC.js","./story-CV-Y9gbw.js","./StoryView.vue-Bb2EAUBi.js","./responsive-GqednJVa.js","./BaseEmpty.vue-CbTpKuk0.js","./state-DERn92Ak.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload, O as defineAsyncComponent, P as useDark, Q as useToggle, k as watch, R as createRouter, S as createWebHistory, U as createWebHashHistory, d as defineComponent, n as ref, V as watchEffect, W as markRaw, y as createBlock, g as createCommentVNode, X as mergeProps, Y as resolveDynamicComponent, o as openBlock, A as reactive } from "./vendor-BvBmhImZ.js";
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./layouts.story-DBaOSyvf.js"), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./ShaderNodes.story-DxMf-PoN.js"), true ? __vite__mapDeps([3,1,2]) : void 0, import.meta.url));
let files = [
  { "id": "stories-layouts-story-vue", "path": ["Advanced usage", "Layouts"], "filePath": "stories/layouts.story.vue", "story": { "id": "stories-layouts-story-vue", "title": "Layouts", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-layouts-story-vue-BKKReMx2.js"), true ? [] : void 0, import.meta.url) },
  { "id": "stories-shaders-shadernodes-story-vue", "path": ["Shader nodes"], "filePath": "stories/shaders/ShaderNodes.story.vue", "story": { "id": "stories-shaders-shadernodes-story-vue", "title": "Shader nodes", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_stories-shaders-shadernodes-story-vue-BUaEOIw8.js"), true ? [] : void 0, import.meta.url) }
];
let tree = [{ "title": "Advanced usage", "children": [{ "title": "Layouts", "index": 0 }] }, { "title": "Shader nodes", "index": 1 }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/home/runner/work/vue-diagrams/vue-diagrams/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" }, "commands": [{ "id": "histoire:plugin-vue:generate-story", "label": "Generate Vue 3 story from component", "icon": "https://vuejs.org/logo.svg", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-vue/dist/commands/generate-story.client.js" }] }], "outDir": "/home/runner/work/vue-diagrams/vue-diagrams/doc/dist/stories", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc" }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "hash", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": [] };
const logos = {};
const histoireConfig = config;
const customLogos = logos;
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
      component: () => __vitePreload(() => import("./HomeView.vue-CSwkrwKC.js"), true ? __vite__mapDeps([4,5,2]) : void 0, import.meta.url)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-Bb2EAUBi.js"), true ? __vite__mapDeps([6,2,5,7,8,9]) : void 0, import.meta.url)
    }
  ]
});
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-BvBmhImZ.js").then((n) => n.aR), true ? [] : void 0, import.meta.url),
  "vue3": () => __vitePreload(() => import("./vendor-BvBmhImZ.js").then((n) => n.aS), true ? [] : void 0, import.meta.url)
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
function mapFile(file, existingFile) {
  let result;
  {
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
  {
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
export {
  _sfc_main as _,
  tree as a,
  clientSupportPlugins as b,
  customLogos as c,
  base as d,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};
