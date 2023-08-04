<script setup>
import Body from '../components/Body.vue'
</script>

<template>
    <header class="flex itmes-center justify-between p-3 shadow-lg">
    <h1 class="text-xl font-semibold">
      <font-awesome-icon :icon="['fas', 'cat']" />Fast 
      <span class="text-[#0FCB18]">Poll</span>
    </h1>
     
    <button class="bg-[#0FCB18] p-2 rounded-md text-white">
      Create Poll
      <font-awesome-icon :icon="['fas', 'plus']" class="text-white"/>
    </button>
      
    <div class="flex items-center justify-evenly space-x-3">
      <button class="text-red-300">Public Poll</button>
      <div class="space-x-2 border-l border-gray-300 px-3">
        
      <button class="text-gray-700">login</button>
      <button class="bg-blue-600 text-white p-2 rounded-md">Signup</button>
 
      </div>
    </div>
  </header>

  <main>
  <Body/>
  </main>

</template>
