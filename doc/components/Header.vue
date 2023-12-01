<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="container">
        <NuxtLink to="/" class="logo">Vue-diagrams</NuxtLink>
        <NuxtLink to="/guides">Guides</NuxtLink>
        <a href="stories">StoryBook</a>
        <a href="playground">REPL playground</a>
        <span style="flex-grow: 1" />
        <a href="https://github.com/gwenaelp/vue-diagrams" style="display: flex; gap: 14px; align-items: center;">
          <img src="https://img.shields.io/github/forks/gwenaelp/vue-diagrams" alt="forks" />
          <img src="https://img.shields.io/github/stars/gwenaelp/vue-diagrams" alt="stars" />
          <i class="mdi mdi-github mdi-24px" />
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header-wrapper {

}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0px 0px 15px -8px rgb(0 0 0 / 75%);
  z-index: 10;
}
.container {
  background-color: white;
  min-height: 70px;
  position: relative;
  display: flex;
  gap: 30px;
  align-items: center;
}
.logo {
  font-size: 36px;
  font-weight: lighter;
  text-decoration: none;
  color: black;
}
a {
  color: #4a4a4a;
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  text-decoration: none;
  height: 100%;
}
a:hover {
  background: whitesmoke;
}
</style>
