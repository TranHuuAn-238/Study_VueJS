<template>
    <div class="form-group add-task">
        <button 
            v-if="!isShowForm"
            @click="onClickAddTask"
            type="button" class="btn btn-info btn-block">Add Task</button>
        <button 
            v-else
            @click="onClickAddTask"
            type="button" class="btn btn-primary btn-block">Close Form</button>
    </div>
</template>

<script>
export default {
    name: 'form-add',
    data() {
        return {

        }
    },
    props: {
        isShowForm: { type: Boolean, default: false }
    },
    methods: {
        onClickAddTask() {
            this.$emit('handleToggleForm');
        }
    }
}
</script>

<style>

</style>