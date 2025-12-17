
var random1 = Math.floor(Math.random() * 6) + 1; 

var randomImage = "dice" + random1 + ".png"; 

var randomSource = "images/" + randomImage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSource);


var random2 = Math.floor(Math.random() * 6) + 1;

var randomSource2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomSource2);



if (random1 > random2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (random2 > random1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
