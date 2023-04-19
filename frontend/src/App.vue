<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="max-w-7xl mx-auto">
      <nav class="p-2">
        <RouterLink
          class="px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 rounded text-white"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 rounded text-white"
          to="/statuses"
          >Statuses</RouterLink
        >
        <RouterLink
          class="px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 rounded text-white"
          to="/tasks"
          >Tasks</RouterLink
        >
        <RouterLink
          class="px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 rounded text-white"
          to="/tasks"
          >UserTasks</RouterLink
        >
      </nav>
    </div>
  </header>
  <main class="max-w-7xl mx-auto min-h-screen">
    <RouterView />
  </main>
</template>
