<template>
	<b-navbar-nav>
		<b-nav-item v-for="itemNav in itemsNav" :key="itemNav.index">{{ itemNav.name }}</b-nav-item>
	</b-navbar-nav>
</template>


<script>

export default ({
	name: 'HeaderItem',
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


