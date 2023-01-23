const startButton = document.querySelector("#start");
const timer = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
const questions = document.querySelector("#questions");
const choices = document.querySelector("#choices");
const questionTitle = document.querySelector("#question-title")
let correctAnswerSfx = new Audio('./assets/sfx/correct.wav');
let inCorrectAnswerSfx = new Audio('./assets/sfx/incorrect.wav');
let startingTime = 75;

// Questions Object
const questionsObj = [

    {
        question : "Inside which HTML element do we put the JavaScript?",
        choices : ["<js>", "<scripting>", "<script>", "<javascript>"],
        answer: "<script>"

    }

]


// Start Timer

function startTimer(){

    if(timer.textContent >= 1){
     timer.textContent -= 1;
    }
}


function renderQuestion(index) {

    questionTitle.innerText = questionsObj[index].question;
    for(elem of questionsObj[index].choices){
        const answerChoice = document.createElement("button");
        answerChoice.innerText = elem;
        choices.appendChild(answerChoice);
        answerChoice.addEventListener("click", function() {
            if(answerChoice.innerText != questionsObj[index].answer) {
                console.log("Incorrect Answer!");
                inCorrectAnswerSfx.play();
            }
            else{
                console.log("Correct Answer!");
                correctAnswerSfx.play();
            }
        })
    }
}


function displayQuestion(){

    //let questionCount = 0;

    questions.classList.remove("hide")
    
    // Ask first question
    renderQuestion(0);
    

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
