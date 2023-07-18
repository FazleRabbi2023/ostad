<script setup>
import { hero } from '../data/data'
</script>

<template>
    <div class="container my-5">
        <div class="dots"></div>
        <div class="row py-4 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-5 p-3 p-lg-5 pt-lg-3">
            <h2 class="display-4 fw-bold lh-1">{{hero.title}}</h2>
            <p class="lead">{{hero.detail}}</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <a href="#feat"><button type="button" :class="hero.buttons[0].class">{{hero.buttons[0].text}}</button></a>
            <a href="#price"><button type="button" :class="hero.buttons[1].class">{{hero.buttons[1].text}}</button></a>
            </div>
        </div>
        <div class="col-lg-5 offset-lg-1 p-0 shadow-lg">
            <img class="img-fluid rounded-lg-3" :src="hero.imageLink" alt="" width="720">
        </div>
        </div>
  </div>

</template>