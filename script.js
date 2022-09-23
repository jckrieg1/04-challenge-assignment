
// Global Variables:
var currentScore = 0;
var secondsRemaining = 3;
var currentQuestionNum = 0;
var timeEl = document.querySelector("#time");
var questionIndex = 0;
var section = document.createElement("section");
var questionH2 = document.createElement("h2");
var answerList = document.createElement("ul");
var answer1 = document.createElement("li");
var answer2 = document.createElement("li");
var answer3 = document.createElement("li");
var answer4 = document.createElement("li");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");
var form = document.createElement("form");
var gameOver = document.createElement("h1");
// var intialsForm = document.createElement("input");
// var inputTitle = document.createElement("h2");



// Setting style attributes for the answer buttons:
button1.setAttribute("style", "margin:10px");
button2.setAttribute("style", "margin:10px");
button3.setAttribute("style", "margin:10px");
button4.setAttribute("style", "margin:10px");
// inputTitle.textContent = "Enter your initials here:"
// intialsForm.setAttribute("submit", "submit");
gameOver.textContent = "GAME OVER!";






// Array containing question objects:
var questions = [
    {
        question: "What type of data can be stored in an array?",
        answers: [
            "Strings",
            "Objects",
            "Numbers",
            "All of the above"
        ],
        correct: "All of the above"
        
    },

    {
        question: "Name an array method.",
        answers: [
            "flatten",
            "push",
            "highlight",
            "getElementById"
        ],
        correct: "push"
    },
    {
        question: "What is my cat's name?",
        answers: [
            "Princess",
            "Asia",
            "Molly",
            "Chyna"
        ],
        correct: "Chyna"
        
    },
    {
        question: "What is the capitol of Minnesota?",
        answers: [
            "Minneapolis",
            "St. Paul",
            "Rochester",
            "Duluth"
        ],
        correct: "St. Paul"
        
    },
    {
        question: "Which coffee roast has the most caffeine?",
        answers: [
            "Light Roast",
            "Medium Roast",
            "Dark Roast",
            "They all have about the same"
        ],
        correct: "Light Roast"
        
    },
    {
        question: "What is a baby kangaroo called?",
        answers: [
            "Freddy",
            "Danny",
            "Joey",
            "Suzie"
        ],
        correct: "Joey"
        
    },
    {
        question: "Who is Kourtney Kardahsian currently dating?",
        answers: [
            "Pete Davidson",
            "Kanye West",
            "Travis Scott",
            "Travis Barker"
        ],
        correct: "Travis Barker"
        
    },
    {
        question: "What is Paris Hilton's missing chihuhua's name? :(",
        answers: [
            "Tinkerbell",
            "Diamond Baby",
            "Gucci",
            "Dutchess"
        ],
        correct: "Diamond Baby"
        
    },
    {
        question: "How many eggs in a dozen?",
        answers: [
            "12",
            "24",
            "36",
            "1200"
        ],
        correct: "12"
        
    },
    {
        question: "Who is a reptillian?",
        answers: [
            "Queen Elizabeth",
            "Mark Zuckerberg",
            "Justin Bieber",
            "All of the above"
        ],
        correct: "All of the above"
        
    },
]




// Timer function: 
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timeEl.textContent = "Seconds Left: " + secondsRemaining;
      secondsRemaining --;
      if(secondsRemaining === -1) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        section.remove();
        document.body.appendChild(gameOver);
        // document.body.appendChild(form);
        // form.appendChild(inputTitle);
        // form.appendChild(intialsForm); 
      }
  
    }, 1000);
}

// Start button; starts the timer and shows the first question:
var startButton = document.querySelector("#start");
startButton.addEventListener("click", function() {
    setTime();
    showAQuestion(currentQuestionNum);
});



function showAQuestion(i){
 // Sets the question and answer text.
    var currentQuestionObj = questions[i]
    questionH2.textContent = currentQuestionObj.question;
    button1.textContent = currentQuestionObj.answers[0];
    button2.textContent = currentQuestionObj.answers[1];
    button3.textContent = currentQuestionObj.answers[2];
    button4.textContent = currentQuestionObj.answers[3];
// Puts questions and answers on the page.
    document.body.appendChild(section); 
    section.appendChild(questionH2);
    section.appendChild(answerList);
    answer1.appendChild(button1);
    answer2.appendChild(button2);
    answer3.appendChild(button3);
    answer4.appendChild(button4);
    answerList.appendChild(answer1);
    answerList.appendChild(answer2);
    answerList.appendChild(answer3);
    answerList.appendChild(answer4);
}

// Button 1 Response:
button1.addEventListener("click", function() {
    var selectedAnswer = questions[currentQuestionNum].answers[0];
    var correctAnswer = questions[currentQuestionNum].correct;
    if(selectedAnswer === correctAnswer) {
        alert("You are correct!");
        currentScore ++;
    }
    else {
        alert("You are incorrect :(");
        secondsRemaining = secondsRemaining -5;
    }
    currentQuestionNum ++;
    section.remove();
    showAQuestion(currentQuestionNum);
    var score = document.querySelector("#score");
    score.textContent = currentScore;
    console.log(currentScore);
    }
)

// Button 2 Response:
button2.addEventListener("click", function() {
    var selectedAnswer = questions[currentQuestionNum].answers[1];
    var correctAnswer = questions[currentQuestionNum].correct;
    if(selectedAnswer === correctAnswer) {
        alert("You are correct!");
        currentScore ++;
    }
    else {
        alert("You are incorrect :(");
        secondsRemaining = secondsRemaining -5;
    }
    currentQuestionNum ++;
    section.remove();
    showAQuestion(currentQuestionNum);
    var score = document.querySelector("#score");
    score.textContent = currentScore;
    console.log(currentScore);
    }
)

// Button 3 Response:
button3.addEventListener("click", function() {
    var selectedAnswer = questions[currentQuestionNum].answers[2];
    var correctAnswer = questions[currentQuestionNum].correct;
    if(selectedAnswer === correctAnswer) {
        alert("You are correct!");
        currentScore ++;
    }
    else {
        alert("You are incorrect :(");
        secondsRemaining = secondsRemaining -5;
    }
    currentQuestionNum ++;
    section.remove();
    showAQuestion(currentQuestionNum);
    var score = document.querySelector("#score");
    score.textContent = currentScore;
    console.log(currentScore);
    }
)

// Button 4 Response:
button4.addEventListener("click", function() {
    var selectedAnswer = questions[currentQuestionNum].answers[3];
    var correctAnswer = questions[currentQuestionNum].correct;
    if(selectedAnswer === correctAnswer) {
        currentScore ++;
        alert("You are correct!");
    }
    else {
        alert("You are incorrect :(");
        secondsRemaining = secondsRemaining -5;
    }
    currentQuestionNum ++;
    section.remove();
    showAQuestion(currentQuestionNum);
    var score = document.querySelector("#score");
    score.textContent = currentScore;
    console.log(currentScore);
    }
);

// localStorage.setItem('currentScore');
// var localScore = localStorage.getItem('currentScore');
