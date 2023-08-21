<template>
    <header><h1>{{ text }}</h1></header>    
</template>

<script>
export default {
    // ten component
    name: 'comp-header',
    // trong file .vue thi data la 1 function return ve 1 obj
    data() {
        return {
            text: 'Header'
        }
    }
}
</script>

<style>

</style>