<template>
    <div class="col-12">
        <div class="form-group">
            <!-- <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort by
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Name ASC</a>
                    <a class="dropdown-item" href="#">Name DESC</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Level ASC</a>
                    <a class="dropdown-item" href="#">Level DESC</a>
                </div>
                <span class="badge badge-success badge-medium">NAME - DESC</span>
            </div> -->
            <b-dropdown text="Sort by">
                <b-dropdown-item>Name ASC</b-dropdown-item>
                <b-dropdown-item>Name DESC</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Level ASC</b-dropdown-item>
                <b-dropdown-item>Level DESC</b-dropdown-item>
            </b-dropdown>
            <span class="badge badge-success badge-medium">NAME - DESC</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'control-sort',
    data() {
        return {

        }
    }    
}
</script>

<style>

</style>