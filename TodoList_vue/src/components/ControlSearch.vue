<template>
     <div class="col-12">
        <div class="input-group">
            <input 
                :value="strSearch"
                @input="handleSearch"
                type="text" class="form-control" placeholder="Search for..." />
            <span class="input-group-append">
                <button
                    @click="handleClear" 
                    class="btn btn-info" type="button">Clear!</button>
            </span>
        </div>
    </div>
</template>

<script>
// v-model => v-bind + v-on:input
export default {
    name: 'control-search',
    props: {
        strSearch: { type: String, default: '' }
    },
    data() {
        return {

        }
    },
    methods: {
        handleClear() {
            // thay doi gia tri strSearch ve ''
            this.$emit('handleSearch', '');
        },
        handleSearch(e) {
            // console.log(e.target);
            this.$emit('handleSearch', e.target.value);
        }
    }
}
</script>

<style>

</style>