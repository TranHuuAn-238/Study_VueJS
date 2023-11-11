export default {
    changeTasks({ commit }, newTasks) {
        // console.log('Action changeTasks', newTasks);
        commit("CHANGE_TASKS", newTasks);
    },
    toggleForm({ commit }) {
        // console.log('Action toggleForm');
        commit('TOGGLE_FORM');
    },
    handleSearch({ commit }, strSearch) {
        // console.log('Action handleSearch', strSearch);
        commit('HANDLE_SEARCH', strSearch);
    },
    handleSort({ commit }, { orderBy, orderDir }) {
        // payload trong actions/mutations LUON la 1 object
        // console.log('Action handleSort', orderBy, orderDir);
        commit('HANDLE_SORT', { orderBy, orderDir });
    },
    handleDelete({ commit, state }, taskDelete) {
        console.log('Action handleDelete', taskDelete);
		let newListTask = state.listTask.filter(item => item.id !== taskDelete.id);
        commit('CHANGE_TASKS', newListTask);
    },
    handleAddNewTask({ commit }, task) {
        commit('ADD_NEW_TASK', task);
    },
}