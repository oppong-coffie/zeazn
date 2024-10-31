
<template>
  <!-- <h1 id="home"></h1> -->
<div class="bg-[#050505F2] w-[100%] overflow-y-hidden">
    <!-- START:: Navbar for Desktop -->
    <div class="fixed top-0 w-[100%] bg-[#050505F2] border-b-2 shadow-2xl z-50 pb-3 border-slate-900">
  <nav class="flex justify-between items-center px-3 pt-2">
    <img class="w-32 h-16" src="../images/logo5.png" alt="Company Logo"/>
    <img 
      @click="toggleVisibility" 
      class="w-12 h-10 mt-5 md:hidden cursor-pointer" 
      src="../images/hum2.png" 
      alt="Menu Icon"/>
    
    <div class="text-white gap-5 md:gap-9 md:flex items-center hidden md:block">
      <a 
        :class="[isActive('#home') ? 'text-[#EB8D41] underline' : 'hover:text-[#EB8D41] hover:underline', 'transition-colors duration-1000']" 
        href="#home">Home
      </a>
      <a 
        :class="[isActive('#about') ? 'text-[#EB8D41] underline' : 'hover:text-[#EB8D41] hover:underline', 'transition-colors duration-1000']" 
        href="#about">About
      </a>
      <a 
        :class="[isActive('#how') ? 'text-[#EB8D41] underline' : 'hover:text-[#EB8D41] hover:underline', 'transition-colors duration-1000']" 
        href="#how">How it works
      </a>
      <a 
        :class="[isActive('#features') ? 'text-[#EB8D41] underline' : 'hover:text-[#EB8D41] hover:underline', 'transition-colors duration-1000']" 
        href="#features">Features
      </a>
      <a 
        :class="[isActive('#pricing') ? 'text-[#EB8D41] underline' : 'hover:text-[#EB8D41] hover:underline', 'transition-colors duration-1000']" 
        href="#pricing">Pricing
      </a>
      <a 
        class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000 hover:bg-black hover:border-white border-2 border-[#EB8D41] bg-[#EB8D41] rounded-3xl md:p-1 px-2 md:px-5 p-9" 
        href="#contact">Contact us
      </a>
    </div>
  </nav>
</div>

    <!-- END:: Navbar for Desktop -->

            <!-- START:: Navbar for mobile -->
              <nav class="md:hidden text-center" v-if="!hide">
                <div class="text-white fixed w-full h-full text-xl space-y-5 p-3 z-20">
                  <div class="bg-black w-full h-full absolute opacity-80 mt-[-20px]"></div>
                  <a @click="toggleVisibility" 
                    :class="[isActive('#home') ? 'text-[#EB8D41] underline' : 'hover:text-[#EB8D41] hover:underline', 'transition-colors duration-1000 z-30 block relative']" 
                    href="#home">Home
                  </a> 
                  <a @click="toggleVisibility" 
                    :class="[isActive('#about') ? 'text-[#EB8D41] underline' : 'hover:text-[#EB8D41] hover:underline', 'transition-colors duration-1000 z-30 block relative']" 
                    href="#about">About
                  </a>
                  <a @click="toggleVisibility" 
                    :class="[isActive('#how') ? 'text-[#EB8D41] underline' : 'hover:text-[#EB8D41] hover:underline', 'transition-colors duration-1000 z-30 block relative']" 
                    href="#how">How it works
                  </a>
                  <a @click="toggleVisibility" 
                    :class="[isActive('#features') ? 'text-[#EB8D41] underline' : 'hover:text-[#EB8D41] hover:underline', 'transition-colors duration-1000 z-30 block relative']" 
                    href="#features">Features
                  </a>
                  <a @click="toggleVisibility" 
                    :class="[isActive('#pricing') ? 'text-[#EB8D41] underline' : 'hover:text-[#EB8D41] hover:underline', 'transition-colors duration-1000 z-30 block relative pb-5']" 
                    href="#pricing">Pricing
                  </a>
        
                  <a @click="toggleVisibility"
                    :class="[isActive('#contact') ? 'underline' : 'hover:bg-black hover:text-[#EB8D41] hover:underline', 'transition-colors duration-1000 z-30 border-[#EB8D41] border-2 bg-[#EB8D41] rounded-3xl p-1 px-5 space-y-10 relative']" 
                    href="#contact">Contact us
                  </a>
                </div>
              </nav>
            <!-- END:: Navbar for mobile -->

<!-- FAINT LINE UNDER THE NAV -->
    <div class="bg-slate-950 h-1 mb-16 sm:mb-20 my-6"></div>

<div class="px-3 sm:px-12">
    <!-- START:: Hero section -->
     <div class="text-white md:flex">
      <div 
      class="md:w-[50%]"
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-delay="500"
      >
      <img 
  class="hover:border-2 hover:border-[#f4f0ed] md:w-[100%] sm:w-[100%] md:h-[524px] -z-10 rounded shadow-xl transition-all duration-1000" 
  src="../images/creators (10).jpg" 
  alt="Creators Image">
      </div>

      <div class="md:w-[50%] md:mt-[-20px] sm:mt-[20px]">
        
        <h1 id="learnmore" 
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
        class="font-semibold text-2xl sm:text-3xl md:text-5xl md:text-end transition-all hover:text-slate-300 duration-1000">Empowering Creatives Through Crowdfunding</h1>
        <p 
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="500"
        class="md:text-end mt-3 sm:mt-5 md:mt-10">Unlocking the brilliance of Creators and their projects is at the heart
           of Zeazn Invest. 
           We believe creators are the story tellers of the unfolding narratives of creativity harnessed by each generation.
          In today's expression of unrivalled talent, that unique creator is You.
          </p>
          <div class="flex justify-center md:justify-end gap-2 my-4">
            <p 
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-delay="500"
            class="font-bold">Who is a Creator? </p> 
            <button @click="learnMore" 
            data-aos="fade-left"
            data-aos-duration="3000"
            data-aos-delay="500"
            class="font-bold text-sm hover:text-white text-[#EB8D41] hover:underline transition-colors duration-1000">Click to learn more...</button>

          </div>
          <div v-if="creator" 
          data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="50"
          class="md:text-end">
             <p

             >
            The Artist working on their lastest album, the Movie Director producing a new film, the Content Creator releasing their
             latest Tik Tok/Youtube
             comedic skit or virtual food tour, the Fashion Influencer on Instagram, the Podcaster interviewing their standout
              guests, the Theatre Group organising their newest breakout play, the marketer putting together the largest music
               festivals & cultural displays, and many more.
               </p>
               <p class="mt-3">
                  As long as you have a legion of fans and followers ready to support your project, Zeazn Invest Invest is the right platform to turn your 
                  wildest ideas and creative expressions into lucrative opportunities, all funded by the people who believe in you the most, your fans & supporters.
              </p>
          </div>
         
          <p 
          data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
          class="md:text-end mt-2 sm:mt-2 md:mt-5">Join the Innovation Movement.<br class="hidden md:block"/>
          Sign up now to stay updated and be among the first to <br class="hidden md:block"/> download the Zeazn Invest App when it launches.<br class="hidden md:block"/>
          Get Early Access. 
          Stay informed about our launch and special offers.
        </p>
        <div class="flex justify-between md:justify-end md:gap-4 mt-5">
          <a href="#signup">
            <button 
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="100"
            class="p-1 px-7 rounded-3xl hover:underline transition-colors duration-1000 hover:bg-[#EB8D41] border border-[#EB8D41]">Sign Up</button>
          </a>
          <a href="#about">
            <button 
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="100"
            class="bg-[#EB8D41] p-1 px-3 rounded-3xl hover:text-[#EB8D41] hover:underline transition-colors duration-1000 hover:bg-black hover:border-white border-2 border-[#EB8D41]">Get Started
            </button>
          </a>
       
        </div>
        <div 
        data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="500"
        class="justify-end flex mt-[-20px]">
          <img id="features" class="md:w-[550px] md:h-[130px]" src="../images//dosomething.png" alt="">
        </div>
      </div>
     </div>
    <!-- END:: Hero section -->

    <!-- START:: feature -->
     <div class="text-center mt-10 sm:mt-16 md:mt-24">
      <h5
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="50"
      class="text-white mb-3 md:mb-7 text-3xl sm:text-4xl md:text-4xl hover:text-slate-300">FEATURED AND SEEN</h5>
     <div 
     data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="0"
     class="flex justify-center gap-2 md:gap-10">
       <img class="h-4 w-12 md:w-20 md:h-6" src="../images/nvidia.png" alt="">
       <img class="h-4 w-12 md:w-20 md:h-6" src="../images/ebay.png" alt="">
       <img class="h-4 w-12 md:w-20 md:h-6" src="../images/paypal.png" alt="">
       <img class="h-4 w-12 md:w-20 md:h-6" src="../images/netflix.png" alt="">
       <img class="h-4 w-12 md:w-12 md:h-7" src="../images/apple.png" alt="">
       <img class="w-8 md:w-10" src="../images/salesforce.png" alt="">
     </div>
     </div>
    <!-- END:: feature -->

    <!-- START:: Why Zeazn Invest -->
     <div class="md:flex justify-between">
      <div class="text-white">
        <h4 
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="5"
        class="text-3xl sm:text-4xl mt-10 sm:mt-16 md:mt-20 mb-3 md:mb-10 hover:text-slate-300">Why Zeazn Invest?</h4>
        <ul class="list-disc space-y-4 ml-4 sm:ml-10">
  <li 
  data-aos="fade-right"
  data-aos-duration="1000"
  data-aos-delay="50"
  class="text-white">
    Discover Groundbreaking Creator Projects: Explore and fund innovative projects<br class="hidden md:block"/> across various creative and talent based industries.  </li>
  <li 
  data-aos="fade-right"
  data-aos-duration="1000"
  data-aos-delay="500"
  class="text-white">
    Support Visionaries: Help bring new creative expressions & passions to life, <br class="hidden md:block"/>and be the reason why projects move from an idea to becoming succesful realities that change the world.  </li>
  <li 
    data-aos="fade-right"
    data-aos-duration="1000"
    data-aos-delay="1000"
  class="text-white">
    Exclusive Early Access: Get in on the ground floor of the "Next Big Thing". <br class="hidden md:block"/>It's time You create a dent in the Universe, and we'll help you get there!
  </li>
</ul>

      </div>
      <div class="">
        <img 
        data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="500"
        class="w-20 ml-4 sm:ml-24 md:ml-16 sm:mt-5" src="../images/thinking.png" alt="">
        <img class="sm:w-[500px] mt-[-50px] md:mt-[-50px]" src="../images/questiongirl.png" alt="">
        <div id="how" class="bg-[#EB8D41] h-12 border-2 w-52 rounded-lg ml-16 sm:ml-36 mt-[-22px] flex items-center justify-center z-10 text-white relative">
          <!-- <marquee behavior="" direction="">wondering why ?</marquee> -->
          
        </div>
      </div>

     </div>
    <!-- END::  why Zeazn Invest-->

    <!-- START:: how Zeazn Invest work -->
     <div class="text-white mt-12">
        <h3 
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="50"
        class="text-center text-4xl md:mb-12 hover:text-slate-300">How Zeazn Invest Works</h3>
     <ul class="">
      <li 
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="50"
      class="flex items-center md:w-[570px]">
        <img class="w-7 md:w-10 h-7 md:h-10" src="../images/g2.png" alt="">
        <p class="text-7xl text-white mt-[-50px] px-2">.</p>
        <p>Explore Projects: Browse a curated selection of <br class="hidden md:block"/> innovative campaigns.</p>
      </li>
      <li 
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="500"
      class="flex justify-end items-center py-5">
        <img class="w-7 md:w-10 h-7 md:h-10" src="../images/support.png" alt="">
        <p class="text-7xl text-white mt-[-50px] px-2">.</p>
        <p>Support Creators: Contribute to projects that <br class="hidden md:block"/> inspire you</p>
      </li>
      <li 
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="50"
      class="flex items-center md:w-[570px]">
        <img class="w-7 md:w-10 h-7 md:h-10" src="../images/watch.png" alt="">
        <p class="text-7xl text-white mt-[-50px] px-2">.</p>
        <p>Watch Ideas Come to Life: Track the progress<br class="hidden md:block"/> of the projects you support.</p>
      </li>
     </ul>
     </div>
    <!-- END:: how Zeazn Invest work -->

   <!-- START:: features you will love -->
   <div class="flex flex-col justify-center col-span-1 text-white">
  <h2 
  data-aos="fade-down"
  data-aos-duration="1000"
  data-aos-delay="0"
  class="text-3xl sm:text-4xl md:text-5xl text-center my-5 sm:my-8 md:my-10 mt-12 hover:text-slate-300">Features You'll Love</h2>
  
  <div class="sm:flex sm:gap-10 md:gap-16 justify-center sm:px-10 md:px-32 space-y-5 sm:space-y-0">
    <!-- Feature 1 -->
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-delay="500"
    class="border-2 rounded-xl text-center sm:w-64 md:w-52 border-[#EB8D41] py-8 sm:py-12 md:py-20 p-3 bg-slate-950 relative z-10 transform transition-transform duration-500 ease-out hover:shadow-2xl hover:-translate-y-3">
      <div class="flex justify-center">
        <img class="w-16 sm:w-20 md:w-24 pb-1 transition-transform duration-500 hover:scale-110" src="../images/user.png" alt="">
      </div>  
      <p class="text-white text-sm sm:text-base md:text-md transition-transform duration-500 hover:scale-90">
        

User-Friendly Interface: Navigate with ease and find projects that match your interests.

      </p>        
    </div>
    
    <!-- Feature 2 -->
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="500"
    class="border-2 rounded-xl text-center sm:w-64 md:w-52 border-[#EB8D41] py-8 sm:py-12 md:py-20 p-3 bg-slate-950 relative z-10 transform transition-transform duration-500 ease-out hover:shadow-2xl hover:-translate-y-3">
      <div class="flex justify-center">
        <img class="w-16 sm:w-20 md:w-24 pb-1 transition-transform duration-500 hover:scale-110" src="../images/secure.png" alt="">
      </div>
      <p class="text-white text-sm sm:text-base md:text-md transition-transform duration-500 hover:scale-90">
        
Secure Transactions: Feel confident with our robust security measures.

      </p>        
    </div>

    <!-- Feature 3 -->
    <div
      data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-delay="500"
    class="border-2 rounded-xl text-center sm:w-64 md:w-52 border-[#EB8D41] py-8 sm:py-12 md:py-20 p-3 bg-slate-950 relative z-10 transform transition-transform duration-500 ease-out hover:shadow-2xl hover:-translate-y-3">
      <div class="flex justify-center">
        <img class="w-16 sm:w-20 md:w-24 pb-1 transition-transform duration-500 hover:scale-110" src="../images/direct.png" alt="">
      </div> 
      <p class="text-white text-sm sm:text-base md:text-md transition-transform duration-500 hover:scale-90">
        Direct Communication: Engage with creators through video updates and messages.
      </p>        
    </div>
  </div>
  
  <!-- Decorative Lines -->
  <div class="flex justify-between mt-[-60px] sm:mt-[-150px] md:mt-[-80px] sm:mx-[-30px] md:mx-[-46px]">
    <img
    class="hidden sm:block w-60 sm:w-64 md:w-72" src="../images/line1.png" alt="">
    <img class="hidden sm:block w-60 sm:w-64 md:w-72" src="../images/line2.png" alt="">
  </div>
</div>
    <!-- END:: features you will love -->

    <!-- START::Be a Part of Something Bigger -->
     <div id="signup" class="text-white text-center mt-32 md:mt-20">
       <h2 
       data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="0"
       class="md:my-12 text-2xl sm:text-4xl mb-3 hover:text-slate-300">Be a Part of Something Bigger</h2>
       <p 
       data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="0"
       class="mx-2 md:mx-52 text-center">
        By joining Zeazn Invest, you're not just supporting creative projects and Visionaries across the world—you're fueling innovation and making a lasting impact that millions of people and communities will experience, all because of your support. 
         <br class="hidden md:block"/> Don't Miss Out
         on this opportunity to be part of a community that champions Development, Goal Attainment, Growth & Excellence!
        </p>
        <p class="pt-3">Enter your name and email below to join our community and receive the latest updates. Stay Connected</p>
        <form class="" @submit.prevent="signMeup">
          <div class="md:flex justify-center gap-12 mt-5 md:mt-9 mx-2 md:mx-0 mb-4 sm:mb-8">
            <div 
          data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="0"
          class="flex border-2 rounded-3xl p-2 md:p-2 md:w-[40%] border-[#EB8D41] shadow shadow-[#EB8D41]">
            <label for="">Name:</label>
            <input class="bg-transparent focus:outline-none w-[78%]" type="text"  v-model="formData2.FULLNAME">
          </div>
          <div 
          data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="0"
          class="flex border-2 rounded-3xl p-2 mt-5 md:mt-0 md:p-2 md:w-[40%] border-[#EB8D41] shadow shadow-[#EB8D41]">
            <label for="">Email:</label>
            <input class="bg-transparent focus:outline-none w-[78%]" type="text"  v-model="formData2.EMAIL">
          </div>
          </div>
        
          <div class="text-center">
                <button 
                type="submit"
                data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
                class="bg-[#EB8D41] w-[100%] md:w-72 rounded-3xl p-2 md:p-1 sm:text-4xl md:text-xl px-12 hover:text-[#EB8D41] hover:underline transition-colors duration-1000 hover:bg-black hover:border-white border-2 border-[#EB8D41]">Sign me up</button>
              </div>
        </form>
            <p v-if="submissionStatus2" class="text-center text-[#EB8D41]">{{ submissionStatus2 }}</p>

            </div>
    <!-- END::Be a Part of Something Bigger -->

    <!-- START:: creators wanted -->
     <div class="grid sm:grid-cols-2 justify-between mt-12 sm:mt-20">
      <div class="text-white">
        <h1 
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="0"
        class="text-3xl sm:text-4xl sm:text-start md:text-start ml-12 sm:ml-0 mb-3 sm:mb-8 hover:text-slate-300">Creators Wanted</h1>
        <p 
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="0"
        class="text-sm text-center">
          Are you a Creator with groundbreaking innovative ideas or projects? Do you need support from your fan base to fund your next creative endeavour?
        </p>
        <p 
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="0"
        class="mt-4">
          Zeazn Invest is the perfect platform to showcase your upcoming creative ideas and connect you with your fans & supporters who together will finance your projects.
        </p>
        <div 
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
        class="flex gap-6 md:gap-9 mt-3 md:ml-0  sm:mt-20">
          <a href="#contact">
             <button class="rounded-3xl p-1 px-3  hover:underline transition-colors duration-1000 hover:bg-[#EB8D41] border border-[#EB8D41]">
            Launch Your Project
          </button>
          </a>
         
          <a href="#learnmore">
            <button  id="about" class="rounded-3xl p-1 px-2 md:px-8 bg-[#EB8D41] hover:text-[#EB8D41] hover:underline transition-colors duration-1000 hover:bg-black hover:border-white border-2 border-[#EB8D41]">Learn more</button>
          </a>
        </div>
      </div>
        <!-- Use images for each slide -->
      <div class="sm:mt-[-50px]">
        <div class="hover:border-slate-100 border-[#eb8e415c] rounded-xl h-64 sm:h-72 border-2 mt-8">
          <div class = "hover:border-white border-[#EB8D41] bg-slate-950 border-2 rounded-lg w-[100%] h-64 sm:h-72 pt-2 pl-2 ml-2 mt-2 mb-[-10px] mr-[-20px]">
            <div class="mr-[-10px]">
              <Carousel class="h-[100%]" ref="carousel" :wrap-around="true">
              <Slide class="h-[100%]" v-for="(image, index) in images" :key="index">
                  <img  :src="image" :alt="'Slide ' + (index + 1)" class="w-[100%] h-64 sm:h-72 rounded-xl" />
              </Slide>
            </Carousel>
            </div>
            
      </div>
    </div> 
      </div>
            
  </div>
    <!-- END:: creators wanted -->

    <!-- START:: About Zeazn  -->
     <div class="text-center text-white mt-16 sm:mt-20">
      <h1 
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="0"
      class="hover:text-slate-300 text-4xl mb-2">About Zeazn</h1>
      <p
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="0"
      >
        At Zeazn, our mission is to bridge the gap between visionary creators and enthusiatic supporters.
      </p>
      <p 
      data-aos="zoom-out"
      data-aos-duration="1000"
      data-aos-delay="500"
      class="my-4">
        We believe in the power of our communities to drive forward
        innovation and to be part of the solution to the changes many societies across the world so desperately need.
      </p>
      <p
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="0"
      >
        In line with this mission, we are developing a portfolio of technological solutions that fill the gap for innovators
         between the idea curating phase, and the successful deployment of their visions & cutting-edge projects.
      </p>


         <div class="flex justify-center mt-5">
           <img class="hover:border-2 md:w-[80%] md:h-[440px] rounded shadow-2xl" src="../images/last (4).jpg" alt="">
         </div>
         <div class="flex gap-5 md:gap-7 mt-5">
          <a href="#scan">
            <button class=" hover:underline transition-colors duration-1000 hover:bg-[#EB8D41] border border-[#EB8D41] p-2 px-4 rounded-3xl md:px-5">Download the App</button>
          </a>
          <a href="#signup">
            <button class="p-1 bg-[#EB8D41] px-5 md:px-12 rounded-3xl hover:text-[#EB8D41] hover:underline transition-colors duration-1000 hover:bg-black hover:border-white border-2 border-[#EB8D41]">Sign Up</button>
          </a>
         </div>
     </div>
    <!-- END:: About Zeazn Invest -->

    <!-- START:: frequently ask question -->
    <h1
    data-aos="fade-down"
    data-aos-duration="1000"
    data-aos-delay="0"
    class="text-white text-xl font-semibold md:font-normal md:text-4xl mt-12 mb-2 md:ml-60 hover:text-slate-300">Frequently Asked Questions</h1>
     <div class="text-white flex md:justify-center mb-10">
      <div class="">
         <h1 
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="0"
         class="mb-4">Q: When will the Zeazn Invest App be available? </h1>
         <h1 
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="0"
         class="mb-4">A: We're launching soon! Sign up to be the first to know. </h1>
         <h1 
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
         class="mb-4">Q: How can I submit my project for crowdfunding? </h1>
         <h1 
                      data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
         class="mb-4">A: Click on "Learn More" under "Creators Wanted" to get started. </h1>
         <h1 
                      data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1000"
         class="mb-4">Q: Is there a cost to join Zeazn Invest? </h1>
         <h1 
                      data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1000"
         class="mb-4">
         A: Signing up and launching a project is completely free for Creators and Supporters.
         </h1>
        </div>        
        <div class="mt-16 md:mt-2 ml-[0px]">
          <img class="w-12 md:w-16 ml-[-32px]" src="../images/vector0.png" alt=""><br><br>
          <img class="w-10 md:w-12 ml-[-32px] md:ml-24" src="../images/Vector.png" alt="">
        </div>
    </div>
    <!-- END:: frequently ask question -->

    <h1
    data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="0"
    class="text-white text-center text-2xl sm:text-4xl md:pt-10 pb-3 md:pb-10 hover:text-slate-300">Ready to Ignite Innovation?</h1>
    <div 
    class="flex justify-center"
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-delay="500"
    >
      <img class="hover:border-2 md:w-[85%] md:h-[500px]" src="../images/head3.png" alt="">
    </div>
    <h1 id="contact"></h1>

    <!-- START::Contact us  -->
    <div class="text-white my-24 md:flex gap-10">
      <div class="border-2 rounded-tr rounded-bl rounded-[20%] border-[#EB8D41] border-dashed p-3 sm:p-10 mb-5">
        <h1 class="text-3xl sm:text-5xl text-center hover:text-slate-300">Connect With US</h1>
        <div class="text-start mt-5 sm:mt-10 space-y-5">
          <p class="flex gap-5"><img class="w-7" src="../images/email.png" alt=""> <span>zeaznltd@gmail.com</span> </p>
          <p class="flex gap-5"><img class="w-7" src="../images/phone2.png" alt=""> <span>+233 53 836 2526</span> </p>
          <p class="flex gap-5"><img class="w-7 h-9" src="../images/locator.png" alt=""> <span>36 Sandpiper Street, Community 20 (Lashibi), Accra, Ghana.</span> </p>
        </div>

        <div class="flex justify-center sm:justify-start gap-4   md:gap-5 mt-5">
          <a href="#"> <img class="w-4 h-4" src="../images/twitter.png" alt=""></a>
      <a href="#"> <img class="w-5 h-5" src="../images/linkedin.png" alt=""></a>
      <a href="#"> <img class="w-5 h-5" src="../images/facebook.png" alt=""></a>
      <a href="#"> <img class="w-5 h-5" src="../images/web.png" alt=""></a>
        </div>
      </div>
      <div class="justify-center sm:flex md:w-[75%]">
        <form @submit.prevent="submitEmail" class="text-white sm:w-[100%]">
          <input type="hidden" name="" value="">

    <div class="sm:flex gap-5">
      <div class="border-[#EB8D41] shadow shadow-[#EB8D41] border-2 rounded-2xl flex p-3 mb-3 sm:mb-10 pl-5 items-center w-[100%]">
        <label for="fullname">Name:</label>
        <input v-model="formData.fullname" class="bg-transparent focus:outline-none" type="text" id="fullname" required>
      </div>
      <div class="border-[#EB8D41] shadow shadow-[#EB8D41] border-2 rounded-2xl flex p-3 sm:p-5 md:p-3 mb-3 sm:mb-10 pl-5 items-center w-[100%]">
        <label for="company">Company:</label>
        <input v-model="formData.company" class="bg-transparent focus:outline-none w-[55%]" type="text" id="company" required>
      </div>
    </div>

    <div class="sm:flex gap-5">
      <div class="border-[#EB8D41] shadow shadow-[#EB8D41] border-2 rounded-2xl flex p-3 sm:p-5 md:p-3 mb-3 sm:mb-10 pl-5 items-center w-[100%]">
        <label for="phone">Phone:</label>
        <input v-model="formData.phone" class="bg-transparent focus:outline-none" type="text" id="phone" required>
      </div>
      <div class="border-[#EB8D41] shadow shadow-[#EB8D41] border-2 rounded-2xl flex p-2 mb-3 sm:mb-10 pl-5 items-center w-[100%]">
        <label for="email">Email:</label>
        <input v-model="formData.email" class="bg-transparent focus:outline-none w-[55%]" type="email" id="email" required>
      </div>
    </div>

    <div class="border-[#EB8D41] shadow shadow-[#EB8D41] border-2 rounded-2xl flex p-3 mb-5 sm:mb-10 pl-5 items-start w-[100%]">
      <label for="message">Message:</label>
      <textarea v-model="formData.message" id="message" cols="70" rows="3" class="bg-transparent focus:outline-none text-start" required></textarea>
    </div>

    <div class="text-center">
      <button class="bg-[#EB8D41] w-[100%] rounded-3xl p-2 md:p-1 sm:text-4xl md:text-xl px-12 hover:text-[#EB8D41] hover:underline transition-colors duration-1000 hover:bg-black hover:border-white border-2 border-[#EB8D41]" type="submit">Submit</button>
    </div>

    <p v-if="submissionStatus" class="text-center text-[#EB8D41]">{{ submissionStatus }}</p>
  </form>
       </div>
      
     </div>
    <!-- END::Contact us  -->

    <!-- START:: footer -->
     <div id="scan" class="text-white">
      <img class="md:w-[600px]"
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-delay="500"
      src="../images/logo2.png" alt="">
      <div class="mx-5 mb-3 md:mb-8 mt-3 bg-slate-800 p-[0.5px]"></div>

      <!-- THE SCAN SECTON -->
      <div class="sm:flex justify-between md:justify-around">
        <div class="">
          <div class="border border-dashed flex justify-around sm:justify-center p-2">
            <div class="bg-white w-16 h-16 mr-2">
              <img
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="1500"
              src="../images/qr.svg" alt="">
            </div>
            <div class="text-sm">
              <p> Scan to download App on the <br> Playstore and Appstore</p>
              <p class="flex items-center">
                <img class="w-8 h-8" src="../images/play.png" alt="">
                <img class="w-4 h-4" src="../images/apple.png" alt="">
              </p>
            </div>
          </div>
          <div class=""><img class="w-40 sm:mt-16" src="../images/logo5.png" alt=""></div>
        </div>
        <div class="flex flex-col items-center space-y-2 text-center md:items-start md:text-left">
        <h1 class="font-bold md:font-normal mt-5 hover:underline">Important Links</h1>
        <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#">Home</a>
        <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#about">About</a>
        <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#how">How it Works</a>
        <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#feature">Features</a>
        <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#">Pricing</a>
      </div>

        <div class="flex flex-col items-center space-y-1 text-center md:items-start md:text-left">
          <h1 class="font-bold md:font-normal mt-7 hover:underline">Legal</h1>
          <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#">Terms of Use</a><br>
          <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#">Privacy Policy</a><br>
          <a class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000" href="#contact">Contact Us</a>
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
import image11 from '../images/step (4).jpg'
import image13 from '../images/step (6).jpg'
import image14 from '../images/step (7).jpg'
import image16 from '../images/creators (1).jpg'
import image17 from '../images/creators (2).jpg'
import image18 from '../images/creators (3).jpg'
import image19 from '../images/creators (4).jpg'
import image20 from '../images/creators (5).jpg'
import image21 from '../images/creators (6).jpg'
import image22 from '../images/creators (7).jpg'
import image23 from '../images/creators (8).jpg'
import image24 from '../images/creators (9).jpg'
import image26 from '../images/creators (11).jpg'
import image27 from '../images/creators (12).jpg'
import image28 from '../images/feat.jpg'
import image30 from '../images/last (2).jpg'
import image32 from '../images/last (1).jpg'
import image33 from '../images/last (3).jpg'
import image34 from '../images/last (5).jpg'
export default {
  data() {
    return {
      hide: true,
      images: [image11, image13, image14, image16, image17, image18, image19,image20, image21, image22, image23, image24, image26, image27, image28, image30, image32, image33, image34],
      autoplayInterval: null, // To store the interval ID
      creator: "",
      currentHash: window.location.hash, // Get the initial hash
      formData: {
        fullname: '',
        company: '',
        phone: '',
        email: '',
        message: '',
        access_key: 'c4220f18-088b-421f-aaf8-315a761bf02e'
      },
      formData2: {
        MESSAGE: 'I want to be part of Zean Invest and receive latest updates',
        access_key: 'c4220f18-088b-421f-aaf8-315a761bf02e',
        FULLNAME: '',
        EMAIL: '',
      },
      submissionStatus: '',
      submissionStatus2: '',
    }
  },
  methods: {
    //
    async submitEmail() {
      console.log('submitted')
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });
        const resultJson = await response.json();
        this.submissionStatus =
          response.status === 200
            ? "Form submitted successfully"
            : resultJson.message;

        this.resetForm();
        
        // Reset form data after successful submission
      } catch (error) {
        console.log(error);
        this.$refs.result.innerHTML = "Something went wrong!";      }
    },
    resetForm() {
      this.formData = {
        fullname: '',
        company: '',
        phone: '',
        email: '',
        message: '',
      };
    },
    //
    async signMeup() {
      console.log('submitted')
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData2),
        });
        const resultJson = await response.json();
        this.submissionStatus2 =
          response.status === 200
            ? "Form submitted successfully"
            : resultJson.message;

        this.resetForm2();
        
        // Reset form data after successful submission
      } catch (error) {
        console.log(error);
        this.$refs.result.innerHTML = "Something went wrong!";      }
    },
    resetForm2() {
      this.formData2 = {
        name2: '',
        email2: '',
      };
    },
        // Check if the current hash matches the link's hash
        isActive(routeHash) {
      return this.currentHash === routeHash;
    },
    // Update the current hash when the hash changes
    updateHash() {
      this.currentHash = window.location.hash;
    },
    // show the creator
    learnMore(){
      this.creator = !this.creator;
    },
    toggleVisibility() {
      this.hide = !this.hide;  // Toggle the value of hide
    },
    startAutoplay() {
      // Manually advance the slides every 5 seconds
      this.autoplayInterval = setInterval(() => {
        this.$refs.carousel.next(); // Move to the next slide
      }, 5000); // 5000 ms = 5 seconds
    },
  },
  created() {
    // Add a listener for hash changes
    window.addEventListener('hashchange', this.updateHash);
  },
  beforeDestroy() {
    // Clean up the event listener when the component is destroyed
    window.removeEventListener('hashchange', this.updateHash);
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



<style>
  /* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>