let startButton = document.querySelector("#start");
let timer = document.querySelector("#time");
let startScreen = document.querySelector("#start-screen");
let startingTime = 75;

// Start Timer

function startTimer(){

    if(timer.textContent >= 1){
     timer.textContent -= 1;
    }
}


// Execute this when the quiz is started
function startQuiz(){
    
    timer.textContent = startingTime;
    setInterval(startTimer, 1000);
}


// Start Quiz
startButton.addEventListener("click", startQuiz)
