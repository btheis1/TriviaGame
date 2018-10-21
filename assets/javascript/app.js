// DEFINE global variables
    // timer
    var questionTimer = 60;
    // wins counter
    var wins = 0;
    // losses counter
    var losses = 0;

//Functions

//START game on button click
$("#start").click(startFunction)

function startFunction() {
    //CLEAR out settings for "play again" functioning
    $("#instructions").hide();
    wins = 0;
    losses = 0;
    $("#scorecard").hide();
    $("#choices").show();
    $("#timer").show();

    //Create timer
    var counter = setInterval(timer, 1000);
    function timer() {
    questionTimer= questionTimer-1;
        if (questionTimer <= 0) {
            clearInterval(counter);
            setTimeout(nextQuestion, 5000);
            $("#timer").hide();
            $("#question").html("<h>Time's up! The correct answer was <strong>Ava</strong>.<br>Get ready for your next question...</h>");
            losses++;
            $("#scorecard").show();
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
            $("#choices").hide();
            return;
    }
    //SHOW timer on page
    $("#timer").text("Time Left: " + questionTimer);
    }  
    
    //HIDE button
    $("#start").hide();

    //PRESENT question
    $("#question").html("<h1>1. In the 2015 film <i>Ex Machina</i>, what is the name of the artificially intelligent robot being tested?</h1>");

    //PRESENT answer options.
    $("#choices").html("<button> Eve </button>"),
    $("#choices").append("<br><button> Allie </button>"),
    $("#choices").append("<br><button> Ava </button>"),
    $("#choices").append("<br><button> Al </button>"),

    // Assign each button a value 1-4
    $("#choices button").each(function (index, button) {
        $(button).attr("data-optionValue", index + 1);
    })
 
    //on user answer
    $("#choices button").click(function(){
        var optionVal = $(this).attr("data-optionValue");

        if (Number(optionVal) === 3) {
            // CALL next function after timeout
            setTimeout(nextQuestion, 5000);
            //RESET timer
            clearInterval(counter)
            wins++
            $("#timer").hide();
            $("#question").html("<h1>That's right!<br>Get ready for your next question...</h1>");
            $("#scorecard").show();
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
            $("#choices").hide();
            
            
        }else {
            setTimeout(nextQuestion, 5000);
            clearInterval(counter)
            losses++
            $("#timer").hide();
            $("#question").html("<h1>Nope, sorry! Ava was the name of the eerily human robot.<br>Get ready for your next question...</h1>");
            $("#scorecard").show();
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
            $("#choices").hide();
        }
    })    
}

// REPEAT 7 times, with altered text and answers
function nextQuestion () {
     $("#timer").show();
     $("#choices").show();
    questionTimer = 60;
    var counter = setInterval(timer, 1000);
    function timer() {
    questionTimer= questionTimer-1;
         if (questionTimer <= 0) {
             clearInterval(counter);
             setTimeout(thirdQuestion, 5000);
             $("#timer").hide();
             $("#question").html("<h1>Time's up! The correct answer was D, the Turing Test.<br>Get ready for your next question...</h1>");
             losses++;
             $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
             $("#choices").hide();
             return;
         }
        $("#timer").text("Time Left: " + questionTimer);
    }

    $("#question").html("<h1>What test is used to decide if a program's AI is truly artificial intelligence?</h1>");
    
    $("#choices").html("<button> Taste Test </button>"),
    $("#choices").append("<br><button> Competence Test </button>"),
    $("#choices").append("<br><button> Tesla Test </button>"),
    $("#choices").append("<br><button> Turing Test </button>"),
 
    $("#choices button").each(function (index, button) {
         $(button).attr("data-optionValue", index + 1);
    })
    $("#choices button").click(function(){
        var optionVal2 = $(this).attr("data-optionValue");

        if (Number(optionVal2) === 4) {
            setTimeout(thirdQuestion, 5000);
            clearInterval(counter)
            wins++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>Correct! Get ready for your next question...</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
            
        }else {
            setTimeout(thirdQuestion, 5000);
            clearInterval(counter)
            losses++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>Nope! The Turing Test was the right answer.<br>Get ready for your next question...</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
        }
    })    
}

