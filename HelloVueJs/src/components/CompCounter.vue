<template>
    <div>
        <h1>{{ count }}</h1>
        <h1>value = {{ value }}</h1>
        <button @click="count++">Plus</button>
        <button @click="count--">Minus</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'comp-counter',
    data() {
        return {
            
        }
    },
    // computed luc nay coi la data (viet voi syntax object)
    computed: {
        // ko dung props count trong data() nua, lay count truc tiep tu store su dung this.$store.state
        // count () {
        //     return this.$store.state.count
        // }
        count: {
            get() {
                // return this.$store.state.count
                return this.$store.getters.count
            },
            set(newCount) {
                // thay doi state o ham set (count trong store), ko bat buoc - co the viet method rieng de xu ly nhu binh thuong cung duoc
                // tuy nhien ko nen tu thay doi state o comp con, se co cach khac de thay doi state tai Store(mutations)
                this.$store.state.count = newCount;
                console.log('newCount = ', newCount);
            }
        },
        // su dung mapGetters de lay nhanh getters ma ko can this.$store.getters.
        ...mapGetters([
            'value',
            'countDouble'
        ])
    },
    mounted() {
        console.log(this.$store.getters.count);
        console.log(this.$store.getters.countDouble);
    }
}
</script>

<style>

</style>
