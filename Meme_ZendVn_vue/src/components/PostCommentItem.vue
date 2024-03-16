<template>
    <div class="ass1-comments__section" v-if="comment">
        <a href="#" class="ass1-comments__avatar ass1-avatar">
            <img :src="renderAvatar" alt="">
        </a>
        <div class="ass1-comments__content">
            <a href="#" class="ass1-comments__name">{{ comment.fullname }}</a>
            <span class="ass1-comments__passed">{{ formatTimeCmt }}</span>
            <p>{{ comment.comment }}</p>
            <!-- <div class="ass1-comments__info">
                <a href="#" class="ass1-comments__btn-upvote ass1-btn-icon"><i class="icon-Upvote"></i><span>901</span></a>
                <a href="#" class="ass1-comments__btn-down ass1-btn-icon"><i class="icon-Downvote"></i><span>36</span></a>
            </div> -->
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'post-comment-item',
    props: {
        comment: { type: Object, default: null }
    },
    computed: {
        renderAvatar() {
            if (this.comment && this.comment.profilepicture) {
                return this.comment.profilepicture;
            }
            return 'images/avatar-02.png';
        },
        formatTimeCmt() {
            moment.locale('vi');
            return moment(this.comment.time_added).fromNow();
        },
    }
}
</script>

<style>

</style>