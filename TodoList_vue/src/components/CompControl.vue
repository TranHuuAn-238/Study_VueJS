<template>
    <div class="col-12 col-lg-6">
        <div class="row">
            <!-- SORT : START -->
            <control-sort />
            <!-- SORT : END -->

            <!-- SEARCH : START -->
            <control-search 
                @handleSearch="handleSearch"
                :strSearch="strSearch"
            />
            <!-- SEARCH : END -->
        </div>
    </div>
</template>

<script>
import ControlSort from "./ControlSort";
import ControlSearch from "./ControlSearch";

export default {
    name: 'comp-control',
    components: {
        ControlSort,
        ControlSearch
    },
    props: {
        strSearch: { type: String, default: '' }
    },
    data() {
        return {
            
        }
    },
    methods: {
        handleSearch(data) {
            console.log('handleSearch CompControl.vue: ', data);
            this.$emit('handleSearch', data);

        }
    }
}
</script>

<style>

</style>