// DEFINE global variables
    // timer
    var questionTimer = 60;
    // wins counter
    var wins = 0;
    // losses counter
    var losses = 0;

//Functions

//START game on button click
$("#start").click(function() {

    //CREATE timer
    var questionTimer = 60;
    var counter = setInterval(timer, 1000);
    
    function timer() {
    questionTimer= questionTimer-1;
        if (questionTimer <= 0) {
            clearInterval(counter);
            //counter ended, do something here
            return;
    }
    //SHOW timer on page
    $("#timer").html("Time Left: " + questionTimer);
    }   
    //HIDE button
    $("#start").hide();

    //PRESENT question
    $("#question").html("<h1> Question 1. Answer: C </h1>");

    //PRESENT answer options.
    
        $("#choices").append("<button> Option A </button>"),
        $("#choices").append("<button> Option B </button>"),
        $("#choices").append("<button> Option C </button>"),
        $("#choices").append("<button> Option D </button>"),


    $("#choices button").each(function (index, button) {
        $(button).attr("data-optionValue", index + 1);
    })

    

    $("#choices button").click(function(){
        var optionVal = $(this).attr("data-optionValue");

        if (Number(optionVal) === 3) {
            console.log("correct");
        }else {
            console.log("incorrect");
        }
    }) 
   
    
})


//when timer = 0, SHOW answer page

    //PRESENT answer options. Array -- buttons with different index numbers?
        //ON CLICK
            //COMPARE user answer to index number of correct answer. ie:
            //IF i === 3 (correct answer),
                 //DISPLAY screen "You win!"
                // INCREASE wins counter by 1
                // SET screen time out after ~ 20 seconds, DISPLAY next question

             //else (wrong answer)
                // DISPLAY screen "You lost, correct answer = x"
                // INCREASE losses counter by 1
                // SET screen time out after ~20 seconds, DISPLAY next question

    // REPEAT for 7 questions
        // Function to pull up next question, call it at the end of win/loss screen ?
    // Reset function--->
        // function around entire game, blank variables assigned at the beginning, etc. Call it once at beginning, and again ON CLICK
        // for "play again?" button. 
    