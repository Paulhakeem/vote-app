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
  
 
//  total of all votes
  

    return {
        firstVote, 
        secondVote, 
        thirdVote, 
        fourthVote, 
        firstTotalVotes,
         secondTotalVotes, 
         thirdTotalVotes, 
         fourthTotalVotes,
        }
})