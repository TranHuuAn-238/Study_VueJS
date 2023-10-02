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

            <tbody v-if="listTask.length !== 0">
                <todo-list-item 
                    v-for="(task, index) in listTask" :key="task.id" 
                    :task="task"
                    :index="index + 1"
                />
            </tbody>

            <tbody v-else>
                <tr>
                    <td colspan="4">
                        <h3>
                            List Empty
                        </h3>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";

export default {
    name: 'todo-list-table',
    components: {
        TodoListItem
    },
    props: {
        listTask: { type: Array, default: [] }
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>
