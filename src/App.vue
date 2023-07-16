<script setup>
import HelloWorld from './components/HelloWorld.vue'
import navigation from './components/navigation.vue'
import hero from './components/hero.vue'
import features from './components/features.vue'
import features2 from './components/features2.vue'
import pricing from './components/pricing.vue'
import advantage from './components/advantage.vue'
import testimonial from './components/testimonial.vue'
import about from './components/about.vue'
import news from './components/news.vue'
import contact from './components/contact.vue'
import footers from './components/footers.vue'
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <navigation />
  <hero />
  <features />
  
  <pricing />
  <advantage />
  <testimonial/>
  <about/>
  <news/>
  <contact/>
  <footers/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
/* .logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
