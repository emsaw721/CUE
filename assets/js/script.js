//1. First page is introduction with click start quiz button . 
//2. Timer starts and presented with a question.
//   a. Answer question from list of answers. 
//3. Presented with another question. 
//   a. If question is answered incorrectly, time is subracted from the clock. 
//4. All questions answered or timer reaches 0, game is over. 
//   a. Can save initials and score. 



var generateBtn = document.querySelector("#generate");
var question = document.getElementById("questions"); 
var option1 = document.getElementById("button-one");
var option2 = document.getElementById("button-two");
var option3 = document.getElementById("button-three"); 


var questionBank = [
    {
        question: "What does the acronym API mean?",
        option: ["1. Absolute Panic Internally", "2. Apple Pie Increment", "3. Application Programming Interface"],
        answer: "3. Application Programming Interface"
    }

    , {
        question: "",
        option: ["1.", "2.", "3."],
        answer: ""
    }

    , {
        question: "",
        option: ["1.", "2.", "3."],
        answer: ""
    }

    , {
        question: "",
        option: ["1.", "2.", "3."],
        answer: ""
    }

    , {
        question: "",
        option: ["1.", "2.", "3."],
        answer: ""
    }
   

   
]


var time = document.getElementById("time");
var myScore = document.querySelector(".time-head");

var secondsRemain = 20;
function setTime() {
    var timerInterval = setInterval(function() {
        time,textContent = "Time: " + secondsRemain; 


        if(secondsRemain === 0) {
            clearInterval(timerInterval);
            myScore.textContent = "Your score is: " + secondsRemain; 
        }
    }
    )
}


generateBtn.addEventListener("click", quizStart())
