<template>
	<div id="app">
		<div class="container">
			<!-- TITLE : START -->
			<comp-title />
			<!-- TITLE : END -->

			<div class="row">
				<!-- LIST PRODUCT : START -->
				<product-list />
				<!-- LIST PRODUCT : END -->
				
				<!-- CART : START -->
				<cart-wrapper />
				<!-- CART : END -->
			</div>
		</div>
	</div>
</template>

<script>
import CompTitle from "./components/CompTitle";
import ProductList from "./components/ProductList";
import CartWrapper from "./components/CartWrapper";
export default {
	name: 'app',
	components: {
		CompTitle,
		ProductList,
		CartWrapper
	}
}
</script>

<style>

</style>
