

var currentScore = 0;
var secondsRemaining = 10;
var timeEl = document.querySelector("#time");

var questions = [
    {
        question: "first question",
        answers: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4"
        ]
    },

    {
        question: "second question",
        answers: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4"
        ]
    }
]
console.log(questions[0].question);

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsRemaining --;
      timeEl.textContent = "Seconds Left: " + secondsRemaining;
      if(secondsRemaining === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
}

// help--not working??
var startButton = document.getElementById("start");
startButton.addEventListener("click", setTime());


function showAQuestion(){
    // Figure out which item to get from the array whenever this function is called
    // button1.textContent=questions[0]
    var currentQuestionObj = questions[i]
    var section = document.createElement("section");
    var questionH2 = document.createElement("h2");
    var answerList = document.createElement("ul");
}

// When the user clicks start, what needs to happen?
    // Timer starts
    // Display a question
        // showQuestion()
    
// console.log(questions[0]);



for(var i = 0; i < questions.length; i ++){
    var curQuestionsObj = questions[i]
    var section = document.createElement("section");
    // create an h2 tag, give it the text of the question 
    // create a ul tag
    // for each answer, create a li tag 

    // add all this stuff to the DOM
}

/* 
<section>
            <h2>Question 1: </h2>
            <ul>
                <li>Answer 1</li>
                <li>Answer 2</li>
                <li>Answer 3</li>
                <li>Answer 4</li>
            </ul>
        </section> 
*/

// event listeners
    // clicking the start button 
    // when they choose the answer 

    // creates all of the page elements 
    var currentQuestionObj = questions[i]
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

    button1.textContent=questions[0].question;


    questionH2.textContent="this is question 1"
    console.log(questionH2);
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

// button1.textContent = "dfgdfgdfgdf";
button1.setAttribute("style", "margin:10px");
button2.textContent = "dfgdfgdfgdf";
button2.setAttribute("style", "margin:10px");
button3.textContent = "dfgdfgdfgdf";
button3.setAttribute("style", "margin:10px");
button4.textContent = "dfgdfgdfgdf";
button4.setAttribute("style", "margin:10px");