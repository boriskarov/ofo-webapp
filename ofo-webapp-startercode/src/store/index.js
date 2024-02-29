import { createStore } from 'vuex'
import tasksModule from "./modules/tasks/index.js";
import issuesModule from "./modules/issues/index.js";
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tasks: tasksModule,
    issues: issuesModule
  }
})
