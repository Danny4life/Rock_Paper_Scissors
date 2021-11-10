function computerPlay() {

    let items = ["rock", "scissors", "paper"];
    let item = items[Math.floor(Math.random() * items.length)];
    return item;
}


let computerSelection;
let playerSelection;
let computerScore;
let playerScore;


// game();

function game() {
    computerScore = 0;
    playerScore = 0;
    for (let i = 0; i < 5; i++) {
        userInput();
    }
    
}

// console.log(game());


function declareWinner() {
    if (playerScore === computerScore) {
        alert(playerScore + "-" + computerScore + "/nTie game!");
        return playerScore + "-" + computerScore + "/nTie Game!";
    } else if (playerScore > computerScore) {
        alert(playerScore + "-" + computerScore + "/n You Win!");
        return playerScore + "-" + computerScore + "/nYou Win!";
    } else {
        alert(playerScore + "-" + computerScore + "/nYou Lost. Try Again!");
        return playerScore + "-" + computerScore + "/nYou Lost. Try Again!";
    }
}

// console.log(declareWinner());


function userInput() {
    playerSelection = prompt("Rock, Paper, or Scissors", " ");
    if ((playerSelection.toLowerCase() == "rock")
    ||(playerSelection.toLowerCase() == "paper")
    ||(playerSelection.toLowerCase() == "scissors")) {
        console.log(playRound(playerSelection, computerSelection));
    } else {
        alert("You entered a wrong choice. Please enter the correct choice!");
        userInput();
    }
   
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection
    computerSelection = computerPlay()
     if (playerSelection == computerSelection) {
         alert("Tie Game! Play again");
         return "Tie Game/nComputer Score: " +
         computerScore + "/nYour Score: " + playerScore;
     } else if ((computerSelection == "rock" && playerSelection == "scissors" ||
                computerSelection == "scissors" && playerSelection == "paper" ||
                computerSelection == "paper" && playerSelection == "rock")) {
                    alert("You Lost! " + computerSelection + " beats " + playerSelection)
                    return "Computer Score: " + ++ computerScore +
                    "/nYour Score " + playerScore;
                } else {
                    alert("You Win! " + playerSelection + " beats " + computerSelection);
                    return "Your Score: " + ++ playerScore + 
                    "/nComputer Score " + computerScore;
                }
            
    }



    let btnOne = document.querySelector("#btn-container");

    btnOne.addEventListener("click", () => {
       
        alert(game());
        
    });

    

    

    
