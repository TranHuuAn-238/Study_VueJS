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

            <tbody>
                <todo-list-item />
                <todo-list-item />                
                <todo-list-item />
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
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>
