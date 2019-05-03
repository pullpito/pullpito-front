<template>
	<section id="nav">
		<b-container fluid>
			<b-row>
				<b-col>
					<b-navbar toggleable="lg" type="">
            <HeaderBrand />
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
						<b-collapse id="nav-collapse" is-nav>
							<HeaderItem />
							<HeaderProfile  align-self="end"/>
						</b-collapse>
					</b-navbar>
				</b-col>
			</b-row>
		</b-container>
	</section>
</template>


<style lang="scss">
	@import "@/assets/sass/main.scss";
  @import "@/assets/sass/components/_nav.scss";
</style>

<script>
  import HeaderItem from './HeaderItem.vue'
  import HeaderProfile from './HeaderProfile.vue'
  import HeaderBrand from './HeaderBrand.vue'

  export default {
    name: 'Header',
    components: {
      HeaderItem,
      HeaderProfile,
      HeaderBrand
    }
  }
</script>
