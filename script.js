const questionElement = document.getElementById('question');
const answerChoicesElement = document.getElementById('answer-choices');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

const questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: 1
    },
    {
        question: "What is the capital of England?",
        choices: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of Spain?",
        choices: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: 3
    },
    {
        question: "What is the capital of Germany?",
        choices: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: 2
    },
    {
        question: "What is the capital of Sierra Leone?",
        choices: ["London", "Freetown", "Berlin", "Kigali"],
        correctAnswer: 1
    },
    {
        question: "What is the capital of Rwanda?",
        choices: ["London", "Freetown", "Berlin", "Kigali"],
        correctAnswer: 3
    },

    {
        question: "What is the capital of Belgium?",
        choices: ["London", "Freetown", "Brussels", "Kigali"],
        correctAnswer: 2
    },
    {
        question: "What is the capital of Mali?",
        choices: ["London", "Bamako", "Bomoko", "Kigali"],
        correctAnswer: 1
    },
    {
        question: "What is the capital of Mauritania?",
        choices: ["London", "Antannnarivo", "Antwerp", "Mauritius"],
        correctAnswer: 1
    },
];



let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    answerChoicesElement.innerHTML = "";
    currentQuestion.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => {
            checkAnswer(index);
        });
        answerChoicesElement.appendChild(li);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    if (score === questions.length) {
      resultElement.textContent = "Congratulations! You got all the answers correct! Hope say u no cheat o?";
    } else {
      resultElement.textContent = `You scored ${score} out of ${questions.length}`;
    }
  }

displayQuestion();

submitButton.addEventListener('click', () => {
    checkAnswer();
});