<template>
  <div>
    <section class="hero background-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title"> An easy to use diagram editor component</h1>
          <p>Vue-diagrams makes it a breeze to edit diagrams in a Vue app.</p>
          <p><b>This documentation is under construction.</b></p>
          <DiagramDemo />
        </div>
      </div>
    </section>
    <section>
      <div class="container features-list">
        <div class="feature">
          <h2>Easy to learn</h2>
        </div>
        <div class="feature">
          <h2>Grid snap</h2>
        </div>
        <div class="feature">
          <h2>In place editing</h2>
          Move nodes, resize them, connect links as curves or segments...
        </div>
        <div class="feature">
          <h2>Serialization/deserialization</h2>
        </div>
        <div class="feature">
          <h2>Various node types</h2>
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
.feature h2 {
  padding: 0;
  margin: 0;
}
.feature {
  border-bottom: 1px solid #ccc;
  padding: 20px;
}
</style>
