<template>
	<b-navbar-nav class="navbar-list justify-content-center">
		<b-nav-item v-for="itemNav in itemsNav" :key="itemNav.index">{{ itemNav.name }}</b-nav-item>
	</b-navbar-nav>
</template>

<style lang="scss" scope>
	@import "@/assets/sass/helpers/_variables.scss";  
  .navbar-list {
    flex-basis: 100%;
    .nav-item {
      .nav-link {
        color: $color-purple;
      }
    }
  }
  
</style>

<script>
  export default ({
    name: 'HeaderList',
    data () {
      return {
        itemsNav: [
          { name: 'Item1' },
          { name: 'Item2' },
          { name: 'Item3'}
        ]
      }
    }
  })
</script>


