<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const router = useRouter()
const provider = new GoogleAuthProvider()

const formDetails = ref({
    email: '',
    password: ''
})

const login = () => {
    signInWithEmailAndPassword(getAuth(), formDetails.value.email, formDetails.value.password)
     .then(() => {
        router.push({
        path: '/createpoll'
    })
    formDetails = ref({
      email: '',
      password: ''
    })
     .catch(err => {
      alert(err.message)
    })
     })
}


const googleLogin = () => {
    signInWithPopup(getAuth(), provider)
    .then(() => {
        router.push({
            path: '/createpoll'
        })
        .catch(err => {
            alert(err.message)
        })
    })
}
</script>

<template>
    <div class="login justify-center text-center mt-12 max-w-md m-auto shadow-md pb-6">
        <div class="pt-8 border-b-2 border-b-blue-600 mb-10">
         <h3 class="text-3xl tracking-wider font-semibold text-gray-700">Login to your account</h3>
          <p class="text-green-600 text-xm pb-3">and have access to your own poll or 
            <RouterLink to="/signin">
                <span class="text-blue-600 font-semibold">Sign up</span>
            </RouterLink>
            
        </p>
        </div>

        <form @click="login"
        class="pt-12 space-y-6 inline mb-6">
            <div>
            <label for="" class="text-lg font-medium mr-4 text-gray-900">Email:</label>
            <input v-model="formDetails.email"
            type="text" placeholder="youremail@gmail.com" 
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-80 p-2.5 focus:outline-none">
            </div>
            
            <div>
            <label for="" class="text-lg font-medium mr-4 text-gray-900">Password:</label>
            <input v-model="formDetails.password"
            type="password" placeholder="youremail@gmail.com" 
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-72 p-2.5 focus:outline-none">
            </div>
           
               <div class="ml-4 mr-4">
                <button class="bg-blue-600 p-2 w-full rounded-md uppercase tracking-wider text-white">login</button>
               </div>
            <div class="flex text-center justify-center shrink-0">
                <div class="border-b-2 border-b-gray-500 w-52"></div>
                <p>Or</p>
                <div class="border-b-2 border-b-gray-500 w-52"></div>
            </div>
            <div class="justify-center items-center text-center ml-4 mr-4">
            <div @click="googleLogin"
            class="rounded-full w-full bg-gray-200 p-1 flex space-x-20 cursor-pointer">
                <img src="../assets/google.svg" alt="" class="w-10">
                <p class="text-md font-semibold text-gray-600 pt-2">Continue With Google</p>
            </div>
            </div>
            
        </form>
    </div>
</template>