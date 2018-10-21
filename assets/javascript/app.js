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
    wins = 0;
    losses = 0;
    $("#scorecard").hide();
    $("#choices").show();
    var counter = setInterval(timer, 1000);
    function timer() {
    questionTimer= questionTimer-1;
        if (questionTimer <= 0) {
            clearInterval(counter);
            console.log("Time up");
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
            console.log("correct");
            setTimeout(nextQuestion, 5000);
            clearInterval(counter)
            wins++
            $("#timer").hide();
            $("#question").html("<h1>You are correct!</h1>");
            $("#scorecard").show();
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
            $("#choices").hide();
            
            
        }else {
            console.log("incorrect");
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

function nextQuestion () {
     $("#timer").show();
     $("#choices").show();
    questionTimer = 60;
    var counter = setInterval(timer, 1000);
    function timer() {
    questionTimer= questionTimer-1;
         if (questionTimer <= 0) {
             clearInterval(counter);
             console.log("Time up");
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
    
     //PRESENT question
     $("#question").html("<h1> Question 2. Answer: D </h1>");
     //PRESENT answer options.
    
    $("#choices").html("<button> 2A </button>"),
    $("#choices").append("<br><button> 2B </button>"),
    $("#choices").append("<br><button> 2C </button>"),
    $("#choices").append("<br><button> 2D </button>"),
 
     // Assign each button a value 1-4
     $("#choices button").each(function (index, button) {
         $(button).attr("data-optionValue", index + 1);
     })
     $("#choices button").click(function(){
        var optionVal2 = $(this).attr("data-optionValue");

        if (Number(optionVal2) === 4) {
            console.log("correct");
            setTimeout(thirdQuestion, 5000);
            clearInterval(counter)
            wins++
            $("#timer").hide();
            $("#choices").hide();
            $("#question").html("<h1>You are correct!</h1>");
            $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
            
        }else {
            console.log("incorrect");
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
       
    //PRESENT question
    $("#question").html("<h1> Question 3. Answer: A </h1>");
    //PRESENT answer options.
    $("#choices").html("<button> 3A </button>"),
    $("#choices").append("<br><button> 3B </button>"),
    $("#choices").append("<br><button> 3C </button>"),
    $("#choices").append("<br><button> 3D </button>"),
    
        // Assign each button a value 1-4
    $("#choices button").each(function (index, button) {
            $(button).attr("data-optionValue", index + 1);
    })
    $("#choices button").click(function(){
        var optionVal3 = $(this).attr("data-optionValue");
   
        if (Number(optionVal3) === 1) {
               console.log("correct");
               setTimeout(fourthQuestion, 5000);
               clearInterval(counter)
               wins++
               $("#timer").hide();
               $("#choices").hide();
               $("#question").html("<h1>You are correct!</h1>");
               $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
               
           }else {
               console.log("incorrect");
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
       
    //PRESENT question
    $("#question").html("<h1> Question 4 Answer: D </h1>");
    //PRESENT answer options.
    $("#choices").html("<button> 4A </button>"),
    $("#choices").append("<br><button> 4B </button>"),
    $("#choices").append("<br><button> 4C </button>"),
    $("#choices").append("<br><button> 4D </button>"),
    
        // Assign each button a value 1-4
    $("#choices button").each(function (index, button) {
            $(button).attr("data-optionValue", index + 1);
    })
    $("#choices button").click(function(){
        var optionVal4 = $(this).attr("data-optionValue");
   
        if (Number(optionVal4) === 4) {
               console.log("correct");
               setTimeout(fifthQuestion, 5000);
               clearInterval(counter)
               wins++
               $("#timer").hide();
               $("#choices").hide();
               $("#question").html("<h1>You are correct!</h1>");
               $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
               
           }else {
               console.log("incorrect");
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
                console.log("Time up");
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
       
    //PRESENT question
    $("#question").html("<h1> Question 5. Answer: B</h1>");
    //PRESENT answer options.
    $("#choices").html("<button> 5A </button>"),
    $("#choices").append("<br><button> 5B </button>"),
    $("#choices").append("<br><button> 5C </button>"),
    $("#choices").append("<br><button> 5D </button>"),
    
        // Assign each button a value 1-4
    $("#choices button").each(function (index, button) {
            $(button).attr("data-optionValue", index + 1);
    })
    $("#choices button").click(function(){
        var optionVal5 = $(this).attr("data-optionValue");
   
        if (Number(optionVal5) === 2) {
               console.log("correct");
               setTimeout(sixthQuestion, 5000);
               clearInterval(counter)
               wins++
               $("#timer").hide();
               $("#choices").hide();
               $("#question").html("<h1>You are correct!</h1>");
               $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
               
           }else {
               console.log("incorrect");
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
                console.log("Time up");
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
       
    //PRESENT question
    $("#question").html("<h1> Question 6. Answer: A </h1>");
    //PRESENT answer options.
    $("#choices").html("<button> 6A </button>"),
    $("#choices").append("<br><button> 6B </button>"),
    $("#choices").append("<br><button> 6C </button>"),
    $("#choices").append("<br><button> 6D </button>"),
    
        // Assign each button a value 1-4
    $("#choices button").each(function (index, button) {
            $(button).attr("data-optionValue", index + 1);
    })
    $("#choices button").click(function(){
        var optionVal6 = $(this).attr("data-optionValue");
   
        if (Number(optionVal6) === 1) {
               console.log("correct");
               setTimeout(seventhQuestion, 5000);
               clearInterval(counter)
               wins++
               $("#timer").hide();
               $("#choices").hide();
               $("#question").html("<h1>You are correct!</h1>");
               $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
               
           }else {
               console.log("incorrect");
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
                console.log("Time up");
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
       
    //PRESENT question
    $("#question").html("<h1> Question 7. Answer: B </h1>");
    //PRESENT answer options.
    $("#choices").html("<button> 7A </button>"),
    $("#choices").append("<br><button> 7B </button>"),
    $("#choices").append("<br><button> 7C </button>"),
    $("#choices").append("<br><button> 7D </button>"),
    
        // Assign each button a value 1-4
    $("#choices button").each(function (index, button) {
            $(button).attr("data-optionValue", index + 1);
    })
    $("#choices button").click(function(){
        var optionVal7 = $(this).attr("data-optionValue");
   
        if (Number(optionVal7) === 2) {
               console.log("correct");
               setTimeout(endScreen, 4000);
               clearInterval(counter)
               wins++
               $("#timer").hide();
               $("#choices").hide();
               $("#question").html("<h1>You are correct!</h1>");
               $("#scorecard").html("<br>Wins: " + wins + "<br>Losses: " + losses);
               
           }else {
               console.log("incorrect");
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

function endScreen() {

    $("#question").html("<h1>Game Over! You had " + wins + " wins and " + losses + " losses.</h1>");
    $("#scorecard").html("<button> Play again </button");
    $("#scorecard button").click(startFunction);
}

    // REPEAT for 7 questions
        // Function to pull up next question, call it at the end of win/loss screen ?
    // Reset function--->
        // function around entire game, blank variables assigned at the beginning, etc. Call it once at beginning, and again ON CLICK
        // for "play again?" button. 
    