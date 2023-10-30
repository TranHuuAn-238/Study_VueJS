<template>
    <div>
        <h1>{{ count }} <span>{{ value2 }}</span></h1>
        <button @click="count++">Plus</button>
        <button @click="count--">Minus</button>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
    name: 'counter-two',
    data() {
        return {
            
        }
    },
    computed: {
        // count () {
        //     return this.$store.state.count
        // }
        ...mapGetters([
            'count',
            'value',
            'countDouble'
        ]),
        ...mapState([
            'value2'
        ])
    }

    // chi nen dung syntax nay trong truong hop component nay ko co computed rieng cua no
    // computed: mapGetters([
    //     'count',
    //     'value',
    //     'countDouble'
    // ])
}
</script>

<style>

</style>
