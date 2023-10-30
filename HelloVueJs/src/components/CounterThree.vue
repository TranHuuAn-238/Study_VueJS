<template>
    <div>
        <h1>{{ count }}</h1>
        <button @click="plus">Plus</button>
        <button @click="minus">Minus</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'counter-three',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters([
            'count'
        ])
    },
    methods: {
        // ...mapActions([
        //     'incrementAction',
        //     'decrementAction'
        // ]),
        // sd syntax object khi ten action trung voi ten cua method da dinh nghia trong component => dinh nghia 1 name khac
        ...mapActions({
            'ABC': 'incrementAction',
            'DEF': 'decrementAction'
        }),
        plus() {
            // console.log("$store plus = ", this.$store);
            console.log("Plus method CounterThree.vue");
            // 10 o day la tham so truyen them vao mutation - ta goi no la payload, ko bat buoc
            // this.$store.commit('increment', 10); // commit coi giong nhu $emit
            let obj = {
                number: 10,
                // product: []
            };
            // this.$store.dispatch('incrementAction', obj); // kich hoat actions bang dispatch - giong nhu kich hoat mutations bang commit
            // this.incrementAction(obj); // sd mapActions -> goi action nhu method
            this.ABC(obj);
        },
        minus() {
            console.log("Minus method CounterThree.vue");
            // this.$store.commit('decrement', 10);
            let obj = {
                number: 10
            };
            // this.$store.dispatch('decrementAction', obj);
            // this.decrementAction(obj);
            this.DEF(obj);
        }
    }
}
</script>

<style>

</style>
