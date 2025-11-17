<script setup>
import { RouterView } from "vue-router";
import AppHeader from "./components/common/AppHeader.vue";
</script>

<template>
  <div id="app-container">
    <AppHeader />

    <main class="container mt-4 mb-5">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app-container {
  min-height: 100vh;
  background-color: #f8f9fa; /* Light Gray Background */
}
</style>
