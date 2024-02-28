import actions from "@/store/modules/issues/actions";
import getters from "@/store/modules/issues/getters";
import mutations from "@/store/modules/issues/mutations";

export default {
    namespaced: true,
    state(){
        return {
            backlog: []
        }
    },
    actions,
    getters,
    mutations
}