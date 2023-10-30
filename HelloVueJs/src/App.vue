<template>
	<div id="app">
		<!-- <CompHeader></CompHeader> -->
		<!-- <CompHeader /> -->
		<comp-counter />
		<hr>
		<counter-two />
		<hr>
		<counter-three />
	</div>
</template>

<script>
import CompCounter from './components/CompCounter.vue';
import CounterTwo from './components/CounterTwo.vue';
import CounterThree from './components/CounterThree.vue';
export default {
	name: 'app',
	data () {
		return {
			// count: 0
		}
	},
	components: {
		CompCounter,
		CounterTwo,
		CounterThree
	},
	methods: {
		
	}
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
