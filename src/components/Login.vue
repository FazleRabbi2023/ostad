<script setup>

import { ref, reactive } from 'vue'

import { authStore } from '../stores/authStore'

const auth = authStore();

//console.log(auth.errorLoginMsg);

</script>

<template>
    <div class="container pt-5">
            <h1 v-if="authStore().LoginErrMsg.state" class="p-4 text-danger">{{authStore().LoginErrMsg.msg}}</h1>
            <form @submit.prevent="auth.login(pass,email)">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="pass" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            
            <button type="submit" class="btn btn-primary">Log In</button>
        </form>
    </div>


</template>
