var timerEl = document.getElementById("time");
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionsScreen = document.getElementById("questions");
var endScreen = document.getElementById("end-screen");
var finalScoreEl = document.getElementById("final-score");
var questionTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");

// Is an array of question-answers objects.
var questionsArray = [
  {
    question:
      "The _______ attribute in HTML is used to specify the URL of the page that the hyperlink goes to.",
    answers: [
      ["src", false],
      ["href", true],
      ["alt", false],
      ["title", false],
    ],
  },
  {
    question:
      "In CSS, the _______ property is used to add space between the border and the content of ",
    answers: [
      ["margin", false],
      ["display", false],
      ["border-style", false],
      ["padding", true],
    ],
  },
  {
    question:
      "The _______ statement in JavaScript is used to stop the execution of a function or a loop.",
    answers: [
      ["return", false],
      ["continue", false],
      ["break", true],
      ["throw", false],
    ],
  },
  {
    question: "In HTML, the _______ tag is used to define a heading.",
    answers: [
      ["<p>", false],
      ["<h1>", true],
      ["<div>", false],
      ["<span>", false],
    ],
  },
  {
    question: "The _______ property in CSS is used to set the color of text.",
    answers: [
      ["font-weight", false],
      ["text-transform", false],
      ["line-height", false],
      ["color", true],
    ],
  },
  {
    question:
      "In JavaScript, the _______ method is used to add an element to the end of an array.",
    answers: [
      ["push()", true],
      ["pop()", false],
      ["shift()", false],
      ["unshift()", false],
    ],
  },
  {
    question: "The _______ tag in HTML is used to define a paragraph.",
    answers: [
      ["<p>", true],
      ["<div>", false],
      ["<span>", false],
      ["<article>", false],
    ],
  },
  {
    question:
      "In CSS, the _______ property is used to set the height of an element.",
    answers: [
      ["width", false],
      ["position", false],
      ["height", true],
      ["float", false],
    ],
  },
  {
    question:
      "The _______ function in JavaScript is used to select an element from the DOM.",
    answers: [
      ["Math.random()", false],
      ["console.log()", false],
      ["typeof()", false],
      ["document.querySelector()", true],
    ],
  },
];

// On Start Quiz button click starts quizStart function
startButton.addEventListener("click", function () {
  quizStart();
});

var finalScore = 0;

// Function that Starts Quiz
function quizStart() {
  // Timer that counts down from 95
  var timeLeft = 90;

  timerEl.textContent = timeLeft;

  //   Hide Start screen and show questions screen
  startScreen.setAttribute("class", "hide");
  questionsScreen.setAttribute("class", "start");

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
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
  }, 1000);
  questionaire();
}

function questionaire() {
  var i = 0;
  renderQuestion(i);
  i++;

  function renderQuestion(index) {
    console.log(i);
    var question = questionsArray[index].question;
    var answers = questionsArray[index].answers;
    var timeLeft = 100;
    // console.log(answers);
    questionTitleEl.textContent = question;

    var buttonAnswer1 = document.createElement("button");
    var buttonAnswer2 = document.createElement("button");
    var buttonAnswer3 = document.createElement("button");
    var buttonAnswer4 = document.createElement("button");
    buttonAnswer1.textContent = answers[0][0];
    buttonAnswer2.textContent = answers[1][0];
    buttonAnswer3.textContent = answers[2][0];
    buttonAnswer4.textContent = answers[3][0];
    choicesEl.appendChild(buttonAnswer1);
    choicesEl.appendChild(buttonAnswer2);
    choicesEl.appendChild(buttonAnswer3);
    choicesEl.appendChild(buttonAnswer4);

    buttonAnswer1.addEventListener("click", function () {
      if (i < questionsArray.length && answers[0][1] === false) {
        timeLeft -= 10;
        choicesEl.innerHTML = "";
        renderQuestion(i);
      } else if (i < questionsArray.length) {
        choicesEl.innerHTML = "";
        renderQuestion(i);
      } else {
        quizEnd();
      }
      i++;
    });

    buttonAnswer2.addEventListener("click", function () {
      if (i < questionsArray.length && answers[1][1] === false) {
        timeLeft -= 10;
        choicesEl.innerHTML = "";
        renderQuestion(i);
      } else if (i < questionsArray.length) {
        choicesEl.innerHTML = "";
        renderQuestion(i);
      } else {
        quizEnd();
      }
      i++;
    });

    buttonAnswer3.addEventListener("click", function () {
      if (i < questionsArray.length && answers[2][1] === false) {
        timeLeft -= 10;
        choicesEl.innerHTML = "";
        renderQuestion(i);
      } else if (i < questionsArray.length) {
        choicesEl.innerHTML = "";
        renderQuestion(i);
      } else {
        quizEnd();
      }
      i++;
    });

    buttonAnswer4.addEventListener("click", function () {
      if (i < questionsArray.length && answers[3][1] === false) {
        timeLeft -= 10;
        choicesEl.innerHTML = "";
        renderQuestion(i);
      } else if (i < questionsArray.length) {
        choicesEl.innerHTML = "";
        renderQuestion(i);
      } else {
        quizEnd();
      }
      i++;
    });
  }
}

function quizEnd() {
  questionsScreen.setAttribute("class", "hide");
  endScreen.setAttribute("class", "start");
  finalScoreEl.textContent = finalScore;
}
