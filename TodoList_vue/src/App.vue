<template>
	<div id="app">
		<b-container>
			<!-- TITLE : START -->
			<comp-title />
			<!-- TITLE : END -->


			<b-row>
				<!-- CONTROL (SEARCH + SORT + ADD) : START -->
				<comp-control 
					:strSearch="strSearch"
					@handleSearch="handleSearch"
				/>
				<!-- CONTROL (SEARCH + SORT + ADD) : END -->

				<!-- FORM : START -->
				<comp-form 
					:isShowForm="isShowForm"
					@toggleForm="toggleForm"
				/>
				<!-- FORM : END -->
			</b-row>

			<!-- LIST : START -->
			<todo-list-table 
				:listTask="listTaskSearch"
			/>			
		</b-container>

	</div>
</template>

<script>
// chua can luu du lieu => tao Mock data, Fake data de test, nen luu data nay o 1 file rieng roi export ra va import vao de su dung
import TodoListTable from "./components/TodoListTable.vue";
import CompTitle from "./components/CompTitle.vue";
import CompControl from "./components/CompControl.vue";
import CompForm from "./components/CompForm.vue";

import listTask from "./mocks/tasks";

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
			listTask: listTask,
			isShowForm: false,
			strSearch: ''
		}
	},
	computed: {
		listTaskSearch() {
			// tim kiem - logic search
			const { strSearch } = this;

			var newItems = this.listTask.filter(item => {
				return item.name.toLowerCase().includes(strSearch.toLowerCase());
			}); // item => item.name.toLowerCase().includes(strSearch.toLowerCase());  // short syntax khi chi co 1 return

			// var newItems = [];
			// this.listTask.forEach(function(item, index) {
			// 	let lowerName = item.name.toLowerCase();
			// 	let lowerSubString = strSearch.toLowerCase();
			// 	if (lowerName.includes(lowerSubString)) {
			// 		newItems.push(item);					
			// 	}
			// });
			return newItems;
		}
	},
	// sd lifecycle de test xem nhan dc data chua
	created() {
		console.log('created task = ', listTask);
	},
	methods: {
		handleSearch(data) {
			this.strSearch = data;
			console.log('handleSearch App.vue: ', data);
		},
		toggleForm() {
			console.log('toggleForm App.vue');
			this.isShowForm = !this.isShowForm;
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
