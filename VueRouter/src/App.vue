<template>
	<div id="app">
		<comp-menu />
		<transition name="slide-fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import CompMenu from './components/CompMenu';
export default {
	name: 'app',
	components: {
		CompMenu
	},
	data () {
		return {
			
		}
	}
}
</script>

<style>
	/* transition trong Vue */
	/* .abc-enter-active, .abc-leave-active {
		transition: all .3s ease;
	} */
	/* component moi bat dau vao */
	/* .abc-enter {
		opacity: 0;
		transform: scale(1.1);
	}
	.abc-enter-to {
		opacity: 1;
		transform: scale(1);
	} */

	/* component cu bi remove khoi cau truc DOM */
	/* .abc-leave {
		opacity: 1;
		transform: scale(1);
	}
	.abc-leave-to {
		opacity: 0;
		transform: scale(1.1);
	} */

	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active below version 2.1.8 */ {
		transform: translateX(10px);
		opacity: 0;
	}
</style>
