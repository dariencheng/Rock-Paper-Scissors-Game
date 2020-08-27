const buttons = document.querySelectorAll(".buttons");
const results = document.querySelector(".results");
const para = document.createElement("p");
const outcome = document.createElement("p");
const scoreCard = { 
    wins: 0,
    losses: 0,
    ties: 0,
};

game();

function game(){
    buttons.forEach(button => {
        button.addEventListener('click', function(){
            if (scoreCard.wins < 5 && scoreCard.losses < 5){
                let playerChoice = button.id;
                let computerChoice = computerPlay();
                let result = playRound(playerChoice, computerChoice);
                score(result);
                updateScore();
                if (scoreCard.wins == 5 || scoreCard.losses == 5){
                    announceWinner();
                }
            }
        })
    });
}

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0){
        return "rock";
    } else if (computerChoice == 1){
        return "paper";
    } else return "scissors";
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        alert("It's a tie!");
        return "ties";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        alert("You win! Rock beats Scissors");
        return "wins";
    } else if (playerChoice === "rock" && computerChoice === "paper"){
        alert("Computer wins! Paper beats Rock");
        return "losses";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beat Paper");
        return "wins";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        alert("Computer wins! Rock beats Scissors");
        return "losses";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        alert("You win! Paper beats Rock");
        return "wins";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        alert("Computer wins! Scissors beat Paper");
        return "losses";
    }
}

function score(result){
    if (result == "wins"){
        scoreCard.wins ++;
    } else if (result == "losses"){
        scoreCard.losses ++;
    } else { scoreCard.ties ++;}
}

function updateScore(){
para.textContent = "Wins: " +
    scoreCard.wins +
    ",   Losses: " +
    scoreCard.losses +
    ",   Ties: " +
    scoreCard.ties;
    results.appendChild(para);
}

function announceWinner(){
    scoreCard.wins > scoreCard.losses 
    ? (outcome.textContent = "You win!")
    : (outcome.textContent = "Computer wins!");
    outcome.style.textAlign = "center";
    results.appendChild(outcome);
}