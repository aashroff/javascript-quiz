const highScores = document.querySelector("#highscores")
const clearScores = document.querySelector("#clear")

const savedScores = JSON.parse(localStorage.getItem("combinedResult")) ?? [];

const highScore = localStorage.getItem("finalScore");

const initial = localStorage.getItem("initials");




if (savedScores.length > 0){
    savedScores.forEach(element => {
        let li = document.createElement("li");
        let result = document.createTextNode(element);
        li.appendChild(result);
        highScores.appendChild(li);
        
    });
}


//let result = document.createTextNode(initial + " - " + highScore);

//li.appendChild(result);

clearScores.addEventListener("click", function(event){

    event.preventDefault;
    localStorage.clear();

    highScores.innerHTML = "";

});



