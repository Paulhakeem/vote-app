import { defineStore } from "pinia";
import { ref } from "vue";
// import { db } from "../firebase.js";
// import { collection, addDoc, onSnapshot } from "firebase/firestore";

export const useTotalVotes = defineStore("total", () => {
  const firstVote = ref(0);
  const secondVote = ref(0);
  const thirdVote = ref(0);
  const fourthVote = ref(0);

  let today = new Date();

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
  };

  //  total of all votes
  const finalTotal = (
    firstTotalVotes,
    secondTotalVotes,
    thirdTotalVotes,
    fourthTotalVotes
  ) => {
    return (
      firstTotalVotes + secondTotalVotes + thirdTotalVotes + fourthTotalVotes
    )
   console.log(firstTotalVotes + secondTotalVotes + thirdTotalVotes + fourthTotalVotes);
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
    finalTotal,
    today,
  };
});
