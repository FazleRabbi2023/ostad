<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Dashboard from './views/Dashboard.vue'

import tasks from './components/tasks.vue'
import Navbar from './components/navbar.vue';

</script>

<template>
 
  <Navbar/>
  <RouterView />
</template>

<style scoped>

</style>
