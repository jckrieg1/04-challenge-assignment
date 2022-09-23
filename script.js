
// Global Variables:
var currentScore = 0;
var secondsRemaining = 30;
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
var intialsForm = document.createElement("input");
var inputTitle = document.createElement("h2");
var formButton = document.createElement("button");



// Setting style attributes for the answer buttons:
button1.setAttribute("style", "margin:10px");
button2.setAttribute("style", "margin:10px");
button3.setAttribute("style", "margin:10px");
button4.setAttribute("style", "margin:10px");
inputTitle.textContent = "Enter your initials here:"
intialsForm.setAttribute("type", "submit");
gameOver.textContent = "GAME OVER!";
formButton.textContent = "Submit";





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

function displayForm() {
    document.body.appendChild(gameOver);
    document.body.appendChild(form);
    form.appendChild(inputTitle);
    form.appendChild(intialsForm);
    form.appendChild(formButton);
}


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
// Puts questions and answers on the page.
    var currentQuestion = questions[currentQuestionNum];
    questionH2.textContent = currentQuestion.question;
    document.body.appendChild(section); 
    section.appendChild(questionH2);
    section.appendChild(answerList);
    var currentQuestion = questions[currentQuestionNum];
for(i=0; i<currentQuestion.answers.length; i++) {
    var button = document.createElement("button")
    button.textContent = currentQuestion.answers[i]
    var listEl = document.createElement("li")
    listEl.appendChild(button)
    answerList.appendChild(listEl)
}
answerList.addEventListener("click", function(event) {
    var selectedAnswer = event.target.textContent 
    var correctAnswer = currentQuestion.correct
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

    if(currentQuestionNum<questions.length) {
        showAQuestion(currentQuestionNum);
    }
    else {
        displayForm()
    };
    var score = document.querySelector("#score");
    score.textContent = currentScore;
    console.log(currentScore);
}) 
}



// Button 1 Response:
// button1.addEventListener("click", function() {
//     var selectedAnswer = questions[currentQuestionNum].answers[0];
//     var correctAnswer = questions[currentQuestionNum].correct;
//     if(selectedAnswer === correctAnswer) {
//         alert("You are correct!");
//         currentScore ++;
//     }
//     else {
//         alert("You are incorrect :(");
//         secondsRemaining = secondsRemaining -5;
//     }
//     currentQuestionNum ++;
//     section.remove();
//     showAQuestion(currentQuestionNum);
//     var score = document.querySelector("#score");
//     score.textContent = currentScore;
//     console.log(currentScore);
//     }
// )

// // Button 2 Response:
// button2.addEventListener("click", function() {
//     var selectedAnswer = questions[currentQuestionNum].answers[1];
//     var correctAnswer = questions[currentQuestionNum].correct;
//     if(selectedAnswer === correctAnswer) {
//         alert("You are correct!");
//         currentScore ++;
//     }
//     else {
//         alert("You are incorrect :(");
//         secondsRemaining = secondsRemaining -5;
//     }
//     currentQuestionNum ++;
//     section.remove();
//     showAQuestion(currentQuestionNum);
//     var score = document.querySelector("#score");
//     score.textContent = currentScore;
//     console.log(currentScore);
//     }
// )

// // Button 3 Response:
// button3.addEventListener("click", function() {
//     var selectedAnswer = questions[currentQuestionNum].answers[2];
//     var correctAnswer = questions[currentQuestionNum].correct;
//     if(selectedAnswer === correctAnswer) {
//         alert("You are correct!");
//         currentScore ++;
//     }
//     else {
//         alert("You are incorrect :(");
//         secondsRemaining = secondsRemaining -5;
//     }
//     currentQuestionNum ++;
//     section.remove();
//     showAQuestion(currentQuestionNum);
//     var score = document.querySelector("#score");
//     score.textContent = currentScore;
//     console.log(currentScore);
//     }
// )

// // Button 4 Response:
// var currentQuestion = questions[currentQuestionNum];
// for(i=0; i<currentQuestion.answers; i++) {
//     var button = document.createElement("button")
//     button.textContent = currentQuestion.answers[i]

// }
// button.addEventListener("click", function() {
//     var selectedAnswer = questions[currentQuestionNum].answers[i];
//     var correctAnswer = questions[currentQuestionNum].correct;
//     if(selectedAnswer === correctAnswer) {
//         currentScore ++;
//         alert("You are correct!");
//     }
//     else {
//         alert("You are incorrect :(");
//         secondsRemaining = secondsRemaining -5;
//     }
//     currentQuestionNum ++;
//     section.remove();

//     if(currentQuestionNum<questions.length) {
//         showAQuestion(currentQuestionNum);
//     }
//     else {
//         displayForm()
//     };
//     var score = document.querySelector("#score");
//     score.textContent = currentScore;
//     console.log(currentScore);
//     }
// );

// localStorage.setItem('currentScore');
// var localScore = localStorage.getItem('currentScore');
