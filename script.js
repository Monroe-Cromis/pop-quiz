// create variables 
var questions [{ question: "q1", answers: ["a1", "a2"], correctAnswer: "a1"}];
var currentQuestion = 0;


//set which answers are right and wrong 
function init(event) {
    // .textContent set questions and ansers 
}

function validate(event) {
    // checks if answer is answer is correctAnswer
    console.log(event.target);
    // do logic to see if right answer 
    // update score

    // at the end after that
    generateNextQuestion();
}

function generateNextQuestion() {
    currentQuestion += 1;
    // .textContent set questions and ansers 
}



setInterval(function()){




}





// submit answer button
var submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", validate);
// startgame
var myButton = document.querySelector("#myButton");

myButton.addEventListener("click", init);

var questions [ {question: "q1", answers: ["a1", "a2"], correctAnswer: 1}];
var currentQuestion = 0;



function init(event) {
  // .textContent set questions and ansers 
}

function validate(event) {
  // checks if answer is answer is correctAnswer
  console.log(event.target);
  // do logic to see if right answer 
    // update score

    // at the end after that
    generateNextQuestion();
}

function generateNextQuestion() {
  currentQuestion += 1;
    // .textContent set questions and ansers 
}

// submit answer button
var submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", validate);
// startgame
var myButton = document.querySelector("#myButton");

myButton.addEventListener("click", init);



//adding timer 
// Timer that counts down from 5
function countdown() {
    var timeLeft = 5;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }