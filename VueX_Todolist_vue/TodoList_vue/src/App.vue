<template>
	<div id="app">
		<b-container>
			<comp-title />

			<b-row>
				<comp-control />

				<comp-form />
			</b-row>

			<todo-list-table />
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
			
		}
	},
	// them vao LocalStorage
	computed: mapState([
		'listTask'
	]),
	watch: {
		listTask: function(newTasks) {
			var tasksString = JSON.stringify(newTasks);
				localStorage.setItem('tasks', tasksString);
		}
	},
	methods: {
		
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
