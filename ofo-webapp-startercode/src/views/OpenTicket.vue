<script>
export default {
  name: "OpenTicket",
  data(){
    return{
      dialogEmpty: false,
      dialog: false,
      title: '',
      description: '',
      due: ''
    }
  },
  methods:{
    createTicket(){
      if(!this.title || !this.description){
        this.dialogEmpty = true;
      } else {
        const task = {
          id: new Date().toISOString(),
          name: this.title,
          description: this.description,
          status: 'OPEN'
        }
        this.$store.dispatch('tasks/createTask', task);
        this.dialog = true;
        this.title = '';
        this.description = '';
      }
    }
  }
}
</script>

<template>
  <div>
    <v-card class="card">
      <v-card-title class="flex text-center">
        Open Ticket
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="createTicket" id="new-ticket">
          <v-text-field label="Title" v-model="title"></v-text-field>
          <v-text-field label="Description" v-model="description"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn type="submit" color="white" class="button ma-1 pa-2" form="new-ticket">Open</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog width="500" v-model="dialog">
      <v-card>
        <v-card-title class="text-green flex text-center">Success</v-card-title>
        <v-card-text class="flex text-center">You successfully created a ticket</v-card-text>
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
  background-color: #009bd6;
}
</style>