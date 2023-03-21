<template>
  <input type="text" class="text-input" :style="style" v-model="value" />
</template>
<script>
export default {
  data () {
    return {
      style: 'display: none;',
      object: undefined,
      property: undefined,
      element: undefined,
    };
  },
  computed: {
    value: {
      get() {
        if (this.object) {
          return this.object[this.property];
        } else {
          return undefined;
        }
      },
      set(v) {
        if (this.object) {
          this.object[this.property] = v;
          this.computeStyle();
        }
      }
    }
  },
  watch: {
    element(v, oldV) {
      if(oldV) {
        oldV.classList.remove('opacity-0');
      }
      if(v) {
        v.classList.add('opacity-0');
      }
    }
  },
  methods: {
    computeStyle() {
      if (!this.element) {
        this.style = 'display: none;';
      } else {
        this.style = `
          top: ${this.element.getBoundingClientRect().top}px;
          left: ${this.element.getBoundingClientRect().left}px;
          width: ${this.element.getBoundingClientRect().width}px;
          height: ${this.element.getBoundingClientRect().height}px;
        `;
      }

    },
    editText(object, property, element) {
      this.object = object;
      this.property = property;
      this.element = element;
      this.computeStyle();
      //this.object[this.property] = this.value;
    }
  },
}
</script>
<style scoped>
.text-input {
  position: fixed;
  font-weight: bold;
  outline: none;
  border: none;
  background: none;
}
</style>
