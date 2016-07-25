var sequence = [],
    strict = false,
    blueButton = document.getElementById("blue"),
    redButton = document.getElementById("red"),
    greenButton = document.getElementById("green"),
    yellowButton = document.getElementById("yellow"),
    count = 1;

// start the game
// populate sequence
function start(){
var colors = ["blue", "green", "yellow", "red"];
    for (var i = 0; i < 20; i++){
       sequence.push(colors[Math.floor((Math.random() * 4))]);
    }
    flashSequence();
}

function toggleStrict(){
    strict = !strict;
    if (strict){
        document.getElementById("strict-button").className = "btn btn-lg btn-warning"
    }
    else if (!strict){
        document.getElementById("strict-button").className = "btn btn-lg btn-default"
    }
}

// display the sequence and play sounds
function flashSequence(){

for (var i= 0; i<count; i++){

}
}

// take the player input
function recordSequence(){
    var playerInput = [];
    compareSequence(playerInput);
}

function compareSequence(playerInput){
    var correct = true;
    for (var i = 0; i < playerInput.length; i++){
        if (playerInput[i] === sequence[i]){
        }else{
            correct = false;
        }
    }
    return correct;
}
/* Sound files
 https://s3.amazonaws.com/freecodecamp/simonSound1.mp3, https://s3.amazonaws.com/freecodecamp/simonSound2.mp3, https://s3.amazonaws.com/freecodecamp/simonSound3.mp3, https://s3.amazonaws.com/freecodecamp/simonSound4.mp3
 */