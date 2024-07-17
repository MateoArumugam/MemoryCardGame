document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.memory-card');
  const popup = document.getElementById('popup');
  const popupSound = document.getElementById('popupSound'); // Sound for popup
  const clickSound = document.getElementById('clickSound');
  const bgMusic = document.getElementById('bgMusic');

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;

      clickSound.currentTime = 0;
      clickSound.play();

      this.classList.add('flip');

      if (!hasFlippedCard) {
          // First click
          hasFlippedCard = true;
          firstCard = this;
      } else {
          // Second click
          hasFlippedCard = false;
          secondCard = this;

          checkForMatch();
      }
  }

  function checkForMatch() {
      if (firstCard.dataset.framework === secondCard.dataset.framework) {
          disableCards();
          checkWin();
      } else {
          unflipCards();
      }
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
          let randomPos = Math.floor(Math.random() * 12);
          card.style.order = randomPos;
      });
  })();

  cards.forEach(card => card.addEventListener('click', flipCard));

  // Play Again Button
  const playAgainButtons = document.querySelectorAll('.playAgainButton');

  playAgainButtons.forEach(button => {
      button.addEventListener('click', function() {
          location.reload(); // Reload the page
      });
  });

  function checkWin() {
      if (document.querySelectorAll('.flip').length === cards.length) {
          setTimeout(() => {
              popup.classList.add('show');
              popupSound.currentTime = 0; // Reset sound to start
              popupSound.play(); // Play popup sound
          }, 500);
      }
  }

  // Background music control
  bgMusic.play(); // Autoplay background music
  document.addEventListener('click', function() {
      bgMusic.play(); // Play background music on any user interaction
  });
});
