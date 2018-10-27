var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var win = 0;
var lose = 0;
//var guesses = "";

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var letterGuessed = document.getElementById("youguessed");


//computer generates random letter
var randomLetter = letters[Math.floor(Math.random()*letters.length)];
console.log(randomLetter);


//onkeyup function
document.onkeyup = function(event) {
    var userGuess = event.key.toUpperCase();
    console.log(userGuess);
    
     if (userGuess === randomLetter) {
         win++;
     } else {
         lose++;
     }
     console.log("Wins: " + win);
     console.log("Losses: " + lose);

};

//win condition
//loss condition

