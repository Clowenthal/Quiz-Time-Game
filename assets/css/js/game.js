var question = document.querySelector('#question');
var choices = document.querySelector('.word-text');
var text = document.querySelector('#text');
var scoreCal = document.querySelector('#score');
var preogress = document.querySelector('#bar-stack');

let currentQuestions = {}
let answers = true
let score = 0
let questionCount = 0
let questionAvail = []

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
        Questions: 'What is JavaScript?',
	    choice1: 'Syles a web page',
	    choice2: 'Creates short cut to HTML',
	    choice3: 'Use to create interactive effects within web browsers',
	    choice4: 'Creates a PDF',
Answer: 3,
    },
]