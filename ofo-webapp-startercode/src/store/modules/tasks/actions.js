export default {
    markCompleted(context, payload){
      context.commit('markCompleted', payload);
    },
    removeTask(context,payload){
        context.commit('removeTask', payload);
    },
    createTask(context,payload){
      context.commit('createTask', payload);
    }
}
