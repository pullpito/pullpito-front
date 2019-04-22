<template>
	<b-navbar-nav class="ml-auto">
		<b-nav-item-dropdown right>
			<!-- Using 'button-content' slot -->
			<template slot="button-content">
				<img class="icon-profile" src="@/assets/images/user-purple.png" alt="Icono usuario">
			</template>
			<b-dropdown-item href="#">Ver perfil</b-dropdown-item>
			<b-dropdown-item href="#" v-on:click.stop="logout">Cerrar</b-dropdown-item>
		</b-nav-item-dropdown>
	</b-navbar-nav>
</template>

<style lang="scss">
	@import "@/assets/sass/main.scss";
	@import "@/assets/sass/components/_dropdown.scss";
	.dropdown-menu {
		background-color: $color-purpleDark !important;
	}
</style>

<script>

export default ({
  name: 'HeaderProfile',
  methods: {
    logout() {      
      console.log("cerrar sesion");
    }
  },
})
</script>


