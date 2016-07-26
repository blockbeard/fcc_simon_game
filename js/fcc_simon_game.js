var sequence = [],
    strict = false,
    blueButton = document.getElementById("blue"),
    redButton = document.getElementById("red"),
    greenButton = document.getElementById("green"),
    yellowButton = document.getElementById("yellow"),
    count = 5;

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
    console.log("flash triggered");
var delay;
    if (count < 6){
        delay = 420;
    }
    else if (count < 14){
        delay = 320;
    }
    else{
        delay = 220;
    }
    console.log(delay);
            for (var i = 0; i <= count; i++) {
                setDelay(i)
            }
function setDelay(i){
    setTimeout(function() {
                console.log("for triggered");
                console.log(sequence[i]);


                    blueButton.style.backgroundColor = "";
                    redButton.style.backgroundColor = "";
                    yellowButton.style.backgroundColor = "";
                    greenButton.style.backgroundColor = "";

                    switch (sequence[i]) {
                        case "blue":
                            console.log("blue triggered");
                            blueButton.style.backgroundColor = "lightblue";
                            new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3').play();
                            break;
                        case "red":
                            console.log("red triggered");
                            redButton.style.backgroundColor = "lightcoral";
                            new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3').play();
                            break;
                        case "yellow":
                            console.log("yellow triggered");
                            yellowButton.style.backgroundColor = "lightyellow";
                            new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3').play();
                            break;
                        case "green":
                            console.log("green triggered");
                            greenButton.style.backgroundColor = "lightgreen";
                            new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3').play();
                            break;
                        default:
                            console.log("Switch Error");
                    }


                }, delay*i+1);
            }
            setTimeout(function(){
                blueButton.style.backgroundColor = "";
                redButton.style.backgroundColor = "";
                yellowButton.style.backgroundColor = "";
                greenButton.style.backgroundColor = "";
            }, delay);
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