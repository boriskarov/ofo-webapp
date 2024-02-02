<script>
export default {
  name: "EditTicket",
  props: ['id'],
  data(){
    return{
      dialog: false,
      dialogEmpty: false,
      selectedTask: null
    }
  },
  computed: {
    tasks(){
      return this.$store.getters['tasks/tasks'];
    }
  },
  methods: {
    updateTask(task){
      if(!task.name || !task.description || !task.due){
        this.dialogEmpty = true;
      } else {
        this.dialog = true;
      }
    }
  },
  created() {
    this.selectedTask=this.tasks.find(task=>String(task.id) === this.id);
  }
}
</script>

<template>
  <div>
    <v-card  class="card">
      <v-card-title>Edit Ticket</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="updateTask(selectedTask)" id="edit-ticket">
          <v-text-field label="Title" v-model="selectedTask.name"></v-text-field>
          <v-text-field label="Description" v-model="selectedTask.description"></v-text-field>
          <v-text-field label="Due date" v-model="selectedTask.due"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer>
        </v-spacer>
        <v-btn class="button text-white" type="submit" form="edit-ticket">Save</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog width="500" v-model="dialog">
      <v-card>
        <v-card-title class="text-green flex text-center">Success</v-card-title>
        <v-card-text class="flex text-center">You successfully updated the ticket</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        <v-btn @click="dialog=!dialog" class="w-5">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog width="500" v-model="dialogEmpty">
      <v-card>
        <v-card-title class="text-red flex text-center">One or more empty values!</v-card-title>
        <v-card-text class="flex text-center">Make sure there are no empty fields!</v-card-text>
        <v-card-actions>
          <v-spacer>
          </v-spacer>
          <v-btn @click="dialogEmpty=!dialogEmpty" class="w-5">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.card{
  margin: 2rem auto;
  max-width: 55rem;
}
.button{
  background-color: #009bd6
}
</style>