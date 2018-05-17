import Vue from "vue";
import Diagram from "../Diagram";

describe("Diagram.vue", () => {
  const Constructor = Vue.extend(Diagram);
  const vm = new Constructor().$mount();
  test("should match the snapshot", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
