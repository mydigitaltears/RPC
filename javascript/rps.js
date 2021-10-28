const words = ['roche', 'papier', 'ciseau'];

function getUserChoice() {
  userInput = document.getElementById("userChoice").value;
  userInput = userInput.toLowerCase();
  if(words.includes(userInput)) {
    return userInput;
  }
  else {
    console.log('error');
  }
}

function getComputerChoice() {
  let num = Math.floor(Math.random()*3);
  switch (num) {
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
  if (userChoice === 'roche') {
    if(computerChoice === 'papier') {
      return 'Ordinateur gagne!';
    }
    else {
      return 'Joueur gagne!';
    }
  }
  if (userChoice === 'papier') {
    if(computerChoice === 'ciseau') {
      return 'Ordinateur gagne!';
    }
    else {
      return 'Joueur gagne!';
    }
  }
  if (userChoice === 'ciseau') {
    if(computerChoice === 'roche') {
      return 'Ordinateur gagne!';
    }
    else {
      return 'Joueur gagne!';
    }
  }
}

function playGame() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  let choix = document.getElementById("choix-text");
  choix.innerText = `Joueur choisit ${userChoice} et ordinateur choisit ${computerChoice}`
  let gagnant_text = document.getElementById("gagnant-text");
  let gagnant = determineWinner(userChoice, computerChoice);
  gagnant_text.innerText = gagnant;

  console.log(`Joueur choisit ${userChoice} et ordinateur choisit ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}
