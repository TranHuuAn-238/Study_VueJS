<template>
    <div class="wrapper-popup" :class="getClassPopup">
        <div class="rule">
            <h3>Luật chơi</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente voluptate, ratione at nisi ipsum incidunt iusto dolorem nihil eligendi temporibus et blanditiis ipsa esse impedit! Magnam maxime hic laborum debitis?</p>
            <button 
                @click="confirm"
                class="confirm">Got it</button>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'popup-rule',
    props: {
        isOpenPopup: { type: Boolean, default: false }
    },
    data() {
        return {

        }
    },
    methods: {
        confirm() {
            console.log('confirm from PopupRule.vue');
            this.$emit('handleConfirm');
        }
    },
    computed: {
        getClassPopup: function() {
            return {
                "open-popup": this.isOpenPopup
            }
        }
    }
}
</script>

<style>
    .wrapper-popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /* css lam mo man hinh */
        background-color: rgba(0, 0, 0, 0.4);

        /* tam an ban dau */
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;
    }
    .wrapper-popup.open-popup {
        /* css cho .open-popup cung bac vs .wrapper-popup */
        /* hien thi ra */
        opacity: 1;
        visibility: visible;
    }
    .rule {
        width: 350px;
        padding: 20px;

        /* css cho popup vao giua */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.2);

        background-color: #fff;
        position: absolute;
        font-family: Arial, Helvetica, sans-serif;
        transition: all .3s ease;
    }
    /* scale -> tao 1 class moi la open-popup */
    .open-popup .rule {
        transform: translate(-50%, -50%) scale(1);
    }
    .rule h3 {
        margin-bottom: 10px;
    }
    .rule .confirm {
        cursor: pointer;
        margin-top: 20px;
        padding: 8px 15px;
        border: 2px solid #333;
        background-color: #fff;

        /* css tang do tre khi re chuot vao */
        transition: all .3s ease;
    }
    .rule .confirm:hover {
        color: #fff;
        background-color: #333;
    }
    /* ket hop CSS3 với VueJS de xay dung hieu ung - Zoom In - Zoom Out su dung scale */
</style>