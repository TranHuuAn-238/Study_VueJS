<template>
	<header class="masthead" :style="`background-image: url('${bg}')`">
		<div class="overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<div :class="className">
						<h1>{{ title }}</h1>
						<span class="subheading">{{ subHeading }}</span>
						<slot></slot>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
    name: 'page-header',
	props: {
		bg: { type: String, default: '/dist/img/home-bg.jpg' },
		title: { type: String, default: 'Home Page' },
		className: { type: String, default: 'site-heading' },
		subHeading: { type: String, default: 'A Blog Theme by Start Bootstrap' }
	}
}
</script>

<style>

</style>