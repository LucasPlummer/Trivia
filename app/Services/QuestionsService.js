import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";


class QuestionsService {

    async getQuestions() {
        const response = await axios.get('https://opentdb.com/api.php?amount=10&category=15&difficulty=hard&type=multiple')
        console.log('question data', response.data);
        appState.questions = response.data.results.map(questionData => new Question(questionData))
    }
}



export const questionsService = new QuestionsService()