<script>
export default {
  name: "OpenTicket",
  data(){
    return{
      title: '',
      description: '',
      due: ''
    }
  },
  methods:{
    createTicket(){
      const task = {
        id: new Date().toISOString(),
        name: this.title,
        description: this.description,
        due: this.due,
        status: 'inprogress'
      }
      this.$store.dispatch('tasks/createTask', task);
    }
  }
}
</script>

<template>
  <div>
    <v-card class="ma-9 pa-1">
      <v-card-title class="flex text-center">
        Open Ticket
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="createTicket" id="new-ticket">
          <v-text-field label="Title" v-model="title"></v-text-field>
          <v-text-field label="Description" v-model="description"></v-text-field>
          <v-text-field label="Due date" v-model="due"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn type="submit" color="white" class="button ma-1 pa-2" form="new-ticket">Open</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.button{
  background-color: #009bd6;
}
</style>