<template>
    <div class="page-title">
        <span>{{ title }}</span>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'page-title',
    props: [ 'title' ],
    data() {
        return {

        }
    }
}
</script>