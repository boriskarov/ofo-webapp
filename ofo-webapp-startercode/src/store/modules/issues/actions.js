export default {
    async addIssue(context, payload){
        const issue = {
            id: payload.id,
            priority: '',
            description: payload.body,
        }
        const response = await fetch('/backlog/create',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(issue)
            }
        );
        if(!response.ok){
            //
        }else {
            context.commit('addIssue', issue);
        }
    }
}