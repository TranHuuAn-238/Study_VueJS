<template>
    <!-- sau khi khai bao props xog thi sd prop lay duoc nay nhu data thong thuong -->
    <header>
        <ul>
            <li v-for="user in listUser" :key="user.id">{{ user.email }}</li>
        </ul>
        <h1>{{ titleHeader }}</h1>
        <br>
        <button @click="changeTitleHeader">Thay doi title tu comp Header</button>  
    </header>  
</template>

<script>
export default {
    // ten component
    name: 'comp-header',
    // trong file .vue thi data la 1 function return ve 1 obj
    data() {
        return {
            text: 'Header'
        }
    },
    props: {
        // khai bao cac props de lay data tu comp cha
        titleHeader: String,
        listUser: {
            type: Array,
            default: []
        }
    },
    methods: {
        changeTitleHeader(e) {
            // ko dc phep thay doi truc tiep props tu cha
            // this.titleHeader ="wroing";
            // console.log(this.titleHeader);

            // -> phai truyen su kien thong bao muon thay doi ra cha (tu comp con - comp header kich hoat su kien 'changeTitleEvent' o comp cha)
            // khi kich hoat thi func handleChangeTitle() o App.vue se dc chay -> thay doi du lieu
            console.log('trc khi kich hoat su kien changeTitleEvent trong comp header');

            var data = {
                tit: 'data truyen thong qua bien event'
            }
            this.$emit('changeTitleEvent', data );
            console.log('sau khi kich hoat su kien changeTitleEvent trong comp header');

        }
    }
}
</script>

<style>

</style>