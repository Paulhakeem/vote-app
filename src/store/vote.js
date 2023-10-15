import { defineStore } from 'pinia'
import { ref } from 'vue'
import {RouterLink, useRouter} from 'vue-router'
// import {db} from '../firebase.js'

const router = useRouter()

export const useVoteStore = defineStore('votes', () => {
    const question = ref('')
    const firstAnswer = ref('')
    const secondAnswer = ref('')
    const thirdAnswer = ref('')
    const fourthAnswer = ref('')

    const newQuestion = ref([])

    const createQuestion = () => {
       newQuestion.value.push({
        id: Math.floor(Math.random() * 1000),
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


    return { question, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, createQuestion, newQuestion}
})