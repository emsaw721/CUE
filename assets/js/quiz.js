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
function setTime() {
    var timerInterval = setInterval(function () {
        myScore.textContent = "Time: " + secondsRemain;


        if (secondsRemain === 0) {
            clearInterval(timerInterval);
            myScore.textContent = "Your score is: " + secondsRemain;
        }
    }
    )
}

// questions

var question = document.querySelector("question-number");
var options = document.getElementById("button");


var questionsList = Math.floor(Math.random() * questionBank.length)
var currentQuestion = questionBank[questionsList]
question.innterText = currentQuestion.question




var questionBank = [
  
    {
        question: "What does the acronym API mean?",
        options: ["1. Absolute Panic Internally","2. Apple Pie Increment","3. Application Programming Interface"],
        answer: "3. Application Programming Interface"
    },

    {
        question: "Why is this happening to me?",
        options: ["1. Absolute Panic Internally","2. Apple Pie Increment","3. Application Programming Interface"],
        answer: "3. Application Programming Interface"
    },

    {
        question: "What is love?",
        options: ["1. Absolute Panic Internally","2. Apple Pie Increment","3. Application Programming Interface"],
        answer: "3. Application Programming Interface"
    },

    {
        question: "Why 4?",
        options: ["1. Absolute Panic Internally","2. Apple Pie Increment","3. Application Programming Interface"],
        answer: "3. Application Programming Interface"
    },


    {
        question: "Why 5?",
        options: ["1. Absolute Panic Internally","2. Apple Pie Increment","3. Application Programming Interface"],
        answer: "3. Application Programming Interface"
    },

]



function quizQuestion() {
   var questionText = document.querySelector("#questions");

    questionText.textContent = currentQuestion.question; 

    for(i=0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.options[i]//use this to dynamically create buttons or text content
        var optionEl = document.createElement("option")
        optionEl.className = "data-number";
        optionEl.setAttribute("option", choice)
        optionEl.appendChild(optionEl)
    }

    function addTextContent {
        var element = document.createElement("text");
        element.setAttribute("text", options)
    }

    var getButtonText = addTextContent
    // iterate through choices 
    //for each button, dynamically create text content 
 
}
var optionsButtonHandler = function(event) {
    var target = event.target; 

    if (target.matches(".btn")) {
        quizGame() 
    }

}


function quizGame() {


    if (option1 === true) {
        window.alert("Correct!")
        secondsRemain = secondsRemain + 5;
    }
    else if (option1 === false) {
        window.alert("Incorrect!")
        secondsRemain = secondsRemain - 5;

    }

    if (option2 === true) {
        window.alert("Correct!")
        secondsRemain = secondsRemain + 5;
    }
    else if (option2 === false) {
        window.alert("Incorrect!")
        secondsRemain = secondsRemain - 5;
    }

    if (option3 === true) {
        window.alert("Correct!")
        secondsRemain = secondsRemain + 5; 
    }
    else if (option3 === false) {
        window.alert("incorrect!")
        secondsRemain = secondsRemain - 5;
    }





   

}





quizQuestion(); 


questionContentEl.addEventListener("click", optionsButtonHandler);
