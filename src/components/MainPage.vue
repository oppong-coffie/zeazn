
<template>
  <div class="bg-slate-950">
    <!-- START:: Navbar for Desktop -->
     <div class="">
           <nav class="flex justify-between px-3 pt-2">
      <img class="w-32 h-16" src="../images/logo1.png"/>
      <img @click="toggleVisibility" class="w-12 h-10 mt-5 md:hidden" src="../images/hum2.png"/>
      <div class="text-white gap-5 md:gap-9 md:flex items-center hidden">
        <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#">Home</a>
        <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#about">About</a>
        <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000 md:block hidden" href="#how">How it Works</a>
        <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#features">Features</a>
        <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#">Pricing</a>
        <a id="" class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000 hover:bg-black hover:border-white border-2 border-[#EB8D41]  bg-[#EB8D41] rounded-3xl p-1 md:p-1 px-2 md:px-5" href="#contact">Contact us</a>
      </div>
    </nav>
     </div>

        <!-- END:: Navbar for Desktop -->

            <!-- START:: Navbar for mobile -->
              <nav class="md:hidde text-center" v-if="!hide">
                <div class="text-white absolute w-full h-full text-xl space-y-5 p-3 z-20">
                  <div class="bg-black w-full h-full absolute opacity-80 mt-[-20px]"></div>
                  <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000 block z-30 relative" href="#">Home</a>
                  <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000 block z-10 relative" href="#about">About</a>
                  <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000 block z-10 relative" href="#how">How it Works</a>
                  <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000 block z-10 relative" href="#feature">Features</a>
                  <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000 block z-10 relative pb-6" href="#">Pricing</a>
                  <a class="mt-12 hover:text-[#EB8D41] hover:underline transition-colors duration-1000 hover:bg-black border-[#EB8D41] border-2 bg-[#EB8D41] rounded-3xl p-1 px-5 z-10 relative" href="#contact">Contact us</a>
                </div>
              </nav>
    
            <!-- END:: Navbar for mobile -->

<!-- FAINT LINE UNDER THE NAV -->
    <div class="bg-slate-800 h-1 mx-10 my-6"></div>

<div class="px-12">
    <!-- START:: Hero section -->
     <div class="text-white md:flex sm:flex">
      <div 
      class="md:w-[50%]"
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-delay="500"
      >
        <img class="md:w-[85%] sm:w-[85%] md:h-[524px] -z-10" src="../images/hero1.png" alt="">
      </div>

      <div class="md:w-[50%] md:mt-[-20px] sm:mt-[-20px]">
        <!-- <div class="flex justify-start md:justify-end w-[110%]">
          <img class="ml-[-30px] md:ml-0 w-[100%] md:w-[90%] md:h-[350px] mt-5 md:mt-[-15px]" src="../images/emp.png" alt="">
        </div> -->
        <h1 class="font-semibold text-2xl sm:text-3xl md:text-5xl md:text-end">Empowering Innovation Through Crowdfunding</h1>
        <p class="md:text-end mt-3 sm:mt-5 md:mt-10">Unlock the Future of Innovation <br class="hidden md:block"/>
          Be the first to join Zeazn, the revolutionary <br class="hidden md:block"/>crowdfunding platform connecting inventors, creators, <br class="hidden md:block"/>and innovators with supporters like you.
          </p>
          <p class="md:text-end mt-2 sm:mt-2 md:mt-5">Join the Innovation Movement<br class="hidden md:block"/>
          Sign up now to stay updated and be among the first to <br class="hidden md:block"/> download the Zeazn app when it launches.<br class="hidden md:block"/>
          Get Early Access <br>
          Stay informed about our launch and special offers.
        </p>
        <div class="flex justify-between md:justify-end md:gap-4 mt-5">
          <button class="p-1 px-7 rounded-3xl hover:underline transition-colors duration-1000 hover:bg-[#EB8D41] border border-[#EB8D41]">Sign Up</button>
          <button class="bg-[#EB8D41] p-1 px-3 rounded-3xl hover:text-[#EB8D41] hover:underline transition-colors duration-1000 hover:bg-black hover:border-white border-2 border-[#EB8D41]">Get Started</button>
        </div>
        <div class="justify-end flex mt-[-20px]">
          <img class="md:w-[550px] md:h-[130px]" src="../images//dosomething.png" alt="">
        </div>
      </div>
     </div>
    <!-- END:: Hero section -->

    <!-- START:: feature -->
     <div id="features" class="text-center mt-10 sm:mt-16 md:mt-24">
      <h5 class="text-white mb-3 md:mb-7 text-3xl sm:text-4xl md:text-4xl">FEATURED AND SEEN</h5>
     <div class="flex justify-center gap-2 md:gap-10">
      <!-- <img class="md:w-[770px] md:h-[50px]" src="../images/media1.png" alt=""> -->
       <img class="h-4 w-12 md:w-20 md:h-6" src="../images/nvidia.png" alt="">
       <img class="h-4 w-12 md:w-20 md:h-6" src="../images/ebay.png" alt="">
       <img class="h-4 w-12 md:w-20 md:h-6" src="../images/paypal.png" alt="">
       <img class="h-4 w-12 md:w-20 md:h-6" src="../images/netflix.png" alt="">
       <img class="h-4 w-12 md:w-20 md:h-6" src="../images/apple.png" alt="">
       <img class="w-8 md:w-10" src="../images/salesforce.png" alt="">
     </div>
     </div>
    <!-- END:: feature -->

    <!-- START:: Why zeazn -->
     <div class="md:flex justify-between">
      <div class="text-white">
        <h4 class="text-3xl sm:text-4xl mt-10 sm:mt-16 md:mt-20 md:mb-10">Why Zeazn?</h4>
        <ul class="list-disc space-y-4 ml-0 sm:ml-10">
  <li class="text-white">
    Discover Groundbreaking Projects: Explore innovative ideas across various industries.
  </li>
  <li class="text-white">
    Support Visionaries: Help bring new products and technologies to life.
  </li>
  <li class="text-white">
    Exclusive Early Access: Get in on the ground floor of the next big thing.
  </li>
</ul>

      </div>
      <div class="">
        <img class="w-20 ml-4 sm:ml-24 md:ml-16 sm:mt-5" src="../images/thinking.png" alt="">
        <img class="sm:w-[500px] mt-[-50px] md:mt-[-50px]" src="../images/questiongirl.png" alt="">
        <div class="bg-[#EB8D41] h-12 border-2 w-52 rounded-lg ml-16 sm:ml-36 mt-[-22px] z-10 relative"></div>
      </div>

     </div>
    <!-- END::  why zeazn-->

    <!-- START:: how zeazn work -->
     <div id="how" class="text-white mt-12">
        <h3 class="text-center text-4xl md:mb-12">How Zeazn Works</h3>
     <ul class="">
      <li class="flex items-center md:w-[570px]">
        <img class="w-7 md:w-10 h-7 md:h-10" src="../images/g2.png" alt="">
        <p class="text-7xl text-white mt-[-50px] px-2">.</p>
        <p>Explore Projects: Browse a curated selection of <br class="hidden md:block"/> innovative campaigns.</p>
      </li>
      <li class="flex justify-end items-center py-5">
        <img class="w-7 md:w-10 h-7 md:h-10" src="../images/support.png" alt="">
        <p class="text-7xl text-white mt-[-50px] px-2">.</p>
        <p>Support Creators: Contribute to projects that <br class="hidden md:block"/> inspire you</p>
      </li>
      <li class="flex items-center md:w-[570px]">
        <img class="w-7 md:w-10 h-7 md:h-10" src="../images/watch.png" alt="">
        <p class="text-7xl text-white mt-[-50px] px-2">.</p>
        <p>Watch Ideas Come to Life: Track the progress<br class="hidden md:block"/> of the projects you support.</p>
      </li>
     </ul>
     </div>
    <!-- END:: how zeazn work -->

   <!-- START:: features you will love -->
   <div class="flex flex-col justify-center col-span-1 text-white">
  <h2 class="text-3xl sm:text-4xl md:text-5xl text-center my-5 sm:my-8 md:my-10">Features You'll Love</h2>
  
  <div class="sm:flex sm:gap-10 md:gap-16 justify-center sm:px-10 md:px-32 space-y-5 sm:space-y-0">
    <!-- Feature 1 -->
    <div class="border-2 rounded-xl text-center sm:w-64 md:w-52 border-[#EB8D41] py-8 sm:py-12 md:py-20 p-3 bg-slate-950 relative z-10 transform transition-transform duration-500 ease-out hover:shadow-2xl hover:-translate-y-3">
      <div class="flex justify-center">
        <img class="w-16 sm:w-20 md:w-24 pb-1 transition-transform duration-500 hover:scale-110" src="../images/user.png" alt="">
      </div>  
      <p class="text-white text-sm sm:text-base md:text-md transition-transform duration-500 hover:scale-90">
        

User-Friendly Interface: Navigate with ease and find projects that match your interests.

      </p>        
    </div>
    
    <!-- Feature 2 -->
    <div class="border-2 rounded-xl text-center sm:w-64 md:w-52 border-[#EB8D41] py-8 sm:py-12 md:py-20 p-3 bg-slate-950 relative z-10 transform transition-transform duration-500 ease-out hover:shadow-2xl hover:-translate-y-3">
      <div class="flex justify-center">
        <img class="w-16 sm:w-20 md:w-24 pb-1 transition-transform duration-500 hover:scale-110" src="../images/secure.png" alt="">
      </div>
      <p class="text-white text-sm sm:text-base md:text-md transition-transform duration-500 hover:scale-90">
        
Secure Transactions: Feel confident with our robust security measures.

      </p>        
    </div>

    <!-- Feature 3 -->
    <div class="border-2 rounded-xl text-center sm:w-64 md:w-52 border-[#EB8D41] py-8 sm:py-12 md:py-20 p-3 bg-slate-950 relative z-10 transform transition-transform duration-500 ease-out hover:shadow-2xl hover:-translate-y-3">
      <div class="flex justify-center">
        <img class="w-16 sm:w-20 md:w-24 pb-1 transition-transform duration-500 hover:scale-110" src="../images/direct.png" alt="">
      </div> 
      <p class="text-white text-sm sm:text-base md:text-md transition-transform duration-500 hover:scale-90">
        





Direct Communication: Engage with creators through video updates and messages.
.
      </p>        
    </div>
  </div>
  
  <!-- Decorative Lines -->
  <div class="flex justify-between mt-[-60px] sm:mt-[-150px] md:mt-[-80px] sm:mx-[-30px] md:mx-[-46px]">
    <img class="hidden sm:block w-60 sm:w-64 md:w-72" src="../images/line1.png" alt="">
    <img class="hidden sm:block w-60 sm:w-64 md:w-72" src="../images/line2.png" alt="">
  </div>
</div>


    <!-- END:: features you will love -->

    <!-- START::Be a Part of Something Bigger -->
     <div class="text-white text-center mt-32 md:mt-20">
       <h2 class="md:my-12 text-2xl sm:text-4xl">Be a Part of Something Bigger</h2>
       <p class="mx-2 md:mx-52 text-center">
          By joining Zeazn, you're not just supporting a project—you're fueling innovation and
          making a lasting impact. <br class="hidden md:block"/> Don't Miss Out! <br class="hidden md:block"/>Enter your name and email below to
          join our community and receive the latest updates. <br class="hidden md:block"/>Stay Connected
        </p>
        <a class="text-yellow-600" href="#">Sign Me Up</a>
        <form class="md:flex justify-center gap-12 mt-5 md:mt-9 mx-2 md:mx-0">
          <div class="border-2 rounded-3xl p-2 md:p-2 md:w-[40%] border-[#EB8D41] shadow shadow-[#EB8D41]">
            <label for="">Name:</label>
            <input class="bg-transparent focus:outline-none sm:w-[85%]" type="text">
          </div>
          <div class="border-2 rounded-3xl p-2 mt-5 md:mt-0 md:p-2 md:w-[40%] border-[#EB8D41] shadow shadow-[#EB8D41]">
            <label for="">Email:</label>
            <input class="bg-transparent focus:outline-none  sm:w-[85%]" type="text">
          </div>
        </form>
     </div>
    <!-- END::Be a Part of Something Bigger -->

    <!-- START:: creators wanted -->
     <div class="grid sm:grid-cols-2 justify-between mt-8 sm:mt-20">
      <div class="text-white">
        <h1 class="text-3xl sm:text-4xl sm:text-start md:text-start ml-12 sm:ml-0 sm:mb-8">Creators Wanted</h1>
        <p class="text-sm text-center">
          Are you an innovator with a Groundbreaking idea? Zeazn is the perfect <br> platform to showcase your project and connect with suppertors.
        </p>
        <div class="flex gap-7 md:gap-9 mt-3 md:ml-0  sm:mt-20">
          <button class="rounded-3xl p-1 px-3  hover:underline transition-colors duration-1000 hover:bg-[#EB8D41] border border-[#EB8D41]">Launch Your Project</button>
          <button class="rounded-3xl p-1 px-2 md:px-8 bg-[#EB8D41] hover:text-[#EB8D41] hover:underline transition-colors duration-1000 hover:bg-black hover:border-white border-2 border-[#EB8D41]">Learn more</button>
        </div>
      </div>
        <!-- Use images for each slide -->
      <div class="sm:mt-[-50px]">
        <div class="border-[#eb8e415c] rounded-xl h-72 border-2 mt-8">
          <div class = "border-[#EB8D41] bg-slate-950 border-2 rounded-lg w-[100%] h-72 pt-2 pl-2 ml-2 mt-2 mb-[-10px] mr-[-20px]">
            <div class="mr-[-10px]">
              <Carousel class="h-[100%]" ref="carousel" :wrap-around="true">
              <Slide class="h-[100%]" v-for="(image, index) in images" :key="index">
                  <img  :src="image" :alt="'Slide ' + (index + 1)" class="w-[100%] h-72 rounded-xl" />
              </Slide>
            </Carousel>
            </div>
            
      </div>
    </div> 
      </div>
            
  </div>
    <!-- END:: creators wanted -->

    <!-- START:: About zeazn -->
     <div id="about" class="text-center text-white mt-10 sm:mt-20">
      <h1 class="text-4xl mb-2">About Zeazn</h1>
      <p>At Zeazn, our mission is to 
        bridge the gap between vissionary creators and enthusiatic supporters.
         We beleive in the power of commeunity to drive <br> innovation fofrward </p>
         <div class="flex justify-center mt-5">
           <img class="md:w-[100%] md:h-[450px]" src="../images/union.png" alt="">
         </div>
         <div class="flex gap-7 md:gap-7 mt-5">
          <button class=" hover:underline transition-colors duration-1000 hover:bg-[#EB8D41] border border-[#EB8D41] p-2 px-4 rounded-3xl md:px-5">Download the app</button>
          <button class="p-1 bg-[#EB8D41] px-5 md:px-12 rounded-3xl hover:text-[#EB8D41] hover:underline transition-colors duration-1000 hover:bg-black hover:border-white border-2 border-[#EB8D41]">Sign Up</button>
         </div>
     </div>
    <!-- END:: About zeazn -->

    <!-- START:: frequently ask question -->
    <h1 class="text-white text-xl font-semibold md:font-normal md:text-4xl mt-10 mb-2 md:ml-60">Frequently Asked Questions</h1>
     <div class="text-white flex md:justify-center mb-10">
      <div class="">
         <h1 class="mb-4">Q: When will the Zeazn app be available? </h1>
         <h1 class="mb-4">A: We're launching soon! Sign up to be the first to know. </h1>
         <h1 class="mb-4">Q: How can I submit my project for crowdfunding? </h1>
         <h1 class="mb-4">A: Click on "Learn More" under "Creators Wanted" to get started. </h1>
         <h1 class="mb-4">Q: Is there a cost to join Zeazn? </h1>
         <h1 class="mb-4">A: Signing up is completely free for supporters.</h1>
        </div>        
        <div class="mt-16 md:mt-2 ml-[0px]">
          <img class="w-12 md:w-16" src="../images/vector0.png" alt=""><br><br>
          <img class="w-10 md:w-12 ml-12 md:ml-24" src="../images/Vector.png" alt="">
        </div>
      <!-- <h1 class="text-3xl">Frequently Asked Questions</h1> -->
      <!-- <div class="flex"> -->
        <!-- <div class="">
        Q: When will the Zeazn app be available? <br>
        A: We're launching soon! Sign up to be the first to know. <br>
        Q: How can I submit my project for crowdfunding? <br>
        A: Click on "Learn More" under "Creators Wanted" to get started. <br>
        Q: Is there a cost to join Zeazn? <br>
        A: Signing up is completely free for supporters.
        </div> -->
      <!-- </div> -->
    </div>
    <!-- END:: frequently ask question -->

    <h1 class="text-white text-center text-2xl sm:text-4xl pb-3 md:pb-10">Ready to Ignite Innovation?</h1>
    <div class="flex justify-center">
      <img class="md:w-[85%] md:h-[500px]" src="../images/head3.png" alt="">
    </div>

    <!-- START::Contact us  -->
     <div id="contact" class="text-white mt-12">
       <h1 class="text-4xl text-center">Connect With Us</h1>
       <div class="flex justify-center gap-4   md:gap-5 mt-3">
        <a class="underline text-xl md:text-2xl" href="#">Facebook</a>
        <a class="underline text-xl md:text-2xl" href="#">Instagram</a>
        <a class="underline text-xl md:text-2xl" href="#">LinkedIn</a>
        <a class="underline text-xl md:text-2xl" href="#">Twitter</a>
       </div>
       <div class="justify-center flex my-9">
          <form class=" text-white md:w-[50%]">
          <div class="border-[#EB8D41] shadow shadow-[#EB8D41] border-2 rounded-2xl flex p-2 mb-10 pl-5 items-center w-[100%]">
              <label for="">Name:</label>
              <input class="bg-transparent focus:outline-none" type="text">
            </div>
            <div class="border-[#EB8D41] shadow shadow-[#EB8D41] border-2 rounded-2xl flex p-2 mb-10 pl-5 items-center w-[100%]">
              <label for="">Company Name:</label>
              <input class="bg-transparent focus:outline-none w-[55%]" type="text">
            </div>
            <div class="border-[#EB8D41] shadow shadow-[#EB8D41] border-2 rounded-2xl flex p-2 mb-10 pl-5 items-center w-[100%]">
              <label for=""> Phone Number:</label>
              <input class="bg-transparent focus:outline-none w-[55%]" type="text">
            </div>
            <div class="border-[#EB8D41] shadow shadow-[#EB8D41] border-2 rounded-2xl flex p-2 mb-8 pl-5 items-center w10  [90%]">
              <label for="">Email Address:</label>
              <input class="bg-transparent focus:outline-none w-[55%]" type="text">
            </div>
            <div class="text-center">
              <button class="bg-[#EB8D41] rounded-3xl p-2 px-12 hover:text-[#EB8D41] hover:underline transition-colors duration-1000 hover:bg-black hover:border-white border-2 border-[#EB8D41]">Sign Up</button>
            </div>
          </form>
       </div>
     </div>
    <!-- END::Contact us  -->

    <!-- START:: footer -->
     <div class="text-white">
      <img class="md:w-[600px]" src="../images/logo2.png" alt="">
      <div class="mx-5 mb-3 md:mb-8 mt-3 bg-slate-800 p-[0.5px]"></div>

      <div class="md:flex justify-between md:justify-around">
        <img class="w-[330px] md:w-[280px] h-[200px] md:h-[170px]" src="../images/logo3.png" alt="">
        <div class="flex flex-col items-center space-y-2 text-center md:items-start md:text-left">
        <h1 class="font-bold md:font-normal mt-5">Important Links</h1>
        <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#">Home</a>
        <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#about">About</a>
        <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#how">How it Works</a>
        <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#feature">Features</a>
        <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#">Pricing</a>
      </div>

        <div class="flex flex-col items-center space-y-1 text-center md:items-start md:text-left">
          <h1 class="font-bold md:font-normal mt-7">Legal</h1>
          <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#">Terms of Use</a><br>
          <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#">Privacy Policy</a><br>
          <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="contact">Contact Us</a>
        </div>
      </div>
     </div>
    <!-- END:: footer -->

    <!-- START:: media -->
     <div class="flex pb-10 md:pr-16 gap-4 justify-end mt-20">
      <a href="#"> <img class="w-4 h-4" src="../images/twitter.png" alt=""></a>
      <a href="#"> <img class="w-4 h-4" src="../images/linkedin.png" alt=""></a>
      <a href="#"> <img class="w-4 h-4" src="../images/facebook.png" alt=""></a>
      <a href="#"> <img class="w-4 h-4" src="../images/web.png" alt=""></a>
      <img class="ml-12 md:ml-60 w- h-5" src="../images/zean.png" alt="">
     </div>
    <!-- END:: media -->
  </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

// Import the carousel CSS
import 'vue3-carousel/dist/carousel.css'
// Import images using ES6 imports
import image1 from '../images/head3.png'
import image2 from '../images/creators.png'
import image3 from '../images/slide2.png'
import image4 from '../images/creators.png'
export default {
  data() {
    return {
      hide: true,
      images: [image1, image2, image3, image4],
      autoplayInterval: null, // To store the interval ID
    }
  },
  methods: {
    toggleVisibility() {
      this.hide = !this.hide;  // Toggle the value of hide
    },
    startAutoplay() {
      // Manually advance the slides every 5 seconds
      this.autoplayInterval = setInterval(() => {
        this.$refs.carousel.next(); // Move to the next slide
      }, 2000); // 5000 ms = 5 seconds
    },
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  mounted() {
    // Start manual autoplay with a 5-second interval
    this.startAutoplay();
  },
  beforeUnmount() {
    // Clear the interval when the component is destroyed
    clearInterval(this.autoplayInterval);
  },
}
</script>




