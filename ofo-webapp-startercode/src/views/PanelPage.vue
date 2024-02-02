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
    }
  }
}
</script>

<template>
<div >
  <v-card-title class="ma-5 flex text-center">Pending tasks</v-card-title>
  <v-container>
    <v-card class="ma-1 pa-4 bg-blue-grey-lighten-5" v-for="task in tasks" :key="task.id">
      <v-layout :class="`pa-4 ${task.status}`">
        <v-row>
          <v-col cols="2">
            <div class="text-caption">
              {{ task.name }}
            </div>
            <div>
              {{ task.description }}
            </div>
          </v-col>
          <v-col cols="2">
            <div class="text-caption">Due date</div>
            <div>
              {{ task.due }}
            </div>
          </v-col>
          <v-col cols="2">
            <v-chip :class="`chip-${task.status}`">
              {{ task.status }}
            </v-chip>
          </v-col>
          <v-col cols="2">
            <v-btn @click="editTask(task)">Edit</v-btn>
          </v-col>
          <v-col cols="2" v-if="task.status === 'inprogress'">
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
</div>
</template>

<style scoped>
.chip-completed{
  background-color: #0ef622;
}
.chip-inprogress{
  background-color: coral;
}

.completed{
  border-left: 6px solid #0ef622;
}

.inprogress{
  border-left: 5px solid coral;
}

</style>