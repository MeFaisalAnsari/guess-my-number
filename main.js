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

  if (guess == "") {
    message.textContent = "No Number!";
  } else {
    if (guess === randomNumber) {
      message.textContent = "Correct Number!";
      document.querySelector("body").style.backgroundColor = "green";
      number.textContent = guess;
      number.style.width = "30rem";
      if (score > highScore) highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    if (guess !== randomNumber) {
      if (guess > randomNumber) {
        message.textContent = "Too High!";
      }

      if (guess < randomNumber) {
        message.textContent = "Too Low!";
      }
      score--;
      document.querySelector(".score").textContent = score;
    }
    if (score <= 0) {
      message.textContent = "You Lose!";
      document.querySelector(".score").textContent = "0";
      document.querySelector("body").style.background = "red";
    }
  }
});

btnAgain.addEventListener("click", function () {
  message.textContent = "Start Guessing...";
  document.querySelector("body").style.background = "#222";
  number.style.width = "15rem";
  number.textContent = "?";
  document.querySelector(".guess").value = "";
  score = 20;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
});
