function continueGame(){
  const randomLetter = randomAlphabet();
  
  // Display alphabet in the display;
  const displayLetter = document.getElementById('screen-alphabet');
  displayLetter.innerText = randomLetter.toUpperCase();

  // Highlighting letter in keyboard
  

}

function startPlay(){
  hideElement('home');
  showElement('Playground');
  continueGame()
}