<template>
  <v-app class="main">
    <the-header></the-header>
    <v-main>
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "@/layout/TheHeader.vue";
export default {
  name: 'App',
  components:{TheHeader},

  data: () => ({
    //
  }),
}
</script>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-enter-active {
  transition: all 0.4s ease-out;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.route-leave-active {
  transition: all 0.4s ease-in;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

</style>