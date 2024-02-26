<script>
export default{
  computed: {
    tasks(){
      return this.$store.getters['tasks/tasks'];
    }
  },
  methods:{
    markCompleted(task) {
      this.$store.dispatch('tasks/markCompleted', task);
    },
    removeTask(task){
      this.$store.dispatch('tasks/removeTask', task);
    },
    editTask(task){
      this.$router.push(`/tasks/${task.id}/edit`);
    },
    loadTasks(){
      this.$store.dispatch('tasks/loadTasks');
    }
  },
  mounted() {
    this.loadTasks()
  }
}
</script>

<template>
<div >
  <v-card-title class="ma-5 flex text-center">Pending tasks</v-card-title>
  <v-container v-if="tasks.length>0">
    <v-card class="ma-1 pa-4 bg-blue-grey-lighten-5" v-for="task in tasks" :key="task.id">
      <v-layout :class="`pa-4 ${task.ticketStatus}`">
        <v-row>
          <v-col cols="2">
            <div class="text-caption">
              {{ task.subject }}
            </div>
            <div>
              {{ task.body }}
            </div>
          </v-col>
          <v-col cols="2">
            <div class="text-caption">Due date</div>
            <div>
              {{ task.createdAt }}
            </div>
          </v-col>
          <v-col cols="2">
            <v-chip :class="`chip-${task.ticketStatus}`">
              {{ task.ticketStatus }}
            </v-chip>
          </v-col>
          <v-col cols="2">
            <v-btn @click="editTask(task)">Edit</v-btn>
          </v-col>
          <v-col cols="2" v-if="task.ticketStatus === 'OPEN'">
            <v-btn class="bg-green-accent-4 text-white" @click="markCompleted(task)">Done</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="2">
            <v-btn class="bg-red" @click="removeTask(task)">Remove</v-btn>
          </v-col>
        </v-row>
      </v-layout>
    </v-card>
  </v-container>
  <v-container v-else>
    <v-card class="card">
      <v-card-title>Tasks not found!</v-card-title>
      <v-card-text>Please add some tickets</v-card-text>
    </v-card>
  </v-container>
</div>
</template>

<style scoped>
.chip-RESOLVED{
  background-color: #0ef622;
}
.chip-OPEN{
  background-color: coral;
}

.RESOLVED{
  border-left: 6px solid #0ef622;
}

.OPEN{
  border-left: 5px solid coral;
}
.card{
  margin: 1rem auto;
  max-width: 55rem;
  text-align: center;
}
</style>