<template>
    <div class="ass1-header__search">
        <form action="#" @submit.prevent="handleSearch">
            <label>
                <input 
                    v-model="querySearch"
                    type="search" name="search-text" class="form-control" placeholder="Nhập từ khóa ...">
                <i class="icon-Search"></i>
            </label>
        </form>
    </div>
</template>

<script>
export default {
    name: 'app-header-search',
    data() {
        return {
            querySearch: ''
        }
    },
    methods: {
        handleSearch() {
            if (this.querySearch) {
                this.$router.push({
                    name: 'search',
                    query: {
                        query: this.querySearch
                    }
                });
                this.querySearch = '';
            } else {
                alert('Please input keywords before search');
            }
        }
    }
}
</script>

<style>

</style>