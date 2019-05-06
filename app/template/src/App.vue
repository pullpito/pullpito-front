<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
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


