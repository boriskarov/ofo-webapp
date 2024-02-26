export default {
    setTasks(state,payload){
        state.tasks = payload;
    },
    markCompleted(state,payload){
        const task = state.tasks.find(task=>task.id === payload.id);
        const index = state.tasks.indexOf(task);
        state.tasks[index].ticketStatus = 'RESOLVED';
    },
    removeTask(state,payload){
        const index = state.tasks.indexOf(state.tasks.find(task=>task.id===payload.id));
        state.tasks.splice(index,1);
    },
    createTask(state,payload){
        state.tasks.push(payload);
    },
    updateTask(state,payload){
        const task = state.tasks.find(task=>task.id === payload.id);
        const index = state.tasks.indexOf(task);
        state.tasks[index] = payload;
    }
}