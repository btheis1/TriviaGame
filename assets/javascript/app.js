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
            $("#question").html("<h1>Time's up! The correct answer was C. </h1>");
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
    $("#question").html("<h1> Question 1. Answer: C </h1>");

    //PRESENT answer options.
    $("#choices").html("<button> Option A </button>"),
    $("#choices").append("<br><button> Option B </button>"),
    $("#choices").append("<br><button> Option C </button>"),
    $("#choices").append("<br><button> Option D </button>"),

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
            $("#question").html("<h1>You are correct!</h1>");
            $("#scorecard").show();
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
            $("#choices").hide();
            
            
        }else {
            setTimeout(nextQuestion, 5000);
            clearInterval(counter)
            losses++
            $("#timer").hide();
            $("#question").html("<h1>Incorrect. The correct answer was C</h1>");
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
             $("#question").html("<h1>Time's up! The correct answer was D. </h1>");
             losses++;
             $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
             $("#choices").hide();
             return;
         }
        $("#timer").text("Time Left: " + questionTimer);
    }

    $("#question").html("<h1> Question 2. Answer: D </h1>");
    
    $("#choices").html("<button> 2A </button>"),
    $("#choices").append("<br><button> 2B </button>"),
    $("#choices").append("<br><button> 2C </button>"),
    $("#choices").append("<br><button> 2D </button>"),
 
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
            $("#question").html("<h1>You are correct!</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
            
        }else {
            setTimeout(thirdQuestion, 5000);
            clearInterval(counter)
            losses++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>Incorrect. The correct answer was d</h1>");
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
                $("#question").html("<h1>Time's up! The correct answer was A. </h1>");
                losses++;
                $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
                $("#choices").hide();
                return;
            }
        $("#timer").text("Time Left: " + questionTimer);
    }
       
    $("#question").html("<h1> Question 3. Answer: A </h1>");
    
    $("#choices").html("<button> 3A </button>"),
    $("#choices").append("<br><button> 3B </button>"),
    $("#choices").append("<br><button> 3C </button>"),
    $("#choices").append("<br><button> 3D </button>"),
    
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
            $("#question").html("<h1>You are correct!</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
               
        }else {
            setTimeout(fourthQuestion, 5000);
            clearInterval(counter)
            losses++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>Incorrect. The correct answer was A</h1>");
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
                $("#question").html("<h1>Time's up! The correct answer was D. </h1>");
                losses++;
                $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
                $("#choices").hide();
                return;
            }
           $("#timer").text("Time Left: " + questionTimer);
    }
       
    $("#question").html("<h1> Question 4 Answer: D </h1>");
    $("#choices").html("<button> 4A </button>"),
    $("#choices").append("<br><button> 4B </button>"),
    $("#choices").append("<br><button> 4C </button>"),
    $("#choices").append("<br><button> 4D </button>"),
    
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
            $("#question").html("<h1>You are correct!</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
               
        }else {
            setTimeout(fifthQuestion, 5000);
            clearInterval(counter)
            losses++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>Incorrect. The correct answer was D</h1>");
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
                $("#question").html("<h1>Time's up! The correct answer was B. </h1>");
                losses++;
                $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
                $("#choices").hide();
                return;
            }
           $("#timer").text("Time Left: " + questionTimer);
    }
       
    $("#question").html("<h1> Question 5. Answer: B</h1>");
    
    $("#choices").html("<button> 5A </button>"),
    $("#choices").append("<br><button> 5B </button>"),
    $("#choices").append("<br><button> 5C </button>"),
    $("#choices").append("<br><button> 5D </button>"),
    
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
            $("#question").html("<h1>You are correct!</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
               
        }else {
            setTimeout(sixthQuestion, 5000);
            clearInterval(counter)
            losses++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>Incorrect. The correct answer was B</h1>");
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
                $("#question").html("<h1>Time's up! The correct answer was A. </h1>");
                losses++;
                $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
                $("#choices").hide();
                return;
            }
        $("#timer").text("Time Left: " + questionTimer);
    }
    
    $("#question").html("<h1> Question 6. Answer: A </h1>");
    
    $("#choices").html("<button> 6A </button>"),
    $("#choices").append("<br><button> 6B </button>"),
    $("#choices").append("<br><button> 6C </button>"),
    $("#choices").append("<br><button> 6D </button>"),
   
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
            $("#question").html("<h1>You are correct!</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
               
           }else {
            setTimeout(seventhQuestion, 5000);
            clearInterval(counter)
            losses++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>Incorrect. The correct answer was A</h1>");
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
                $("#question").html("<h1>Time's up! The correct answer was B. </h1>");
                losses++;
                $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
                $("#choices").hide();
                return;
            }
        $("#timer").text("Time Left: " + questionTimer);
    }
       
    $("#question").html("<h1> Question 7. Answer: B </h1>");
    
    $("#choices").html("<button> 7A </button>"),
    $("#choices").append("<br><button> 7B </button>"),
    $("#choices").append("<br><button> 7C </button>"),
    $("#choices").append("<br><button> 7D </button>"),
   
    $("#choices button").each(function (index, button) {
            $(button).attr("data-optionValue", index + 1);
    })
    $("#choices button").click(function(){
        var optionVal7 = $(this).attr("data-optionValue");
   
        if (Number(optionVal7) === 2) {
            setTimeout(endScreen, 4000);
            clearInterval(counter)
            wins++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>You are correct!</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
               
        }else {
            setTimeout(endScreen, 4000);
            clearInterval(counter)
            losses++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>Incorrect. The correct answer was B</h1>");
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
