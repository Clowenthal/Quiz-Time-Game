// Variable Identifiers
var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.word-index'));
var text = document.querySelector('#showQuestion');
var scoreCal = document.querySelector('#score');
var barStack = document.querySelector('#barStack');

// declare a variable that is block scoped in JavaScript
let currentQuestions = {}
let answers = true
let score = 0
let questionCount = 0
let questionAvail = []

// Identifying the multipule choice questions being called from the HTML class and id
let questions = [
    {
        Question: 'What is HTML?',
	    choice1: 'Hypertext Markup Language',
	    choice2: 'HyperLink Markup Language',
	    choice3: 'Css Syle Sheet',
	    choice4: 'Hovering To Modify Language',
Answer: 1,
    },
    {
        Question: 'What is CSS?',
	    choice1: 'Hypertext Markup Language',
	    choice2: 'Language that we use to syle a Web page',
	    choice3: 'Used to interact with users on web',
	    choice4: 'Link to print images',
Answer: 2,
    },
    {
        Question: 'What is JavaScript?',
	    choice1: 'Syles a web page',
	    choice2: 'Creates short cut to HTML',
	    choice3: 'Use to create interactive effects within web browsers',
	    choice4: 'Creates a PDF',
Answer: 3,
    },
	{
        Question: 'How popular was JQuery in 2023',
	    choice1: '20.57%',
	    choice2: '17.46%',
	    choice3: '19.28%',
	    choice4: '16.67%',
Answer: 3,
    },
];

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
	questionCount = 0
	score = 0
	questionAvail = [...questions]
	getNewQuestions('')
};

getNewQuestions = () => {
	if(questionAvail.length === 0 || questionCount > MAX_QUESTIONS) {
		localStorage.setItem('mostRecentScore', score)
		return window.location.assign('/end.html')
	}
	questionCount++
	choices.innerText = `question ${questionCount} ${MAX_QUESTIONS}`
	barStack.style.width = `${(questionCount/MAX_QUESTIONS) * 100}%`
	const questionIndex = Math.floor(Math.random() * questionAvail.length)
	currentQuestions = questionAvail[questionIndex]
	questions.innerText = currentQuestions.questions
	choices.forEach(choices => {
		const number = choices.dataset['number']
		choices.innerText = question['choices' + number]
	})
	questionAvail.splice(questionIndex, 1)
	answers = true
};

choices.forEach(choices => {
	choices.addEventListener('click', e => {
		if(!answers) return
		answers = false
		const choiceSelect = e.target
		const answerSelect = choiceSelect.dataset['number']
		let classToApply = answerSelect == currentQuestions.answer ? 'correct' : 'incorrect'

		if(classToApply === 'correct') {
			incrementScore(SCORE_POINTS)
		}
		choiceSelect.parentElement.classList.add(classToApply)
		setTimeout(() => {
			choiceSelect.parentElement.classList.remove(classToApply)
			getNewQuestions()
		}, 1000)
	})
});

incrementScore = number => {
	score += number
	scoreCal.innerText = score
};

startGame();