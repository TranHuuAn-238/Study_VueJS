<template>
	<div id="app">
		<router-view></router-view>
		<loading :class="{ show: isLoading }"/>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
	created() {
		this.onListenerTasks();
		this.onListenerUsers();
	},
	methods: {
		...mapActions([
			'onListenerTasks',
			'onListenerUsers' 
		])
	}
}
</script>

<style>

</style>
