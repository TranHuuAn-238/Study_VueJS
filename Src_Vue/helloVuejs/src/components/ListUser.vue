<template>
    <div class="list-user">
        <!-- v-for la phai co :key -->
        <user 
            v-for="user in listUser" 
            :key="user.id"
            :user="user"
            @deleteUser="deleteUser"
        />

    </div>
</template>

<script>
// App
//   ListUSer (comp nay cung ko nam giu data listUser -> truyen Event tiep 1 lan nua ra App.vue la noi nam giu data nay de thay doi)
//      User -> truyen event thong bao ra cha (ListUser)
//      USer
import User from './User.vue'

export default {
    components: {
        User
    },
    name: 'list-user',
    data() {
        return {

        }
    },
    props: {
        listUser: {
            type: Array,
            default: []
        }
    },
    methods: {
        deleteUser(data) {
            // console.log('deleteUser in ListUser.vue', data);
            this.$emit('deleteUserEvent', data);
        }
    }
}
</script>

<style>
    .list-user {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .list-user .user {
        padding: 30px;
        /* flex: 1; */
        margin-bottom: 30px;
        border: 1px solid #333;
        width: calc(33.3333% - 20px)
    }
</style>