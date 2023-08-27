<template>
    <div class="user">
        <p>{{ user.email }}</p>
        <button 
            @click="handleDelete" 
            class="delete">Delete</button>
    </div>
</template>

<script>
export default {
    name: 'user',
    data() {
        return {

        }
    },
    props: {
        user: {
            type: Object,
            default: null
        }
    },
    methods: {
        handleDelete(e) {
            var data = {
                // this.user: props truyen xuong
                id: this.user.id
            };
            // console.log('handleDelete in User.vue');
            this.$emit('deleteUser', data);
        }
    }
}
</script>

<style>
    .user {
        position: relative;
    }
    .user .delete {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>