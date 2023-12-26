<template>
	<div id="app">
		<navigation />

		<about-us />

		<comp-footer />
	</div>
</template>

<script>
import Navigation from "./components/Navigation";
import CompFooter from "./components/CompFooter";

import AboutUs from "./pages/AboutUs";
export default {
	name: 'app',
	components: {
		Navigation,
		CompFooter,
		AboutUs
	},
	data () {
		return {
			
		}
	}
}
</script>

<style>

</style>
