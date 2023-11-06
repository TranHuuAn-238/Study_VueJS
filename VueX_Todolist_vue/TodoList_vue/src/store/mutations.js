export default {
    CHANGE_TASKS(state, newTasks) {
        // console.log('Mutations: CHANGE_TASKS', newTasks);
        state.listTask = newTasks;
    },
    TOGGLE_FORM(state) {
        // if(this.isShowForm) this.taskSelected = null;
        console.log('Mutation TOGGLE_FORM');
		state.isShowForm = !state.isShowForm;
    },
    HANDLE_SEARCH(state, strSearch) {
        console.log('Mutation HANDLE_SEARCH', strSearch);
        state.strSearch = strSearch;
    }
}