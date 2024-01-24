<script>
export default {
  name: "UploadPage"
}
</script>

<template>
  <v-card class="card">
    <v-card-title>Diagram upload</v-card-title>
    <v-card-text>
      <v-file-input variant="solo-filled"></v-file-input>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.card{
  border-radius: 12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 1rem;
  margin: 4rem auto;
  max-width: 30rem;
}
</style>