function thirdQuestion () {
    $("#timer").show();
    $("#choices").show();
    questionTimer = 60;
    var counter = setInterval(timer, 1000);
    function timer() {
       questionTimer= questionTimer-1;
            if (questionTimer <= 0) {
                clearInterval(counter);
                console.log("Time up");
                setTimeout(fourthQuestion, 5000);
                $("#timer").hide();
                $("#question").html("<h1>Time's up! Viewers decide for themselves whether Rick was a replicant or not.<br>Get ready for your next question...</h1>");
                losses++;
                $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
                $("#choices").hide();
                return;
            }
        $("#timer").text("Time Left: " + questionTimer);
    }
       
    $("#question").html("<h1>3. In the 1982 neo-noir <i>Blade Runner</i>, was the protagonist Rick Deckard a replicant?</h1>");
    
    $("#choices").html("<button> We don't know! </button>"),
    $("#choices").append("<br><button> I don't care! </button>"),
    $("#choices").append("<br><button> Yes! </button>"),
    $("#choices").append("<br><button> No! </button>"),
    
    $("#choices button").each(function (index, button) {
        $(button).attr("data-optionValue", index + 1);
    })
    $("#choices button").click(function(){
        var optionVal3 = $(this).attr("data-optionValue");
   
        if (Number(optionVal3) === 1) {
            setTimeout(fourthQuestion, 5000);
            clearInterval(counter)
            wins++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>That's right! Ridley Scott left the film open-ended about whether or not Rick was totally human.<br>Get ready for your next question...</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
               
        }else {
            setTimeout(fourthQuestion, 5000);
            clearInterval(counter)
            losses++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>It's arguable, but officially, the film is open-ended about Rick Deckard's humanity.<br>Get ready for your next question...</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
        }
    })    
}


function fourthQuestion() {
    $("#timer").show();
    $("#choices").show();
    questionTimer = 60;
    var counter = setInterval(timer, 1000);
    function timer() {
       questionTimer= questionTimer-1;
            if (questionTimer <= 0) {
                clearInterval(counter);
                console.log("Time up");
                setTimeout(fifthQuestion, 5000);
                $("#timer").hide();
                $("#question").html("<h1>Time's up! WALL-E made friends with EVE.<br>Get ready for your next question...</h1>");
                losses++;
                $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
                $("#choices").hide();
                return;
            }
           $("#timer").text("Time Left: " + questionTimer);
    }
       
    $("#question").html("<h1>4. In the Disney/Pixar film <i>WALL-E</i>, which other robot does WALL-E befrend?</h1>");
    $("#choices").html("<button> AVA </button>"),
    $("#choices").append("<br><button> R2D2 </button>"),
    $("#choices").append("<br><button> AL </button>"),
    $("#choices").append("<br><button> EVE </button>"),
    
    $("#choices button").each(function (index, button) {
            $(button).attr("data-optionValue", index + 1);
    })
    $("#choices button").click(function(){
        var optionVal4 = $(this).attr("data-optionValue");
   
        if (Number(optionVal4) === 4) {
            setTimeout(fifthQuestion, 5000);
            clearInterval(counter)
            wins++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>You are correct!<br>Get ready for your next question...</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
               
        }else {
            setTimeout(fifthQuestion, 5000);
            clearInterval(counter)
            losses++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>Incorrect. WALL-E met a robot named EVE.<br>Get ready for your next question...</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
        }
    })    
}

function fifthQuestion() {
    $("#timer").show();
    $("#choices").show();
    questionTimer = 60;
    var counter = setInterval(timer, 1000);
    function timer() {
       questionTimer= questionTimer-1;
            if (questionTimer <= 0) {
                clearInterval(counter);
                setTimeout(sixthQuestion, 5000);
                $("#timer").hide();
                $("#question").html("<h1>Time's up! The correct answer was Black Mirror.<br>Get ready for your next question...</h1>");
                losses++;
                $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
                $("#choices").hide();
                return;
            }
           $("#timer").text("Time Left: " + questionTimer);
    }
       
    $("#question").html("<h1>Which modern tv show was inspired by a real-life robot created by Boston Dynamics?</h1>");
    
    $("#choices").html("<button> Roseanne </button>"),
    $("#choices").append("<br><button> Black Mirror </button>"),
    $("#choices").append("<br><button> Westworld </button>"),
    $("#choices").append("<br><button> Big Bang Theory </button>"),
    
    $("#choices button").each(function (index, button) {
            $(button).attr("data-optionValue", index + 1);
    })
    $("#choices button").click(function(){
        var optionVal5 = $(this).attr("data-optionValue");
   
        if (Number(optionVal5) === 2) {
            setTimeout(sixthQuestion, 5000);
            clearInterval(counter);
            wins++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>That's right! Watch out for the hound...<br>Next question coming up...</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
               
        }else {
            setTimeout(sixthQuestion, 5000);
            clearInterval(counter)
            losses++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>Incorrect. Black Mirror's episode <i>Metalhead</i> is a futuristic reimagining of the Boston Dynamics Dog.<br>Next question coming up...</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
        }
    })    
}

