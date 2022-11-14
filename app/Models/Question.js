

export class Question {
    constructor(data) {
        this.category = data.category
        this.type = data.type
        this.difficulty = data.difficulty
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.incorrect_answers = data.incorrect_answers
    }

    get questionTemplate() {
        return ` 
        <form>      
        <div class="row card m-2 justify-content-center d-flex align-items-center">
        <div class="col-12 text-center">
          <h1>${this.question}</h1>
        </div>
        <button class="btn btn-primary col-3 m-2 p-4">${this.correct_answer}</button>
        <button class="btn btn-primary col-3 m-2 p-4">${this.incorrect_answers[0]}</button>
        <button class="btn btn-primary col-3 m-2 p-4">${this.incorrect_answers[1]}</button>
        <button class="btn btn-primary col-3 m-2 p-4">${this.incorrect_answers[2]}</button>
      </div>
      </form>`
    }
}
