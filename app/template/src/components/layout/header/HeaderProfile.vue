<template>
	<b-navbar-nav class="justify-content-center">
		<b-nav-item-dropdown right v-on:click="isOpen">
			<!-- Using 'button-content' slot -->
			<template slot="button-content">
				<img class="icon-profile" src="@/assets/images/user-purple.png" alt="Icono usuario">
        {{ profileImage }}
			</template>
			<b-dropdown-item href="#">Ver perfil</b-dropdown-item>
			<b-dropdown-item href="#" v-on:click.stop="logout">Cerrar</b-dropdown-item>
		</b-nav-item-dropdown>
	</b-navbar-nav>
</template>

<style lang="scss" scope>
	@import "@/assets/sass/main.scss";
  @import "@/assets/sass/components/_dropdown.scss";
  .b-nav-dropdown {
    padding: 13px 65px;
    .dropdown-menu {
      width: 100%;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border: 0;
    }
  }
</style>

<script>
  export default ({
    name: 'HeaderProfile',
    data() {
      return {
        profileImage: 'loremipsum'
      }
    },
    methods: { 
      isOpen() {
        console.log("enter1");
        // return {
        //   profileImage: 'loremipsum dolor sit'
        // }
      },
      logout() {
        this.$api
          .delete('/auth/sign_out')
          .then(response => ( this.logoutResponse(response) ))
          .catch(error => ( console.log(error) ));
      },
      logoutResponse(response) {
        this.$session.destroy();
        if(response.status === 200) {
          this.$router.push('/login');
        } else {
          // TODO: Show this message to user
          console.log("Ocurrió un error al cerrar sesión");
        }
      }
    },
  })
</script>


