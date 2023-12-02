export default {
    tfootInfo: state => {
        let { listCarts } = state;

        let initObjSum = {
            countItem: 0,
            totalPrice: 0
        }

        // hoac dung vong lap for binh thuong cung duoc
        return listCarts.reduce(function(objSum, objCart) {
            // objSum: gia tri tich luy;  objCart: gia tri phan tu mang hien tai
            let countItem = objSum.countItem + objCart.quantity;
            let totalPrice = objSum.totalPrice + objCart.product.price * objCart.quantity;
            return { countItem, totalPrice }
        }, initObjSum);
    }
}