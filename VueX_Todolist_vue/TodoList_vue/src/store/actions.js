export default {
    changeTasks({ commit }, newTasks) {
        // console.log('Action changeTasks', newTasks);
        commit("CHANGE_TASKS", newTasks);
    },
    toggleForm({ commit }) {
        console.log('Action toggleForm');
        commit('TOGGLE_FORM');
    }
}