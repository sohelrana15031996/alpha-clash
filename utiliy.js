
function hideElement(elementId) {
  document.getElementById(elementId).classList.add('hidden');
}

// fucntion for remove hidden class
function showElement(elementId) {
  document.getElementById(elementId).classList.remove('hidden')
}

function randomAlphabet() {
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetArray = alphabetString.split('');
  const randomNumber = Math.random() * 26;
  const indexNumber = Math.floor(randomNumber);
  const letter = alphabetArray[indexNumber];
  return letter;
}

// Highlighting letter on keyboard

function highlightLetter(letterId){
  document.getElementById(letterId).classList.add('bg-orange-400');
}
function removeHighlightLetter(letterId){
  document.getElementById(letterId).classList.remove('bg-orange-400');
}