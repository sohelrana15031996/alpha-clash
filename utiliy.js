const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
const alphabetArray = alphabetString.split('');
const randomAlphabetIndex = Math.floor(Math.random()*26);
const randomAlphabet = alphabetArray[randomAlphabetIndex];

document.getElementById('screen-alphabet').innerText = randomAlphabet.toUpperCase();

function letterInteraction(letterID){
  document.getElementById(letterID).style.background ='orange';
}
