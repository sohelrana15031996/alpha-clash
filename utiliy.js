// function startPlay(elementID){
//   document.getElementById('playnowBtn').addEventListener('click', function(){
//     document.getElementById(elementID).classList.add('hidden');
//   })
// }

// function playGround(elementID) {
//   const playGround = document.getElementById(elementID);
//   playGround.classList.remove('hidden');
// }

function hideElementByID(elementID){
  const element = document.getElementById(elementID);
  element.classList.add('hidden');
}
 
function showElementByID(elementID){
  const element = document.getElementById(elementID);
  element.classList.remove('hidden');
}

function randomLetter(element){
  const letterOnScreen = document.getElementById('letterOnScreen');
  letterOnScreen.innerText = element
}

