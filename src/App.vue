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
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
