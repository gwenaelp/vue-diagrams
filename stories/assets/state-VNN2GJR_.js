import { d as clientSupportPlugins, h as histoireConfig } from "./GenericMountStory.vue2-iqauKlO3.js";
import { d as defineComponent, r as ref, Y as watchEffect, X as markRaw, o as openBlock, q as createBlock, Z as mergeProps, _ as resolveDynamicComponent, h as createCommentVNode, E as reactive, v as isRef, f as unref } from "./vendor-KOYu6fyN.js";
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericRenderStory",
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
        try {
          const pluginModule = await clientPlugin();
          mountComponent.value = markRaw(pluginModule.RenderStory);
        } catch (e) {
          console.error(e);
          throw e;
        }
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-render-story __histoire-render-story",
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
const STATE_SYNC = "__histoire:state-sync";
const SANDBOX_READY = "__histoire:sandbox-ready";
const EVENT_SEND = "__histoire:event";
const PREVIEW_SETTINGS_SYNC = "__histoire:preview-settings-sync";
const receivedSettings = reactive({});
function applyPreviewSettings(settings) {
  Object.assign(receivedSettings, settings);
  document.documentElement.setAttribute("dir", settings.textDirection);
  const contrastColor = getContrastColor(settings);
  document.documentElement.style.setProperty("--histoire-contrast-color", contrastColor);
  if (histoireConfig.autoApplyContrastColor) {
    document.documentElement.style.color = contrastColor;
  }
}
function getContrastColor(setting) {
  var _a;
  return ((_a = histoireConfig.backgroundPresets.find((preset) => preset.color === setting.backgroundColor)) == null ? void 0 : _a.contrastColor) ?? "unset";
}
const isObject = (val) => val !== null && typeof val === "object";
function toRawDeep(val, clean = false, seen = /* @__PURE__ */ new WeakMap()) {
  const unwrappedValue = isRef(val) ? unref(val) : val;
  if (typeof unwrappedValue === "symbol") {
    return unwrappedValue.toString();
  }
  if (!isObject(unwrappedValue)) {
    return unwrappedValue;
  }
  if (seen.has(unwrappedValue)) {
    return seen.get(unwrappedValue);
  }
  if (Array.isArray(unwrappedValue)) {
    const result = [];
    seen.set(unwrappedValue, result);
    let list = unwrappedValue.map((value) => toRawDeep(value, clean, seen));
    if (clean) {
      list = list.filter((value) => typeof value !== "function");
    }
    result.push(...list);
    return result;
  } else {
    const result = {};
    seen.set(unwrappedValue, result);
    toRawObject(unwrappedValue, result, clean, seen);
    return result;
  }
}
const toRawObject = (obj, target, clean = false, seen = /* @__PURE__ */ new WeakMap()) => {
  Object.keys(obj).forEach((key) => {
    if (clean && typeof obj[key] === "function") {
      return;
    }
    target[key] = toRawDeep(obj[key], clean, seen);
  });
};
export {
  EVENT_SEND as E,
  PREVIEW_SETTINGS_SYNC as P,
  STATE_SYNC as S,
  _sfc_main as _,
  applyPreviewSettings as a,
  SANDBOX_READY as b,
  getContrastColor as g,
  toRawDeep as t
};
