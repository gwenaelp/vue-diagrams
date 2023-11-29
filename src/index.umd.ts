import LibraryModule, * as LibraryComponents from "./index";

// Automatically register components if Vue is available globally
if (typeof window !== "undefined" && (window as any).Vue) {
  (window as any).Vue.use(LibraryModule);
}

export default LibraryComponents;
