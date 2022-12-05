"use strict";

// Display Current Year in footer
const dt = new Date();
document.getElementById("current-year").textContent = dt.getFullYear();

// Selecting Elements
const btnAgain = document.querySelector(".again");
const number = document.querySelector(".number");
const btnCheck = document.querySelector(".check");
let message = document.querySelector(".message");
let score = document.querySelector(".score").textContent;
let highScore = document.querySelector(".highscore");

// Generating random number between 1 and 20
const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess === randomNumber) {
    message.textContent = "Correct Number!";
    document.querySelector("body").style.backgroundColor = "green";
    number.textContent = guess;
    number.style.width = "30rem";
  }
});
