<template>
    <div class="col-12 col-lg-6">
        <div class="row">
            <!-- SORT : START -->
            <control-sort 
                :orderBy="orderBy"
				:orderDir="orderDir"
                @handleSort="handleSort"
            />
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
        strSearch: { type: String, default: '' },
        orderBy: { type: String, default: 'name' },
        orderDir: { type: String, default: 'asc' }
    },
    data() {
        return {
            
        }
    },
    methods: {
        handleSearch(data) {
            this.$emit('handleSearch', data);

        },
        // handleSort(orderBy, orderDir) {
        handleSort(data) {
            this.$emit("handleSort", data);
        }
    }
}
</script>

<style>

</style>