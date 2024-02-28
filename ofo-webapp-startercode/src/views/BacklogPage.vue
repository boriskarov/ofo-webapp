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
      headers: [
        {
          title: 'Priority',
          key: 'priority',
        },
        {
          title: 'Description',
          key: 'description',
        }
      ]
    }
  },
  methods: {
    loadIssues(){
      this.$store.dispatch('issues/loadBacklog');
    }
  },
  mounted() {
    this.loadIssues();
    console.log(this.issues);
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
</div>
</template>

<style scoped>
.items {
  margin: 1rem auto;
  max-width: 75rem;
}
</style>