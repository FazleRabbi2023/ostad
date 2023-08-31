<script setup>
import { ref} from 'vue'
import axios from 'axios'

import { useRoute } from 'vue-router';

const route = useRoute();

let id = route.params.id
console.log(id)

let blog = ref();
async function latestBlog() {
    if (null == id) {
        let res = await axios.get('https://basic-blog.teamrabbil.com/api/post-newest');
        blog.value = res.data[0];
    } else {
        let res = await axios.get('https://basic-blog.teamrabbil.com/api/post-list/2');
        let data = res.data

        data.forEach((number) => {
            
            if (number.id == id) {
                    blog.value = number
                }
                });
        
    }
    
}

latestBlog();
</script>

<template>
  <div class="container">
    <div class="row">
        <div class="col-12 p-4">
            <h1>{{ blog.title }}</h1>
        </div>
        <div class="col-12">
            <img :src="blog.img" alt="" style="width:70% !important">
        </div>
        <div class="col-12 p-4">
            {{ blog.short }}
        </div>
    </div>
  </div>
</template>
