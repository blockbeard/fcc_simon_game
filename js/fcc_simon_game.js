var sequence = [],
    strict = false;

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
}

// display the sequence and play sounds
function flashSequence(){

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
