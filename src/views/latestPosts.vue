<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'

let List = ref();
let isSpin = ref(true)

async function LatestPosts() {
    let res = await axios.get('https://basic-blog.teamrabbil.com/api/post-newest');
    List.value = res.data;
    isSpin.value = false;
}

LatestPosts();
</script>

<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-12 p-4">
            <h1>List of the Latest Posts</h1>
        </div>
    </div>

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

    <div v-else class="row row-cols-1 row-cols-md-3 g-4 mt-2">
        <div class="col" v-for="(blog,index) in List" :key="blog.id">
            <div class="card">
            <img :src="blog.img ? blog.img : 'https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2016/07/26.jpg'">
            <div class="card-body">
                <h5 class="card-title">{{ blog.title }}</h5>
                <p class="card-text">{{ blog.short }}</p>
                <!-- <RouterLink class="btn btn-info btn-sm" :to="{ name: 'blog', params: { id: blog.id }, props: { title:blog.title } }">Detail</RouterLink> -->
                <RouterLink class="btn btn-info btn-sm" :to="{ name: 'blog', params: { id: blog.id }, query: { data: JSON.stringify(blog) } }">Detail</RouterLink>
            </div>
            </div>
        </div>
    </div>
    
  </div>
</template>
