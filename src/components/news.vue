<script setup>
import { news } from '../data/data'
</script>

<template>
  <div class="card container my-5 p-5 bg-light shadow-lg">
  <header>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">{{news.title}}</h1>
      <p class="fs-5 text-muted">{{ news.detail }}</p>
    </div>
  </header>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="(n,key,index) in news.content" :key="index">
          <div class="card shadow-sm">
            <img :src="n.imageLink" alt="news" height="225" class="">
            <div class="card-body">
              <p class="card-text">{{n.newsTitle}}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a :href="n.link"><button type="button" class="btn btn-sm btn-outline-primary">View</button></a>
                </div>
                <small class="text-muted">{{n.tag}}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 

</template>