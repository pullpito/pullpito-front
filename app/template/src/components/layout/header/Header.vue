<template>
	<section id="nav" class="bg-white">
		<b-container fluid>
			<b-row>
				<b-col>
					<b-navbar toggleable="lg" type="primary">
            <HeaderBrand  />
            <HeaderBurger />
						<b-collapse id="nav-collapse" is-nav>
							<HeaderList />
							<HeaderProfile/>
						</b-collapse>
					</b-navbar>
				</b-col>
			</b-row>
		</b-container>
	</section>
</template>

<script>
  import HeaderList from './HeaderList.vue'
  import HeaderProfile from './HeaderProfile.vue'
  import HeaderBrand from './HeaderBrand.vue'
  import HeaderBurger from './HeaderBurger.vue'

  export default {
    name: 'Header',
    components: {
      HeaderList,
      HeaderProfile,
      HeaderBrand,
      HeaderBurger
    }
  }
</script>
