<template>
	<!-- Navigation -->
	<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
		<div class="container">
			<a class="navbar-brand" href="index.html">Start Bootstrap</a>
			<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				Menu
				<i class="fas fa-bars"></i>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
					
					<router-link
						v-for="link in listLink"
						:key="link.to"
						:to="link.to"
						:exactActiveClass="link.activeClass"
						tag="li"
						activeClass=""
						class="nav-item"
					>
						<a class="nav-link">{{ link.text }}</a>
					</router-link>
					
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'navigation',
	data() {
		return {
			listLink: [
				{ to: '/', text: 'Home', activeClass: 'active' },
				{ to: '/about-us', text: 'About', activeClass: 'active' },
				{ to: '/contact', text: 'Contact', activeClass: 'active' },
				{ to: '/login', text: 'Login', activeClass: 'active' },
			]
		}
	}
}
</script>

<style>

</style>