window.onload = function (){
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var win = 0;
var lose = 0;
var guessLog = [];
var guessLeft = 8;
function reset(){
    randomLetter = letters[Math.floor(Math.random()*letters.length)];
    console.log(randomLetter);
    guessLeft = 8;
    guessLog.length = 0;
}

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var letterGuessed = document.getElementById("youguessed");
var guessAmount = document.getElementById("guesses");


//computer generates random letter
var randomLetter = letters[Math.floor(Math.random()*letters.length)];
console.log(randomLetter);


//onkeyup function
//onkeyup function
document.onkeyup = function(event) {
    var userGuess = event.key.toUpperCase();
    //console.log(userGuess);
    guessLog.push(userGuess);
    
     if (userGuess === randomLetter) {
         win++;
         alert("You win!");
         reset();
     } else if (userGuess !== randomLetter) {
        guessLeft--;
     }else if (guessLog === 0) {
         lose++;
         reset();
     } else if (userGuess !== randomLetter) {
         guessLeft--;
     }

    letterGuessed.innerHTML = ("You Guessed: " + guessLog + " ")
    winsText.innerHTML = ("Wins: " + win);
    lossesText.innerHTML = ("Losses: " + lose);
    guessAmount.innerHTML = ("You have " + guessLeft + " guesses left")

    

};
}

//win condition
//loss condition

