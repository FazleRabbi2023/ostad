<script setup>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
import { ref } from 'vue'

let menu = ref([])

async function list() {
  let res = await axios.get('https://basic-blog.teamrabbil.com/api/post-categories');
  menu.value = res.data;
  //return menu.value
}

list()


</script>

<template>
  <header>

      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand dropdown" href="#">Blog</a>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-warning bg-black border-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ব্লগ 
                </a>
                <ul class="dropdown-menu">
                  <li><RouterLink class="dropdown-item" to="/">সর্বশেষ ব্লগ</RouterLink></li>
                  <li><RouterLink class="dropdown-item" to="/list">ব্লগের তালিকা</RouterLink></li>
                  
                </ul>
              </li>
              <li class="nav-item" v-for="item in menu" :key="item.id">
                <a class="nav-link active" aria-current="page" href="#">{{item.name}}</a>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
      
        <RouterView />
      
      </div>
 </header>

  
</template>

<style scoped>

</style>
