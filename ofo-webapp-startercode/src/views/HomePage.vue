<template>
  <v-app>
    <v-container fluid fill-height>
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12" md="6">
          <v-card class="elevation-10">
            <v-card-title class="blue darken-2 white--text">Welcome!</v-card-title>
            <v-card-text class="text-center">
              <v-btn @click="redirectToUpload" color="primary">Upload</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
    redirectToUpload() {
      this.$router.push('/upload');
    }
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
