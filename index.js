
function buttonPressEvent(event){
  const pressedKey = event.key;
  console.log('You are pressed', pressedKey);
  console.log('Displaying', randomAlphabet());
// targeting alphabet.
  const targetLetter = document.getElementById('screen-alphabet').innerText.toLocaleLowerCase();
  console.log('targeting letter is ', targetLetter)
  if(pressedKey === targetLetter){
    console.log('You are press right key')
  }else{
    console.log('You press wrong key.')
  }
}

document.addEventListener('keyup', buttonPressEvent);

// check pressed key and display letter are same or not

// const displayedLetter = randomAlphabet();
// const pressedLetter = buttonPressEvent();



function continueGame(){
  const randomLetter = randomAlphabet();
  
  // Display alphabet in the display;
  const displayLetter = document.getElementById('screen-alphabet');
  displayLetter.innerText = randomLetter.toUpperCase();

  // Highlighting letter in keyboard
  highlightLetter(randomLetter);


}

function startPlay(){
  hideElement('home');
  showElement('Playground');
  continueGame();
}