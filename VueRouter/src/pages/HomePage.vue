<template>
	<div>
		<slider />
		<router-view></router-view>
	</div>
</template>

<script>
import Slider from "../components/Slider.vue";
export default {
    name: 'home-page',
	components: {
		Slider
	}
}
</script>

<style>

</style>