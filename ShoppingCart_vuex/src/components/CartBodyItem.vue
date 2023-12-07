<template>
     <tr>
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ product.name }}</td>
        <td>{{ formatPrice }}</td>
        <td>
            <input 
                :value="cart.quantity" 
                @blur="handleUpdate"
                type="number" min="1">
        </td>
        <td><strong>{{ formatTotal }}</strong></td>
        <td>
            <a @click.prevent="" class="label label-info update-cart-item" href="#">Update</a>
            <a @click.prevent="handleDelete" class="label label-danger delete-cart-item" href="#">Delete</a>
        </td>
    </tr>
</template>

<script>
import { mapActions } from "vuex";
import { NOTI_ACT_DELETE, NOTI_GREATER_THAN_ONE, NOTI_ACT_UPDATE } from "../constants/config";
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
            'actDeleteCart': 'cart/actDeleteCart',
            'actUpdateQuantity': 'cart/actUpdateQuantity',
            'setLoading': 'setLoading'
        }),
        handleDelete() {
            if(confirm("Do you want to delete this product?")) {
                this.actDeleteCart(this.cart);
                this.$notify(NOTI_ACT_DELETE);
            }
        },
        handleUpdate(e) {
            this.setLoading(true);
            setTimeout(() => {
                let quantity = e.target.value;
                const check = validateQuantity(quantity);
                if(check) {
                    let data = {
                        cartUpdate: this.cart, 
                        quantity: parseInt(quantity) 
                    }
                    this.actUpdateQuantity(data);
                    this.$notify(NOTI_ACT_UPDATE);
                } else {
                    e.target.value = this.cart.quantity;
                    this.$notify(NOTI_GREATER_THAN_ONE);
                }

                this.setLoading(false);  // phai nho khai bao theo kieu arrow function thi moi truy cap duoc vao 'this' cua doi tuong vue hien tai
            }, 1000);
        }
    }
}
</script>

<style>

</style>