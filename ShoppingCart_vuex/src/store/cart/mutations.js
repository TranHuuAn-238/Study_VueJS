export default {
    CHANGE_QUANTITY(state, { index, quantity, isReplace = false }) {
        console.log('CHANGE_QUANTITY', index, quantity, isReplace);
        if(isReplace) {
            state.listCarts[index].quantity = quantity;
        } else {
            state.listCarts[index].quantity += quantity;
        }
    },
    BUY_PRODUCT(state, data) {
        state.listCarts.push(data);
    },
    CHANGE_LIST_CARTS: (state, newListCarts) => {
        state.listCarts = newListCarts;
    }
}