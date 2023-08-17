var vueInstance = new Vue({
    // phan tu muon quan ly
    el: '#app',
    data: {
        title: "sieurom"
    },
    methods: {
        say: function(text) {
            return "Hello " + text;
        }
    }
})


// he thong phan ung: Reactivity
// giam sat moi thay doi cua du lieu(data) trong vue instance va tu render ra website
setTimeout(() => {
    vueInstance.title = "new sieurom";
}, 3000);


// data binding: rang buoc dl
var vueInstance2 = new Vue({
    el: "#app2",
    data: {
        title: "MY PRODUCTTT",
        url: "https://google.com",
        target: "_blank",
        price: 200000,
        sale: 0.1,
        selectedProduct: 1,
        cartNumber: 1,
        listProductDetail: [
            {
                image: './images/red.jpg',
                quantity: 0,
                textColor: 'Mau do'
            },
            {
                image: './images/blue.jpg',
                quantity: 8,
                textColor: 'Mau xanh'
            },
            {
                image: './images/black.jpg',
                quantity: 3,
                textColor: 'Mau den'
            }
        ],
        check: false,
        listDesc: [
            'Chất liệu: polyester và thun',
            'Thoát mồ hôi tốt',
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
            'Chất liệu: polyester và thun'
        ],
        description: '<p style="color: grey"><b>This is HTML</b></p>'
    },
    methods: {
        formatPrice() {
            const number = this.price;

            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        handleClickColor(e, index) {
            // console.log(e.target, index, this);
            this.selectedProduct = index;
        },
        classActive(index) {
            return {
                active: this.selectedProduct == index
            }
        },
        handleAddToCart(e) {
            if(this.cartNumber + 1 > this.getProduct.quantity) {
                alert("So luong ko du");
            } else {
                this.cartNumber += 1;
            }
            console.log(e.target);
        }
    },
    computed: {
        formatOriginalPrice() {
            var number = this.price;

            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        formatFinalPrice() {
            var number = this.price - this.sale * this.price;

            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        getProduct() {
            let index = this.selectedProduct;
            return this.listProductDetail[index];
        }
    }
})