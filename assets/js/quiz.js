
let questOne = {
    question:"What symbol is used to select elements by class in CSS?", 
    correct:".", 
    incorrectOne:"#", 
    incorrectTwo:"*", 
    incorrectThree:"$"
};
let questTwo = {
    question:"What data type is captured when a user responds to the window.prompt() method?", 
    correct:"string", 
    incorrectOne:"number", 
    incorrectTwo:"boolean", 
    incorrectThree:"array"
};
let questThree = {
    question:"Which of the following is not a javascript keyword for a variable?", 
    correct:"set", 
    incorrectOne: "var", 
    incorrectTwo:"let", 
    incorrectThree:"const"
};
let questFour = {
    question:"Which html element does not require a closing tag?", 
    correct:"img", 
    incorrectOne:"header", 
    incorrectTwo:"p", 
    incorrectThree:"a"
};
let questFive = {
    question:"How do you create a function named 'myFunction'?", 
    correct:"function myFunction();", 
    incorrectOne: "create.function(myFunction);", 
    incorrectTwo:"function = myFunction();", 
    incorrectThree:'function():"myFunction";'
};
let questSix = {
    question:"How do you write the 'not equal to' javascript operator?", 
    correct:"!=", 
    incorrectOne:"/=", 
    incorrectTwo:"==", 
    incorrectThree:"?"
};
let questSeven = {
    question:"How do you add a comment in CSS?", 
    correct:"/* This is a comment. */", 
    incorrectOne:"<!-- This is a comment. -->", 
    incorrectTwo:"*** This is a comment. ***", 
    incorrectThree:"// This is a comment."
};
let questEight = {
    question:"Which of the following values evaluates to false in javascript?", 
    correct:"0", 
    incorrectOne:"'0'", 
    incorrectTwo:"-1", 
    incorrectThree:"'empty'"
};

let questionObjectsArray = [questOne, questTwo, questThree, questFour, questFive, questSix, questSeven, questEight,];

let timeRemainingEl = document.querySelector('#time-remaining');
let timeRemaining;

function startTimer() {
    timeRemaining = 100;
    timeRemainingEl.innerHTML = `Time Remaining: ${timeRemaining}`;
    // console.log(`Time Remaining: ${timeRemaining}`);
    let timerSetInterval = setInterval(function(){
        if (timeRemaining < 1) {
            timeRemaining = 0;
            timeRemainingEl.innerHTML = `Time Remaining: ${timeRemaining}`;
            clearInterval(timerSetInterval);
            return;
        }
        timeRemaining--;
        timeRemainingEl.innerHTML = `Time Remaining: ${timeRemaining}`;
        // console.log(`Time Remaining: ${timeRemaining}`);
    }, 1000);
} 

let mainEl = document.querySelector("#main");
let questionCardEl = document.createElement("div");
let questionCardH2 = document.createElement("h2");

function displayQuestionCard(selectedQuestion) {
    if (mainEl.contains(questionCardEl)) {
        questionCardEl.removeChild(questionCardH2)
        questionCardEl.remove();
    } 
    questionCardEl.className = "question-card";
    questionCardH2.innerText = selectedQuestion.question;
    questionCardEl.appendChild(questionCardH2);
    mainEl.appendChild(questionCardEl);
}

function beginQuiz() {
    var i = 0;
    startTimer();
    displayQuestionCard(questionObjectsArray[i])
    }


// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// ISSUES BRAINSTORM
/*
display questions to page
create link that redirects to local storage
*/