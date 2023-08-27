<template>
    <footer><h1>{{ title }}</h1></footer>
</template>

<script>
export default {
    name: 'comp-footer',
    data() {
        return {
            textFooter: "This is Footer"
        }
    },
    props: {
        title: {
            type: String,
            // gia tri mac dinh neu comp cha ko truyen data, neu ko thiet lap default nay thi {{ title }} co gia tri la undefined
            default: "gia tri mac dinh khi comp cha ko truyen vao comp con"
        }
    }
}
</script>

<style>

</style>