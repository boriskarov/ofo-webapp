export default {
    async markCompleted(context, payload){
        const response = await fetch(`ticket/${payload.id}/close`,{
            method: 'POST'
        })
        if(!response.ok){
            // error
        }
        context.commit('markCompleted', payload);
    },
    async removeTask(context,payload){
        const response = await fetch(`/ticket/${payload.id}`,{
            method: 'DELETE'
        })
        const responseData = await response;
        if(!response.ok){
            const error = new Error(responseData.message || "Unsuccessful!");
            throw error;
        }else {
            context.commit('removeTask', payload);
        }
    },
    async createTask(context,payload){
        const taskData = {
            id: Math.floor(1000+Math.random()*1000),
            subject: payload.name,
            body: payload.description,
            status: payload.status,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        const response = await fetch('/ticket/create',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData)
        });
        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.message || "Unsuccessful!");
            throw error;
        }else {
            context.commit('createTask', payload);
        }
    },

    async updateTask(context,payload){
        const taskData = {
            id: payload.id,
            subject: payload.subject,
            body: payload.body,
            status: payload.status,
            createdAt: payload.createdAt,
            updatedAt: payload.updatedAt
        };
        const response = await fetch(`/ticket/${taskData.id}/edit`,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData)
        });
        const responseData = await response;
        if(!response.ok){
            const error = new Error(responseData.error || 'Unsuccessful update!');
            throw error;
        }else {
            context.commit('updateTask', taskData);
        }
    },

    async loadTasks(context){
        const response = await fetch('/ticket/all');
        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.message || "There are no tickets!");
            throw error;
        }else {
            const editedData = [];
            for (const task of responseData) {
                const editedTask = {
                    id: task.id,
                    subject: task.subject,
                    body: task.body,
                    ticketStatus: task.ticketStatus,
                    createdAt: task.createdAt.split('T')[0],
                    updatedAt: task.createdAt.split('T')[0]
                };
                editedData.push(editedTask);
            }

            context.commit('setTasks', editedData);
        }
    }
}
