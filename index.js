
function buttonPressEvent(event) {
  const pressedKey = event.key;
  // targeting alphabet.
  const targetLetter = document.getElementById('screen-alphabet').innerText.toLocaleLowerCase();
  if (pressedKey === targetLetter) {
    const letterOnDisplay = document.getElementById('screen-alphabet').innerText.toLowerCase();
    removeHighlightLetter(letterOnDisplay);
    continueGame();
    let score = document.getElementById('gameScore').innerText;
    console.log(score);
    let scoreNumber = parseInt(score);


    scoreNumber += 1;
    console.log(scoreNumber);
    document.getElementById('gameScore').innerText = scoreNumber;
  } else {
    let gameLife = document.getElementById('gameChance').innerText;
    let lifeInNumber = parseInt(gameLife);
    lifeInNumber -= 1;
    document.getElementById('gameChance').innerText = lifeInNumber;
    console.log(lifeInNumber);
    if (lifeInNumber === 0) {
      hideElement('Playground');
      showElement('final-page');
      const finalScore = document.getElementById('gameScore').innerText;
      document.getElementById('final-score').innerText = finalScore;
    }
  }
}


document.getElementById('play-again-btn').addEventListener('click', function () {
  hideElement('final-page');
  showElement('Playground');
  document.getElementById('gameScore').innerText = '0';
  document.getElementById('gameChance').innerText = '4';
})

document.addEventListener('keyup', buttonPressEvent);
function continueGame() {
  const randomLetter = randomAlphabet();

  // Display alphabet in the display;
  const displayLetter = document.getElementById('screen-alphabet');
  displayLetter.innerText = randomLetter.toUpperCase();

  // Highlighting letter in keyboard
  highlightLetter(randomLetter);


}
function startPlay() {
  hideElement('home');
  showElement('Playground');
  continueGame();
}