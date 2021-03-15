// Question Objects
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
    question:"Which of the following is not a javascript keyword for declaring a variable?", 
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
    question:"How do you declare a function named 'myFunction' in javascript?", 
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
let answersArray = []

// Shuffle order of an array
function shuffle(selectedArray) {
    let m = selectedArray.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = selectedArray[m];
      selectedArray[m] = selectedArray[i];
      selectedArray[i] = t;
    }
    return selectedArray;
}

// Element Variables
let mainEl = document.querySelector("#main");
let beginQuizEl = document.querySelector("#begin-quiz-container");
let beginButtonEl = document.querySelector("#begin-button");
let questionCardEl = document.querySelector("#question-card");
let questionEl = document.querySelector("#question-card-question");
let radioA = document.querySelector("#radio-a");
let radioB = document.querySelector("#radio-b");
let radioC = document.querySelector("#radio-c");
let radioD = document.querySelector("#radio-d");
let radioListeners = [radioA, radioB, radioC, radioD];
let answerA = document.querySelector("#label-a");
let answerB = document.querySelector("#label-b");
let answerC = document.querySelector("#label-c");
let answerD = document.querySelector("#label-d");
let submitEl = document.querySelector("#submit");
let skipEl = document.querySelector("#skip");

// Load Page Without Question Card Displayed
mainEl.removeChild(questionCardEl);

// Timer
let timeRemainingEl = document.querySelector('#time-remaining');
let timeRemaining;
function startTimer() {
    timeRemaining = 100;
    timeRemainingEl.innerHTML = `Time Remaining: ${timeRemaining}`;
    let timerSetInterval = setInterval(function(){
        if (timeRemaining < 1) {
            timeRemaining = 0;
            timeRemainingEl.innerHTML = `Time Remaining: ${timeRemaining}`;
            clearInterval(timerSetInterval);
            return;
        }
        timeRemaining--;
        timeRemainingEl.innerHTML = `Time Remaining: ${timeRemaining}`;
    }, 1000);
}

// Generate Question Card
function generateQuestionCard(selectedQuestion) {
    questionEl.innerText = selectedQuestion.question;
    answersArray = [selectedQuestion.correct, selectedQuestion.incorrectOne, selectedQuestion.incorrectTwo, selectedQuestion.incorrectThree]
    shuffle(answersArray);
    answerA.innerText = answersArray[0];
    answerB.innerText = answersArray[1];
    answerC.innerText = answersArray[2];
    answerD.innerText = answersArray[3]
}

// Begin Quiz
let qoaIndex = 0;
let score = 0;
function beginQuiz() {
    mainEl.removeChild(beginQuizEl);
    mainEl.appendChild(questionCardEl);
    shuffle(questionObjectsArray);
    generateQuestionCard(questionObjectsArray[0]);
    startTimer();
}
beginButtonEl.addEventListener("click", beginQuiz);

// Submit Answer
function submitAnswer() {    
    if (qoaIndex === (questionObjectsArray.length - 1)) {
        timeRemaining = 0;
        mainEl.removeChild(questionCardEl);
        return;
    }
    // Validate And Determine User Answer
    if (radioA.checked === true) {
        userAnswer = answerA.innerText;
    } else if (radioB.checked === true) {
        userAnswer = answerB.innerText;
    } else if (radioC.checked === true) {
        userAnswer = answerC.innerText;
    } else if (radioD.checked === true) {
        userAnswer = answerD.innerText;
    } else {
        return;
    }
    // Increment Score or Decrement Time Appropriately
    if (userAnswer === questionObjectsArray[qoaIndex].correct) {
        score += 100;
    } else {
        timeRemaining -= 10;
    }
    // Present Next Question
    for (var l = 0; l < radioListeners.length; l++) {
        radioListeners[l].checked = false;
    }
    qoaIndex++;
    generateQuestionCard(questionObjectsArray[qoaIndex]);
}
submitEl.addEventListener("click", submitAnswer);

// Skip Question
function skipQuestion() {
    if (qoaIndex === (questionObjectsArray.length - 1)) {
        timeRemaining = 0;
        mainEl.removeChild(questionCardEl);
        return;
    }
        // Present Next Question
        for (var l = 0; l < radioListeners.length; l++) {
            radioListeners[l].checked = false;
        }
        qoaIndex++;
        generateQuestionCard(questionObjectsArray[qoaIndex]);
}
skipEl.addEventListener("click", skipQuestion);

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