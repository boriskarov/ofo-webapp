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
        if(!response.ok){
            // error
        }
        context.commit('removeTask', payload);
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

        if(!response.ok){
            // error
        }

        context.commit('createTask', payload);
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

        if(!response.ok){
            // error
        }
        context.commit('updateTask', taskData);
    },

    async loadTasks(context){
        const response = await fetch('/ticket/all');
        const responseData = await response.json();
        if(!response.ok){
            // error
        }
        context.commit('setTasks', responseData);
    }
}
