<template>
  <b-container>
    <Header />
    <b-row>
      <b-col cols="12">
        <h1> {{ msg }}</h1>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <b-button variant="danger">Button example</b-button>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Header from '@/components/layout/header/Header.vue'
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'mensaje de ejemplo lorem'
      }
    },
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
