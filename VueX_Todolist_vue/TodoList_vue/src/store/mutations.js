export default {
    CHANGE_TASKS(state, newTasks) {
        console.log('Mutations: CHANGE_TASKS', newTasks);
        state.listTask = newTasks;
    }
}