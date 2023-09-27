<template>
    <b-col cols="12" lg="6">
        <!-- ADD : START -->
        <form-add 
            :isShowForm="isShowForm"
            @handleAddTask="handleAddTask"
        />
        <!-- ADD : END -->

        <form v-if="isShowForm" action="" method="POST" class="form-inline justify-content-between">
            <div class="form-group">
                <label class="sr-only" for="">label</label>
                <input type="text" class="form-control" placeholder="Task Name" />
            </div>
            <div class="form-group">
                <label class="sr-only" for="">label</label>
                <select name="ds" class="form-control" required="required">
                    <option value="0">Small</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                </select>
            </div>

            <button type="button" class="btn btn-primary">Submit</button>
            <button 
                @click="handleCancel"
                type="button" class="btn btn-secondary">Cancel</button>
        </form>
    </b-col>
</template>

<script>
import FormAdd from "./FormAdd";

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

        }
    },
    methods: {
        handleAddTask() {
            console.log('handleAddTask CompForm.vue');
            this.$emit('toggleForm');
        },
        handleCancel() {
            this.$emit('toggleForm');

            // reset data
        }
    }
}
</script>

<style>

</style>