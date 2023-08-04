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
// giam sat moi thay doi cua du lieu trong vue instance va tu render ra website
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
        check: false
    },
    methods: {
        formatPrice() {
            const number = this.price;

            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        }
    }
})