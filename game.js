//Start the game, alert the user

alert("Playing rock-paper-scissors.");

//Get player input, rock, paper or scissors.
var playerChoice=(prompt("Choose rock, paper, or scissors."));

//establish cpuChoice variable
var cpuChoice="";


//set up cpu choice
var cpuNumber=Math.random();

 if (cpuNumber <= 0.33) {
    alert("rock"); 
    cpuChoice="rock";    
}
 else if (cpuNumber <= 0.66) {
     alert("paper");
     cpuChoice="paper";
 }
 else {
    alert("scissors");
    cpuChoice="scissors";
 }   

//game logic
if (playerChoice == "rock") {
    if (cpuChoice == "paper") {
        alert("you chose" + " " + playerChoice + ". cpu wins");
    }
    else if (cpuChoice == "scissors") {
        alert("you chose" + " " + playerChoice + ". player wins");
    }
    else {
        alert("you chose" + " " + playerChoice + ". tie game");
    }
}
else if (playerChoice == "scissors") {
    if (cpuChoice == "rock") {
        alert("you chose" + " " + playerChoice + ". cpu wins");
    }
    else if (cpuChoice == "paper") {
        alert("you chose" + " " + playerChoice + ". player wins");
    }
    else {
        alert("you chose" + " " + playerChoice + ". tie game");
    }
}
else if (playerChoice == "paper") {
    if (cpuChoice == "scissors") {
        alert("you chose" + " " + playerChoice + ". cpu wins");
    }
    else if (cpuChoice == "rock") {
        alert("you chose" + " " + playerChoice + " .player wins");
    }
    else {
        alert("you chose" + " " + playerChoice + ". tie game");
    }
}
else{
    alert(playerChoice + " " + "is an invalid selection. Please try again.")
}



