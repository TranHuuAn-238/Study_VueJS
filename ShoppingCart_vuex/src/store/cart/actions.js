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

    },
    actDeleteCart({ commit, state }, cartDelete) {
        var newListCarts = state.listCarts.filter(item => {
            return item.product.id !== cartDelete.product.id;
        });
        commit('CHANGE_LIST_CARTS', newListCarts);
    }
}