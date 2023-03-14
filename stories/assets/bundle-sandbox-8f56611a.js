import { N as parseQuery, r as ref, K as createApp, L as createPinia, k as watch, c as computed, J as onMounted, O as h, P as applyState } from "./vendor-12611725.js";
import { m as mapFile, f as files, b as _sfc_main, h as histoireConfig, i as isDark } from "./GenericMountStory.vue2-f2b0ce23.js";
import { S as STATE_SYNC, P as PREVIEW_SETTINGS_SYNC, a as applyPreviewSettings, b as SANDBOX_READY, _ as _sfc_main$1, t as toRawDeep } from "./state-460d887b.js";
const sandbox = "";
const query = parseQuery(window.location.search);
const file = ref(mapFile(files.find((f) => f.id === query.storyId)));
const app = createApp({
  name: "SandboxApp",
  setup() {
    const story = computed(() => file.value.story);
    const variant = computed(() => {
      var _a;
      return (_a = story.value) == null ? void 0 : _a.variants.find((v) => v.id === query.variantId);
    });
    let synced = false;
    let mounted = false;
    window.addEventListener("message", (event) => {
      var _a, _b;
      if (((_a = event.data) == null ? void 0 : _a.type) === STATE_SYNC) {
        if (!mounted)
          return;
        synced = true;
        applyState(variant.value.state, event.data.state);
      } else if (((_b = event.data) == null ? void 0 : _b.type) === PREVIEW_SETTINGS_SYNC) {
        applyPreviewSettings(event.data.settings);
      }
    });
    watch(() => variant.value.state, (value) => {
      var _a;
      if (synced && mounted) {
        synced = false;
        return;
      }
      (_a = window.parent) == null ? void 0 : _a.postMessage({
        type: STATE_SYNC,
        state: toRawDeep(value, true)
      });
    }, {
      deep: true
    });
    onMounted(() => {
      mounted = true;
    });
    return {
      story,
      variant
    };
  },
  render() {
    return [
      h("div", { class: "htw-sandbox-hidden" }, [
        h(_sfc_main, {
          key: file.value.story.id,
          story: file.value.story
        })
      ]),
      this.story && this.variant ? h(_sfc_main$1, {
        story: this.story,
        variant: this.variant,
        onReady: () => {
          var _a;
          (_a = window.parent) == null ? void 0 : _a.postMessage({
            type: SANDBOX_READY
          });
        }
      }) : null
    ];
  }
});
app.use(createPinia());
app.mount("#app");
watch(isDark, (value) => {
  if (value) {
    document.documentElement.classList.add(histoireConfig.sandboxDarkClass);
    document.documentElement.classList.add(histoireConfig.theme.darkClass);
  } else {
    document.documentElement.classList.remove(histoireConfig.sandboxDarkClass);
    document.documentElement.classList.remove(histoireConfig.theme.darkClass);
  }
}, {
  immediate: true
});
