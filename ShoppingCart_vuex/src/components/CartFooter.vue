<template>
    <tfoot id="my-cart-footer">
        <!-- CART FOOTER -->
        <tr>
            <td colspan="4">There are <b>{{ tfooterInfo.countItem }}</b> items in your shopping cart.</td>
            <td colspan="2" class="total-price text-left">{{ formatPrice }}</td>
        </tr>
    </tfoot>
</template>

<script>
import { mapGetters } from "vuex";
import { toCurrency } from "../helpers";

export default {
    name: 'cart-footer',
    computed: {
        ...mapGetters({
            'tfooterInfo': 'cart/tfootInfo'
        }),
        formatPrice() {
            return toCurrency(this.tfooterInfo.totalPrice, 'USD', 'right');
        }
    }
    
}
</script>

<style>

</style>