function sixthQuestion() {
    $("#timer").show();
    $("#choices").show();
    questionTimer = 60;
    var counter = setInterval(timer, 1000);
    function timer() {
       questionTimer= questionTimer-1;
            if (questionTimer <= 0) {
                clearInterval(counter);
                setTimeout(seventhQuestion, 5000);
                $("#timer").hide();
                $("#question").html("<h1>Time's up! The correct answer was Sophia.<br>Get ready for your next question...</h1>");
                losses++;
                $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
                $("#choices").hide();
                return;
            }
        $("#timer").text("Time Left: " + questionTimer);
    }
    
    $("#question").html("<h1>Which conversation robot is famous for the creepy things she sometimes says about humans?</h1>");
    
    $("#choices").html("<button> Sophia </button>"),
    $("#choices").append("<br><button> Mitsuku </button>"),
    $("#choices").append("<br><button> Sasha </button>"),
    $("#choices").append("<br><button> Alli </button>"),
   
    $("#choices button").each(function (index, button) {
            $(button).attr("data-optionValue", index + 1);
    })
    $("#choices button").click(function(){
        var optionVal6 = $(this).attr("data-optionValue");
   
        if (Number(optionVal6) === 1) {
            setTimeout(seventhQuestion, 5000);
            clearInterval(counter)
            wins++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>You are correct!<br>Sophia's pulling up the next question...</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
               
           }else {
            setTimeout(seventhQuestion, 5000);
            clearInterval(counter)
            losses++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>Incorrect.<br>Sophia has a huge presence on youtube thanks to her sometimes-creepy responses.<br>Get ready for your next question...</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
        }
    })    
}

function seventhQuestion() {
    $("#timer").show();
    $("#choices").show();
    questionTimer = 60;
    var counter = setInterval(timer, 1000);
    function timer() {
       questionTimer= questionTimer-1;
            if (questionTimer <= 0) {
                clearInterval(counter);
                setTimeout(endScreen, 4000);
                $("#timer").hide();
                $("#question").html("<h1>Time's up! Hal was the AI gone bad.<br>Calculating results...</h1>");
                losses++;
                $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
                $("#choices").hide();
                return;
            }
        $("#timer").text("Time Left: " + questionTimer);
    }
       
    $("#question").html("<h1>7. In Kubrick's <i>2001: A Space Oddity</i>, what was the name of the Artificial Intelligence who ran the ship?</h1>");
    
    $("#choices").html("<button> Conan </button>"),
    $("#choices").append("<br><button> Sal </button>"),
    $("#choices").append("<br><button> Bowman </button>"),
    $("#choices").append("<br><button> Hal </button>"),
   
    $("#choices button").each(function (index, button) {
            $(button).attr("data-optionValue", index + 1);
    })
    $("#choices button").click(function(){
        var optionVal7 = $(this).attr("data-optionValue");
   
        if (Number(optionVal7) === 4) {
            setTimeout(endScreen, 4000);
            clearInterval(counter)
            wins++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>You are correct!<br>Calculating results...</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
               
        }else {
            setTimeout(endScreen, 4000);
            clearInterval(counter)
            losses++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>Incorrect. HAL 9000, or Hal, ran the ship.</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
        }
    })  
}
//END of game function
function endScreen() {
    //Display game over screen
    $("#question").html("<h1>Game Over! You had " + wins + " wins and " + losses + " losses.</h1>");
    //CREATE button to play again
    $("#scorecard").html("<button> Play again </button");
    //On click of "play again", call startFunction
    $("#scorecard button").click(startFunction);
}
