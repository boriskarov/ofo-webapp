<script>
export default {
  name: "TheHeader",
  computed: {
    isHome(){
      return this.$route.path.includes('tasks');
    },
    isNotBacklog(){
      return !this.$route.path.includes('log');
    }
  },
  data () {
    return {
      drawer: false,
    }
  },
}
</script>

<template>
  <v-app-bar density="comfortable" flat app color="#00719c">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>Issue Tracking</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn v-if="isHome" link to="/newticket">OPEN TICKET</v-btn>
    <v-btn v-if="isNotBacklog" link to="/log">VIEW BACKLOG</v-btn>
  </v-app-bar>
  <v-navigation-drawer app v-model="drawer" class="indigo" color="#009bd6" >
    <v-list-item title="File Upload" link to="/upload"></v-list-item>
    <v-list-item title="Overview Panel" link to="/tasks"></v-list-item>
    <v-list-item title="Open Ticket" link to="/newticket"></v-list-item>
    <v-list-item title="Backlog" link to="/log"></v-list-item>
  </v-navigation-drawer>
</template>

<style scoped>

</style>