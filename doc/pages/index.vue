<template>
  <div>
    <section class="hero background-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title"> An easy to use diagram editor component</h1>
          <p>Vue-diagrams makes it a breeze to edit diagrams in a Vue app.</p>
          <DiagramDemo />
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.hero {
  display: block;
  color: white;
  min-height: calc(100vh - 250px);
  height: initial;
  padding-top: 100px;
}
h1 {
  font-size: 50px;
  font-weight: lighter;
  margin: 0;
  padding-bottom: 0;
}
.hero p{
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
