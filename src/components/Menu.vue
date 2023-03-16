<template>
  <div>
    <div
      :class="`menu diagram-context-menu`"
      v-if="showMenuComponent"
      :style="`left: ${menuX}px; top: ${menuY}px`"
    >
      <div
        v-for="(menuItem, menuItemKey) in showMenuComponent.menu"
        class="menu-item"
        :data-menu-item-key="menuItemKey"
      >
        {{menuItem.label}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      onContextMenu: (event) => {
        event.preventDefault();
      },
      onMouseDown: (event) => {
        const parentContextMenu = event.target.closest('.diagram-context-menu');
        const parentDiagramElement = event.target.closest('.has-menu');
        this.menuX = event.pageX;
        this.menuY = event.pageY;
        if (parentContextMenu) {
          event.stopPropagation();
          this.menuItemClick(event, this.showMenuComponent);
          this.showMenuComponent = undefined;
        } else if (parentDiagramElement && event.button === 2) {
          this.showMenuComponent = parentDiagramElement.__vue__;
          event.stopPropagation();
        } else {
          this.showMenuComponent = undefined;
        }
        if (!event.defaultPrevented) {
          this.$parent.$el.dispatchEvent(event);
        }
      },
      menuX: 0,
      menuY: 0,
      showMenuComponent: undefined,
    };
  },
  mounted () {
    this.$parent.$el.addEventListener('mousedown', this.onMouseDown, true);
    this.$parent.$el.addEventListener('contextmenu', this.onContextMenu);
  },
  beforeDestroy() {
    this.$parent.$el.removeEventListener('mousedown', this.onMouseDown);
    this.$parent.$el.addEventListener('contextmenu', this.onContextMenu);
  },
  methods: {
    menuItemClick(event, component) {
      component.menu[event.target.dataset.menuItemKey].handler.call(component);
    },
  }
}
</script>
<style scoped>
.menu {
  position: fixed;
  font-size: 13px;
  width: 140px;
  box-shadow: 1px 2px 5px 2px rgb(51 51 51 / 15%);
  z-index: 200;
  background: white;
}
.menu-item {
  padding: 2px 10px;
  display: block;
  cursor: default;
}
.menu-item:hover {
  background: whitesmoke;
}
</style>
