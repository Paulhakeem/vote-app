import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRouter} from 'vue-router'
 import {db} from '../firebase.js'
 import { collection, addDoc, onSnapshot } from "firebase/firestore"

const router = useRouter()

export const useVoteStore = defineStore('votes', () => {
    const question = ref('')
    const firstAnswer = ref('')
    const secondAnswer = ref('')
    const thirdAnswer = ref('')
    const fourthAnswer = ref('')

    const newQuestion = ref([])

    const createQuestion = () => {
        addDoc(collection(db, "vDetails"), {
        question: question.value,
        firstAnswer: firstAnswer.value,
        secondAnswer: secondAnswer.value,
        thirdAnswer: thirdAnswer.value,
        fourthAnswer: fourthAnswer.value,
    })
       question.value = ''
       firstAnswer.value = ''
       secondAnswer.value = ''
       thirdAnswer.value = ''
       fourthAnswer.value = ''
    }



    onMounted(() => {
      try {
        onSnapshot(collection(db, "vDetails"), (querySnapshot) => {
            const getVotes = [];
            querySnapshot.forEach((doc) => {
                const fetchVotes = {
                    id: doc.id,
                    question: doc.data().question,
                    firstAnswer: doc.data().firstAnswer,
                    secondAnswer: doc.data().secondAnswer,
                    thirdAnswer: doc.data().thirdAnswer,
                    fourthAnswer: doc.data().fourthAnswer,
                }
                getVotes.push(fetchVotes)
            })
            newQuestion.value = getVotes
          })
      }
        catch (err) {

        }
    })

    return { question, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, createQuestion, newQuestion}
})