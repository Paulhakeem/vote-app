<script setup>
import { ref } from 'vue';


const firstContentProgress = ref(0)
const secondContentProgress = ref(0)
const thirdContentProgress = ref(0)
const fourthContentProgress = ref(0)


// progress bar
const increaseFirstPercentage = () => {
      if (firstContentProgress.value <= 95) {
          firstContentProgress.value += 5
      }
    }


    const increaseSecondPercentage = () => {
      if (secondContentProgress.value <= 95) {
          secondContentProgress.value += 5
      }
    }

    const increaseThirdPercentage = () => {
      if (thirdContentProgress.value <= 95) {
          thirdContentProgress.value += 5
      }
    }
    const increaseFourthPercentage = () => {
      if (fourthContentProgress.value <= 95) {
          fourthContentProgress.value += 5
      }
    }


    // votes
  const firstVote = ref(0);
  const secondVote = ref(0);
  const thirdVote = ref(0);
  const fourthVote = ref(0);


  const firstTotalVotes = () => {
    firstVote.value++;
  };

  const secondTotalVotes = () => {
    secondVote.value++;
  };

  const thirdTotalVotes = () => {
    thirdVote.value++;
  };

  const fourthTotalVotes = () => {
    fourthVote.value++;
  }

  const SumTotal = [firstVote, secondVote, thirdVote, fourthVote]
 
  const addVotes = () => {
    let sum = 0
    for(const total in SumTotal ) {
      sum += total
    }
    return sum

  }
  const finalTotal = addVotes(SumTotal)

</script>


<template>
    <section
    class="flex flex-wrap my-6 justify-evenly ">
        <div class="vote pt-10">
         <button class="bg-blue-200 rounded-full w-24 h-6 pb-1 uppercase text-xs font-semibold p-1">
        Programming
        </button>
        <h1 class="text-3xl text-gray-800 font-bold pt-2">
            Which is your favourite programming language?
        </h1>
        <p 
        class="text-gray-400 text-xm pt-4 pb-6">Asked by 
        <span class="font-bold">Hakeem</span> 3 hours ago</p>


<!-- example -->

       <div @click="firstTotalVotes">
        <div @click="increaseFirstPercentage"
        class="shadow-md p-6 w-full mb-3 border-2 border-green-500 rounded-md cursor-pointer">
            <h3 class="pl-4 text-lg font-bold">JavaScript</h3>
            <div class="bar w-full bg-gray-200 rounded-full mt-2 ml-4">
             <div :style="{ width: firstContentProgress + '%' }"
              class="bg-green-500 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full">
             {{ firstContentProgress }}%
            </div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">{{ firstVote }} votes</p>
        </div>
       </div>

       

        <div @click="secondTotalVotes">
            <div @click="increaseSecondPercentage"
        class="shadow-md p-6 w-full mb-3 border-2 border-green-500 rounded-md cursor-pointer">
            <h3 class="pl-4 text-lg font-bold">Python</h3>
            <div class="bar w-full bg-gray-200 rounded-full mt-2 ml-4">
             <div :style="{ width: secondContentProgress + '%' }"
              class="bg-blue-500 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full">
             {{ secondContentProgress }}%
            </div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">{{ secondVote }} votes</p>
        </div>
        </div>
        
        
        <div @click="thirdTotalVotes">
            <div @click="increaseThirdPercentage"
        class="shadow-md p-6 w-full mb-3 border-2 border-green-500 rounded-md cursor-pointer">
            <h3 class="pl-4 text-lg font-bold">Java</h3>
            <div  class="bar w-full bg-gray-200 rounded-full mt-2 ml-4">
             <div :style="{ width: thirdContentProgress + '%' }"
              class="bg-orange-500 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full">
             {{ thirdContentProgress }}%
            </div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">{{ thirdVote }} votes</p>
        </div>
        </div>
        
        
        <div @click="fourthTotalVotes">
         <div @click="increaseFourthPercentage"
        class="shadow-md p-6 w-full mb-3 border-2 border-green-500 rounded-md cursor-pointer">
            <h3 class="pl-4 text-lg font-bold">PHP</h3>
            <div class="bar w-full bg-gray-200 rounded-full mt-2 ml-4">
             <div :style="{ width: fourthContentProgress + '%' }"
              class="bg-purple-500 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full">
             {{ fourthContentProgress }}%
            </div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">{{ fourthVote }} votes</p>
        </div>
        </div>
        

        </div>
        

        <div class="my-12">
            <button
            class="bg-green-500 p-2 rounded-md text-white uppercase w-56">
                submit your vote
            </button>

            <div class="shadow-md mt-6 p-6">
                <p class="text-gray-400 text-xm">Total Votes</p>
                <p class="text-xl font-black">{{ finalTotal }}</p>
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

