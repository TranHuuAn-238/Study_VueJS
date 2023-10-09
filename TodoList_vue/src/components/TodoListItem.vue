<template>
    <tr>
        <td class="text-center">{{ index }}</td>
        <td>{{ task.name }}</td>
        <td class="text-center">
            <span class="badge" :class="classLevel">{{ getLevelName }}</span>
        </td>
        <td>
            <button type="button" class="btn btn-warning">Edit</button>
            <button 
                @click="handleDelete"
                type="button" class="btn btn-danger">Delete</button>
        </td>
    </tr>
</template>

<script>
import mapLevel from "../mocks/level.js";

export default {
    name: 'todo-list-item',
    props: {
        task: { type: Object, default: null },
        index: Number
    },
    // created() {
    //     console.log('TodoListItem Maplevel = ', mapLevel);
    // },
    computed: {
        getLevelName() {
            return this.mapLevel[this.task.level].name;
            // switch (this.task.level) {
            //     case 0:
            //         return 'Small';
            //         // break;
            //     case 1:
            //         return 'Medium';
            //     case 2:
            //         return 'High';
            //     default:
            //         return '';
            //         // break;
            // }
        },
        classLevel() {
            return this.mapLevel[this.task.level].class;
            // switch (this.task.level) {
            //     case 0:
            //         return { 'badge-info': true };
            //         // break;
            //     case 1:
            //         return { 'badge-warning': true };
            //     case 2:
            //         return { 'badge-danger': true };
            //     default:
            //         return {};
            //         // break;
            // }
        }
    },
    data() {
        return {
            mapLevel: mapLevel
        }        
    },
    methods: {
        handleDelete() {
            if (confirm('Do you want to delete this task: ' + this.task.name)) {
                this.$emit('handleDelete', this.task);
            }
        }
    }
}
</script>

<style>

</style>