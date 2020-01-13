

    //show/hide as buttons are clicked to display next questions

    //start button clicked - display 1st question

    $("#startBtn").click(function StartQuiz() {
        $("#start").hide(1000);
        $("#qaDisplay1").show(1000);
    });

    //first answer option is clicked - display next question

    $("#btnA1").click(function showQ2() {
        $("#qaDisplay1").hide(1000);
        $("#qaDisplay2").show(1000);
    });

    $("#btnB1").click(function showQ2() {
        $("#qaDisplay1").hide(1000);
        $("#qaDisplay2").show(1000);
    });

    $("#btnC1").click(function showQ2() {
        $("#qaDisplay1").hide(1000);
        $("#qaDisplay2").show(1000);
    });

    //second answer option is clicked - display next question

    $("#btnA2").click(function showQ3() {
        $("#qaDisplay2").hide(1000);
        $("#qaDisplay3").show(1000);
    });

    $("#btnB2").click(function showQ3() {
        $("#qaDisplay2").hide(1000);
        $("#qaDisplay3").show(1000);
    });

    $("#btnC2").click(function showQ3() {
        $("#qaDisplay2").hide(1000);
        $("#qaDisplay3").show(1000);
    });

    //third answer option is clicked - display next question


    $("#btnA3").click(function showQ4() {
        $("#qaDisplay3").hide(1000);
        $("#qaDisplay4").show(1000);
    });

    $("#btnB3").click(function showQ4() {
        $("#qaDisplay3").hide(1000);
        $("#qaDisplay4").show(1000);
    });

    $("#btnC3").click(function showQ4() {
        $("#qaDisplay3").hide(1000);
        $("#qaDisplay4").show(1000);
    });

    //fourth answer option is clicked - display next question


    $("#btnA4").click(function showQ5() {
        $("#qaDisplay4").hide(1000);
        $("#qaDisplay5").show(1000);
    });

    $("#btnB4").click(function showQ5() {
        $("#qaDisplay4").hide(1000);
        $("#qaDisplay5").show(1000);
    });

    $("#btnC4").click(function showQ5() {
        $("#qaDisplay4").hide(1000);
        $("#qaDisplay5").show(1000);
    });

    //*fifth answer option is clicked - quiz end*

    

    $("#btnA5").click(function showEnd() {
        $("#qaDisplay5").hide(1000);
        $("#end").show(1000);
        alert("correct");
        $("#urScore").show(1000); 
        clearInterval(globalTimer);
        var finalScore = JSON.stringify(countDown - counter);
       localStorage.setItem("score", finalScore);
    });

    $("#btnB5").click(function showEnd() {
        $("#qaDisplay5").hide(1000);
        $("#end").show(1000);
        alert("try harder");
        $("#urScore").show(1000); 
        clearInterval(globalTimer);
        var finalScore = JSON.stringify(countDown - counter);
       localStorage.setItem("score", finalScore);
    });
    var  finalScore = JSON.stringify(countDown - counter);
    $("#btnC5").click(function showEnd() {
        $("#qaDisplay5").hide(1000);
        $("#end").show(1000);
        alert("try harder");
        $("#urScore").show(1000); 
        clearInterval(globalTimer);
        finalScore = JSON.stringify(countDown - counter);
       localStorage.setItem("score", finalScore);
    });


    //Ask for initials save score to local storage^^
    
    var userInitials = prompt("Hi! Welcome to a coding quiz. Enter your intitals!");
    localStorage.setItem("initials", userInitials);

    //display in high score div from local storage
    var highScoreDisplay = JSON.parse(localStorage.getItem(finalScore));
    var initialDisplay = JSON.parse(localStorage.getItem(userInitials));

  
    

    //show high scores when button is clicked on start page

    $("#highScores").click(function highScoreClicked() {
        $("#start").hide(1000);
        $("#qaDisplay1").hide(1000);
        $("#qaDisplay2").hide(1000);
        $("#qaDisplay3").hide(1000);
        $("#qaDisplay4").hide(1000);
        $("#qaDisplay5").hide(1000);
        $("#fastestTime").show(1000); 
        $("#hs1").append(initialDisplay + " : " + highScoreDisplay);
        console.log(initialDisplay)
    });

//Timer that counts down from 75 seconds
//*Still need to build wrong question selected function*

