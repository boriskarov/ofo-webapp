export default {
    markCompleted(context, payload){
      context.commit('markCompleted', payload);
    },
    removeTask(context,payload){
        context.commit('removeTask',payload)
    }
}
