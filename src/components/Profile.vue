<script setup>

import { ref, reactive, onBeforeMount } from 'vue'
import {authStore} from '../stores/authStore'
import router from '../router';

import { useToast } from "vue-toastification";

const toast = useToast();


const auth = authStore();
const email = ref()


const errorMsg = ref();
let pass1 = ref('');
let pass2 = ref('');
const credentials = reactive([]);
let name = '';


async function checkRegistration(p1, p2, e, n) {

console.log(localStorage.getItem('users'))

  
  if (p1 == p2) {
    if (p1 == '' && p2 == '')
    {
      
      toast.error(auth.errorRegiMsg.emptypass);
    }
   
    else
    {
        let users = JSON.parse(localStorage.getItem('users'));
        let index = JSON.parse(localStorage.getItem('users')).findIndex(item => item.email === e);

        users[index] = { email: e, password: p1, name: n }
        localStorage.setItem('users', JSON.stringify(users));

        localStorage.setItem('loggedUser', JSON.stringify({ email: e, password: p1, name: n }));
        authStore().user = JSON.parse(localStorage.getItem('loggedUser'));

        router.push('/dashboard')

        toast.success('Profile Updated !!');
    }
  }
  else {
    
    toast.error(auth.errorRegiMsg.missmatch);
  }
  console.log(credentials);  
}


</script>


<template>
    <div class="container-fluid p-4">
      <div class="d-flex justify-content-center">
        <div class="card"  style="width: 20rem;">
          <div class="card-header">Profile Edit</div>
          <h5 v-if="errorMsg" class="p-4 text-danger bg-warning">{{errorMsg}}</h5>
          <div class="card-body p-4">
        
        <form @submit.prevent="checkRegistration(pass1,pass2,auth.user.email,auth.user.name)">
            
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input  type="email" :value="auth.user.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input v-model="auth.user.name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Present Password</label>
                <input v-model="auth.user.password" type="text" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">New Password</label>
                <input v-model="pass1" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                <input v-model="pass2" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            
            <button type="submit" class="btn btn-primary me-1">Update</button>
            <button type="reset" class="btn btn-info">Reset</button>
        </form>
        </div>
        </div>
      </div>

    </div>


</template>
<style scoped>

.container-fluid{
    margin: 0;
    padding: 0;
    background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');
    background-size: cover;
    background-repeat: no-repeat;
   
   
    height: 100vh;
}

.card{
margin-top: 5%;
color: aliceblue;
background-color: rgba(0,0,0,0.5) !important;
}

.card-header{
  background-color: crimson;
  font-size: larger;
}


</style>
