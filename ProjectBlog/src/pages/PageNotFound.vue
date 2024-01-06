<template>
    <div class="page-404">
        <div>
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230802153215/Error-404.png" alt="404">
        </div>
        <router-link 
            tag="button"
            to="/"
            type="submit" class="btn btn-primary">Go to HomePage</router-link>
    </div>
</template>

<script>
export default {
    name: 'page-not-found'
}
</script>

<style>
    .page-404 {
        text-align: center;
    }
</style>