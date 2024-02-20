// document.getElementById('playnowBtn').addEventListener('click', function(){
//   const playStart = document.getElementById('startPlaying');
//   playStart.classList.add('hidden');
// })


function continueGame(){
  const randomIndex = Math.round(Math.random*25);
  const alphabetstring = 'abcdefghijklmnopqrstuvwxyz/';
  const alphabets = alphabetstring.split('');

  const alphabet = alphabets[randomIndex];
  console.log(alphabets);
  randomLetter(alphabet)

}
function play(){
  hideElementByID('startPlaying');
  showElementByID('playground');
  continueGame();
}