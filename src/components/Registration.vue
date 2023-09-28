<script setup>

import { ref, reactive } from 'vue'
import {authStore} from '../stores/authStore'
import router from '../router';


const auth = authStore();
const email = ref()


const errorMsg = ref();
let pass1 = ref('');
let pass2 = ref('');
const credentials = reactive([]);
let name = '';

async function checkRegistration(p1, p2, u, f) {

    
  if (p1 == p2) {
    if (p1 == '' && p2 == '') {
      //activeClass.value = 'emptypass';
      errorMsg.value = auth.errorRegiMsg.emptypass;
    } else if (u == '') {
      //activeClass.value = 'emptyusername';
      errorMsg.value = auth.errorRegiMsg.emptyusername;
    } else if (null == JSON.parse(localStorage.getItem('users'))) {
        const users = [
        { email: u, password: p1 , name:f}
        ];

        // Serialize the array to JSON and store it in localStorage
        localStorage.setItem('users', JSON.stringify(users));

        localStorage.setItem('token', true);

        router.push('/dashboard')
        //activeClass.value = 'logout';
    } else if(JSON.parse(localStorage.getItem('users')).find(c => c.username === u)) {
      //activeClass.value = 'notUnique';
      errorMsg.value = auth.errorRegiMsg.notUnique;
    } else {
        let users = JSON.parse(localStorage.getItem('users'));
        users.push({ email: u, password: p1, name: f });

    //using local Storage
        localStorage.setItem('users', JSON.stringify(users));

        localStorage.setItem('token', true);

        router.push('/dashboard')
      //activeClass.value = 'logout';
    }
  } else {
    //activeClass.value='missmatch'
    errorMsg.value=auth.errorRegiMsg.missmatch;
  }
  console.log(credentials);  
}


</script>


<template>
    <div class="container pt-5">


        <h1 v-if="errorMsg" class="p-4 text-danger">{{errorMsg}}</h1>
                  <!-- <h1 v-if="'emptypass'==activeClass" class="p-4 rounded bg-red-500 font-bold text-white m-4">passwords cannot be empty !!</h1>
                  <h1 v-if="'emptyusername'==activeClass" class="p-4 rounded bg-red-500 font-bold text-white m-4">username cannot be empty !!</h1>
                  <h1 v-if="'notUnique'==activeClass" class="p-4 rounded bg-red-500 font-bold text-white m-4">username has already been taken !!</h1> -->

        <form @submit.prevent="checkRegistration(pass1,pass2,email,name)">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input v-model="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="pass1" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="pass2" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            
            <button type="submit" class="btn btn-primary">register</button>
        </form>
    </div>


</template>
