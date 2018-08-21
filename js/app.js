!function(){
//declare DOM elements
const board = document.querySelector('#board');
const start = document.querySelector('#start');
const finish = document.querySelector('#finish');
const startButton = document.querySelector('#start header .button');
const startPcButton = document.querySelector('.button:nth-of-type(2)');
const newgameButton = document.querySelector('#finish header .button');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const boxesList = document.querySelector('.boxes');
const boxes = document.querySelectorAll('.box');
const message = document.querySelector('.message');
const playersUl = document.querySelector('#board header ul');

//declare variable to check if game is vs Computer
let vsComputer = false;

//declare variable to check if game was won or tied
let gameWon = false;

//declare players name variables
let player1Name = '';
let player2Name = '';

//create dom elements for player names
const player1Element = document.createElement('p');
const player2Element = document.createElement('p');

//this function reset all the boxes after the newgameButton is pressed
function resetGame(){
  for(let i = 0; i < boxes.length; i++){
    boxes[i].className = 'box';
    gameWon = false;
  }
}

//this function check if all the boxes have been used and nobody won yet
function checkTie(){
  if(!gameWon && (boxes[0].classList.contains('box-filled-1') || boxes[0].classList.contains('box-filled-2')) &&
      (boxes[1].classList.contains('box-filled-1') || boxes[1].classList.contains('box-filled-2')) &&
      (boxes[2].classList.contains('box-filled-1') || boxes[2].classList.contains('box-filled-2')) &&
      (boxes[3].classList.contains('box-filled-1') || boxes[3].classList.contains('box-filled-2')) &&
      (boxes[4].classList.contains('box-filled-1') || boxes[4].classList.contains('box-filled-2')) &&
      (boxes[5].classList.contains('box-filled-1') || boxes[5].classList.contains('box-filled-2')) &&
      (boxes[6].classList.contains('box-filled-1') || boxes[6].classList.contains('box-filled-2')) &&
      (boxes[7].classList.contains('box-filled-1') || boxes[7].classList.contains('box-filled-2')) &&
      (boxes[8].classList.contains('box-filled-1') || boxes[8].classList.contains('box-filled-2'))){
        endGame('tie');
      }
}

//this function checks all the 8 possible combination of winning for both players
function checkWon(){
  if(boxes[0].classList.contains('box-filled-1') && boxes[1].classList.contains('box-filled-1') && boxes[2].classList.contains('box-filled-1')){
    gameWon = true;
    endGame('player1');
  }
  else if(boxes[0].classList.contains('box-filled-2') && boxes[1].classList.contains('box-filled-2') && boxes[2].classList.contains('box-filled-2')){
    gameWon = true;
    endGame('player2');
  }
  else if(boxes[3].classList.contains('box-filled-1') && boxes[4].classList.contains('box-filled-1') && boxes[5].classList.contains('box-filled-1')){
    gameWon = true;
    endGame('player1');
  }
  else if(boxes[3].classList.contains('box-filled-2') && boxes[4].classList.contains('box-filled-2') && boxes[5].classList.contains('box-filled-2')){
    gameWon = true;
    endGame('player2');
  }
  else if(boxes[6].classList.contains('box-filled-1') && boxes[7].classList.contains('box-filled-1') && boxes[8].classList.contains('box-filled-1')){
    gameWon = true;
    endGame('player1');
  }
  else if(boxes[6].classList.contains('box-filled-2') && boxes[7].classList.contains('box-filled-2') && boxes[8].classList.contains('box-filled-2')){
    gameWon = true;
    endGame('player2');
  }
  else if(boxes[0].classList.contains('box-filled-1') && boxes[3].classList.contains('box-filled-1') && boxes[6].classList.contains('box-filled-1')){
    gameWon = true;
    endGame('player1');
  }
  else if(boxes[0].classList.contains('box-filled-2') && boxes[3].classList.contains('box-filled-2') && boxes[6].classList.contains('box-filled-2')){
    gameWon = true;
    endGame('player2');
  }
  else if(boxes[1].classList.contains('box-filled-1') && boxes[4].classList.contains('box-filled-1') && boxes[7].classList.contains('box-filled-1')){
    gameWon = true;
    endGame('player1');
  }
  else if(boxes[1].classList.contains('box-filled-2') && boxes[4].classList.contains('box-filled-2') && boxes[7].classList.contains('box-filled-2')){
    gameWon = true;
    endGame('player2');
  }
  else if(boxes[2].classList.contains('box-filled-1') && boxes[5].classList.contains('box-filled-1') && boxes[8].classList.contains('box-filled-1')){
    gameWon = true;
    endGame('player1');
  }
  else if(boxes[2].classList.contains('box-filled-2') && boxes[5].classList.contains('box-filled-2') && boxes[8].classList.contains('box-filled-2')){
    gameWon = true;
    endGame('player2');
  }
  else if(boxes[0].classList.contains('box-filled-1') && boxes[4].classList.contains('box-filled-1') && boxes[8].classList.contains('box-filled-1')){
    gameWon = true;
    endGame('player1');
  }
  else if(boxes[0].classList.contains('box-filled-2') && boxes[4].classList.contains('box-filled-2') && boxes[8].classList.contains('box-filled-2')){
    gameWon = true;
    endGame('player2');
  }
  else if(boxes[2].classList.contains('box-filled-1') && boxes[4].classList.contains('box-filled-1') && boxes[6].classList.contains('box-filled-1')){
    gameWon = true;
    endGame('player1');
  }
  else if(boxes[2].classList.contains('box-filled-2') && boxes[4].classList.contains('box-filled-2') && boxes[6].classList.contains('box-filled-2')){
    gameWon = true;
    endGame('player2');
  }
}

//this function end game if a player won or the match is tied and show the right page
function endGame(winningPlayer){
  board.style.display = 'none';
  finish.style.display = '';
  if(winningPlayer === 'player1'){
    finish.classList.add('screen-win-one');
    finish.classList.remove('screen-win-two');
    finish.classList.remove('screen-win-tie');
    message.textContent = `${player1Name} wins!`;
  }
  if(winningPlayer === 'player2'){
    finish.classList.add('screen-win-two');
    finish.classList.remove('screen-win-one');
    finish.classList.remove('screen-win-tie');
    message.textContent = `${player2Name} wins!`;
  }
  if(winningPlayer === 'tie'){
    finish.classList.add('screen-win-tie');
    finish.classList.remove('screen-win-one');
    finish.classList.remove('screen-win-two');
    message.textContent = "It's a tie!";
  }
}

//this function is the AI that take the computer decisions
function computerAI(){
  let played = false;
  do{
    for(let i = 0; i < boxes.length; i++){
      let num = Math.floor(Math.random() * boxes.length);
      if(!(boxes[num].classList.contains('box-filled-1') || boxes[num].classList.contains('box-filled-2'))){
        boxes[num].classList.add('box-filled-2');
        played = true;
        break;
      }
    }
  } while(!played)
  player2.classList.remove('active');
  player1.classList.add('active');
  checkWon();
  checkTie();
}

//display starting page
board.style.display = 'none';
finish.style.display = 'none';

//listen for a click on the start game button, ask for players name and change the page to the game page
startButton.addEventListener('click', () => {
  player1Name = prompt('Enter name for player 1');
  player2Name = prompt('Enter name for player 2');
  player1Element.textContent = player1Name;
  player2Element.textContent = player2Name;
  player1Element.classList.add('player1Element');
  player2Element.classList.add('player2Element');
  playersUl.insertBefore(player1Element, player1)
  playersUl.insertBefore(player2Element, player2)
  board.style.display = '';
  start.style.display = 'none';
});

//listen for a click on the start game vs computer startButton
startPcButton.addEventListener('click', () => {
  player1Name = prompt('Enter name for player 1');
  player2Name = 'Computer';
  player1Element.textContent = player1Name;
  player2Element.textContent = player2Name;
  player1Element.classList.add('player1Element');
  player2Element.classList.add('player2Element');
  playersUl.insertBefore(player1Element, player1)
  playersUl.insertBefore(player2Element, player2)
  board.style.display = '';
  start.style.display = 'none';
  vsComputer = true;
});

//listen for a click on the newgame button and reset board for a new game
newgameButton.addEventListener('click', () => {
  finish.style.display = 'none';
  board.style.display = '';
  resetGame();
});

//set the player one as default first active player
player1.classList.add('active');

//listen for a mouseover on all the boxes and highlight the one where the mouse is
boxesList.addEventListener('mouseover', (e) => {
  if(player1.classList.contains('active') && !e.target.classList.contains('box-filled-1') && !e.target.classList.contains('box-filled-2')){
    e.target.style.backgroundImage = "url('img/o.svg')";
  }
  if(player2.classList.contains('active') && !e.target.classList.contains('box-filled-1') && !e.target.classList.contains('box-filled-2')){
    e.target.style.backgroundImage = "url('img/x.svg')";
  }
});

//listen for a mouseout and toggles highlight where the mouse was
boxesList.addEventListener('mouseout', (e) => {
  e.target.removeAttribute('style');
});

//listen for clicks on boxes, mark the clicked box and check if the game was won or tied
boxesList.addEventListener('click', (e) => {
  if(player1.classList.contains('active') && !e.target.classList.contains('box-filled-1') && !e.target.classList.contains('box-filled-2')){
    e.target.classList.add('box-filled-1');
    player1.classList.remove('active');
    player2.classList.add('active');
    checkWon();
    checkTie();
    //if the game is vs computer the computer makes his move
    if(vsComputer){
      computerAI();
    }
  }
  if(!vsComputer){
    if(player2.classList.contains('active') && !e.target.classList.contains('box-filled-1') && !e.target.classList.contains('box-filled-2')){
      e.target.classList.add('box-filled-2');
      player2.classList.remove('active');
      player1.classList.add('active');
      checkWon();
      checkTie();
    }
  }
});
}();
