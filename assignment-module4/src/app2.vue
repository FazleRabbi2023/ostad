<script setup>
import { ref, reactive } from 'vue'

const images = [
  {
    link: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
    caption:'text 1',
  },
  {
    link: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
    caption:'text 2'
  },
  {
    link: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
    caption:'text 3'
  }
]

const activeImage = reactive({
  link: images[0].link,
  caption: images[0].caption,
  index:0
});

function currentSlide(index) {
  activeImage.link = images[index].link;
  activeImage.caption = images[index].caption;
  activeImage.index = index;
}

function changeSlide(diff) {
  
  const newIndex = (activeImage.index + diff) < 0  ? images.length - 1 : ((activeImage.index + diff) > images.length-1) ? 0: activeImage.index + diff;
  activeImage.link = images[newIndex].link;
  activeImage.caption = images[newIndex].caption;
  activeImage.index = newIndex;
}

</script>

<template>
    <!-- Slideshow container -->
    <div class="carousel slide "  data-bs-ride="carousel">

        <h2>Image Carousel</h2>
            <div class="carousel-inner">
              <div class="carousel-item" :class="'active'">
                <div class="numbertext">{{activeImage.index+1}}/{{ images.length }}</div>
                <img :src="activeImage.link" style="width:100%">
                <div class="text">{{ activeImage.caption }}</div>
              </div>
            </div>
            <div class="prev"><a class="btn" @click="changeSlide(-1)">&#10094;</a></div>
            <div class="next"><a class="btn" @click="changeSlide(1)">&#10095;</a></div>
       

        <!-- Next and previous buttons -->
        
        
    
    <br>

    <!-- The dots/circles -->
    <div style="text-align:center">
        <span class="dot" :class="index==activeImage.index?'active':''" @click="currentSlide(index)" v-for="(image,index) in images" :key="index"><img :src="image.link" style="width:100%"></span>
    </div>
    </div>
</template>

<style scoped>

/* Container holding the image and the text */

.mySlides {display: block}

img {vertical-align: middle;}


/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

a {
  color:black;
  font-size: 20px;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: red;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 50px 50px 0;
  border-width: 20px;
  border-color: red;
  user-select: none;
  background-color: #717171;
  opacity: 75%;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 50px 0 0 50px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 30px;
  width: 30px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
</style>
