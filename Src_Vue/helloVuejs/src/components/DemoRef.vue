<template>
    <div class="demo-ref">
        <!-- tham chieu, cac phan tu DOM khac tham chieu den no, kick hoat su kien cho no -->
        <input 
            type="file" style="display: none;"
            ref="fileInputAvatar"    
        >
        <h1>DemoRef</h1>
        <button 
            @click="handleClickInputFile"
            class="avatar">Thay doi Avatar</button>
        
    </div>
</template>

<script>
export default {
    name: "demo-ref",
    data() {
        return {

        }
    },
    methods: {
        handleClickInputFile(e) {
            this.$refs.fileInputAvatar.click();
        }
    }
    
}
</script>

<style>
    .demo-ref {
        margin-top: 100px;
        padding: 100px 30px;
        border: 1px solid #000;
    }
    .avatar {
        color: #fff;
        border: 2px solid #333;
        padding: 12px 15px;
        background-color: #333;
        transition: all .3s ease;
    }
    .avatar:hover {
        color: #333;
        background-color: #fff;
    }
</style>