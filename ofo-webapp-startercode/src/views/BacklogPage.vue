<script>
export default {
  name: "BacklogPage",
  computed: {
    issues(){
      return this.$store.getters['issues/issues'];
    }
  },
  data(){
    return {
      error: null,
      dialog: false,
      headers: [
        {
          title: 'Priority',
          key: 'issuePriority',
        },
        {
          title: 'Description',
          key: 'description',
        }
      ]
    }
  },
  methods: {
    async loadIssues(){
      try {
        await this.$store.dispatch('issues/loadBacklog');
      }catch(error){
        this.error = 'No data available!';
        this.dialog = true;
      }
    }
  },
  mounted() {
    this.loadIssues();
  }
}
</script>

<template>
<div>
  <v-card class="items">
    <v-card-title>Backlog</v-card-title>
  <v-data-table :headers="headers" :items="issues" >
  </v-data-table>
  </v-card>
  <v-dialog width="500" v-model="dialog">
    <v-card>
      <v-card-title>Warning!</v-card-title>
      <v-card-text>{{this.error}}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog=!dialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>
</template>

<style scoped>
.items {
  margin: 1rem auto;
  max-width: 75rem;
}
</style>