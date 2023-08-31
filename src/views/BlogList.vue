<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'

let List = ref();

async function BlogList() {
    let res = await axios.get('https://basic-blog.teamrabbil.com/api/post-list/2');
    List.value = res.data;
    console.log(res.data)
}

BlogList();
</script>

<template>
  <div class="container">
    <div class="row">
        <div class="col-12 p-4">
            <h1>List of the Recent Blogs</h1>
        </div>
        <div class="col-12 pt-4">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="table-primary">
                        <td>serial</td>
                        <td>Blog Title</td>
                        <td>Date of upload</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(blog,index) in List" :key="blog.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ blog.title }}</td>
                        <td>{{ blog.created_at }}</td>
                        <!-- <td><RouterLink class="btn btn-info btn-sm" :to="`/${blog.id}`">Detail</RouterLink></td> -->
                        <td><RouterLink class="btn btn-info btn-sm" :to="{ name: 'blog', params: { id: blog.id } }">Detail</RouterLink></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>
