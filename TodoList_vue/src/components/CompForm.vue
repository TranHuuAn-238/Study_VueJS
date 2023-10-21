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
                v-if="taskSelected === null"
                @click="handleAddNew"
                type="button" class="btn btn-primary">Submit</button>
            <button 
                v-else
                @click="handleEditTask"
                type="button" class="btn btn-primary">Update</button>

            <button 
                @click="handleCancel"
                type="button" class="btn btn-secondary">Cancel</button>
        </form>
    </b-col>
</template>

<script>
import FormAdd from "./FormAdd";
// import { v4 as uuidv4 } from "uuid";
import uuidv4 from 'uuid/v4';


export default {
    name: 'comp-form',
    components: {
        FormAdd
    },
    props: {
        isShowForm: { type: Boolean, default: false },
        taskSelected: { type: Object, default: null }
    },
    data() {
        return {
            taskName: '',
            level: 0
        }
    },
    watch: {
        taskSelected: function(newData, oldData) {
            if(newData !== null) {
                // nguoi dung da click vao button edit
                this.taskName = newData.name;
                this.level = newData.level;
            }
        }
    },
    beforeUpdate() {
        // if(this.taskSelected !== null) {
        //     // nguoi dung da click vao button edit
        //     this.taskName = this.taskSelected.name;
        //     this.level = this.taskSelected.level;
        // }
        // console.log('beforeUpdate: ', this.taskSelected);
    },
    methods: {
        handleEditTask() {
            let objTaskEdit = {
                id: this.taskSelected.id,
                name: this.taskName,
                level: parseInt(this.level)
            }
            this.$emit('handleEditTaskById', objTaskEdit);
            this.handleResetData();
        },
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