<template>
    <div>
        <user-page-infor 
            :countPost="countPost"
            :userInfor="userInfor" />
        <div 
            v-if="listPostOfUser && listPostOfUser.length"
            v-masonry
            column-width='.grid-sizer'
            transition-duration="0.3s" 
            item-selector=".ass1-section__item"
            class="ass1-section__wrap row ass1-section__isotope-init">
            
            <div class="grid-sizer"></div>
            
            <post-item 
                v-masonry-tile
                v-for="item in listPostOfUser"
                v-bind:key="item.PID"
                v-bind:post="item"
                class="col-lg-6"
            />

        </div>
    </div>
</template>

<script>
import PostItem from '../components/PostItem';
import UserPageInfor from '../components/UserPageInfor';

import { mapActions } from "vuex";

export default {
    name: 'user-page',
    components: {
        PostItem,
        UserPageInfor
    },
    data() {
        return {
            userInfor: null,
            listPostOfUser: [],
            userid: this.$route.params.id
        }
    },
    // chay khi router thay doi
    watch: {
        $route(to, from) {
            this.userid = to.params.id;
            this.fetchAllData();
        }
    },
    computed: {
        countPost() {
            if (this.listPostOfUser && this.listPostOfUser.length) {
                return this.listPostOfUser.length;
            }
            return 0;
        }
    },
    // chay khi nguoi dung load lai trang
    created() {
        this.fetchAllData();
    },
    methods: {
        ...mapActions([
            'setLoading',
            'getUserById',
            'getListPostByUserId'
        ]),
        async fetchAllData() {
            this.setLoading(true);

            let userid = this.userid;
            let promiseUser     = this.getUserById(userid);
            let promisePostUser = this.getListPostByUserId(userid);

            // promise all de chay dong thoi 2 promise cho nhanh vi 2 promise nay cung ko phu thuoc gi nhau
            let [resultUser, resultPostUser] = await Promise.all([promiseUser, promisePostUser]);

            this.setLoading(false);

            if (resultUser.ok && resultPostUser.ok) {
                this.userInfor       = resultUser.data;
                this.listPostOfUser  = resultPostUser.posts;

                // Data changed
                this.$redrawVueMasonry();
            } else {
                this.$route.push('/');
            }
        }
    },
}
</script>

<style>

</style>