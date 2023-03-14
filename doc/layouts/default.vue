<template>
  <div>
    <Header/>
    <slot/>
  </div>
</template>
<script>
import '@mdi/font/css/materialdesignicons.css';

export default {};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  --background-color: #7957d5;
  --text-color: #363636;
  --dark-text-color: #fff;
  --dark-background-color: rgb(55,170,232);
  --dark-background-color-2: rgb(161,10,187);
  --dark-error-background-color: rgb(232,120,55);
  --dark-error-background-color-2: rgb(91,7,7);
  --primary-color-lighter: #a18dd8;
  --primary-color-darker: #714dd2;
}

.container {
  max-width: 960px;
  margin: auto;
}

.background-dark {
  background: var(--dark-background-color);
  background: linear-gradient(48deg, var(--dark-background-color) 0%, var(--dark-background-color-2) 100%);
  color: white;
}
</style>
