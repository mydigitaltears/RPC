const mots = ['roche', 'papier', 'ciseau'];

function getUserChoice() {
  userInput = document.getElementById('userChoice').value;
  userInput = userInput.toLowerCase();
  if(mots.includes(userInput)) {
    return userInput;
  }
  else {
    alert('Choix incorrect, réessayez');
  }
}

function getComputerChoice() {
  let num = Math.floor(Math.random()*3);

  switch(num) {
    case 0:
      return 'roche';
      break;
    case 1:
      return 'papier';
      break;
    case 2:
      return 'ciseau';
      break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Partie nulle!';
  }
  if (userChoice === 'roche' && computerChoice === 'papier'){
    return 'Ordinateur gagne!';
  }
  if (userChoice === 'papier' && computerChoice === 'ciseau'){
    return 'Ordinateur gagne!';
  }
  if (userChoice === 'ciseau' && computerChoice === 'roche'){
    return 'Ordinateur gagne!';
  }
  else {
    return 'Joueur gagne!';
  }
}

function playGame() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  let gagnant = determineWinner(userChoice, computerChoice);

  document.getElementById('choix-text').innerText = `Joueur choisit ${userChoice} et ordinateur choisit ${computerChoice}`;
  document.getElementById('gagnant-text').innerText = gagnant;
}
