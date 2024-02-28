export default {
    setIssues(state,payload){
        state.issues = payload;
    },
    addIssue(state,payload){
        state.issues.push(payload);
    }
}