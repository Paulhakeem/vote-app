<script setup>
import Body from '../components/Body.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="flex items-center justify-between p-3 shadow-md">
    <h1 class="text-xl font-semibold">
      <font-awesome-icon :icon="['fas', 'cat']" class="text-[#0FCB18]"/>Fast 
      <span class="text-[#0FCB18]">Poll</span>
    </h1>
      <RouterLink to="/login">
      <button class="bg-[#0FCB18] p-2 rounded-md text-white">
      Create Poll
      <font-awesome-icon :icon="['fas', 'plus']" class="text-white"/>
    </button>
      
      </RouterLink>
    
    <div class="flex items-center justify-evenly space-x-3 text-center">
      <div class="space-x-2 px-3">

        <RouterLink to="/login">
          <button class="text-gray-700">login</button>
        </RouterLink>
      
        <RouterLink to="/signin">
          <button class="bg-blue-600 text-white p-2 rounded-md">Signup</button>
        </RouterLink>
      
 
      </div>
    </div>
  </header>

  <main>
  <Body/>
  </main>

</template>