var counter = 0;
var countDown = 75;
function timeTick() {
    counter++;
    console.log("timeout!", counter);

    $("#timer").html(countDown - counter);

    if (counter >= countDown) {
     
        $("#start").hide(1000);
        $("#qaDisplay1").hide(1000);
        $("#qaDisplay2").hide(1000);
        $("#qaDisplay3").hide(1000);
        $("#qaDisplay4").hide(1000);
        $("#qaDisplay5").hide(1000);
        $("#end").show(1000); 

        $("#urScore").show(1000); 
        
        clearInterval(globalTimer); 

        setTimeout(function() {prompt("FAIL")}, 1000);
        
    };
    };
    

var globalTimer;

function timeStart() {
    console.log('Time has started')
    globalTimer = setInterval(timeTick, 1000);
}

$("#startBtn").click(timeStart);

function wrongAnswer() {
    counter += 15;
};

//array housing questions and answers

var questions = [
    {
        Question : "What does CSS stand for?",
        AnswerOne : "Cascading Style Sheets",
        AnswerTwo : "Crazy Science Stuff",
        AnswerThree : "Computer Surrogate symbols"
    },
    {
        Question : "Javascript deals with:",
        AnswerOne : "Front End",
        AnswerTwo : "Back End",
        AnswerThree : "Both"
    },
    {
        Question : "An h1 tag is what kind of element?",
        AnswerOne : "HTML",
        AnswerTwo : "JQuery",
        AnswerThree : "Not a real thing"
    },
    {
        Question : "A period symbol refers to what syntax in HTML?",
        AnswerOne : "HTML element",
        AnswerTwo : "Class",
        AnswerThree : "ID"
    },
    {
        Question : "Web development is the:",
        AnswerOne : "Best",
        AnswerTwo : "Worst",
        AnswerThree : "Future"
    }
];
//Display first question after start button is clicked

    function startAppend() {
    $("#question1").append(questions[0].Question);
    $("#btnA1").append(questions[0].AnswerOne);
    $("#btnB1").append(questions[0].AnswerTwo);
    $("#btnC1").append(questions[0].AnswerThree);
};

$("#startBtn").click(startAppend);


//append 2nd question to appropriate html elements when buttons from Q1 are clicked

function AppendQtwo() {
    $("#question2").append(questions[1].Question);
    $("#btnA2").append(questions[1].AnswerOne);
    $("#btnB2").append(questions[1].AnswerTwo);
    $("#btnC2").append(questions[1].AnswerThree);
};

$("#btnA1").click(function () {
    alert("correct");
    AppendQtwo();
});
$("#btnB1").click(function () {
    alert("gees louise!");
    wrongAnswer();
    AppendQtwo();
});
$("#btnC1").click(function () {
    alert("wrong!");
    wrongAnswer();
    AppendQtwo();
});



//append 3rd question to appropriate html elements when buttons from Q2 are clicked

function AppendQthree() {
    $("#question3").append(questions[2].Question);
    $("#btnA3").append(questions[2].AnswerOne);
    $("#btnB3").append(questions[2].AnswerTwo);
    $("#btnC3").append(questions[2].AnswerThree);
};

$("#btnA2").click(function () {
    alert("wrong");
    wrongAnswer();
    AppendQthree();
});
$("#btnB2").click(function () {
    alert("woooow!");
    wrongAnswer();
    AppendQthree();
});
$("#btnC2").click(function () {
    alert("correct");
    AppendQthree();
});

//append 4th question to appropriate html elements when buttons from Q3 are clicked


function AppendQfour() {
    $("#question4").append(questions[3].Question);
    $("#btnA4").append(questions[3].AnswerOne);
    $("#btnB4").append(questions[3].AnswerTwo);
    $("#btnC4").append(questions[3].AnswerThree);
};

$("#btnA3").click(function () {
    alert("correct");
    AppendQfour();
});
$("#btnB3").click(function () {
    alert("be smarter!");
    wrongAnswer();
    AppendQfour();
});
$("#btnC3").click(function () {
    alert("wrong!");
    wrongAnswer();
    AppendQfour();
});

//append 5th question to appropriate html elements when buttons from Q4 are clicked


function AppendQfive() {
    $("#question5").append(questions[4].Question);
    $("#btnA5").append(questions[4].AnswerOne);
    $("#btnB5").append(questions[4].AnswerTwo);
    $("#btnC5").append(questions[4].AnswerThree);
};

$("#btnA4").click(function () {
    alert("wrong");
    wrongAnswer();
    AppendQfive();
});
$("#btnB4").click(function () {
    alert("correct");
    AppendQfive();
});
$("#btnC4").click(function () {
    alert("try harder!");
    wrongAnswer();
    AppendQfive();
});

//still need to:
//high score functionality
//local storage



    
    
