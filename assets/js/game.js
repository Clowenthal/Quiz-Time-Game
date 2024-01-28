// Quiz Question and timer DOM variables
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

//DOM Variables
var questionsEl = document.getElementById ("questions");
var timerEl = document.getElementById ("time");
var choicesEl = document.getElementById ("choices");
var submitBtn = document.getElementById ("submit");
var startBtn = document.getElementById ("start");
var initialsEl = document.getElementById ("initials");
var alertEl = document.getElementById ("alert");
// calling the start quiz function
// calling the timer element and grabing the questions
function startQuiz() {
var frontPageEl = document.getElementById("front-page");
    frontPageEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;

    getQuestion();
}
// current array of questions and update to the next question.
// event listener to choices 
function getQuestion() {
var currentQuestion = questions[currentQuestionIndex];
var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;


    choicesEl.innerHTML = "";


    currentQuestion.choices.forEach(function(choice, i) {

var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
        choiceNode.textContent = i + 1 + ". " + choice;


    choiceNode.onclick = questionClick;


    choicesEl.appendChild(choiceNode);
});
}
// calling on the question on click to check if the answer clicked is wrong or write with code to doc 
// time reduced to wrong answers
function questionClick() {
if (this.value !== questions[currentQuestionIndex].answer) {

    time -= 10;
if (time < 0) {
    time = 0;
}

	timerEl.textContent = time;
	alertEl.textContent = "Wrong. Sorry!";
} else {
    alertEl.textContent = "Correct. Good Job!";
}
 
    alertEl.setAttribute("class", "feedback");
    setTimeout(function() {
        alertEl.setAttribute("class", "feedback hide");
}, 800);

currentQuestionIndex++;

//Ending the quiz when questions are all answered and stopping the timer to complete the quiz
// final score will reveal the current number left to be submitted to the highscores
if (currentQuestionIndex === questions.length) {
    quizEnd();
    } else {
    getQuestion();
    }
}

function quizEnd() {
	clearInterval(timerId);
var endScreenEl = document.getElementById("closing-page");
    endScreenEl.removeAttribute("class");
var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;
    questionsEl.setAttribute("class", "hide");
}

function clockTick() {
    time--;
    timerEl.textContent = time;
if (time <= 0) {
    quizEnd();
 }
}

function saveHighscore() {
var initials = initialsEl.value.trim();
if (initials !== "") {
    var highscores = 
    JSON.parse(window.localStorage.getItem("highscores")) || [];
var newScore = {
    score: time,
    initials: initials
};
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

// After initials are submitted you're directed to the highscores page
    window.location.href = "QuizHighScore.html";
 }
}

function checkForEnter(event) {

// "13" re[resents the enter key
if (event.key === "Enter") {
    saveHighscore();
 }
}

// submitting initials
submitBtn.onclick = saveHighscore;

// start button is click to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;