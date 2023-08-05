<script setup>
import { ref } from 'vue';


    const percentage = ref(0);
    const votes = ref(0);
    const progress = ref(0);

    const percentage1 = ref(0);
    const votes1 = ref(0);
    const progress1 = ref(0);

    const percentage2 = ref(0);
    const votes2 = ref(0);
    const progress2 = ref(0);

    const percentage3 = ref(0);
    const votes3 = ref(0);
    const progress3 = ref(0);

    const increment = () => {
      percentage.value += 5
      votes.value += 1
      progress.value += 10
    }

    const increment1 = () => {
      percentage1.value += 5
      votes1.value += 1
      progress1.value += 10
    }

    const increment2 = () => {
      percentage2.value += 5
      votes2.value += 1
      progress2.value += 10
    }

    const increment3 = () => {
      percentage3.value += 5
      votes3.value += 1
      progress3.value += 10
    }


</script>
<template>
    <section class=" flex flex-wrap my-6 justify-evenly ">
        <div class="vote pt-10">
         <button class="bg-blue-200 rounded-full w-24 h-6 pb-1 uppercase text-xs font-semibold p-1">
        web design
        </button>
        <h1 class="text-3xl text-gray-800 font-bold pt-2">
            What design tool do you use the <br> most?
        </h1>
        <p 
        class="text-gray-400 text-xm pt-4 pb-6">Asked by 
        <span class="font-bold">Paul</span> 3 hours ago</p>


        <div @click="increment"
            class="shadow-md p-4 w-full mb-3 cursor-pointer rounded-md">
            <h3 class="pl-4 text-lg font-bold">Photoshop</h3>
            <div class="bar w-96 bg-gray-200 rounded-full mt-2 ml-4">
             <div :value="progress" :max="100"
             class="bg-orange-600 @click.self:w-100 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full w-28">{{ percentage }}%</div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">{{ votes }} votes</p>
        </div>

        <div @click="increment1"
        class="shadow-md p-4 w-full mb-3 border-2 border-green-500 rounded-md cursor-pointer">
            <h3 class="pl-4 text-lg font-bold">Sketch</h3>
            <div class="bar w-96 bg-gray-200 rounded-full mt-2 ml-4">
             <div :value="progress1" :max="100"
              class="bg-green-500 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full w-52">{{ percentage1 }}%</div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">{{ votes1 }} votes</p>
        </div>

        <div @click="increment2"
        class="shadow-md p-4 w-full mb-3 cursor-pointer rounded-md">
            <h3 class="pl-4 text-lg font-bold">Adobe XD</h3>
            <div class="bar w-96 bg-gray-200 rounded-full mt-2 ml-4">
             <div :value="progress2" :max="100"
             class="bg-orange-300 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full w-12"> {{ percentage2 }}%</div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">{{ votes2 }} votes</p>
        </div>

        <div @click="increment3"
        class="shadow-md p-4 w-full mb-3 cursor-pointer rounded-md border-2 border-blue-600">
            <h3 class="pl-4 text-lg font-bold">Figma</h3>
            <div class=" bar w-96 bg-gray-200 rounded-full mt-2 ml-4">
             <div :value="progress3" :max="100"
              class="bg-blue-600 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full w-40">{{ percentage3 }} %</div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">{{ votes3 }} votes</p>
        </div>

        </div>
        

        <div class="mt-44">
            <button class="bg-green-500 p-2 rounded-md text-white uppercase w-56">
                submit your vote
            </button>

            <div class="shadow-md mt-6 p-6">
                <p class="text-gray-400 text-xm">Total Votes</p>
                <p class="text-xl font-black">117</p>
            </div>


            <div class="shadow-md mt-6 p-6 h-40">
                <p class="text-gray-400 text-xm">Share</p>
                <div class="pt-2 flex gap-2 cursor-pointer">
                    <font-awesome-icon :icon="['fab', 'x-twitter']" class="text-blue-600"/>
                    <p class="text-blue-500 text-sm font-bold">Twitter</p>
                </div>
                <div class="pt-2 flex gap-2 cursor-pointer">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-blue-900"/>
                    <p class="text-blue-900 text-sm font-bold">Facebook</p>
                </div >
                <div class="pt-2 flex gap-2 cursor-pointer">
                    <font-awesome-icon :icon="['fas', 'link']" class="text-red-600"/>
                    <p class="text-red-600 text-sm font-semibold tracking-wider">Copy Link</p>
                </div>
            </div>
            <button class="border-2 border-gray-300 p-2 mt-4 float-right text-gray-400 cursor-pointer">
                Report Abuse
            </button>
        </div>
  </section>
</template>