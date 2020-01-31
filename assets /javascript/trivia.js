$(document).ready(function() {
    var questions = {
        one: { 
            quesion: "Who is Nacy's brother?",
            answers: ["Jake", "Tom", "Bob", "Drew"],
            correct: "Jake"
        },
        two: {
            question: "Where is Starington?",
            answers: ["NC", "SC", "NA", "BG"],
            correct: "NC"
        },
        three: {
            question: "How tall is Larry?",
            answers: ["56", "67", "78", "66"],
            correct: "56"
        },
    };
var rightDiv = $("<div class='rightAns'></div>");
var answerDiv = $("<div class='answers'></div>");
var timerDiv = $("<div class='countdown'><h2><h2></div>");
var quesionDiv = $("<div class='queston'><h2></h2></div>");

var keys = Object.keys(quesions);
var key = keys[n];
var time = 30;
var n =0;

function setup() {
    $(".start").css("display", "none");
    var correct = 0;
    var incorrect 0;
    var timeout = 0;
    n=0;
    key = keys[n];

    var reset = function() {
        time = 40;
        $(".rightAns").empty();
        $(".rightAns").remove();
        $(".main").append(timerDiv);
        $(".countdown h2").html("TIME LEFT: " + time);
        $(".main").append(questionDiv);
        $(".main").append(answerDiv);
}

reset();

function showQA() {
    $(".question h2").html(questions[key].question);
    for (var i = 0; i < questions[key].answers.length; i++) {
        $(".answers").append("<p class='answer'>" + questions[key].answers [i] + "<p>");
    }
    $(".answers p").on("click", function() {
        var selected = $(this).text();

        if (selected === questions[key].correct) {
            clearInterval(counter);
            $(timerDiv).remove();
            $(questionDiv).remove();
            $(".answers p").remove();
            $(answerDiv).remove();
            $(".main").append(rightDiv);
            (".rightAns").text("correct");
            correct++;
        } else {
            clearInterval(counter);
            $(timerDiv).remove();
            $(questionDiv).remove();
            $(".answers p").remove();
            $(answerDiv).remove();
            $(".main").append(rightDiv);
            $(".rightAns").text("wrong answer: " + questions[key].correct);
            incorrect++;
        }
        n++;
        key = keys[n];

            if (checkIfLast()) {
                displayFinalScore();

            } else {
                setTimeout(countReset, 3000);
                setTimeout(reset, 3000);
                setTimeout(showQA, 3000);
            }
});
}

showQA();

var counter = setInterval(count, 500);

function count() {
time--
$(".countdown h3").html("TIME REMAINING: " + time);
 
if (time < 1) {
clearInterval(counter);
$(timerDiv).remove();
$(questionDiv).remove();
$(".answers p").remove();
$(answerDiv).remove();
$(".main").append(rightDiv);
$(".rightAns").html("OUT OF TIME! THE CORRECT ANSWER WAS: " + questions[key].correct);
timeout++;
n++;
key = keys[n];

    if (checkIfLast()) {
    displayFinalScore();
    } else {
    setTimeout(countReset, 3000);
    setTimeout(reset, 3000);
    setTimeout(showQA, 3000);
    }
}
}

function checkIfLast() {
if (key === undefined) {
return true;
}
return false;
}

function countReset() {
counter = setInterval(count, 200);
}


function displayFinalScore() {
$(".rightAns").remove();
$(".start").css("margin-top", "30px");
$(".start").css("display", "inline");
$(".main").prepend("<h2>UNANSWERED: " + timeout + "</h2>");
$(".main").prepend("<h2>INCORRECT: " + incorrect + "</h2>");
$(".main").prepend("<h2>CORRECT: " + correct + "</h2>");
}
};

$(document).on("click", ".start", setup);

});
        }
        n++;
        key = keys[n];

            if (checkIfLast()) {
                displayFinalScore();

            } else {
                setTimeout(countReset, 3000);
                setTimeout(reset, 3000);
                setTimeout(showQA, 3000);
            }
});
}

showQA();

var counter = setInterval(count, 500);

function count() {
time--
$(".countdown h3").html("TIME REMAINING: " + time);
 
if (time < 1) {
clearInterval(counter);
$(timerDiv).remove();
$(questionDiv).remove();
$(".answers p").remove();
$(answerDiv).remove();
$(".main").append(rightDiv);
$(".rightAns").html("OUT OF TIME! THE CORRECT ANSWER WAS: " + questions[key].correct);
timeout++;
n++;
key = keys[n];

    if (checkIfLast()) {
    displayFinalScore();
    } else {
    setTimeout(countReset, 3000);
    setTimeout(reset, 3000);
    setTimeout(showQA, 3000);
    }
}
}

function checkIfLast() {
if (key === undefined) {
return true;
}
return false;
}

function countReset() {
counter = setInterval(count, 200);
}


function displayFinalScore() {
$(".rightAns").remove();
$(".start").css("margin-top", "30px");
$(".start").css("display", "inline");
$(".main").prepend("<h2>UNANSWERED: " + timeout + "</h2>");
$(".main").prepend("<h2>INCORRECT: " + incorrect + "</h2>");
$(".main").prepend("<h2>CORRECT: " + correct + "</h2>");
}
};

$(document).on("click", ".start", setup);

});