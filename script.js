const startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startQuiz)

const questionContainerElement = document.getElementById('question-container')

let shuffledQuestions, currentQuestionIndex

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
//start quiz


function startQuiz(){
    console.log('started')
    startButton.classList.add('hide')
    //shuffles questions 
    shuffledQuestions =questions.sort(()=>Math.random()-.5)
    currentQuestionIndex= 0
    questionContainerElement.classList.remove(hide)
    setNextQuestion()
}
//what happens when you click on the next button 
function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question){
questionElement.innerText= question.question


}


//select answer
function selectAnswer(){


}

const questions= [
    {question:"What is CSS?",
    answers:[
        {text: 'Cascading Style Sheets', correct:true},
        {text: 'Catsmaking Stylish Shoes',  correct:false }]
    }]