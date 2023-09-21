<script setup>

import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'


let isSpin = ref(false);
let products = reactive({});
onBeforeMount(async () => {
    isSpin.value = true;
    let res = await axios.get("https://dummyjson.com/products")
    products = res.data.products;
    isSpin.value = false;
    console.log(products);
})

</script>

<template>

    <div class="container">
        <div class="row mt-3" v-if="isSpin == true">
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div class="row mt-3" v-if="isSpin == false">
            <div class="col-12 col-md-6 col-lg-4" v-for="product in products" :key="product.id">
                <div class="card mb-4 p-3 bg-info shadow-lg-4" style="max-width: 540px; height:325px !important">
                    <div class="row g-0">
                        
                            <div class="col-md-4">
                                <img :src="product.images[0]" class="img-fluid rounded-start" alt="product image" height="300px">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{product.title}}</h5>
                                    <p class="card-text"><b>Brand:</b>{{ product.brand }}</p>
                                    <p class="card-text">{{product.description}}</p>
                                    <p class="card-text"><small class="text-muted"><b>Rating:</b>{{ product.rating }}</small></p>
                                </div>
                            </div>
                        
                    </div>
                    <div class=" footer-content bg-transparent border-success d-flex justify-content-center">
                        <RouterLink class="btn btn-primary" :to="`/product/${product.id}`">View Detail</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

.footer-content {
  position: absolute;
  bottom: 10px;
  
}
</style>