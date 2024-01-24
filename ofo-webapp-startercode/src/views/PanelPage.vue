<script>
export default{
  data(){
    return {
      tasks: [
        {
          id: 0,
          name: "Task1",
          description: "Do something"
        },
        {
          id: 1,
          name: "Task2",
          description: "Do something"
        },
        {
          id: 2,
          name: "Task3",
          description: "Do something"
        }

      ],
      page: 1,
    }
  }
}
</script>

<template>
<v-card class="card">
  <v-card-title class="flex text-center">Pending tasks</v-card-title>
  <v-data-iterator :items="tasks" :page="page">
    <v-card v-for="task in tasks" :key="task.id" class="item" variant="outlined">
      <v-card-title>{{task.name}}</v-card-title>
      <v-card-actions>
        {{task.description}}
        <v-spacer></v-spacer>
        <v-btn color="white" class="button" variant="tonal">View</v-btn>
      </v-card-actions>
    </v-card>
  </v-data-iterator>
</v-card>
</template>

<style scoped>
.card{
  border-radius: 12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 1rem;
  margin: 3rem auto;
  max-width: 50rem;
}
.item{
  padding: 0.3rem;
  max-width: 40rem;
  margin: 2rem auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.button{
  background-color: #009bd6;
}
</style>