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
        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.error || 'Unsuccessful!');
            throw error;
        }else {
            context.commit('addIssue', issue);
        }
    },
    async loadBacklog(context){
        const response = await fetch('/backlog/issues');
        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.error || 'No data available!');
            throw error;
        }else{
            context.commit('setIssues', responseData);
        }
    }
}