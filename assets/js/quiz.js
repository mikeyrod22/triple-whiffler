let timeRemainingEl = document.querySelector('#time-remaining')
let timeRemaining;

function start() {
    timeRemaining = 100;
    console.log(`Time Remaining: ${timeRemaining}`);
    let timerSetInterval = setInterval(function(){
        if (timeRemaining < 1) {
            timeRemaining = 0;
            timeRemainingEl.innerHTML = timeRemaining;
            clearInterval(timerSetInterval);
            return;
        }
        timeRemaining--;
        timeRemainingEl.innerHTML = `Time Remaining: ${timeRemaining}`;
        console.log(`Time Remaining: ${timeRemaining}`);
    }, 1000);
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
create question objects that each contain 1 question, 3 incorrect answers, and one correct answer
create timer element
update #timeRemaining dynamically with a timeout function
create link that redirects to local storage
*/