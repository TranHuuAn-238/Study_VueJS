<template>
     <tr>
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ product.name }}</td>
        <td>{{ formatPrice }}</td>
        <td>
            <input :value="cart.quantity" type="number" min="1">
        </td>
        <td><strong>{{ formatTotal }}</strong></td>
        <td>
            <a class="label label-info update-cart-item" href="#">Update</a>
            <a @click.prevent="handleDelete" class="label label-danger delete-cart-item" href="#">Delete</a>
        </td>
    </tr>
</template>

<script>
import { mapActions } from "vuex";
import { NOTI_ACT_DELETE } from "../constants/config";
import { toCurrency, validateQuantity } from "../helpers";
export default {
    name: 'cart-body-item',
    props: {
        cart: { type: Object },
        index: { type: Number }
    },
    computed: {
        product() {
            return this.cart.product;
        },
        formatPrice() {
            return toCurrency(this.product.price, 'USD', 'right');
        },
        formatTotal() {
            return toCurrency(this.product.price * this.cart.quantity, 'USD', 'right');
        }
    },
    methods: { 
        ...mapActions({
            'actDeleteCart': 'cart/actDeleteCart'
        }),
        handleDelete() {
            if(confirm("Do you want to delete this product?")) {
                this.actDeleteCart(this.cart);
                this.$notify(NOTI_ACT_DELETE);
            }
        }
    }
}
</script>

<style>

</style>