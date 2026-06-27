const quizData = [
  {
    question:
      "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: "const",
  },
  {
    question: "Which method is used to print output in the browser console?",
    options: ["print()", "console.log()", "document.write()", "alert()"],
    answer: "console.log()",
  },
  {
    question: "What is the output of typeof 10?",
    options: ["number", "integer", "float", "string"],
    answer: "number",
  },
  {
    question: "Which operator is used for strict equality?",
    options: ["=", "==", "===", "!="],
    answer: "===",
  },
  {
    question: "Which loop executes at least once?",
    options: ["for", "while", "do...while", "foreach"],
    answer: "do...while",
  },
  {
    question: "Which array method adds an element to the end of an array?",
    options: ["shift()", "push()", "pop()", "unshift()"],
    answer: "push()",
  },
  {
    question: "What is the output of x++ if x = 5?",
    options: ["4", "5", "6", "7"],
    answer: "6",
  },
  {
    question: "Which function converts a JSON string into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()",
    ],
    answer: "JSON.parse()",
  },
  {
    question: "Which keyword is used to define a function?",
    options: ["method", "function", "define", "func"],
    answer: "function",
  },
  {
    question: 'What is the output of 2 + "2"?',
    options: ["4", "22", "NaN", "Error"],
    answer: "22",
  },
];

const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("startBtn");

const quizScreen = document.getElementById("quiz-screen");
const questionText = document.getElementById("question-text");
const currentQuestion = document.getElementById("current-question");
const score = document.getElementById("score");
const options = document.querySelectorAll(".option");
const progress = document.getElementById("progress");

const resultScreen = document.getElementById("result-screen");
const finalScore = document.getElementById("final-score");
const maxScore = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartBtn = document.getElementById("restartBtn");

let currentIndex = 0;
let totalScore = 0;

quizScreen.style.display = "none";
resultScreen.style.display = "none";

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  quizScreen.style.display = "flex";

  loadQuestion();
});

function loadQuestion() {
  const currentQuiz = quizData[currentIndex];

  questionText.textContent = currentQuiz.question;

  currentQuestion.textContent = currentIndex + 1;

  score.textContent = totalScore;

  options.forEach((btn, index) => {
    btn.textContent = currentQuiz.options[index];

    btn.style.backgroundColor = "";
    btn.disabled = false;

    btn.onclick = () => checkAnswer(btn);
  });

  progress.style.width = `${((currentIndex + 1) / quizData.length) * 100}%`;
}

function checkAnswer(button) {
  const selected = button.textContent;
  const correct = quizData[currentIndex].answer;

  if (selected === correct) {
    totalScore++;
    button.style.backgroundColor = "lightgreen";
  } else {
    button.style.backgroundColor = "#ff9999";

    options.forEach((btn) => {
      if (btn.textContent === correct) {
        btn.style.backgroundColor = "lightgreen";
      }
    });
  }

  options.forEach((btn) => {
    btn.disabled = true;
  });

  setTimeout(() => {
    currentIndex++;

    if (currentIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  quizScreen.style.display = "none";
  resultScreen.style.display = "block";

  finalScore.textContent = totalScore;
  maxScore.textContent = quizData.length;

  if (totalScore === 10) {
    resultMessage.textContent = "Excellent!";
  } else if (totalScore >= 7) {
    resultMessage.textContent = "Good Job!";
  } else if (totalScore >= 5) {
    resultMessage.textContent = "Nice Try!";
  } else {
    resultMessage.textContent = "Keep Practicing!";
  }
}

restartBtn.addEventListener("click", () => {
  currentIndex = 0;
  totalScore = 0;

  resultScreen.style.display = "none";
  startScreen.style.display = "flex";

  progress.style.width = "0%";
});
