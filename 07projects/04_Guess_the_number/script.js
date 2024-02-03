let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrhi = document.querySelector(".lowOrhi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validGuess(guess);
  });
}
function validGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Enter a valid number");
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you gueesed it right `);
    endGame();
  } else if (guess < randomNumber) {
    displayGuess(`Number is too low`);
  } else if (guess > randomNumber) {
    displayGuess(`Number is too high`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  q.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new game</h>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("clicl", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    newGame = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
