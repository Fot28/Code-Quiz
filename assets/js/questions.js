var timerEl = document.getElementById("time");
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionsScreen = document.getElementById("questions");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");

// Is an array of question-answers objects.
var questionsArray = [
  {
    question:
      "The _______ attribute in HTML is used to specify the URL of the page that the hyperlink goes to.",
    answers: [["src"], ["href", true], ["alt"], ["title"]],
  },
  {
    question:
      "In CSS, the _______ property is used to add space between the border and the content of ",
    answers: [["margin"], ["display"], ["border-style"], ["padding", true]],
  },
  {
    question:
      "The _______ statement in JavaScript is used to stop the execution of a function or a loop.",
    answers: [["return"], ["continue"], ["break", true], ["throw"]],
  },
  {
    question: "In HTML, the _______ tag is used to define a heading.",
    answers: [["<p>"], ["<h1>", true], ["<div>"], ["<span>"]],
  },
  {
    question: "The _______ property in CSS is used to set the color of text.",
    answers: [
      ["font-weight"],
      ["text-transform"],
      ["line-height"],
      ["color", true],
    ],
  },
  {
    question:
      "In JavaScript, the _______ method is used to add an element to the end of an array.",
    answers: [["push()", true], ["pop()"], ["shift()"], ["unshift()"]],
  },
  {
    question: "The _______ tag in HTML is used to define a paragraph.",
    answers: [["<p>", true], ["<div>"], ["<span>"], ["<article>"]],
  },
  {
    question:
      "In CSS, the _______ property is used to set the height of an element.",
    answers: [["width"], ["position"], ["height", true], ["float"]],
  },
  {
    question:
      "The _______ function in JavaScript is used to select an element from the DOM.",
    answers: [
      ["Math.random()"],
      ["console.log()"],
      ["typeof()"],
      ["document.querySelector()", true],
    ],
  },
];

// On Start Quiz button click starts quizStart function
startButton.addEventListener("click", function () {
  quizStart();
});

// Function that Starts Quiz
function quizStart() {
  // Timer that counts down from 95
  var timeLeft = 5;
  timerEl.textContent = timeLeft;

  //   Hide Start screen and show questions screen
  startScreen.setAttribute("class", "hide");
  questionsScreen.setAttribute("class", "start");

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    var finalScore = 0;
    if (timeLeft > 0) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `quizEnd()` function
      quizEnd();
    }
    return finalScore;
  }, 1000);

  return finalScore;
}

function quizEnd() {
  questionsScreen.setAttribute("class", "hide");
  endScreen.setAttribute("class", "start");
}
