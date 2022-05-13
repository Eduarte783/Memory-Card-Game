
// Created Query Selector for elements. Looped thru with "forEach" with an eventListener. This way every time a card is clicked the "FlipCard" function is invoked 
const cards = document.querySelectorAll('.match-card');
const reset = document.getElementById('resetGame');


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// FLIPCARD invoked

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  // This one fires after second card is clicked

  secondCard = this;
  lockBoard = true;

  checkForMatch();
}

// Function to check when cards match, to keep cards facing forwards and if they do not match to be flipped back face-down. 

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];

}

/*function resetGame() {
  let resetButton = document.getElementById('resetGame').addEventListener('click', reset); */

// SHUFFLE function using "forEach" ITERATOR to randomly pick different images when restarting game.  

function shuffle() {
     cards.forEach(card => {
       let ramdomPos = Math.floor(Math.random() * 12);
       card.style.order = ramdomPos;
     });
   };
  shuffle()
  cards.forEach(card => card.addEventListener('click', flipCard));
  // Timer function //

  let i = 0;
  let startButton = document.getElementById("startGame")
  startButton.addEventListener("click", startGame);


  // RESTART Button using an ITERATOR with DOM to start timer 
  function startGame() {
    cards.forEach(card => card.addEventListener('click', flipCard));
    resetBoard();
    //startButton.disabled = true;

    timer = setInterval(startTimer, 1000);
    //startTimer();
  }

  let count = 45
  let timer;

  // THIS function locks the board when time runs out and displays message.
  
function startTimer() { 
  count--
  document.getElementById("timer").innerText = count;
 
  if (count === 0) {
    clearInterval(timer);
    lockBoard = true
    document.getElementById("timer").innerText = "You Lost, Try Again!"   
  }
   
} 


