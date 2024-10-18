<template>
  <!-- Carousel with autoplay and pagination -->
  <Carousel ref="carousel" :wrap-around="true">
    <!-- Use images for each slide -->
    <Slide v-for="(image, index) in images" :key="index">
      <div class="carousel__item">
        <img :src="image" :alt="'Slide ' + (index + 1)" class="carousel-image" />
      </div>
    </Slide>

    <!-- Add pagination -->
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

// Import the carousel CSS
import 'vue3-carousel/dist/carousel.css'

// Import images using ES6 imports
import image1 from '../images/head3.png'
import image2 from '../images/head3.png'
import image3 from '../images/head3.png'
import image4 from '../images/g2.png'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      images: [image1, image2, image3, image4],
      autoplayInterval: null, // To store the interval ID
    }
  },
  mounted() {
    // Start manual autoplay with a 5-second interval
    this.startAutoplay();
  },
  beforeUnmount() {
    // Clear the interval when the component is destroyed
    clearInterval(this.autoplayInterval);
  },
  methods: {
    startAutoplay() {
      // Manually advance the slides every 5 seconds
      this.autoplayInterval = setInterval(() => {
        this.$refs.carousel.next(); // Move to the next slide
      }, 5000); // 5000 ms = 5 seconds
    },
  },
})
</script>

<style>
/* Style for the images in the carousel */
.carousel-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
