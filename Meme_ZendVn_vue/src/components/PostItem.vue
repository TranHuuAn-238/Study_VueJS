<template>
    <div class="ass1-section__item" v-if="post">
        <div class="ass1-section">
            <post-item-head :post="post" />
            
            <post-item-content :post="post" />
            
            <post-item-footer :post="post" />
        </div>
    </div>
</template>

<script>
import PostItemHead from "./PostItemHead.vue";
import PostItemContent from "./PostItemContent.vue";
import PostItemFooter from "./PostItemFooter.vue";
export default {
    name: 'post-item',
    components: {
        PostItemHead,
        PostItemContent,
        PostItemFooter
    },
    props: {
        post: { type: Object, default: null }
    }
}
</script>

<style>

</style>