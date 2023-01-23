const startButton = document.querySelector("#start");
const timer = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
const questions = document.querySelector("#questions");
const choices = document.querySelector("#choices");
const questionTitle = document.querySelector("#question-title")
const correctAnswerSfx = new Audio('./assets/sfx/correct.wav');
const inCorrectAnswerSfx = new Audio('./assets/sfx/incorrect.wav');
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const feedback = document.querySelector("#feedback");
let startingTime = 75;

let time;

// Questions Object
const questionsObj = [

    {
        question : "Inside which HTML element do we put the JavaScript?",
        choices : ["<js>", "<scripting>", "<script>", "<javascript>"],
        answer: "<script>"
    },
    {
        question : "Common used data types DO NOT include:",
        choices : ["strings", "booleans", "alert", "numbers"],
        answer: "alert"
    },

    {
        question : "Arrays in JavaScript can be used to store ______",
        choices : ["Other Arrays", "Objects", "Strings", "All of the above."],
        answer: "All of the above."
    },

    {
        question : "Which variable declaration allows \"Hoisting\" in JavaScript?",
        choices : ["var", "let", "const", "None of the above."],
        answer: "var"
    }


]


// Start Timer

function startTimer(){

    if(timer.textContent >= 1){
     timer.textContent -= 1;
    }
}

function pauseTimer(){
    
    clearInterval(time);
       
}


function renderQuestion(index) {
    if(index <= 3){
        questionTitle.innerText = questionsObj[index].question;
    
        //reset the choices on each event
        choices.innerHTML = "";
        for(elem of questionsObj[index].choices){
            const answerChoice = document.createElement("button");
            answerChoice.innerText = elem;
            choices.appendChild(answerChoice);
            answerChoice.addEventListener("click", function() {
                if(answerChoice.innerText != questionsObj[index].answer) {
                    //When answer is incorrect reduce time by 10 and play the incorrect answer sfx
                    if(timer.textContent >= 10){
                        timer.textContent -= 10;
                    }
                    else{
                        timer.textContent = 0;
                    }
                    inCorrectAnswerSfx.play();
                    if(index < 3){
                        feedback.innerText = 'Wrong Answer!';
                        feedback.classList.remove("hide");
                        index+=1;
                        setTimeout(function(){
                            feedback.classList.add("hide");
                        }, 2000);
                        renderQuestion(index);
                    }
                    // If there are no more questions
                    else{

                        pauseTimer()
                        // Set final score
                        finalScore.innerText = timer.textContent;
                        questions.classList.add("hide");
                        endScreen.classList.remove("hide");

                    }
                    
                }
                else{
                    //When the answer is correct, play the correct answer sfx, and ask the next question.
                    correctAnswerSfx.play();
                    if(index < 3){
                        feedback.innerText = 'Correct!';
                        feedback.classList.remove("hide");
                        index+=1;
                        setTimeout(function(){
                            feedback.classList.add("hide");
                        }, 2000);
                        renderQuestion(index);
                    }
                    else{
                        pauseTimer()
                        finalScore.innerText = timer.textContent;
                        questions.classList.add("hide");
                        endScreen.classList.remove("hide");

                    }
                    
                    
                    
                }
            })
        }
    }
}


function displayQuestion(){


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
    time = setInterval(startTimer, 1000);

}


// Start Quiz
startButton.addEventListener("click", startQuiz)
