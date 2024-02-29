<script>
export default {
  name: "NotFound"
}
</script>

<template>
<div>
  <v-card title="Error!" class="card">
    <v-card-text>Page Not Found! Press <router-link to="/tasks">here</router-link> to go back to the overview panel.</v-card-text>
  </v-card>
</div>
</template>

<style scoped>
.card {
  margin: 2rem auto;
  max-width: 30rem;
}
</style>