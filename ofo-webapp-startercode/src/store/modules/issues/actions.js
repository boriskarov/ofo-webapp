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
        )
        const responseData = await response.json();
        console.log(responseData);
        if(!response.ok){
            //
        }
        context.commit('addIssue', issue);
    }
}