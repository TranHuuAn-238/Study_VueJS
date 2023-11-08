<template>
	<div id="app">
		<b-container>
			<comp-title />

			<b-row>
				<comp-control />

				<comp-form 
					v-bind:taskSelected="taskSelected"
					v-on:handleAddNewTask="handleAddNewTask"
					v-on:handleEditTaskById="handleEditTaskById"
				/>
			</b-row>

			<todo-list-table 
				v-on:handleEdit="handleEdit"
				v-on:handleDelete="handleDelete"
			/>
		</b-container>
	</div>
</template>

<script>
/*
App
	CompForm
		FormAdd -> click 
			-> Run onClickAddTask() 
			-> Kích hoạt Event handleAddTask 
			-> Kích hoạt tiếp toggleForm

*/
// Lưu dũ liệu -> Không cần -> Mock Data, Fake Data

import { mapState } from "vuex";

import TodoListTable from './components/TodoListTable';
import CompTitle from './components/CompTitle';
import CompControl from './components/CompControl';
import CompForm from './components/CompForm';

import listTask from './mocks/tasks';

export default {
	name: 'app',
	components: {
		CompForm,
		CompTitle,
		CompControl,
		TodoListTable
	},
	data () {
		return {
			taskSelected: null
		}
	},
	methods: {
		handleEditTaskById(taskEdit) {
			let index = this.listTask.findIndex(item => item.id === taskEdit.id);
			
			if(index !== -1) {
				this.listTask.splice(index, 1, taskEdit);
				this.toggleForm();
			}
		},
		handleAddNewTask(task) {
			this.listTask.push(task);
			console.log('handleAddNewTask App.vue', task);
		},
		handleEdit(taskEdit) {
			this.isShowForm = true;
			this.taskSelected = taskEdit;
			console.log('handleEdit App.vue', taskEdit);
			// console.log(this);
		},
		handleDelete(taskDelete) {
			// Cách 1
			this.listTask = this.listTask.filter(item => item.id !== taskDelete.id);

			// Cách 2
			// var idxDelete = -1;
			// for(var index = 0; index < this.listTask.length; index++) {
			// 	if(this.listTask[index].id === taskDelete.id) {
			// 		idxDelete = index;
			// 		break;
			// 	}
			// }
			// if(idxDelete !== -1) this.listTask.splice(idxDelete, 1);

			console.log("handleDelete App.vue: ", taskDelete);
		}
	}
}
</script>

<style>
body {
    padding: 100px 0;
}
.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    vertical-align: middle;
}

.container > .row {
    margin-top: 20px;
    margin-bottom: 30px;
}

span.badge-medium {
	padding: 11px 10px;
    margin: 0px 8px;
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
}

@media (max-width: 992px) {
    .add-task {
        margin-top: 50px;
    }
}

</style>
