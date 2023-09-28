<script setup>

import { ref, reactive, onBeforeMount } from 'vue'
import { authStore } from '../stores/authStore'

const auth = authStore();
const status = ref()

onBeforeMount(() => {
  // Retrieve the value from localStorage
    status.value = localStorage.getItem('token');

    console.log(status.value)

});

</script>

<template>

    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container">
            <RouterLink class="navbar-brand" to="/">Home</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" aria-current="page" to="/dashboard">Dashboard</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{name:'todo'}">Todo</RouterLink>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> -->
                    
                </ul>
                
                    <template v-if="auth.isAuthenticated=='false'">
                        <RouterLink class="btn btn-warning me-1" type="submit" to="/login">Login</RouterLink>
                        <RouterLink class="btn btn-warning" type="submit" to="/register">Register</RouterLink>
                    </template>
                    <template v-if="auth.isAuthenticated=='true'">
                        <button @click="auth.logout" class="btn btn-danger" type="submit" to="/login">Log Out</button>
                    </template>
                    
            </div>
        </div>
    </nav>
</template>
