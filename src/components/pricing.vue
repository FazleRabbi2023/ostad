<script setup>
import { pricing } from '../data/data'
</script>

<template>
<div id="price"></div>
    <div  class="container py-5 px-5 shadow-lg">
    <header>
    

    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Pricing</h1>
      <p class="fs-5 text-muted">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
    </div>
  </header>
  <main >
    
    <div  class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div v-for="p in pricing" class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{{p.title}}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{{p.rate}}<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              
              <li>{{p.user}}</li>
              <li v-html="p.storage"></li>
              <!-- <li>Email support</li>
              <li>Help center access</li> -->
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">{{p.golink}}</button>
          </div>
        </div>
      </div>
    </div>

   
  </main>
  </div>

</template>