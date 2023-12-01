<template>
  <div>
    <section class="hero background-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title"> An easy to use diagram editor component</h1>
          <p>Diagram component for vue.js, inspired by react-diagrams</p>
          <p class="vue-versions">For Vue <a href="https://github.com/gwenaelp/vue-diagrams/tree/vue2">2</a> & <a href="https://github.com/gwenaelp/vue-diagrams">3</a>!</p>
          <DiagramDemo />
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2>Installation</h2>
        <div style="display: flex; justify-content: space-around;">
          <pre>npm install vue-diagrams</pre>
          <pre>yarn add vue-diagrams</pre>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2>Examples</h2>
        <img :src="example2" style="max-width: 100%;" />
        <img :src="example3" style="max-width: 100%;" />
      </div>
    </section>
    <section>
      <div class="container features-list">
        <h2>Features</h2>
        <div class="feature">
          <h3>Easy to learn</h3>
        </div>
        <div class="feature">
          <h3>Grid snap</h3>
        </div>
        <div class="feature">
          <h3>In place editing</h3>
          Move nodes, resize them, connect links as curves or segments...
        </div>
        <div class="feature">
          <h3>Serialization/deserialization</h3>
        </div>
        <div class="feature">
          <h3>Various node types</h3>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import example2 from '../../images/example2.png';
import example3 from '../../images/example3.png';
</script>
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
.feature h3 {
  padding: 0;
  margin: 0;
}
.feature {
  border-bottom: 1px solid #ccc;
  padding: 20px;
}
.vue-versions {
  border-radius: 8px;
  border: 1px solid white;
  display: inline-block;
  padding: 10px;
  margin: auto;
}
.vue-versions a {
  color: white;
  font-weight: bold;
}
</style>
