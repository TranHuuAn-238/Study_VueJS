<template>
    <div class="col-12">
        <div class="input-group">
            <input 
                v-bind:value="strSearch"
                v-on:input="handleSearch"
                type="text" class="form-control" placeholder="Search for..." />
            <span class="input-group-append">
                <button 
                    v-on:click="handleClear"
                    class="btn btn-info" type="button">Clear!</button>
            </span>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
// v-model => v-bind -> v-on:input
export default {
    name: 'control-search',
    data() {
        return { }
    },
    computed: mapState([
        'strSearch'
    ]),
    methods: {
        handleClear() {
            // Thay đổi giá trị strSearch về ''
            // this.$emit('handleSearch', '');
            this.$store.dispatch('handleSearch', '');
        },
        handleSearch(e) {
            this.$store.dispatch('handleSearch', e.target.value);
            // console.log('handleSearch Search.vue', e.target);
        }
    }
}
</script>

<style>

</style>
