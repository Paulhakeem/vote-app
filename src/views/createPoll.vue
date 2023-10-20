<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useVoteStore } from "../store/vote";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const vote = useVoteStore();

const photoURL = ref(null);
const name = ref(null);

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

toast("Login succesfull!", {
  autoClosed: 1000,
});
</script>
<template>
  <header
    class="header text-center flex items-center justify-between p-3 shadow-md top-0 sticky"
  >
    <h1 class="text-xl font-semibold">
      <font-awesome-icon :icon="['fas', 'cat']" class="text-[#0FCB18]" />Paul
      <span class="text-[#0FCB18]">Poll</span>
    </h1>

    <button class="mx-4">
      <font-awesome-icon
        :icon="['fas', 'check-to-slot']"
        class="text-[#0FCB18] fa-1x"
      />
      <font-awesome-icon
        :icon="['fas', 'plus']"
        class="text-[#0FCB18] text-3xl"
      />
    </button>

    <div class="flex items-center justify-evenly space-x-3">
      <div class="flex gap-4 px-3">
        <p class="my-3 text-gray-500">{{ name }}</p>
        <img :src="photoURL" alt="" class="w-12 h-12 rounded-full" />
      </div>
    </div>
  </header>

  <RouterLink to="/" class="mx-4">
    <button
      class="text-green-500 shadow-lg p-2 rounded-md font-medium tracking-wide my-4 fixed"
    >
      <font-awesome-icon :icon="['fas', 'arrow-left']" />
      Go Back
    </button>
  </RouterLink>

  <!-- create your vote -->
  <div
    class="image flex flex-wrap pt-2 items-center justify-around mx-8 space-y-6 select-none"
  >
    <div class="items-center justify-center w-1/3">
      <img src="../assets/vote.jpg" alt="" class="ml-8 w-full" />
    </div>

    <div class="">
      <RouterLink to="/view">
        <button
          class="float-right p-2 text-green-500 shadow-lg focus:ring-4 focus:outline-none font-medium rounded-lg text-sm sm:w-auto text-center dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-600"
        >
          View Poll
          <font-awesome-icon :icon="['fas', 'forward']" />
        </button>
      </RouterLink>

      <h3 class="profile text-3xl font-bold text-[#0FCB18] tracking-wider">
        Welcome <br />back, {{ name }}!
      </h3>
      <p class="text-gray-500 text-md pt-2">
        Fill the form in order to create your own voting app and share <br />
        with your friends and family
      </p>

      <form @submit.prevent="vote.createQuestion" class="my-10">
        <div class="mb-6 flex gap-4">
          <label for="type" class="text-gray-500 text-lg pt-2">Type:</label>
          <input
            v-model="vote.type"
            type="text"
            class="outline-none w-48 border-none rounded-full shadow-md p-1 pl-3 caret-green-500 text-gray-900"
            placeholder="Type of question"
          />
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model="vote.question"
            type="text"
            name="floating_email"
            id="floating_text"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Your question</label
          >
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model="vote.firstAnswer"
            type="text"
            name="floating_password"
            id="floating_text"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >First Answer</label
          >
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model="vote.secondAnswer"
            type="text"
            name="repeat_password"
            id="floating_repeat_text"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_repeat_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Second Answer</label
          >
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="vote.thirdAnswer"
              type="text"
              name="floating_first_name"
              id="floating_text"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Third Answer</label
            >
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="vote.fourthAnswer"
              type="text"
              name="floating_last_name"
              id="floating_text"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-green-500 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Fouth Answer</label
            >
          </div>
        </div>
        <div class="flex gap-4">
          <button
            @click="vote.createQuestion"
            type="submit"
            class="text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-600"
          >
            Create Poll
          </button>

          <button
            v-if="vote.newQuestion.length < 0"
            @click="vote.createQuestion"
            type="submit"
            class="text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-600"
          >
            <font-awesome-icon :icon="['fas', 'circle-check']" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
