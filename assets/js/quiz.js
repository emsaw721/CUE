//1. First page is introduction with click start quiz button . 
//2. Timer starts and presented with a question.
//   a. Answer question from list of answers. 
//3. Presented with another question. 
//   a. If question is answered incorrectly, time is subracted from the clock. 
//4. All questions answered or timer reaches 0, game is over. 
//   a. Can save initials and score. 



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
var option1 = document.getElementById("button-one");
var option2 = document.getElementById("button-two");
var option3 = document.getElementById("button-three");

var questionsList = Math.floor(Math.random() * questionBank.length)
var currentQuestion = questionBank[questionsList]
question.innterText = currentQuestion.question

//function setQuizText() {
    //question.textContent = questionBank;
//}


var questionBank = [
  
    ,{
        question: "What does the acronym API mean?",
        option1: "1. Absolute Panic Internally",
        option2: "2. Apple Pie Increment",
        option3: "3. Application Programming Interface",
        answer: "3. Application Programming Interface"
    }

    , {
        question: "",
        option1: "1.",
        option2: "2.",
        option3: "3.",
        answer: ""
    }

    , {
        question: "",
        option1: "1.",
        option2: "2.",
        option3: "3.",
        answer: ""
    }

    , {
        question: "",
        option1: "1.",
        option2: "2.",
        option3: "3.",
        answer: ""
    }

    , {
        question: "",
        option1: "1.",
        option2: "2.",
        option3: "3.",
        answer: ""
    }

]



//function quizQuestion() {
    //var question = JSON.parse(questionBank)
   //var questionText = document.querySelector("#questions");

    //questionText.value = question; 

//}

function quizGame() {


    if (option1 === true) {
        window.alert("Correct!")
    }
    else if (option1 === false) {
        window.alert("Incorrect!")
        secondsRemain = secondsRemain - 5;

    }

    if (option2 === true) {
        window.alert("Correct!")
    }
    else if (option2 === false) {
        window.alert("Incorrect!")
        secondsRemain = secondsRemain - 5;
    }

    if (option3 === true) {
        window.alert("Correct!")
    }
    else if (option3 === false) {
        window.alert("incorrect!")
        secondsRemain = secondsRemain - 5;
    }



    options.forEach(option => {
        var number = option.dataset["number"]
        option.innerText = currentQuestion["option" + number]
    }
    )


    JSON.parse(questionBank);

}

options.forEach(option => {
    option.addEventListener("click")
    if ("click" === false) {
        var selectedOption = EventTarget
        var selectedAnswer = selectedOption.dataset["number"]
        incrementTime(setTime() - 5)

    }

    if ("click" === true) {
        var selectedOption = EventTarget
        var selectedAnswer = selectedOption.dataset["number"]
        incrementTime(setTime() + 5)

    }

    setTimeout(() => {
        quizGame() 
    })


}
)

