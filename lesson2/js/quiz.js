let score = 0;

const quizForm = document.getElementById('quiz-form');
const questionElement = document.getElementById('question');
const answerAElement = document.getElementById('answer-a');
const answerBElement = document.getElementById('answer-b');
const answerCElement = document.getElementById('answer-c');
const answerDElement = document.getElementById('answer-d');
const resultsElement = document.getElementById('results');

let currentQuestion = null;
let questionIndex = 0;


const myQuestions = [
    {
        question: "What is the data type of 'hello world' in JavaScript?",
        answers: {
            a: "String",
            b: "Number",
            c: "Boolean",
            d: "Undefined"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the data type of true in JavaScript?",
        answers: {
            a: "String",
            b: "Number",
            c: "Boolean",
            d: "Undefined"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the data type of null in JavaScript?",
        answers: {
            a: "String",
            b: "Number",
            c: "Boolean",
            d: "Object"
        },
        correctAnswer: "d"
    }
];


function updateScore() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }
}

function showQuestion() {
    currentQuestion = myQuestions[questionIndex];
    questionElement.innerText = currentQuestion.question;
    answerAElement.innerText = currentQuestion.answers.a;
    answerBElement.innerText = currentQuestion.answers.b;
    answerCElement.innerText = currentQuestion.answers.c;
    answerDElement.innerText = currentQuestion.answers.d;
}

function submitHandler(event) {
    event.preventDefault();
    updateScore();
    questionIndex++;
    if (questionIndex < myQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}


function showResults() {
    const scorePercentage = Math.round(score / myQuestions.length * 100);
    resultsElement.innerText = `You scored ${scorePercentage}%`;
}


quizForm.addEventListener('submit', submitHandler);

showQuestion();
