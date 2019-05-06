<template>
  <div>
    <Header />
  </div>
</template>

<script>
  import Header from '@/components/layout/header/Header.vue'
  export default {
    name: 'Home',
    components: {
      Header
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $bg-color: red;
  h1, h2 {
    font-weight: normal;
    background-color: $bg-color;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
