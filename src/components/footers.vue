<script setup>
import { footers } from '../data/data'


</script>

<template>
    <footer class="bd-footer py-5 mt-5 bg-light shadow-lg">
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-3 mb-3">
        <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
          <img :src="footers.company.logo" alt="" width="40" height="32" class="me-2">
          <span class="fs-5">{{footers.company.name}}</span>
        </a>
        <ul class="list-unstyled small text-muted">
          <li class="mb-2" v-html="footers.company.designer"></li>
          <li class="mb-2" v-html="footers.company.lisence"></li>
          <li class="mb-2" v-html="footers.company.version"></li>
          <li class="mb-2" v-html="footers.company.analytics"></li>
        </ul>
      </div>
      <template v-for="(item,key,index) in footers" :key="index">
        <template v-if="index != 0">
          <div class="col-6 col-lg-2 mb-3" :class="(1==index)?'offset-md-1':''" >
          
          <h5>{{key}}</h5>
          <ul class="list-unstyled">
            <li class="mb-2" v-for="(value,k,i) in item" :key="i"><a :href="value.link">{{value.text}}</a></li>
          </ul>
          </div>
        </template>
      </template>
    </div>
  </div>
</footer>
</template>