window.onload = function (){
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var win = 0;
var lose = 0;
//var guesses = "";
function reset(){
    randomLetter = letters[Math.floor(Math.random()*letters.length)];
    console.log(randomLetter);
}

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var letterGuessed = document.getElementById("youguessed");


//computer generates random letter
var randomLetter = letters[Math.floor(Math.random()*letters.length)];
console.log(randomLetter);


//onkeyup function
//onkeyup function
document.onkeyup = function(event) {
    var userGuess = event.key.toUpperCase();
    console.log(userGuess);
    
     if (userGuess === randomLetter) {
         win++;
         reset()
     } else {
         lose++;
         reset();
     }

    letterGuessed.innerHTML = ("You Guessed: " + userGuess)
    winsText.innerHTML = ("Wins: " + win);
    lossesText.innerHTML = ("Losses: " + lose);
    

};
}

//win condition
//loss condition

