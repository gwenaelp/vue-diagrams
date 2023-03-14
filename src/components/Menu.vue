<template>
  <div>
    <div
      :class="`menu diagram-context-menu menu-${showMenu}`"
      v-if="showMenu"
      :style="`left: ${menuX}px; top: ${menuY}px`"
    >
      <div
        v-for="(menuItem, menuItemKey) in menus[showMenu]"
        class="menu-item"
        :data-menu-key="showMenu"
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
        console.log('onMouseDown', event);
        const parentContextMenu = event.target.closest('.diagram-context-menu');
        const parentDiagramNode = event.target.closest('.diagram-node');
        const parentDiagramLink = event.target.closest('.diagram-link');
        this.menuX = event.pageX;
        this.menuY = event.pageY;
        if (parentContextMenu) {
          event.stopPropagation();
          this.menuItemClick(event);
          this.showMenu = false;
          this.menuTarget = undefined;
        } else if (parentDiagramNode && event.button === 2) {
          this.menuTarget = parentDiagramNode;
          this.showMenu = 'node';
          event.stopPropagation();
        } else if (parentDiagramLink && event.button === 2) {
          this.menuTarget = parentDiagramLink;
          this.showMenu = 'link';
          event.stopPropagation();
        } else {
          this.showMenu = false;
          this.menuTarget = undefined;
        }
        if (!event.defaultPrevented) {
          this.$parent.$el.dispatchEvent(event);
        }
      },
      menuX: 0,
      menuY: 0,
      menuTarget: undefined,
      showMenu: false,
      menus: {
        node: [{
          label: 'Delete node',
          handler(targetComponent) {
            targetComponent.deleteNode();
          },
        }],
        link: [{
          label: 'Delete link',
          handler(targetComponent) {
            targetComponent.deleteLink();
          },
        }],
      }
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
    menuItemClick(event) {
      this.menus[event.target.dataset.menuKey][event.target.dataset.menuItemKey].handler(this.menuTarget ? this.menuTarget.__vue__ : undefined);
    }
  }
}
</script>
<style scoped>
.menu {
  position: fixed;
  font-size: 13px;
  width: 120px;
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
