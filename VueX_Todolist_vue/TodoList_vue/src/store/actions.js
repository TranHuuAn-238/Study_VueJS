export default {
    changeTasks({ commit }, newTasks) {
        console.log('Action changeTasks', newTasks);
        commit("CHANGE_TASKS", newTasks);
    }
}