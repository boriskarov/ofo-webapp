export default {
    async addIssue(context, payload){
        const issue = {
            id: payload.id,
            priority: payload.ticketStatus === 'OPEN' ? 'HIGH':'MEDIUM',
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
    },
    async loadBacklog(context){
        const response = await fetch('/backlog/issues');
        const responseData = await response.json();
        console.log(responseData);
        if(!response.ok){
            //
        }else{
            context.commit('setIssues', responseData);
        }
    }
}