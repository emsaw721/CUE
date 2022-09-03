
var generateBtn = document.querySelector("#generate");

var generateQuestion = Function

function quizStart() {



}; 

generateBtn.addEventListener("click", quizStart())
   if(click) { clearInterval(quizStart); 
    generateQuestion(); 
   }


function generateQuestion() {
    
    var timeEl = document.querySelector('#time');
    var count = 0; 
    document.body.onload = addElement; 
    

    function addElement() {
        const newDiv = document.createElement("div"); 
        const newContent = document.createTextNode("TIME"); 
      

        newDiv.appendChild(newContent); 



    } 

    const currentDiv = document.getElementById("time");
    document.body.insertBefore(newDiv, currentDiv); 

   // incrementEl.addEventListener('click', generateQuestion);
     //   count++;
       // setCounterText();

}; 


//1. First page is introduction with click start quiz button . 
//2. Timer starts and presented with a question.
//   a. Answer question from list of answers. 
//3. Presented with another question. 
//   a. If question is answered incorrectly, time is subracted from the clock. 
//4. All questions answered or timer reaches 0, game is over. 
//   a. Can save initials and score. 