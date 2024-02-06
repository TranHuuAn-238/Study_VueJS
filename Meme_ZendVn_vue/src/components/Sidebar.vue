<template>
    <aside class="ass1-aside">
        <div class="ass1-content-head__t">
            <div>Bai viet gan day cua ban</div>
        </div>
        <div v-if="!isLogin">
            Vui long dang nhap de xem noi dung nay
            <router-link to="/login">Login</router-link>
        </div>
        <div v-else-if="isLogin && getListPostOfCurrentUser && getListPostOfCurrentUser.length">
            <post-item 
                v-for="item in getListPostOfCurrentUser" 
                :key="item.PID" 
                :post="item"
            />
        </div>
    </aside>
</template>

<script>
import PostItem from './PostItem.vue'
import { mapGetters } from 'vuex';
export default {
    name: 'sidebar',
    components: { 
        PostItem 
    },
    computed: {
        ...mapGetters([
            'isLogin',
            'getListPostOfCurrentUser'
        ])
    }
}
</script>

<style>

</style>