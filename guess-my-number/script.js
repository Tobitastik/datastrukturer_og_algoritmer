let min = 1;
let max = 100;
let guess = getRandomNumber(min, max);
let feedback = document.getElementById('feedback');
let guessText = document.getElementById('current-guess');
let historyList = document.getElementById('history-list');
let guesses = [];

guessText.textContent = guess;
updateHistory(guess);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('lower').addEventListener('click', () => {
  if (guess <= min) {
    feedback.textContent = "That doesn’t seem possible";
    return;
  }
  max = guess - 1;
  makeNewGuess();
});

document.getElementById('higher').addEventListener('click', () => {
  if (guess >= max) {
    feedback.textContent = "That doesn’t seem possible";
    return;
  }
  min = guess + 1;
  makeNewGuess();
});

document.getElementById('correct').addEventListener('click', () => {
  feedback.textContent = `Your number was ${guess}`;
  toggleButtons(true);
});

document.getElementById('restart').addEventListener('click', restartGame);

function makeNewGuess() {
  if (min > max) {
    feedback.textContent = "Are you sure about your hints?";
    return;
  }

  guess = getRandomNumber(min, max);
  guessText.textContent = guess;
  feedback.textContent = "";
  updateHistory(guess);
}

function updateHistory(guess) {
  guesses.push(guess);
  historyList.innerHTML = "";
  guesses.slice().reverse().forEach((g, i) => {
    const li = document.createElement('li');
    li.textContent = `#${guesses.length - i}: ${g}`;
    historyList.appendChild(li);
  });
}

function toggleButtons(finished) {
  document.getElementById('lower').classList.toggle('hidden', finished);
  document.getElementById('higher').classList.toggle('hidden', finished);
  document.getElementById('correct').classList.toggle('hidden', finished);
  document.getElementById('restart').classList.toggle('hidden', !finished);
}

function restartGame() {
  min = 1;
  max = 100;
  guess = getRandomNumber(min, max);
  feedback.textContent = "";
  guesses = [];
  historyList.innerHTML = "";
  updateHistory(guess);
  guessText.textContent = guess;
  toggleButtons(false);
}