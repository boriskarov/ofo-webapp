<script>
export default {
  name: "SendMail",
  props: ['id'],
  data(){
    return {
      error: null,
      dialog: false,
      dialogEmpty: false,
      dialogError: false,
      ticket: {
        subject: ''
      },
      messageBody: '',
      attachment: ''
    }
  },
  methods: {
    async getTicket(){
      const response = await fetch(`/ticket/${this.id}`);
      this.ticket = await response.json();
    },
    async sendMail(){
      const email = {
        subject: this.ticket.subject,
        messageBody: this.messageBody,
        attachment: this.attachment
      }
      console.log(email);
      if(!this.ticket.subject || !this.messageBody || !this.attachment){
        this.dialogEmpty = true;
      }else{
        // console.log(this.ticket.subject);
        // console.log(this.messageBody);
        // console.log(this.attachment);
          const response = await fetch('/mail/send',{
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(email)
          })
          const responseData = await response.json();
          if(!response.ok){
            this.error = responseData.message || 'Unsuccessful attempt!';
            this.dialogError = true;
          }else {
            this.dialog = true;
          }
      }

    }
  },
  created() {
    this.getTicket();
  }
}
</script>

<template>
<div>
  <v-card class="card" title="Send Mail">
    <v-card-text>
      <v-form @submit.prevent="sendMail()" id="send-mail">
        <v-text-field label="Subject" v-model="ticket.subject"></v-text-field>
        <v-textarea label="Message body" v-model="messageBody"></v-textarea>
        <v-text-field label="Attachment" v-model="attachment"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="text-white button" type="submit" form="send-mail">Send</v-btn>
    </v-card-actions>
  </v-card>
  <v-dialog width="500" v-model="dialog">
    <v-card>
      <v-card-title class="text-green flex text-center">Success</v-card-title>
      <v-card-text class="flex text-center">You successfully sent an e-mail!</v-card-text>
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
  <v-dialog width="500" v-model="dialogError">
    <v-card>
      <v-card-title class="text-red flex text-center">Error!</v-card-title>
      <v-card-text class="flex text-center">{{this.error}}</v-card-text>
      <v-card-actions>
        <v-spacer>
        </v-spacer>
        <v-btn @click="dialogError=!dialogError" class="w-5">Close</v-btn>
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