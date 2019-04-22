<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
  import Header from './components/layout/header/Header.vue'
  export default {
    name: 'app',
    components: {
      Header
    }
  }
</script>


