export default {
    actBuyProduct({ commit, state }, data) {
        const index = state.listCarts.findIndex(function(cart) {
            return cart.product.id === data.product.id
        });
        if(index === -1) {
            // khong ton tai
            commit('BUY_PRODUCT', data);
        } else {
            let quantity = data.quantity;
            commit('CHANGE_QUANTITY', { index, quantity });
        }

    }
}