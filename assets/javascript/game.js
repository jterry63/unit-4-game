// Variables ---------------------------------------------

var randomNumber
var crystalOne
var crystalTwo
var crystalThree
var crystalFour
var score
var wins = 0;
var losses = 0;

// Functions ---------------------------------------------

function initialize() {
    randomNumber = Math.floor(Math.random() * 100 + 18);
    crystalOne = Math.floor(Math.random() * 10 + 2);
    crystalTwo = Math.floor(Math.random() * 12 + 1);
    crystalThree = Math.floor(Math.random() * 14 + 1);
    crystalFour = Math.floor(Math.random() * 12 + 1);
    score = 0;
    $('#randomNumber').html(randomNumber)
    $('#userScore').html(score)
    console.log("Random Number: " + randomNumber);
    console.log("Crystal 1 : " + crystalOne);
    console.log("Crystal 2 : " + crystalTwo);
    console.log("Crystal 3 : " + crystalThree);
    console.log("Crystal 4 : " + crystalFour);

};

function winOrLose() {
    if (score === randomNumber) {
        alert("You Win!!! Press Ok to play again");
        wins++;
        $('#randomNumber').empty();
        initialize();
    }
    else if (score > randomNumber) {
        alert("You Lose!!! Press Ok to play again");
        losses++;
        $('#randomNumber').empty();
        initialize();
    }

    $('#wins').html("Wins: " + wins);
    $('#losses').html("Losses: " + losses)
}

function startGame() {
    $('#crystal1').on("click", function () {
        score += crystalOne;
        $('#userScore').html(score);
        winOrLose();
    });

    $('#crystal2').on("click", function () {
        score += crystalTwo;
        $('#userScore').html(score);
        winOrLose();
    });

    $('#crystal3').on("click", function () {

        score += crystalThree;
        $('#userScore').html(score);
        winOrLose();
    });

    $('#crystal4').on("click", function () {

        score += crystalFour;
        $('#userScore').html(score);
        winOrLose();
        console.log("score: " + score);
    });

};


// Call functions ------------------------------------

initialize();
startGame();
