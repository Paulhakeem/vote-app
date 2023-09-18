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

  <div class="createpoll pt-12 justify-center text-center">
    <div class="heading items-center m-auto text-center justify-center">
      <h3
        class="text-center text-3xl font-semibold text-[#0FCB18] tracking-wider"
      >
        Welcome to our voting app
      </h3>
      <p class="text-center text-gray-600 text-md pt-2">
        Let's comparet and help you build your own voting app to share with your
        friends.
      </p>
    </div>

    <div 
      class="question flex flex-wrap space-x-6 mt-12 justify-center gap-4 text-center"
    >
      <div
        class="border-2 border-gray-600 rounded-md p-8 w-80 justify-center space-y-8"
      >
        <p class="text-gray-600 text-xl text-center">Your name</p>
        <p
          class="border-b-2 border-gray-600 outline-none focus:outline-none w-56 text-2xl font-semibold text-[#1a1716]">
        {{ name }}
        </p>
     
      </div>

      <div
        class="border-2 border-gray-600 rounded-md p-4 w-80 justify-center space-y-8"
      >
        <p class="text-gray-600 text-xl text-center">What is your question</p>
        <textarea
          type="text"
          class="border-b-2 border-gray-600 outline-none focus:outline-none w-72"
        ></textarea>
      </div>
    </div>

    <div
      class="flex flex-wrap space-x-6 gap-4 text-center justify-center pt-14"
    >
      <div class="border-2 border-gray-600 rounded-md p-4 w-80 space-y-8">
        <p class="text-gray-600 text-xl text-center">
          <font-awesome-icon :icon="['fas', '1']" class="text-[#0FCB18]" />:
          Answer
        </p>
        <input
          type="text"
          class="border-b-2 border-gray-600 outline-none focus:outline-none w-72"
        />
      </div>

      <div class="border-2 border-gray-600 rounded-md p-4 w-80 space-y-8">
        <p class="text-gray-600 text-xl text-center">
          <font-awesome-icon :icon="['fas', '2']" class="text-[#0FCB18]" />:
          Answer
        </p>
        <input
          type="text"
          class="border-b-2 border-gray-600 outline-none focus:outline-none w-72"
        />
      </div>
    </div>

    <div class="flex flex-wrap space-x-6 gap-4 justify-center pt-14">
      <div class="border-2 border-gray-600 rounded-md p-4 w-80 space-y-8">
        <p class="text-gray-600 text-xl text-center">
          <font-awesome-icon :icon="['fas', '3']" class="text-[#0FCB18]" />:
          Answer
        </p>
        <input
          type="text"
          class="border-b-2 border-gray-600 outline-none focus:outline-none w-72"
        />
      </div>

      <div class="border-2 border-gray-600 rounded-md p-4 w-80 space-y-8">
        <p class="text-gray-600 text-xl text-center">
          <font-awesome-icon :icon="['fas', '4']" class="text-[#0FCB18]" />:
          Answer
        </p>
        <input
          type="text"
          class="border-b-2 border-gray-600 outline-none focus:outline-none w-72"
        />
      </div>
    </div>

    <div class="text-center justify-center mt-10 mb-10">
      <button class="bg-[#0FCB18] w-56 rounded-md p-2 uppercase text-white">
        Create your poll
      </button>
    </div>
  </div>
</template>
