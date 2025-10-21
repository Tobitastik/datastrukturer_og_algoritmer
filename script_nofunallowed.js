let min = 1;
let max = 100;
let guess = getMiddle(min, max);
let feedback = document.getElementById('feedback');
let guessText = document.getElementById('current-guess');
let historyList = document.getElementById('history-list');
let guesses = [];

//Same as the script, however the computer will always guess at the mean value which should guess the number faster on avarage

guessText.textContent = guess;
updateHistory(guess);

function getMiddle(min, max) {
  return Math.floor((min + max) / 2);
}

document.getElementById('lower').addEventListener('click', () => {
  if (min >= max || guess <= min) {
    feedback.textContent = "That doesn’t seem possible";
    return;
  }
  max = guess - 1;
  guess = getMiddle(min, max);
  updateGuess();
});

document.getElementById('higher').addEventListener('click', () => {
  if (max <= min || guess >= max) {
    feedback.textContent = "That doesn’t seem possible";
    return;
  }
  min = guess + 1;
  guess = getMiddle(min, max);
  updateGuess();
});

document.getElementById('correct').addEventListener('click', () => {
  feedback.textContent = `Your number was ${guess}`;
  toggleButtons(true);
});

document.getElementById('restart').addEventListener('click', restartGame);

function updateGuess() {
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
  guess = getMiddle(min, max);
  feedback.textContent = "";
  guesses = [];
  historyList.innerHTML = "";
  updateHistory(guess);
  guessText.textContent = guess;
  toggleButtons(false);
}