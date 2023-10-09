<template>
	<div id="app">
		<b-container>
			<!-- TITLE : START -->
			<comp-title />
			<!-- TITLE : END -->


			<b-row>
				<!-- CONTROL (SEARCH + SORT + ADD) : START -->
				<comp-control 
					:orderBy="orderBy"
					:orderDir="orderDir"
					:strSearch="strSearch"
					@handleSort="handleSort"
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
				:listTask="listTaskSort"
				@handleDelete="handleDelete"
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
			strSearch: '',
			orderBy: 'name',
			orderDir: 'asc'
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
		},
		listTaskSort() {
			// var listTask = this.listTask;
			// listTask -> search -> sort tren ket qua search
			var listTask = [...this.listTaskSearch]; // clone data, de dam bao bien listTask ban dau goc ko thay doi => nen su dung

			listTask.sort(this.compareSort);
			// if(this.orderBy === 'name') {
			// 	listTask.sort(this.compareName);
			// } else if(this.orderBy === 'level') {
			// 	listTask.sort(this.compareLevel);
			// }

			return listTask;
		}
	},
	// sd lifecycle de test xem nhan dc data chua
	// created() {
	// 	console.log('created task = ', listTask);
	// },
	methods: {
		handleDelete(taskDelete) {
			// C1:
			this.listTask = this.listTask.filter(item => item.id !== taskDelete.id);

			// C2
			// var idxDelete = -1;
			// for (var index = 0; index < this.listTask.length; index++) {
			// 	if (this.listTask[index].id === taskDelete.id) {
			// 		idxDelete = index;
			// 		break;	
			// 	}			
			// }
			// if (idxDelete !== -1) {
			// 	this.listTask.splice(idxDelete, 1);
			// }

			console.log('handleDelete App.vue: ', taskDelete);
		},
		compareSort(a, b) {
			var numberSort = this.orderDir === 'asc' ? -1 : 1;

			// co the truy xuat vao thuoc tinh object bang 2 cach: su dung a.attr nhu binh thuong hoac syntax giong mang a['attr']
			if(a[this.orderBy] < b[this.orderBy]) return numberSort;
			else if(a[this.orderBy] > b[this.orderBy]) return numberSort * (-1);
			return 0;
		},
		// compareName(a, b) {
		// 	var numberSort = this.orderDir === 'asc' ? -1 : 1;

		// 	if(a.name < b.name) return numberSort;
		// 	else if(a.name > b.name) return numberSort * (-1);
		// 	return 0;
		// },
		// compareLevel(a, b) {
		// 	var numberSort = this.orderDir === 'asc' ? -1 : 1;

		// 	if(a.level < b.level) return numberSort;
		// 	else if(a.level > b.level) return numberSort * (-1);
		// 	return 0;
		// },
		handleSort(data) {
			this.orderBy = data.orderBy;
			this.orderDir = data.orderDir;
			console.log("handleSort App.vue", data);
		},
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
