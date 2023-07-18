<script setup>
import { adv } from '../data/data'
</script>

<template>
    <div class="card container px-4 py-5 shadow-lg my-5" id="hanging-icons">
    <header>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Advantages of using our products</h1>
      <p class="fs-5 text-muted">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
    </div>
    </header>
    <div class="row py-4 pe-lg-0 pt-lg-5 align-items-center">
      <div v-for="a in adv" class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg>
        </div>
        <div>
          <h4>{{a.title}}<hr></h4>
          <p class="d-flex justify-content-between">{{a.detail}}</p>
          <a href="#" class="btn btn-primary">
            know More
          </a>
        </div>
      </div>
    </div>
  </div>
</template>