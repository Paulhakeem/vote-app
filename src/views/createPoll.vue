<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const photoURL = ref(null)
const name = ref(null)

const voteDetails = ref({
 question: '',
 answeOne: '',
 answerTwo: '',
 answerThree: '',
 answerFour: '',
})

const createpoll = () => {
  if(!question.value && answeOne.value && answerTwo.value && answerThree.value && answerFour.value == ''){
   console.log('sucesseful')
  }
  else{
    console.log('erro')
  }
}



const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    photoURL.value = user.photoURL;
    name.value = user.displayName;
  } else {
    photoURL.value = null;
    name.value = null;
  }
});
</script>
<template>
  <header
    class="header text-center flex items-center justify-between p-3 shadow-md"
  >
    <h1 class="text-xl font-semibold">
      <font-awesome-icon :icon="['fas', 'cat']" class="text-[#0FCB18]" />Paul
      <span class="text-[#0FCB18]">Poll</span>
    </h1>

    <button class="bg-[#0FCB18] p-2 rounded-md text-white">
      Create Poll
      <font-awesome-icon :icon="['fas', 'plus']" class="text-white" />
    </button>

    <div class="flex items-center justify-evenly space-x-3">
      <button class="text-red-300">Public Poll</button>
      <div class=" flex gap-4 border-l border-gray-300 px-3">
        <p class="pt-4">{{ name }}</p>
        <img :src="photoURL" alt="" 
        class="w-14 h-14 rounded-full" />
      </div>
    </div>
  </header>

  

  <!-- create your vote -->
  <div class="image flex flex-wrap pt-12  items-center justify-between mx-14 space-y-6">
    <div class="items-center justify-center w-1/3">
      <RouterLink to="/">
        <button class="bg-green-500 p-2 rounded-md text-white font-medium tracking-wide">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
          Go Back</button> 
      </RouterLink>
      <img src="../assets/vote.jpg" alt="" class="ml-8 w-full">
  </div> 
    
    <div class="">
      <h3
        class="text-3xl font-bold text-[#0FCB18] tracking-wider"
      >
      Welcome <br>back, {{ name }}!
      </h3>
      <p class="text-gray-500 text-md pt-2">
        Fill the form in order to create your own voting app and share <br> with your friends and family
      </p>

      <form class="my-10">
  <div class="relative z-0 w-full mb-6 group">
      <input type="text" name="floating_email" id="floating_text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your question</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
      <input type="text" name="floating_password" id="floating_text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Answer</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
      <input type="text" name="repeat_password" id="floating_repeat_text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Second Answer</label>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-6 group">
        <input type="text" name="floating_first_name" id="floating_text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Third Answer</label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input type="text" name="floating_last_name" id="floating_text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fouth Answer</label>
    </div>
  </div>
  
  <button type="submit" class="text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-600">Create Poll</button>
</form>
    </div>
    
   
  </div>
</template>
