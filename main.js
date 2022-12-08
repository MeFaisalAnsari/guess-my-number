"use strict";

// Display Current Year in footer
const dt = new Date();
document.getElementById("current-year").textContent = dt.getFullYear();

// Selecting Elements
const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");
const number = document.querySelector(".number");
let message = document.querySelector(".message");

let score = 20;
let highScore = 0;

// Generating random number between 1 and 20
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // if no input
  if (!guess) {
    message.textContent = "⛔ No Number!";

    // if the guess is correct
  } else if (guess === randomNumber) {
    message.textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".guess").disabled = true;
    btnAgain.classList.add("active");
    number.textContent = guess;
    number.style.width = "30rem";
    if (score > highScore) highScore = score;
    document.querySelector(".highscore").textContent = highScore;

    // if the guess is incorrect
  } else if (guess !== randomNumber) {
    if (score > 1) {
      message.textContent =
        guess > randomNumber ? "📈 Too High!" : "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "😓 You Lose!";
      document.querySelector(".score").textContent = "0";
      document.querySelector("body").style.background = "red";
      btnAgain.classList.add("active");
    }
  }
});

btnAgain.addEventListener("click", function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
  message.textContent = "Start Guessing...";
  number.textContent = "?";
  btnAgain.classList.remove("active");
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.background = "#222";
  document.querySelector(".guess").disabled = false;
  number.style.width = "15rem";
});
