<script setup>
import { ref, defineProps} from 'vue'
import axios from 'axios'

import { useRoute } from 'vue-router';

const route = useRoute();

//let id = ref(route.params.blog);
let isSpin = ref(true)

let blog = ref(JSON.parse(route.query.data));

isSpin.value = blog ? false : true;

//console.log(id.value)

// const blog = ref(0);
// async function latestBlog() {
//     if (null == id) {
//         let res = await axios.get('https://basic-blog.teamrabbil.com/api/post-newest');
//         blog.value = res.data[0];
//     } else {
//         let res = await axios.get('https://basic-blog.teamrabbil.com/api/post-list/2');
//         let data = res.data

//         data.forEach((number) => {
            
//             if (number.id == id) {
//                     blog.value = number
//                 }
//         });
        
//     }
    
// }

//latestBlog();
</script>

<template>
    
    <div v-if="isSpin" class="d-flex justify-content-center">
        <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        
        <div class="spinner-grow text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else class="row">
        <div class="col-12 p-4">
            <h1>{{ blog.title }}</h1>
        </div>
        <div class="col-12">
            <img :src="blog.img" alt="" style="width:100% !important">
        </div>
        <div class="col-12 p-4">
            <h4>{{ blog.short }}</h4>
        </div>
    </div>
  
</template>
