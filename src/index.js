import Diagram from "./components/Diagram";

const LibraryModule = {
  Diagram,

  install(Vue) {
    // Register components with vue
    Vue.component("diagram", Diagram);
  }
};

// Export library
export default LibraryModule;

// Export components
export { Diagram };
