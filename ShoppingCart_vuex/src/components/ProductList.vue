<template>
    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
        {{ count }} <button @click="plus">Plus</button>
        <div class="panel panel-primary"> 
            <div class="panel-heading"><h1 class="panel-title">List Products</h1></div> 
            <div class="panel-body" id="list-product">
                <product-item />
                <product-item />
                <product-item />
                <product-item />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

import ProductItem from "./ProductItem";
export default {
    name: 'product-list',
    components: {
        ProductItem
    },
    computed: {
        ...mapState({
            // lay state cua module product (sd arrow function)
            count: state => state.product.count
        })
    },
    methods: {
        plus() {
            this.$store.state.product.count++;
        }
    }
}
</script>

<style>

</style>