<template>
	<section id="nav">
		<b-container fluid >
			<b-row>
				<b-col>
					<b-navbar toggleable="lg" type="dark">
						<b-navbar-brand href="/">
							<img alt="Pullpito Logo" src="@/assets/images/logo-png.png" width="80px" height="auto" />
						</b-navbar-brand>
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
	@import "header.scss";
</style>

<script src="./Header.js"></script>
