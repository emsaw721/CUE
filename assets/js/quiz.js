//1. First page is introduction with click start quiz button . 
//2. Timer starts and presented with a question.
//   a. Answer question from list of answers. 
//3. Presented with another question. 
//   a. If question is answered incorrectly, time is subracted from the clock. 
//4. All questions answered or timer reaches 0, game is over. 
//   a. Can save initials and score. 


var questionContentEl = document.getElementById("question-content")

var myScore = document.querySelector(".time-head-quiz");
var secondsRemain = 15;



// questions

var question = document.querySelector("question-number");
var option1 = document.getElementById("button1");
var option2 = document.getElementById("button2");
var option3 = document.getElementById("button3");



var questionBank = [

    {
        question: "What does the acronym API mean?",
        option1: "1. Absolute Panic Internally", 
        option2: "2. Apple Pie Increment", 
        option3: "3. Application Programming Interface",
        answer: "3. Application Programming Interface"
    },

    {
        question: "How do you comment out on JavaScript?",
        option1: "1. *", 
        option2: "2. //", 
        option3: "3. #",
        answer: "2. //"
    },

    {
        question: "How do you indicate a language in HTML?",
        option1: "1. eng", 
        option2: "2. lang=eng", 
        option3: "3. lang='eng'",
        answer: "3. lang='eng'"
    },

    {
        question: "Why 4?",
        option1: "1. Absolute Panic Internally", 
        option2: "2. Apple Pie Increment", 
        option3: "3. Application Programming Interface", 
        answer: "3. Application Programming Interface"
    },


    {
        question: "Why 5?",
        option1: "1. Absolute Panic Internally", 
        option2: "2. Apple Pie Increment", 
        option3: "3. Application Programming Interface",
        answer: "3. Application Programming Interface"
    },

]

var questionsList = Math.floor(Math.random() * questionBank.length)
var currentQuestion = questionBank[questionsList]
// question.innerText = currentQuestion.question



function quizQuestion() {
    var questionText = document.querySelector("#questions");

    questionText.textContent = currentQuestion.question;

    for (i = 0; i < currentQuestion.question.length; i++) {
        var questionText = currentQuestion.question[i]
        //use this to dynamically create buttons or text content

    }

    document.addEventListener("DOMContentLoaded", function() {
    var optionOneEl = document.createElement("button");
    optionOneEl.className = "btn"; 
    optionOneEl.textContent= currentQuestion.option1; 

   var container = document.getElementById("container"); 
    container.appendChild(optionOneEl);

    var optionTwoEl = document.createElement("button");
    optionTwoEl.className = "btn"; 
    optionTwoEl.textContent = currentQuestion.option2; 

   var container = document.getElementById("container"); 
    container.appendChild(optionTwoEl);

    var optionThreeEl = document.createElement("button");
    optionThreeEl.className = "btn"; 
    optionThreeEl.textContent = currentQuestion.option3

   var container = document.getElementById("container"); 
    container.appendChild(optionThreeEl);

    }, false); 

} 



// iterate through choices 
//for each button, dynamically create text content 





// var optionsButtonHandler = function (event) {
//     var target = event.target;

//     if (target.matches(".btn")) {
//         quizQuestion()
//     }

// }


// function quizGame() {


//     if (option1 === true) {
//         window.alert("Correct!")
//         secondsRemain = secondsRemain + 5;
//     }
//     else if (option1 === false) {
//         window.alert("Incorrect!")
//         secondsRemain = secondsRemain - 5;

//     }

//     if (option2 === true) {
//         window.alert("Correct!")
//         secondsRemain = secondsRemain + 5;
//     }
//     else if (option2 === false) {
//         window.alert("Incorrect!")
//         secondsRemain = secondsRemain - 5;
//     }

//     if (option3 === true) {
//         window.alert("Correct!")
//         secondsRemain = secondsRemain + 5;
//     }
//     else if (option3 === false) {
//         window.alert("incorrect!")
//         secondsRemain = secondsRemain - 5;
//     }







// }





quizQuestion();



// questionContentEl.addEventListener("click", optionsButtonHandler) 