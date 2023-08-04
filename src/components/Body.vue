<script setup></script>
<template>
    <section class=" flex flex-wrap my-6 justify-evenly">
        <div class="pt-10">
         <button class="bg-blue-200 rounded-full w-24 h-6 pb-1 uppercase text-xs font-semibold p-1">
        web design
        </button>
        <h1 class="text-3xl text-gray-800 font-bold pt-2">
            What design tool do you use the <br> most?
        </h1>
        <p 
        class="text-gray-400 text-xm pt-4 pb-6">Asked by 
        <span class="font-bold">Paul</span> 3 hours ago</p>


        <div class="shadow-md p-4 w-full mb-3 cursor-pointer rounded-md">
            <h3 class="pl-4 text-lg font-bold">Photoshop</h3>
            <div class="w-96 bg-gray-200 rounded-full mt-2 ml-4">
             <div class="bg-orange-600 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full w-28"> 8%</div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">8 votes</p>
        </div>

        <div class="shadow-md p-4 w-full mb-3 border-2 border-green-500 rounded-md ml-4 cursor-pointer">
            <h3 class="pl-4 text-lg font-bold">Sketch</h3>
            <div class="w-96 bg-gray-200 rounded-full mt-2 ml-4">
             <div class="bg-green-500 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full w-52">52%</div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">85 votes</p>
        </div>

        <div class="shadow-md p-4 w-full mb-3 cursor-pointer rounded-md">
            <h3 class="pl-4 text-lg font-bold">Adobe XD</h3>
            <div class="w-96 bg-gray-200 rounded-full mt-2 ml-4">
             <div class="bg-orange-300 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full w-12"> 4%</div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">4 votes</p>
        </div>

        <div class="shadow-md p-4 w-full mb-3 cursor-pointer rounded-md ml-4 border-2 border-blue-600">
            <h3 class="pl-4 text-lg font-bold">Figma</h3>
            <div class="w-96 bg-gray-200 rounded-full mt-2 ml-4">
             <div class="bg-blue-600 text-xs font-medium
             text-blue-100 text-center leading-none rounded-full w-40"> 36%</div>
             </div>
              <p class="pt-2 text-xs text-gray-400 pl-4">58 votes</p>
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
                <div class="pt-2 flex">
                    <p class="text-blue-500 text-sm font-bold">Twitter</p>
                </div>
                <div class="pt-2 flex">
                    <p class="text-blue-900 text-sm font-bold">Facebook</p>
                </div >
                <div class="pt-2 flex">
                    <p class="text-red-600 text-sm font-semibold tracking-wider">Copy Link</p>
                </div>
            </div>
            <button class="border-2 border-gray-300 p-2 mt-4 float-right text-gray-400">
                Report Abuse
            </button>
        </div>
  </section>
</template>