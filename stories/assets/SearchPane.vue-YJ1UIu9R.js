import { _ as __vitePreload } from "./GenericMountStory.vue2-OGzsd8YS.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, a7 as renderSlot, n as normalizeClass, m as withKeys, c as computed, q as createBlock, f as unref, I as Icon, e as createVNode, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, h as createCommentVNode, u as useCssVars, r as ref, $ as toRefs, a3 as useRouter, w as withCtx, X as markRaw, k as watch, aR as useFocus, aS as refDebounced, y as withDirectives, a8 as vModelText, a6 as withModifiers, aT as flexsearch_bundleExports } from "./vendor-AwDNLYHP.js";
import { u as useStoryStore } from "./story-r4DTz3d2.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-qqQVTxy4.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-AUl3-79c.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.vue2-sSMleygl.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[àáâãäå]"), regex_e = regex("[èéêë]"), regex_i = regex("[ìíîï]"), regex_o = regex("[òóôõöő]"), regex_u = regex("[ùúûüű]"), regex_y = regex("[ýŷÿ]"), regex_n = regex("ñ"), regex_c = regex("[çc]"), regex_s = regex("ß"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", ß: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
const charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
const language = { filter, stemmer, matcher };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BaseListItem",
  props: {
    isActive: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function handleNavigate() {
      emit("navigate");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["istoire-base-list-ite htw-flex htw-items-center htw-gap-2 htw-text-gray-900 dark:htw-text-gray-100", [
          _ctx.$attrs.class,
          _ctx.isActive ? "active htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black" : "hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900"
        ]]),
        onClick: _cache[0] || (_cache[0] = ($event) => handleNavigate()),
        onKeyup: [
          _cache[1] || (_cache[1] = withKeys(($event) => handleNavigate(), ["enter"])),
          _cache[2] || (_cache[2] = withKeys(($event) => handleNavigate(), ["space"]))
        ]
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 34);
    };
  }
});
const _hoisted_1$3 = ["src", "alt"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  props: {
    icon: {}
  },
  setup(__props) {
    const props = __props;
    const isUrl = computed(() => props.icon.startsWith("http") || props.icon.startsWith("data:image") || props.icon.startsWith(".") || props.icon.startsWith("/"));
    return (_ctx, _cache) => {
      return isUrl.value ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: _ctx.icon,
        alt: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, _hoisted_1$3)) : (openBlock(), createBlock(unref(Icon), {
        key: 1,
        icon: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, ["icon"]));
    };
  }
});
const BaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-74182813"]]);
const _hoisted_1$2 = { class: "htw-flex-1" };
const _hoisted_2 = { class: "htw-flex" };
const _hoisted_3 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_4 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchItemContent",
  props: {
    result: {},
    selected: { type: Boolean }
  },
  setup(__props) {
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant",
      command: "Command"
    };
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BaseIcon, {
          icon: _ctx.result.icon ?? defaultIcons[_ctx.result.kind],
          class: normalizeClass(["htw-w-4 htw-h-4", [
            !_ctx.selected ? [
              _ctx.result.iconColor ? "bind-icon-color" : {
                "htw-text-primary-500": _ctx.result.kind === "story",
                "htw-text-gray-500": _ctx.result.kind === "variant"
              }
            ] : [],
            {
              "colorize-black": _ctx.selected
            }
          ]])
        }, null, 8, ["icon", "class"]),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2, [
            createTextVNode(toDisplayString(_ctx.result.title) + " ", 1),
            createBaseVNode("span", _hoisted_3, toDisplayString(kindLabels[_ctx.result.kind]), 1)
          ]),
          ((_a = _ctx.result.path) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.result.path, (p, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "htw-flex htw-items-center htw-gap-0.5"
              }, [
                index > 0 ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  icon: "carbon:chevron-right",
                  class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                })) : createCommentVNode("", true),
                createBaseVNode("span", null, toDisplayString(p), 1)
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = ["data-selected"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "a8c1277e": __props.result.iconColor
    }));
    const props = __props;
    const emit = __emit;
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      action();
    });
    function action(fromClick = false) {
      if ("route" in props.result && !fromClick) {
        router.push(props.result.route);
      }
      if ("onActivate" in props.result) {
        props.result.onActivate();
      }
      emit("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "histoire-search-item",
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        "route" in __props.result ? (openBlock(), createBlock(BaseListItemLink, {
          key: 0,
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["to", "is-active"])) : createCommentVNode("", true),
        "onActivate" in __props.result ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[1] || (_cache[1] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["is-active"])) : createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6c8e9661"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,10,11],"pa":[0,1],"pas":[0,1],"pase":[0,1],"pasek":[0,1],"k":[2,3,20,21,28,29,34,35],"ko":[2,3,20,21],"kos":[2,3,20,21],"kost":[2,3,20,21],"kosto":[2,3,20,21],"kostom":[2,3,20,21],"e":[4,5,26,27,30,31,36,37],"et":[4,5,26,27,30,31],"ete":[4,5,26,27,30,31],"etet":[4,5,26,27,30,31],"eteta":[4,5],"etetap":[4,5],"etetapl":[4,5],"etetaple":[4,5],"l":[6,7],"la":[6,7],"lao":[6,7],"laot":[6,7],"laots":[6,7],"m":[8,9,18,19],"me":[8,9],"mem":[8,9],"memo":[8,9],"memos":[8,9],"po":[10,11],"por":[10,11],"port":[10,11],"r":[12,13],"re":[12,13],"res":[12,13],"rese":[12,13],"reses":[12,13],"resese":[12,13],"s":[14,15,38,39,42,43],"se":[14,15],"ser":[14,15],"sere":[14,15],"serea":[14,15],"sereal":[14,15],"sereale":[14,15],"sereales":[14,15],"serealesa":[14,15],"serealesat":[14,15],"serealesate":[14,15],"serealesateo":[14,15],"serealesateom":[14,15],"f":[16,17],"fe":[16,17],"fep":[16,17],"feps":[16,17],"fepse":[16,17],"fepset":[16,17],"fepsete":[16,17],"ma":[18,19],"mam":[18,19],"mame":[18,19],"mamep":[18,19],"mamepo":[18,19],"mamepol":[18,19],"mamepola":[18,19],"mamepolat":[18,19],"mamepolate":[18,19],"mamepolatem":[18,19],"mamepolatemk":[18,19],"a":[22,23],"as":[22,23],"ase":[22,23],"asek":[22,23],"asekm":[22,23],"asekme":[22,23],"asekmem":[22,23],"asekmemk":[22,23],"t":[24,25,32,33,40,41],"tr":[24,25],"tro":[24,25],"trop":[24,25],"kr":[28,29],"kre":[28,29],"kret":[28,29],"to":[32,33],"tom":[32,33],"tomp":[32,33],"tompm":[32,33],"tompma":[32,33],"tompmal":[32,33],"ka":[34,35],"kar":[34,35],"kart":[34,35],"em":[36,37],"ema":[36,37],"emak":[36,37],"emake":[36,37],"st":[38,39],"ste":[38,39],"stel":[38,39],"stele":[38,39],"steles":[38,39],"te":[40,41],"tes":[40,41],"test":[40,41],"sa":[42,43],"sat":[42,43],"sate":[42,43],"sater":[42,43]},{"t":[1,4,5,7,9,10,11,15,22,23,39],"te":[1,4,5,7,9,15,22,23,33,39],"tef":[1,7,9,15,33,39],"tefa":[1,7,9,15,33,39],"tefao":[1,7,9,15,33,39],"tefaol":[1,7,9,15,33,39],"tefaolt":[1,7,9,15,33,39],"p":[2,3],"po":[2,3],"por":[2,3],"port":[2,3],"tet":[4,5],"tetl":[4,5],"tetle":[4,5],"tetles":[4,5],"to":[10,11,24,25],"tol":[10,11],"tolt":[10,11],"tolte":[10,11],"toltep":[10,11],"tolteps":[10,11],"m":[12,13,20,21,30,31,34,35,36,37,40,41,42,43],"mo":[12,13,20,21,30,31,34,35,36,37,40,41,42,43],"mot":[12,13,20,21,30,31,34,35,36,37,40,41,42,43],"mote":[12,13,20,21,30,31,34,35,36,37,40,41,42,43],"motes":[12,13,20,21,30,31,34,35,36,37,40,41,42,43],"e":[16,17],"em":[16,17],"emt":[16,17],"emte":[16,17],"emtes":[16,17],"f":[18,19],"fe":[18,19],"fef":[18,19],"tea":[22,23],"teak":[22,23],"teakr":[22,23],"teakra":[22,23],"teakram":[22,23],"l":[26,27],"lo":[26,27],"lok":[26,27],"loke":[26,27],"loket":[26,27],"s":[28,29],"sm":[28,29],"sma":[28,29],"smap":[28,29]},{"pos":[2,3],"pose":[2,3],"poset":[2,3],"posete":[2,3],"poseteo":[2,3],"poseteom":[2,3],"tef":[5,11,13,19,21,27,29,31,35,37,41,43],"tefa":[5,11,13,19,21,27,29,31,35,37,41,43],"tefao":[5,11,13,19,21,27,29,31,35,37,41,43],"tefaol":[5,11,13,19,21,27,29,31,35,37,41,43],"tefaolt":[5,11,13,19,21,27,29,31,35,37,41,43],"te":[11,13,16,17,19,21,27,29,31,35,37,43],"t":[13,16,17,19,21,27,29,31,35,37,43],"tem":[16,17,22,23],"temo":[16,17],"teme":[22,23],"temem":[22,23],"temems":[22,23],"tememse":[22,23],"tememseo":[22,23],"tememseom":[22,23],"tememseoms":[22,23],"k":[24,25],"kr":[24,25],"kre":[24,25],"krea":[24,25],"kreat":[24,25],"kreate":[24,25]},{"t":[3],"te":[3],"tef":[3,17,23],"tefa":[3,17,23],"tefao":[3,17,23],"tefaol":[3,17,23],"tefaolt":[3,17,23],"m":[24,25],"mo":[24,25],"mot":[24,25],"mote":[24,25],"motes":[24,25]},{"te":[25],"tef":[25],"tefa":[25],"tefao":[25],"tefaol":[25],"tefaolt":[25]},{},{},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "stories-basic-story-vue", "kind": "story" }, "1": { "id": "stories-basic-story-vue:_default", "kind": "variant" }, "2": { "id": "stories-custom-port-position-story-vue", "kind": "story" }, "3": { "id": "stories-custom-port-position-story-vue:_default", "kind": "variant" }, "4": { "id": "stories-editable-titles-story-vue", "kind": "story" }, "5": { "id": "stories-editable-titles-story-vue:_default", "kind": "variant" }, "6": { "id": "stories-layouts-story-vue", "kind": "story" }, "7": { "id": "stories-layouts-story-vue:_default", "kind": "variant" }, "8": { "id": "stories-menu-story-vue", "kind": "story" }, "9": { "id": "stories-menu-story-vue:_default", "kind": "variant" }, "10": { "id": "stories-port-tooltips-story-vue", "kind": "story" }, "11": { "id": "stories-port-tooltips-story-vue:_default", "kind": "variant" }, "12": { "id": "stories-resize-story-vue", "kind": "story" }, "13": { "id": "stories-resize-story-vue:_default", "kind": "variant" }, "14": { "id": "stories-serialization-deserialization-story-vue", "kind": "story" }, "15": { "id": "stories-serialization-deserialization-story-vue:_default", "kind": "variant" }, "16": { "id": "stories-websitedemo-story-vue", "kind": "story" }, "17": { "id": "stories-websitedemo-story-vue:_default", "kind": "variant" }, "18": { "id": "stories-api-manipulating-view-story-vue", "kind": "story" }, "19": { "id": "stories-api-manipulating-view-story-vue:_default", "kind": "variant" }, "20": { "id": "stories-diagram-settings-custom-nodes-story-vue", "kind": "story" }, "21": { "id": "stories-diagram-settings-custom-nodes-story-vue:_default", "kind": "variant" }, "22": { "id": "stories-diagram-settings-diagram-dimensions-story-vue", "kind": "story" }, "23": { "id": "stories-diagram-settings-diagram-dimensions-story-vue:_default", "kind": "variant" }, "24": { "id": "stories-diagram-settings-dropping-node-story-vue", "kind": "story" }, "25": { "id": "stories-diagram-settings-dropping-node-story-vue:_default", "kind": "variant" }, "26": { "id": "stories-diagram-settings-edit-locked-story-vue", "kind": "story" }, "27": { "id": "stories-diagram-settings-edit-locked-story-vue:_default", "kind": "variant" }, "28": { "id": "stories-diagram-settings-grid-snap-story-vue", "kind": "story" }, "29": { "id": "stories-diagram-settings-grid-snap-story-vue:_default", "kind": "variant" }, "30": { "id": "stories-diagram-settings-modes-story-vue", "kind": "story" }, "31": { "id": "stories-diagram-settings-modes-story-vue:_default", "kind": "variant" }, "32": { "id": "stories-diagram-settings-thumbnail-story-vue", "kind": "story" }, "33": { "id": "stories-diagram-settings-thumbnail-story-vue:_default", "kind": "variant" }, "34": { "id": "stories-nodes-card-story-vue", "kind": "story" }, "35": { "id": "stories-nodes-card-story-vue:_default", "kind": "variant" }, "36": { "id": "stories-nodes-images-story-vue", "kind": "story" }, "37": { "id": "stories-nodes-images-story-vue:_default", "kind": "variant" }, "38": { "id": "stories-nodes-styles-story-vue", "kind": "story" }, "39": { "id": "stories-nodes-styles-story-vue:_default", "kind": "variant" }, "40": { "id": "stories-nodes-text-nodes-story-vue", "kind": "story" }, "41": { "id": "stories-nodes-text-nodes-story-vue:_default", "kind": "variant" }, "42": { "id": "stories-shaders-shadernodes-story-vue", "kind": "story" }, "43": { "id": "stories-shaders-shadernodes-story-vue:_default", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
function useSelection(list) {
  const selectedIndex = ref(0);
  watch(list, () => {
    selectedIndex.value = 0;
  });
  function selectNext() {
    selectedIndex.value++;
    if (selectedIndex.value > list.value.length - 1) {
      selectedIndex.value = 0;
    }
  }
  function selectPrevious() {
    selectedIndex.value--;
    if (selectedIndex.value < 0) {
      selectedIndex.value = list.value.length - 1;
    }
  }
  return {
    selectedIndex: computed(() => selectedIndex.value),
    selectNext,
    selectPrevious
  };
}
const _hoisted_1 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-o7b4fBKZ.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
    const props = __props;
    const emit = __emit;
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundleExports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...story.file.path ?? [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor
      };
    }
    const commandResults = computed(() => {
      return [];
    });
    useCommandStore();
    const results = computed(() => {
      const list = [
        ...commandResults.value,
        ...titleResults.value
      ];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const {
      selectedIndex,
      selectNext,
      selectPrevious
    } = useSelection(results);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "histoire-search-pane htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => unref(selectNext)(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(selectPrevious)(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !results.value.length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            createTextVNode(" No results ")
          ]),
          _: 1
        })) : results.value.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === unref(selectedIndex),
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./search-docs-data-o7b4fBKZ.js","./vendor-AwDNLYHP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}