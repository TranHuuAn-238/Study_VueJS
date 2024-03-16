<template>
    <div class="row">
        <div class="col-lg-8">
            <div class="ass1-section__list" v-if="getDataPostDetail && getDataPostDetail.post">
                <div class="ass1-section">
                    <post-item :post="getDataPostDetail.post" />

                    <!-- <post-feeling /> -->
                    <ul>
                        <li v-for="item in getDataPostDetail.categories" :key="item.TAG_ID">
                            <router-link :to="getLinkCategory(item)">{{ item.tag_value }}</router-link>
                        </li>
                    </ul>
                </div>

                <post-comment-add />

                <post-comments :comments="getDataPostDetail.comments" />
            </div>
        </div>
        <div class="col-lg-4">
            <sidebar />
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import PostItem from '../components/PostItem'
import PostFeeling from '../components/PostFeeling'
import PostComments from '../components/PostComments'
import PostCommentAdd from '../components/PostCommentAdd'

import { mapActions, mapGetters } from 'vuex';
import { removeVietnameseFromString } from '../helpers';

export default {
    name: 'post-detail',
    data() {
        return {
            postId: this.$route.params.id
        }
    },
    components: {
        Sidebar,
        PostItem,
        PostFeeling,
        PostComments,
        PostCommentAdd
    },
    watch: {
        $route(to, from) {
            this.postId = to.params.id;
            this.fetchDataPostDetail();
        }
    },
    computed: {
        ...mapGetters([
            'getDataPostDetail'
        ])
    },
    created() {
        // load lai trang lan dau tien
        this.fetchDataPostDetail();
        // this.getDataPostDetail;
    },
    methods: {
        ...mapActions([
            'getPostDetailById'
        ]),
        fetchDataPostDetail() {
            this.getPostDetailById(this.postId).then(res => {
                if (!res.ok) {
                    this.$router.push('/');
                }
            })
        },
        getLinkCategory(category) {
            return {
                name: 'home-page',
                query: {
                    text: removeVietnameseFromString(category.tag_value),
                    tagIndex: category.tag_index
                }
            }
        }
    }
}
</script>

<style>
    
</style>