<template>
    <tr>
        <td class="text-center">{{ index }}</td>
        <td>{{ task.name }}</td>
        <td class="text-center">
            <span class="badge" v-bind:class="classLevel">{{ getLevelName }}</span></td>
        <td>
            <button 
                v-on:click="handleEdit"
                type="button" class="btn btn-warning">Edit</button>
            <button 
                v-on:click="handleDelete"
                type="button" class="btn btn-danger">Delete</button>
        </td>
    </tr>
</template>

<script>
import { mapActions } from "vuex";

import mapLevel from '../mocks/level.js';
export default {
    name: 'todo-list-item',
    props: {
        task: { type: Object, default: null },
        index: Number
    },
    // created() {
    //     console.log('TodoListItem Maplevel = ',mapLevel)
    // },
    computed: {
        getLevelName() {
            return this.mapLevel[this.task.level].name;
        },
        classLevel() {
            return this.mapLevel[this.task.level].class;
        }
    },
    data() {
        return {
            mapLevel: mapLevel
        }
    },
    methods: {
        ...mapActions({
            'actionHandleDelete': 'handleDelete',
            'actionHandleEdit': 'handleEdit'
        }),
        handleEdit() {
            this.actionHandleEdit(this.task);
        },
        handleDelete() {
            if(confirm('Bạn có muốn xóa task có tên là ' + this.task.name)) {
                // this.$emit('handleDelete', this.task);
                console.log('handleDelete TodoListItem.vue');
                this.actionHandleDelete(this.task);
            }
        }
    }
}
</script>

<style>

</style>
