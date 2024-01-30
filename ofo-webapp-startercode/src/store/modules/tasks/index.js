import actions from "@/store/modules/tasks/actions";
import getters from "@/store/modules/tasks/getters";
import mutations from "@/store/modules/tasks/mutations";

export default {
    namespaced: true,
    state(){
        return {
            tasks: [
                {
                    id: 1,
                    name: 'Task1',
                    description: 'Create global store',
                    due: '02.02.2024',
                    status: 'completed',
                },
                {
                    id: 2,
                    name: 'Task2',
                    description: 'Add task overview',
                    due: '02.02.2024',
                    status: 'inprogress',
                },
                {
                    id: 3,
                    name: 'Task3',
                    description: 'Create file upload interface',
                    due: '02.02.2024',
                    status: 'inprogress',
                },
                {
                    id: 4,
                    name: 'Task4',
                    description: 'Create BPMN flow',
                    due: '02.02.2024',
                    status: 'inprogress',
                },

            ]
        }
    },
    mutations,
    actions,
    getters
}