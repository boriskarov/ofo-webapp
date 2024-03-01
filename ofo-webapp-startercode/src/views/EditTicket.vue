<script>
export default {
  name: "EditTicket",
  props: ['id'],
  data(){
    return{
      error: null,
      dialog: false,
      dialogEmpty: false,
      ticket: {
        subject: '',
        body: '',
        createdAt: null
      }
    }
  },
  methods: {
    async updateTask(ticket){
      const task = {
        id: this.id,
        subject: ticket.subject,
        body: ticket.body,
        status: 'OPEN',
        createdAt: ticket.createdAt,
        updatedAt: new Date()
      };
      if(!task.subject || !task.body){
        this.dialogEmpty = true;
      } else {
        try {
          await this.$store.dispatch('tasks/updateTask', task);
          this.dialog = true;
        }catch(error){
          this.error = error.message || "Unsuccessful update!";
        }
      }
    },
    async getTicket(){
      const response = await fetch(`/ticket/${this.id}`);
      this.ticket = await response.json();
    }
  },
  created() {
    this.getTicket();
  }
}
</script>

<template>
  <div>
    <v-card  class="card">
      <v-card-title>Edit Ticket</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="updateTask(ticket)" id="edit-ticket">
          <v-text-field label="Title" v-model="ticket.subject"></v-text-field>
          <v-text-field label="Description" v-model="ticket.body"></v-text-field>
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