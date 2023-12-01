<template>
  <section>
    <div class="container" style="margin-top: 120px;">
      <ul>
        <li v-for="r in routes">{{r.label}}</li>
      </ul>
    </div>
  </section>

</template>
<script>
function convertCamelCaseToWords(inputString) {
  // Add a space before each uppercase letter, then convert to lowercase
  return inputString.replace(/([A-Z])/g, ' $1').toLowerCase();
}

export default {
  data () {
    const routes = this.$router.getRoutes().filter(r => r.path.indexOf('/guides/') === 0).map(r => {
      r.label = convertCamelCaseToWords(r.name.split('-')[1] || 'Index');
      return r;
    });

    return {
      routes,
    };
  },
};
</script>
