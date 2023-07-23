<script setup>
import { ref, reactive } from 'vue'

const images = [
  {
    link: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
    caption:'Forest',
  },
  {
    link: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
    caption:'Icy Mountains'
  },
  {
    link: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
    caption:'Mountain Lake'
  },
  {
    link: 'https://www.w3schools.com/howto/img_lights_wide.jpg',
    caption:'Magical Lights'
  }
]



const activeImage = reactive({
  link: images[0].link,
  caption: images[0].caption,
  index:0
});

let pause = false;

setInterval(function () {
  if (pause == false) {
    activeImage.index = (activeImage.index + 1) > images.length - 1 ? 0 : activeImage.index + 1;
  }
}, 3000);

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
    <div @mouseover="pause = true" @mouseleave="pause = false" class="carousel slide"  data-bs-ride="">

        <h2 style="font-family:  Verdana, Geneva, Tahoma, sans-serif">Image Carousel</h2>
            <div class="carousel-inner">
              <div class="carousel-item" :class="(activeImage.index==index)?'active':''" v-for="(image,index) in images" :key="index">
                <div class="numbertext">{{index+1}}/{{ images.length }}</div>
                <img  :src="image.link" style="width:100%;height:70vh;border: 5px solid black; box-shadow: 5px;">
                <div class="text">{{ image.caption }}</div>
                
              </div>
            </div>
            <div class="prev"><a class="btn" @click="changeSlide(-1)">&#10094;</a></div>
            <div class="next"><a class="btn" @click="changeSlide(1)">&#10095;</a></div>
        <!-- Next and previous buttons -->
    <br>
    <!-- The dots/circles -->
    <div class="ms-5">
        <span class="demo" :class="index==activeImage.index?'active':''" @click="currentSlide(index)" v-for="(image,index) in images" :key="index"><img :src="image.link" style="width:150px;height:60px" class="img-thumbnail img-fluid "></span>
    </div>
    </div>

    
</template>

<style scoped>

/* Container holding the image and the text */

.mySlides {display: block}

img {
  vertical-align: middle;
  cursor: pointer;
  
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
  font-size: 30px;
  font-weight: bold;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 3s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}

/* Add a transparency effect for thumnbail images */
.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

.carousel-inner {
 border-color: black !important;
 border-width: 100px !important;
}


</style>
