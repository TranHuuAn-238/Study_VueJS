<template>
	<div id="app">
		<navigation />

		<router-view />

		<comp-footer />
	</div>
</template>

<script>
import Navigation from "./components/Navigation";
import CompFooter from "./components/CompFooter";

export default {
	name: 'app',
	components: {
		Navigation,
		CompFooter
	},
	data () {
		return {
			
		}
	}
}
</script>

<style>

</style>
