<script setup>
import { ref } from 'vue';
import { useVoteStore } from '../store/vote'
import {useTotalVotes} from '../store/totalVotes'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const vote = useVoteStore()
const total = useTotalVotes()


toast("Your vote is succesfull created your vote poll!", {
  autoClosed: 1000,
});

   
</script>
<template>
    <section 
    v-for="quiz in vote.newQuestion"
    class="flex flex-wrap my-6 justify-evenly ">
        <div class="vote pt-10">
         <button class="bg-blue-200 rounded-full w-24 h-6 pb-1 uppercase text-xs font-semibold p-1">
        web design
        </button>
        <h1 class="text-3xl text-gray-800 font-bold pt-2">
            {{ quiz.question }}
        </h1>
        <p 
        class="text-gray-400 text-xm pt-4 pb-6">Asked by 
        <span class="font-bold">Hakeem</span> 3 hours ago</p>


        <div @click="total.firstTotalVotes"
            class="shadow-md p-4 w-full mb-3 cursor-pointer rounded-md">
            <h3 class="pl-4 text-lg font-bold">{{ quiz.firstAnswer }}</h3>
            <div class="bar w-96 bg-gray-200 rounded-full mt-2 ml-4">
             <div
             class="bg-orange-600 @click.self:w-100 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full w-28">%</div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">{{ total.firstVote }} votes</p>
        </div>

        <div @click="total.secondTotalVotes"
        class="shadow-md p-4 w-full mb-3 border-2 border-green-500 rounded-md cursor-pointer">
            <h3 class="pl-4 text-lg font-bold">{{ quiz.secondAnswer }}</h3>
            <div class="bar w-96 bg-gray-200 rounded-full mt-2 ml-4">
             <div
              class="bg-green-500 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full w-52">%</div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">{{ total.secondVote }} votes</p>
        </div>

        <div @click="total.thirdTotalVotes"
        class="shadow-md p-4 w-full mb-3 cursor-pointer rounded-md">
            <h3 class="pl-4 text-lg font-bold">{{ quiz.thirdAnswer }}</h3>
            <div class="bar w-96 bg-gray-200 rounded-full mt-2 ml-4">
             <div 
             class="bg-orange-300 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full w-12">%</div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">{{ total.thirdVote }} votes</p>
        </div>

        <div @click="total.fourthTotalVotes"
        class="shadow-md p-4 w-full mb-3 cursor-pointer rounded-md border-2 border-blue-600">
            <h3 class="pl-4 text-lg font-bold">{{ quiz.fourthAnswer }}</h3>
            <div class=" bar w-96 bg-gray-200 rounded-full mt-2 ml-4">
             <div
              class="bg-blue-600 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full w-40"> %</div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">{{ total.fourthVote }} votes</p>
        </div>

        </div>
        

        <div class="my-12">
            <button 
            @click="total.totalVotes"
            class="bg-green-500 p-2 rounded-md text-white uppercase w-56">
                submit your vote
            </button>

            <div class="shadow-md mt-6 p-6">
                <p class="text-gray-400 text-xm">Total Votes</p>
                <p class="text-xl font-black">{{ total.total}}</p>
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