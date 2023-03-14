<template>
  <div>
    <div class="header">
      <div class="container">
        <a href="#/" class="logo">
          Vue-diagrams
        </a>
      </div>
    </div>
    <slot/>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

.container {
  max-width: 960px;
  margin: auto;
}

</style>
<style scoped>
.logo {
  font-size: 36px;
  font-weight: lighter;
}
</style>
