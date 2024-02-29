<script>
export default{
  computed: {
    tasks(){
      return this.$store.getters['tasks/tasks'];
    }
  },
  data(){
    return {
      error: null,
      logModal: false,
      removeModal: false,
      errorModal: false,
    }
  },
  methods:{
    markCompleted(task) {
      this.$store.dispatch('tasks/markCompleted', task);
    },
    async removeTask(task){
      try {
        await this.$store.dispatch('tasks/removeTask', task);
        this.removeModal = true;
      }catch(error){
        this.error = error.message;
        this.errorModal = true;
      }
    },
    editTask(task){
      this.$router.push(`/tasks/${task.id}/edit`);
    },
    loadTasks(){
      this.$store.dispatch('tasks/loadTasks');
    },
    async logTask(task){
      try {
        await this.$store.dispatch('issues/addIssue', task);
        this.logModal = true;
      }catch(error){
        this.error = error.message;
        this.errorModal = true;
      }
    },
    sendMail(){
      //
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
            <div class="text-caption">Opening date</div>
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
            <v-btn @click="editTask(task)" v-if="task.ticketStatus === 'OPEN'">Edit</v-btn>
            <v-btn @click="sendMail(task)" v-else-if="task.ticketStatus === 'RESOLVED'">Send mail</v-btn>
          </v-col>
          <v-col cols="2" >
            <v-btn class="bg-green-accent-4 text-white" @click="markCompleted(task)" v-if="task.ticketStatus === 'OPEN'">Done</v-btn>
            <v-btn class="bg-white text-black" @click="logTask(task)" v-else-if="task.ticketStatus === 'RESOLVED'">Backlog</v-btn>
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
  <v-dialog width="500" v-model="logModal">
    <v-card>
      <v-card-title class="text-green flex text-center">Success</v-card-title>
      <v-card-text class="flex text-center">You successfully added this issue to the backlog</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="logModal=!logModal" class="w-5">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog width="500" v-model="removeModal">
    <v-card>
      <v-card-title class="text-green flex text-center">Success</v-card-title>
      <v-card-text class="flex text-center">You successfully removed the ticket!</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="removeModal=!removeModal" class="w-5">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog width="500" v-model="errorModal">
    <v-card>
      <v-card-title class="text-green flex text-center">Error!</v-card-title>
      <v-card-text class="flex text-center">{{ error }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="errorModal=!errorModal" class="w-5">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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