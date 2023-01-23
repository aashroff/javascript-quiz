const startButton = document.querySelector("#start");
const timer = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
const questions = document.querySelector("#questions");
const choices = document.querySelector("#choices");
const questionTitle = document.querySelector("#question-title")
let startingTime = 75;

// Questions Object
const questionsObj = {

    question : [
        "Inside which HTML element do we put the JavaScript?"
    ],
    choices : [
        ["<js>", "<scripting>", "<script>", "<javascript>"],


    ]

}


// Start Timer

function startTimer(){

    if(timer.textContent >= 1){
     timer.textContent -= 1;
    }
}


function displayQuestion(){

    let questionCount = 0;

    questions.classList.remove("hide")
    questionTitle.innerText = questionsObj.question[0];
   
    for(elem of questionsObj.choices[0]){
        const answerChoice = document.createElement("button");
        answerChoice.innerText = elem;
        choices.appendChild(answerChoice);
    }
    

};


// Execute this when the quiz is started
function startQuiz(){
    // Set display of start screen div to none
    startScreen.style.display = "none";
    timer.textContent = startingTime;
    displayQuestion();
    setInterval(startTimer, 1000);

}


// Start Quiz
startButton.addEventListener("click", startQuiz)
