export default {
    setTasks(state,payload){
        state.tasks = payload;
    },
    markCompleted(state,payload){
        state.tasks.find(task=>task.id === payload.id).status = 'completed';
    },
    removeTask(state,payload){
        const index = state.tasks.indexOf(state.tasks.find(task=>task.id===payload.id));
        state.tasks.splice(index,1);
    },
    createTask(state,payload){
        state.tasks.push(payload);
    }
}