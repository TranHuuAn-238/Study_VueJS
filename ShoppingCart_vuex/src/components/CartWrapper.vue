<template>
    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
        <div class="panel panel-info"> 
            <div class="panel-heading"><h1 class="panel-title">Your Cart</h1></div> 
            <div class="panel-body">
                <table class="table">
                    <cart-header />

                    <cart-body-table />
                    
                    <cart-footer />
                </table>
                <!-- <notify /> -->
            </div>
        </div>
    </div>
</template>

<script>
import CartBodyTable from './CartBodyTable'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
// import Notify from './Notify'
export default {
    name: 'cart-wrapper',
    components: {
        CartBodyTable,
        CartHeader,
        CartFooter,
        // Notify
    },
    
}
</script>

<style>

</style>