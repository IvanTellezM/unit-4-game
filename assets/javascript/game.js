//Create a function that will start the game
$(document).ready(function() {

    //sets values to 0
    var win = 0;
    var loss = 0;
    var totalScore = 0;



    //The functions below generate a random number between 1-12 when the gem is clicked.
    //Upon start, a random number is generated between 19 and 120.  This number is fixed to the html.
    //Can also work as re-set fucntion 


    var random = Math.floor(Math.random() * 90) + 30;
    $("#boxRandom").html(random);

    var randomBlue = Math.floor(Math.random() * 11 + 1);

    var randomRed = Math.floor(Math.random() * 11 + 1);

    var randomPink = Math.floor(Math.random() * 11 + 1);

    var randomGreen = Math.floor(Math.random() * 11 + 1);


    //reset function
    function reset() {
        random = Math.floor(Math.random() * 90) + 30;
        $("#boxRandom").html(random);

        randomBlue = Math.floor(Math.random() * 11 + 1);

        randomRed = Math.floor(Math.random() * 11 + 1);


        randomPink = Math.floor(Math.random() * 11 + 1);


        randomGreen = Math.floor(Math.random() * 11 + 1);

        totalScore = 0;
        $("#totalBox").html(totalScore);
        currentScore = totalScore

    }


    // Below are the on click functions


    function addToScoreBlue() {
        var numberToAdd = parseInt(randomBlue);
        var currentScore = parseInt(totalScore);
        totalScore = numberToAdd + parseInt(currentScore);
    }

    function addToScoreRed() {
        var numberToAdd = parseInt(randomRed);
        var currentScore = parseInt(totalScore);
        totalScore = numberToAdd + parseInt(currentScore);
    }

    function addToScorePink() {
        var numberToAdd = parseInt(randomPink);
        var currentScore = parseInt(totalScore);
        totalScore = numberToAdd + parseInt(currentScore);
    }

    function addToScoreGreen() {
        var numberToAdd = parseInt(randomGreen);
        var currentScore = parseInt(totalScore);
        totalScore = numberToAdd + parseInt(currentScore);
    }

    $("#blue").on("click", function() {

        addToScoreBlue();

        $("#totalBox").html(totalScore);

        function stillPlaying() {

            var playerInt = parseInt(totalScore);
            var targetInt = parseInt(random);
            if (playerInt === targetInt) {
                alert("You win! Press 'ok' to play again.");
                win++
                $("#winBox").html(win);
                reset();

            } else if (playerInt > targetInt) {
                alert("You lose! Press 'ok' to play again.");
                loss++
                $("#lossBox").html(loss);
                reset();
            }

        }

        stillPlaying();

    });


    $("#red").on("click", function() {

        addToScoreRed();
        $("#totalBox").html(totalScore);

        function stillPlaying() {

            var playerInt = parseInt(totalScore);
            var targetInt = parseInt(random);
            if (playerInt === targetInt) {
                alert("You win! Press 'ok' to play again.");
                win++
                $("#winBox").html(win);
                reset();

            } else if (playerInt > targetInt) {
                alert("You lose! Press 'ok' to play again.");
                loss++
                $("#lossBox").html(loss);
                reset();
            }

        }

        stillPlaying();

    });



    $("#pink").on("click", function() {

        addToScorePink();
        $("#totalBox").html(totalScore);

        function stillPlaying() {

            var playerInt = parseInt(totalScore);
            var targetInt = parseInt(random);
            if (playerInt === targetInt) {
                alert("You win! Press 'ok' to play again.");
                win++
                $("#winBox").html(win);
                reset();

            } else if (playerInt > targetInt) {
                alert("You lose! Press 'ok' to play again.");
                loss++
                $("#lossBox").html(loss);
                reset();
            }

        }

        stillPlaying();

    });


    $("#green").on("click", function() {

        addToScoreGreen();
        $("#totalBox").html(totalScore);

        function stillPlaying() {

            var playerInt = parseInt(totalScore);
            var targetInt = parseInt(random);
            if (playerInt === targetInt) {
                alert("You win! Press 'ok' to play again.");
                win++
                $("#winBox").html(win);
                reset();

            } else if (playerInt > targetInt) {
                alert("You lose! Press 'ok' to play again.");
                loss++
                $("#lossBox").html(loss);
                reset();
            }

        }

        stillPlaying();

    });

});