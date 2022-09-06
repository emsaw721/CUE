//1. First page is introduction with click start quiz button . 
//2. Timer starts and presented with a question.
//   a. Answer question from list of answers. 
//3. Presented with another question. 
//   a. If question is answered incorrectly, time is subracted from the clock. 
//4. All questions answered or timer reaches 0, game is over. 
//   a. Can save initials and score. 

function quizStart() {
    var start = document.getElementById("wrapper")

    if(start) {
        clearInterval(start); 
    }
   }
var generateBtn = document.querySelector("#start-button");


generateBtn.addEventListener("click", quizStart())
