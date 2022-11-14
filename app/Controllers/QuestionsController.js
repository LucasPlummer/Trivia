import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuestions() {
    let questions = appState.questions
    let template = ''
    questions.forEach(q => template += q.questionTemplate)
    setHTML('questions', template)
}

export class QuestionsController {
    constructor() {
        console.log('questions controller loaded');
        this.getQuestions()
        appState.on('questions', _drawQuestions)
    }

    async getQuestions() {
        console.log('getting questions');
        await questionsService.getQuestions()
        console.log('got questions!');
    }
}