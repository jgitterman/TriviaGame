// Create a global variables
var gameActive = false;
var labels = ["a0", "a1", "a2", "a3"];
var correctAnswers = 0;
var wrongAnswers = 0;

// Set gameActive to false
if (gameActive === false) {
  $("#mainPage").hide();
  $("#resultsPage").hide();
}

// Create an onlcick function to trigger the "START GAME" button to start the game
var startGame = $("#startGame").on("click", function () {
  gameActive = true;
  if (gameActive !== false) {
    $(this).parent().hide();
    $("#mainPage").show();
  }
  var timeLeft = 60;
  var gameTimerId = setInterval(countdown, 1000);
  // Run timer
  function countdown() {
    timeLeft--;
    $("#timeLeft").text(timeLeft);

    if (timeLeft === 0) {
      endGame();
    }
  }
  showQs();
  console.log("Switched to Main Page.");
});

// Store the questions in an array
var questionArr = [{
  name: "one",
  question: "1: What is the first rule of Fight Club?",
  answerArr: [
    "You do not talk about what goes on here.",
    "Don't mention this club to anyone.",
    "YOU DO NOT TALK ABOUT FIGHT CLUB.",
    "There are no rules.",
  ],
  correct: "YOU DO NOT TALK ABOUT FIGHT CLUB.",
  divClass: ".one",
}, {
  name: "two",
  question: "2: What is the opening line of Fight Club (the movie)?",
  answerArr: [
    "People are always asking me if I know Tyler Durden.",
    "With a gun barrel between your teeth you speak only in vowels.",
    "This is it, ground zero.",
    "Any last words?",
  ],
  correct: "People are always asking me if I know Tyler Durden.",
  divClass: ".two"
}, {
  name: "three",
  question: "3: What is the narrator's spirit animal?",
  answerArr: [
    "A seal.",
    "A penguin.",
    "A duck.",
    "A walrus.",
  ],
  correct: "A penguin.",
  divClass: ".three",
}, {
  name: "four",
  question: '4: What is "Project Mayhem"?',
  answerArr: [
    "A codename for Fight club outside of Fight Club.",
    "A group that is trying to destroy fight club.",
    "The police code for talking about Fight Club.",
    "A group created by Tyler to cause Mayhem.",
  ],
  correct: "A group created by Tyler to cause Mayhem.",
  divClass: ".four",
}, {
  name: "five",
  question: "5: What is Tyler's soap made from?",
  answerArr: [
    "Liposuction fat.",
    "Chemicals.",
    "Whale vomit.",
    "Cat urine.",
  ],
  correct: "Liposuction fat.",
  divClass: ".five",
}, {
  name: "six",
  question: '6: Who are the "Space Monkeys"?',
  answerArr: [
    "The people that abide by the rules of society.",
    "The people that participate in Fight Club.",
    "The people that are a part of Project Mayhem.",
    "Monkey's sent into outer space.",
  ],
  correct: "The people that are a part of Project Mayhem.",
  divClass: ".six",
}, {
  name: "seven",
  question: "7: What would happen to anyone that tried to shut down Project Mayhem",
  answerArr: [
    "They would get beat up.",
    "They would have their balls cut off.",
    "They would be kindnapped.",
    "They would be killed.",
  ],
  correct: "They would have their balls cut off.",
  divClass: ".seven",
}, {
  name: "eight",
  question: "8: What can you find in every scene throughout the movie",
  answerArr: [
    "A naked woman.",
    "A condom.",
    "A bottle of beer.",
    "A starbucks cup.",
  ],
  correct: "A starbucks cup.",
  divClass: ".eight",
}, {
  name: "nine",
  question: "9: Who did the studio want to play Marla Singer",
  answerArr: [
    "Courtney Love.",
    "Reese Witherspoon.",
    "Winona Ryder.",
    "Helena Bonham Carter.",
  ],
  correct: "Reese Witherspoon.",
  divClass: ".nine",
}, {
  name: "ten",
  question: "10: Who is Tyler Durden?",
  answerArr: [
    "The narrators alter ego.",
    "The creator of Fight Club.",
    "The creator of Project Mayhem.",
    "All of the above.",
  ],
  correct: "All of the above.",
  divClass: ".ten",
},
];

// Display questions
var showQs = function () {
  $(".questions :not('#submit')").empty();
  // loops through the 10 questions 
  for (var i = 0; i < questionArr.length; i++) {
    $(".questions").append('<div class="' + questionArr[i].name + '"></div>');
    $(questionArr[i].divClass).append('<h2 class ="questionDisplay">' + questionArr[i].question + '</h2>');
    for (var j = 0; j < labels.length; j++) {
      $(questionArr[i].divClass).append('<input type="radio"  name="' + questionArr[i].name + '" value="' + questionArr[i].answerArr[j] + '"/><label for="' + labels[j] + '">' + questionArr[i].answerArr[j] + '</label>' + "<br/>");
    }
  }
};

// Create an onlcick function to trigger the "SUBMIT" button to log answers and show results
var stopGame = $("#submit").on("click", endGame);

// Create an end game function and insert in when the timer hits "0" and when "SUBMIT" button is clicked
function endGame(event) {
  for (let i = 0; i < questionArr.length; i++) {
    if ($(`input[name='${questionArr[i].name}']:checked`).val() === questionArr[i].correct) {
      correctAnswers++;
      $(".correctAnswers").text("Correct Answers: " + correctAnswers);
    } else {
      wrongAnswers++;
      $(".wrongAnswers").text("Incorrect Answers: " + wrongAnswers);
    }
    console.log($(questionArr[i].correctAnswers))
  }
  $("#mainPage").hide();
  $("#resultsPage").show();
  console.log("Switched to Results Page.");
  event ? event.preventDefault() : console.log("no event");
}

// THINGS I STILL NEED TO FIGURE OUT
  // How do I get the answers to work
  // Maybe set up a reset at end of page button