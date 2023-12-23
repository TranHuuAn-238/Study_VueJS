<template>
    <b-container class="pt-5 pb-5">
        <b-row>
            <b-col sm="4">
                <b-list-group>
                    <!-- <b-list-group-item
                        v-for="(user, index) in listUser"
                        :key="index"
                    >{{ user.fullName }}</b-list-group-item> -->


                    <!-- <router-link
                        v-for="(user, index) in listUser"
                        :key="index"
                        :to="`/user/${index + 1}`"
                        tag="b-list-group-item"
                        exactActiveClass="active"
                    > -->
                    <router-link
                        v-for="(user, index) in listUser"
                        :key="index"
                        :to="{name: 'userABC', params: { id: index + 1 } }"
                        tag="b-list-group-item"
                        exactActiveClass="active"
                    >
                        {{ user.fullName }}
                    </router-link>
                </b-list-group>
            </b-col>
            <b-col sm="8">
                <h3 v-if="!currentId">Please choose any user</h3>
                <template v-else-if="getCurrentUser">
                    <p>Name: {{ getCurrentUser.fullName }}</p>
                    <p>Email: {{ getCurrentUser.email }}</p>
                    <p>Active: {{ getCurrentUser.isActive }}</p>
                    <p>Desc: {{ getCurrentUser.description }}</p>
                </template>
                <h3 v-else>Opps. Something went wrong</h3>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import listUser from "../mock/list-user";

export default {
    name: 'list-user',
    data() {
        return {
            listUser,
            currentId: null
        }
    },
    created() {
        // life cycle nay chi chay 1 lan duy nhat luc load trang
        this.currentId = this.$route.params.id;
    },
    computed: {
        getCurrentUser() {
            let id = parseInt(this.currentId);
            if(id > this.listUser.length) {
                return null;
            }
            return this.listUser[id - 1];
        }
    },
    watch: {
        '$route' (to, from) {
            // to, from tuc la newValue va oldValue
            this.currentId = to.params.id;      // hoac this.currentId = this.$route.params.id;
            console.log(to, from);
        }
    }
}
</script>

<style>

</style>