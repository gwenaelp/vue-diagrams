<template>
  <div>
    <div
      :class="`menu diagram-context-menu`"
      v-if="showMenuComponent"
      :style="`left: ${menuX}px; top: ${menuY}px`"
    >
      <div
        v-for="(menuItem, menuItemKey) in showMenuComponent.menu"
        :key="menuItemKey"
        :class="`menu-item ${menuItem.classes ? menuItem.classes.join(' ') : ''}`"
        :data-menu-item-key="menuItemKey"
      >
        {{menuItem.label}}
        <span v-if="menuItem.children" style="float: right">
          &gt;
        </span>
        <div v-if="menuItem.children" class="menu-item-children-container">
          <div
            v-for="(childItem, childItemKey) in menuItem.children"
            :key="childItemKey"
            :class="`menu-item child-menu-item ${childItem.classes ? childItem.classes.join(' ') : ''}`"
            :data-menu-item-key="menuItemKey"
            :data-child-item-key="childItemKey"
          >
            {{childItem.label}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data (): any {
    return {
      onContextMenu: (event: Event) => {
        event.preventDefault();
      },
      onMouseDown: (event: any): void => {
        const component = this as any;
        const parentContextMenu = event?.target.closest('.diagram-context-menu');
        const parentDiagramElement = event?.target.closest('.has-menu');
        this.menuX = event.pageX;
        this.menuY = event.pageY;

        if (parentContextMenu) {
          event.stopPropagation();
          this.menuItemClick(event, this.showMenuComponent);
          component.showMenuComponent = undefined;
        } else if (parentDiagramElement && event.button === 2) {
          this.showMenuComponent = parentDiagramElement.vueComponent;
          window.elmenu = parentDiagramElement;
          console.log('menu onMouseDown', this.showMenuComponent, event?.target, parentDiagramElement, parentDiagramElement.vueComponent, window.elmenu);
          event.stopPropagation();
        } else {
          component.showMenuComponent = undefined;
        }
      },
      menuX: 0,
      menuY: 0,
      showMenuComponent: undefined as Function | undefined,
    };
  },
  mounted () {
    this.$parent.$el.addEventListener('mousedown', this.onMouseDown, { capture: true });
    this.$parent.$el.addEventListener('contextmenu', this.onContextMenu);
  },
  beforeUnmount() {
    this.$parent.$el.removeEventListener('mousedown', this.onMouseDown);
    this.$parent.$el.addEventListener('contextmenu', this.onContextMenu);
  },
  methods: {
    menuItemClick(event: any, component: any) {
      const dataset = event?.target?.dataset;
      console.log('dataset.menuItemKey', dataset.menuItemKey);
      if (dataset?.childItemKey) {
        console.log('dataset.childItemKey', dataset.childItemKey, component.menu[dataset.menuItemKey].children[dataset.childItemKey]);
        component.menu[dataset.menuItemKey].children[dataset.childItemKey].handler.call(component);
      } else {
        component.menu[dataset.menuItemKey].handler.call(component);
      }
    },
  }
});
</script>
<style scoped>
.menu, .menu-item-children-container {
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
.menu-item.separator {
  padding: 0;
  border-bottom: 1px solid #ccc;
  margin-left: 10px;
  margin-right: 10px;
}
.menu-item-children-container {
  position: absolute;
  display: none;
  left: 100%;
}
.menu-item:hover .menu-item-children-container {
  display: unset;
}
</style>
