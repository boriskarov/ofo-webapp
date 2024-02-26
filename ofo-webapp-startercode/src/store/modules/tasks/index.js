import actions from "@/store/modules/tasks/actions";
import getters from "@/store/modules/tasks/getters";
import mutations from "@/store/modules/tasks/mutations";

export default {
    namespaced: true,
    state(){
        return {
            tasks: []
        }
    },
    mutations,
    actions,
    getters
}