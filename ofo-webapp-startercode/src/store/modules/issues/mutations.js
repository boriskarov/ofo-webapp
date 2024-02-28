export default {
    setIssues(state,payload){
        state.backlog = payload;
    },
    addIssue(state,payload){
        state.backlog.push(payload);
    }
}