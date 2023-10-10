<template>
    <b-col cols="12" lg="6">
        <!-- ADD : START -->
        <form-add 
            :isShowForm="isShowForm"
            @handleToggleForm="handleToggleForm"
        />
        <!-- ADD : END -->

        <form v-if="isShowForm" action="" method="POST" class="form-inline justify-content-between">
            <div class="form-group">
                <label class="sr-only" for="">label</label>
                <input v-model="taskName" type="text" class="form-control" placeholder="Task Name" />
            </div>
            <div class="form-group">
                <label class="sr-only" for="">label</label>
                <select v-model="level" name="ds" class="form-control" required="required">
                    <option value="0">Small</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                </select>
            </div>

            <button 
                @click="handleAddNew"
                type="button" class="btn btn-primary">Submit</button>
            <button 
                @click="handleCancel"
                type="button" class="btn btn-secondary">Cancel</button>
        </form>
    </b-col>
</template>

<script>
import FormAdd from "./FormAdd";
import { v4 as uuidv4 } from "uuid";


export default {
    name: 'comp-form',
    components: {
        FormAdd
    },
    props: {
        isShowForm: { type: Boolean, default: false }
    },
    data() {
        return {
            taskName: '',
            level: 0
        }
    },
    methods: {
        handleAddNew() {
            let objTask = {
                id: uuidv4(),
                name: this.taskName,
                level: parseInt(this.level)
            }
            // kiem tra du lieu hop le
            
            this.$emit('handleAddNewTask', objTask);
            this.handleCancel();
        },
        handleToggleForm() {
            console.log('handleAddTask CompForm.vue');
            this.$emit('toggleForm');
        },
        handleCancel() {
            this.$emit('toggleForm');
            this.handleResetData();
            // reset data
        },
        handleResetData() {
            this.taskName = '',
            this.level = 0;
        }
    }
}
</script>

<style>

</style>