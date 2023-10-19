import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useTotalVotes = defineStore('total', () => {

    const firstVote = ref(0)
    const secondVote = ref(0)
    const thirdVote = ref(0)
    const fourthVote = ref(0)

  
   const firstTotalVotes = () => {
      firstVote.value ++
   }

   const secondTotalVotes = () => {
    secondVote.value ++
 }

 const thirdTotalVotes = () => {
    thirdVote.value ++
 }

 const fourthTotalVotes = () => {
    fourthVote.value ++
 }
  
const finalTotal = ref( firstTotalVotes())

//  total of all votes
    const totalVotes = () => {
    console.log(finalTotal);
    }
   

    return {
        firstVote, 
        secondVote, 
        thirdVote, 
        fourthVote, 
        firstTotalVotes,
         secondTotalVotes, 
         thirdTotalVotes, 
         fourthTotalVotes,
         totalVotes,
         finalTotal
        }
})