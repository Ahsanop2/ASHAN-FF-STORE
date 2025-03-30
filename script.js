function getRandomCard() {
  return Math.floor(Math.random() * 13) + 1;
}

function playGame() {
  const dragonValue = getRandomCard();
  const tigerValue = getRandomCard();
  
  const dragonCard = document.getElementById('dragonCard');
  const tigerCard = document.getElementById('tigerCard');
  
  // Pehle se flip state hata dein
  dragonCard.classList.remove('flipped');
  tigerCard.classList.remove('flipped');
  
  // Thoda delay taki animation smooth ho
  setTimeout(() => {
    dragonCard.querySelector('.card-front').innerText = dragonValue;
    tigerCard.querySelector('.card-front').innerText = tigerValue;
    
    // Flip cards animation ke liye
    dragonCard.classList.add('flipped');
    tigerCard.classList.add('flipped');
    
    // Winner decide karna
    let resultText = '';
    if (dragonValue > tigerValue) {
      resultText = 'Dragon Wins!';
    } else if (tigerValue > dragonValue) {
      resultText = 'Tiger Wins!';
    } else {
      resultText = "It's a Tie!";
    }
    document.getElementById('result').innerText = resultText;
  }, 200);
}