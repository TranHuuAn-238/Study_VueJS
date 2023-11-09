<template>
    <div class="card panel-success">
        <div class="card-header">List Task</div>
        <table class="table table-hover ">
            <thead>
                <tr>
                    <th style="width: 10%" class="text-center">#</th>
                    <th>Task</th>
                    <th style="width: 20%" class="text-center">Level</th>
                    <th style="width: 160px">Action</th>
                </tr>
            </thead>

            <tbody v-if="listTask.length !== 0" >
                <todo-list-item 
                    v-for="(task, index) in listTask" 
                    v-bind:key="task.id"
                    v-bind:task="task"
                    v-bind:index="index + 1"
                    v-on:handleEdit="handleEdit"
                />
                <!-- <todo-list-item /> -->
                <!-- <todo-list-item /> -->
            </tbody>

            <tbody v-else>
                <tr>
                    <td colspan="4"><h3>List Empty</h3></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import TodoListItem from './TodoListItem';

export default {
    name: 'todo-list-table',
    components: {
        TodoListItem
    },
    // props: {
    //     listTask: { type: Array, default: [] }
    // },
    data() {
        return {
            
        }
    },
    watch: {
		// listTask: function(newTasks) {
		// 	var tasksString = JSON.stringify(newTasks);
		// 		localStorage.setItem('tasks', tasksString);
		// }
	},
    computed: {
        // ...mapGetters([
        //     'listTaskSearch'
        // ]),
        ...mapGetters({
            'listTask': 'listTaskSearchSort'
        })
    },
    created() {
        let tasks = localStorage.getItem('tasks') || '[]'; // short syntax ko can if else nhu ben App.vue
        // console.log('created TodolistTable.vue', JSON.parse(tasks));
        this.changeTasks(JSON.parse(tasks));
    },
    methods: {
        ...mapActions([
            'changeTasks'
        ]),
        handleEdit(taskEdit) {
            console.log('handleEdit ListTable.vue', taskEdit);
            this.$emit('handleEdit', taskEdit);
        }
    }
}
</script>

<style>

</style>
