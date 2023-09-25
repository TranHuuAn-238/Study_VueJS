<template>
	<div id="app">
		<b-container>
			<b-row noGutters>
				<b-col cols="12" lg="2">1 of 3</b-col>
				<b-col>2 of 3</b-col>
				<b-col>3 of 3</b-col>
			</b-row>
		</b-container>
		<b-container>

			<!-- TITLE : START -->
			<comp-title />
			<!-- TITLE : END -->


			<b-row>
				<!-- CONTROL (SEARCH + SORT + ADD) : START -->
				<comp-control />
				<!-- CONTROL (SEARCH + SORT + ADD) : END -->

				<!-- FORM : START -->
				<comp-form />
				<!-- FORM : END -->
			</b-row>

			<!-- LIST : START -->
			<todo-list-table />			
		</b-container>

	</div>
</template>

<script>
import TodoListTable from "./components/TodoListTable.vue";
import CompTitle from "./components/CompTitle.vue";
import CompControl from "./components/CompControl.vue";
import CompForm from "./components/CompForm.vue";

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
