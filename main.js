"use strict";

// Display Current Year in footer
const dt = new Date();
document.getElementById("current-year").textContent = dt.getFullYear();

// Selecting Elements
const btnAgain = document.querySelector(".again");
const number = document.querySelector(".number");
const btnCheck = document.querySelector(".check");
let message = document.querySelector(".message");
// let score = document.querySelector(".score").textContent;
// let highScore = document.querySelector(".highscore");

let score = 20;
let highScore = 0;

// Generating random number between 1 and 20
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess === randomNumber) {
    message.textContent = "Correct Number!";
    document.querySelector("body").style.backgroundColor = "green";
    number.textContent = guess;
    number.style.width = "30rem";
    if (score > highScore) highScore = score;
    document.querySelector(".highscore").textContent = highScore;
  }

  if (guess > randomNumber) {
    message.textContent = "Too High!";
    score--;
    document.querySelector(".score").textContent = score;
  }

  if (guess < randomNumber) {
    message.textContent = "Too Low!";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

btnAgain.addEventListener("click", function () {
  document.querySelector("body").style.background = "#222";
  number.style.width = "15rem";
  number.textContent = "?";
  document.querySelector(".guess").value = "";
  score = 20;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
});
