<template>
	<div id="app">
		<app-header v-if="isRenderHeader" />
		<main>
			<div class="container">
				<router-view></router-view>
			</div>
		</main>
		<app-footer v-if="isRenderFooter" />
		<loading :class="{ show: isLoading }" />
	</div>
</template>

<script>
import { mapState } from 'vuex';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import Loading from './components/Loading.vue';
export default {
	name: 'app',
	components: {
		AppHeader,
		AppFooter,
		Loading
	},
	data () {
		return {
			
		}
	},
	computed: {
		...mapState([
			'isLoading'
		]),
		isRenderHeader() {
			var arrRouter = ['login', 'register'];
			var routerName = this.$route.name;
			if(arrRouter.indexOf(routerName) !== -1) {
				// routerName ton tai trong arrRouter => ko hien thi header
				return false;
			}
			return true;
		},
		isRenderFooter() {
			var arrRouter = ['home-page', 'post-detail'];
			var routerName = this.$route.name;
			if(arrRouter.indexOf(routerName) !== -1) {
				// routerName ton tai trong arrRouter => ko hien thi footer
				return false;
			}
			return true;
		}
	},
	methods: {

	}
}
</script>

<style>
	
</style>
