console.log("hello, lets make a quiz")
const startBtn = document.getElementById("startBtn");
const quizArea = document.getElementById("quizArea");
const questionEl = document.getElementById("question");
const answerDiv = document.getElementById("answers");
const scoreEl = document.getElementById("score");
let userScore = 0
let currentQuestionIndex = 0;
const questions = [
    {
        question: "test Q 1",
        potentialAnswers: ["a", "b", "c", "d", "e"],
        correctAnswer: "c"
    },
    {
        question: "test Q 2",
        potentialAnswers: ["a", "b", "c", "d", "e"],
        correctAnswer: "c"
    },
    {
        question: "test Q 3",
        potentialAnswers: ["a", "b", "c", "d", "e"],
        correctAnswer: "c"
    },
    {
        question: "test Q 4",
        potentialAnswers: ["a", "b", "c", "d", "e"],
        correctAnswer: "c"
    },
    {
        question: "test Q 5",
        potentialAnswers: ["a", "b", "c", "d", "e"],
        correctAnswer: "c"
    },
    {
        question: "test Q 6",
        potentialAnswers: ["a", "b", "c", "d", "e"],
        correctAnswer: "c"
    }
];

const getQuestion = () => {
    scoreEl.textContent=userScore
    quizArea.setAttribute("style", "visibility:visible")
    questionEl.textContent = questions[currentQuestionIndex].question
    for (let i = 0; i < questions[currentQuestionIndex].potentialAnswers.length; i++) {
        let btn = document.createElement("button")
        btn.setAttribute("value", questions[currentQuestionIndex].potentialAnswers[i]);
        btn.textContent = questions[currentQuestionIndex].potentialAnswers[i];
        answerDiv.append(btn)
        btn.addEventListener("click", (e) => {
            console.log(e.target.value)
            if (e.target.value === questions[currentQuestionIndex].correctAnswer) {
                console.log("correct")
                userScore++
                scoreEl.textContent = userScore;
                currentQuestionIndex++
                
                getQuestion();
            } else {
                console.log("incorrect")
                userScore--
                currentQuestionIndex++
                
                getQuestion();
            }
        })

    }
}

startBtn.addEventListener("click", () => {
    getQuestion()
})