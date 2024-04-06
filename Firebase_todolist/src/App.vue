<template>
	<div id="app">
		<router-view></router-view>
		<loading :class="{ show: isLoading }"/>
	</div>
</template>

<script>
import { mapState } from "vuex";
import Loading from './components/Loading.vue';
export default {
	name: 'app',
	components: {
		Loading
	},
	data () {
		return {
			
		}
	},
	computed: mapState([ 'isLoading' ]),
}
</script>

<style>

</style>
