const cards = document.querySelectorAll('.match-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

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

  // second click
  secondCard = this;
  lockBoard = true;

  checkForMatch();
}

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

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 20);
    card.style.order = randomPos;
  });


  // Timer/Coundown

 /* function countdown () {
        
    countdownStarted = true;

    var timeStart = +new Date;
    var timer = setInterval( function() {
        
        var timeNow = +new Date;
        var difference = ( timeNow - timeStart ) / 1000; //calculates time difference if game isn't in focus
        
        if (time > 0 && !win) {// if there is still time left and game isn't won, deduct time
            
            time = 30;
            time = Math.floor( time - difference );
            $('.timer').text( time );
            
        } else {//stop timer when time is run out
            
            outOfTime = true;
            alert("you have run out of time :(");
            
            clearInterval(timer);
        } 
        
    }, 250 );
    
};*/

});

cards.forEach(card => card.addEventListener('click', flipCard));