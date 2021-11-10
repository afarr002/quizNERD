// variable declarations
var timerLocation = document.getElementById("insertTimer");
var startButton = document.getElementById("startButton");
var quizQuestions = document.getElementById("quizQuestions");
var quizAnswers = document.getElementById("quizAnswers");
var playAgainButton = document.getElementById("playAgainButton");
var secondsLeft = 30;
var userScore = 0;
var userInitials = " ";
var aButton = false;
var bButton = false;
var cButton = false;
var dButton = false;

// functions

function startQuiz() {
  secondsLeft = 30;
  userScore = 0;
  userInitials = " ";
  playAgainButton.classList.add("hide");
  document.querySelector("#answerText").textContent = " ";
  startTime();
  question1();
}

function startTime() {
  var timerCountDown = setInterval(function () {
    secondsLeft--;
    timerLocation.textContent = "Timer: " + secondsLeft;

    if (secondsLeft > 10) {
      timerLocation.style.fontSize = "0.9rem";
      timerLocation.style.color = "black";
    }

    if (secondsLeft <= 10) {
      timerLocation.style.fontSize = "1.5rem";
    }

    if (secondsLeft <= 5) {
      timerLocation.style.color = "red";
    }

    if (secondsLeft <= 0) {
      console.log("secondsLeft");
      clearInterval(timerCountDown);
      quizEnd();
      return;
    }
  }, 1000);
}

function question1() {
  quizQuestions.style.fontSize = "1.8rem";
  quizQuestions.style.textAlign = "left";
  quizQuestions.textContent =
    "(LOTR) What is Samwise Gamgee's profession after returning from the adventure to Mt. Doom?";
  var aButton = document.createElement("button");
  aButton.textContent = "A. Mayor";
  aButton.type = "submit";
  aButton.addEventListener("click", function () {
    userScore += 5;
    console.log(userScore);
    document.querySelector("#answerText").textContent = "Correct!";
    question2();
  });
  var bButton = document.createElement("button");
  bButton.textContent = "B. Gardener";
  bButton.type = "submit";
  bButton.addEventListener("click", function () {
    secondsLeft -= 3;
    document.querySelector("#answerText").textContent = "Incorrect!";
    question2();
  });
  var cButton = document.createElement("button");
  cButton.textContent = "C. Bouncer";
  cButton.type = "submit";
  cButton.addEventListener("click", function () {
    secondsLeft -= 3;
    document.querySelector("#answerText").textContent = "Incorrect!";
    question2();
  });
  var dButton = document.createElement("button");
  dButton.textContent = "D. Bartender";
  dButton.type = "submit";
  dButton.addEventListener("click", function () {
    secondsLeft -= 3;
    document.querySelector("#answerText").textContent = "Incorrect!";
    question2();
  });

  quizAnswers.textContent = "";
  quizAnswers.append(aButton, bButton, cButton, dButton);
  startButton.classList.add("hide");
}

function question2() {
  quizQuestions.style.fontSize = "1.8rem";
  quizQuestions.style.textAlign = "left";
  quizQuestions.textContent =
    "(HP) What does the core of Harry's wand consist of?";
  var aButton = document.createElement("button");
  aButton.textContent = "A. Unicorn Tail Hair";
  aButton.type = "submit";
  aButton.addEventListener("click", function () {
    secondsLeft -= 3;
    document.querySelector("#answerText").textContent = "Incorrect!";
    question3();
  });
  var bButton = document.createElement("button");
  bButton.textContent = "B. Dragon Heartstrig";
  bButton.type = "submit";
  bButton.addEventListener("click", function () {
    secondsLeft -= 3;
    document.querySelector("#answerText").textContent = "Incorrect!";
    question3();
  });
  var cButton = document.createElement("button");
  cButton.textContent = "C. Hippogriff Feather";
  cButton.type = "submit";
  cButton.addEventListener("click", function () {
    secondsLeft -= 3;
    document.querySelector("#answerText").textContent = "Incorrect!";
    question3();
  });
  var dButton = document.createElement("button");
  dButton.textContent = "D. Phoenix Feather";
  dButton.type = "submit";
  dButton.addEventListener("click", function () {
    userScore += 5;
    console.log(userScore);
    document.querySelector("#answerText").textContent = "Correct!";
    question3();
  });

  quizAnswers.textContent = "";
  quizAnswers.append(aButton, bButton, cButton, dButton);
  startButton.classList.add("hide");
}

function question3() {
  quizQuestions.style.fontSize = "1.8rem";
  quizQuestions.style.textAlign = "left";
  quizQuestions.textContent =
    "(POKE) How many Pokemon were there in the first generation?";
  var aButton = document.createElement("button");
  aButton.textContent = "A. 151";
  aButton.type = "submit";
  aButton.addEventListener("click", function () {
    userScore += 5;
    console.log(userScore);
    document.querySelector("#answerText").textContent = "Correct!";
    question4();
  });
  var bButton = document.createElement("button");
  bButton.textContent = "B. 150";
  bButton.type = "submit";
  bButton.addEventListener("click", function () {
    secondsLeft -= 3;
    document.querySelector("#answerText").textContent = "Incorrect!";
    question4();
  });
  var cButton = document.createElement("button");
  cButton.textContent = "C. 101";
  cButton.type = "submit";
  cButton.addEventListener("click", function () {
    secondsLeft -= 3;
    document.querySelector("#answerText").textContent = "Incorrect!";
    question4();
  });
  var dButton = document.createElement("button");
  dButton.textContent = "D. 100";
  dButton.type = "submit";
  dButton.addEventListener("click", function () {
    secondsLeft -= 3;
    document.querySelector("#answerText").textContent = "Incorrect!";
    question4();
  });

  quizAnswers.textContent = "";
  quizAnswers.append(aButton, bButton, cButton, dButton);
  startButton.classList.add("hide");
}

function question4() {
  quizQuestions.style.fontSize = "1.8rem";
  quizQuestions.style.textAlign = "left";
  quizQuestions.textContent = "(MARIO) What was Mario's original name?";
  var aButton = document.createElement("button");
  aButton.textContent = "A. Mario";
  aButton.type = "submit";
  aButton.addEventListener("click", function () {
    secondsLeft -= 3;
    document.querySelector("#answerText").textContent = "Incorrect!";
    question5();
  });
  var bButton = document.createElement("button");
  bButton.textContent = "B. Jumpman";
  bButton.type = "submit";
  bButton.addEventListener("click", function () {
    userScore += 5;
    console.log(userScore);
    document.querySelector("#answerText").textContent = "Correct!";
    question5();
  });
  var cButton = document.createElement("button");
  cButton.textContent = "C. Prince Toad";
  cButton.type = "submit";
  cButton.addEventListener("click", function () {
    secondsLeft -= 3;
    document.querySelector("#answerText").textContent = "Incorrect!";
    question5();
  });
  var dButton = document.createElement("button");
  dButton.textContent = "D. Mustache";
  dButton.type = "submit";
  dButton.addEventListener("click", function () {
    secondsLeft -= 3;
    document.querySelector("#answerText").textContent = "Incorrect!";
    question5();
  });

  quizAnswers.textContent = "";
  quizAnswers.append(aButton, bButton, cButton, dButton);
  startButton.classList.add("hide");
}

function question5() {
  quizQuestions.style.fontSize = "1.8rem";
  quizQuestions.style.textAlign = "left";
  quizQuestions.textContent =
    "(HP) Who was the first character to say Voldemort's name?";
  var aButton = document.createElement("button");
  aButton.textContent = "A. Professor Mcgonagall";
  aButton.type = "submit";
  aButton.addEventListener("click", function () {
    secondsLeft -= 3;
    document.querySelector("#answerText").textContent = "Incorrect!";
    quizEnd();
  });
  var bButton = document.createElement("button");
  bButton.textContent = "B. Professor Dumbledore";
  bButton.type = "submit";
  bButton.addEventListener("click", function () {
    secondsLeft -= 3;
    document.querySelector("#answerText").textContent = "Incorrect!";
    quizEnd();
  });
  var cButton = document.createElement("button");
  cButton.textContent = "C. Hagrid";
  cButton.type = "submit";
  cButton.addEventListener("click", function () {
    userScore += 5;
    console.log(userScore);
    document.querySelector("#answerText").textContent = "Correct!";
    quizEnd();
  });
  var dButton = document.createElement("button");
  dButton.textContent = "D. Ron";
  dButton.type = "submit";
  dButton.addEventListener("click", function () {
    secondsLeft -= 3;
    document.querySelector("#answerText").textContent = "Incorrect!";
    quizEnd();
  });

  quizAnswers.textContent = "";
  quizAnswers.append(aButton, bButton, cButton, dButton);
  startButton.classList.add("hide");
}

function quizEnd() {
  userInitials = prompt(
    "Flex on your friends!" + "\n" + "Enter your initials for the leaderboard!"
  );

  quizQuestions.textContent = "Game Over!";
  quizAnswers.textContent = userInitials + "'s Score:" + " " + userScore;

  highScore();

  playAgainButton.classList.remove("hide");
}

function highScore() {
  quizQuestions.textContent = "Who has the highest score?!";
  //get the old storage
  const allData = JSON.parse(localStorage.getItem("data")) || [];
  //create user data object
  const userDataEntry = {
    initials: userInitials,
    score: userScore,
  };
  //updated old storage
  allData.push(userDataEntry);

  //set
  localStorage.setItem("data", JSON.stringify(allData));

  let template = "";

  for (let i = 0; i < allData.length; i++) {
    template += `
      <p>
        Initials: ${allData[i].initials}
            Score: ${allData[i].score}
      </p>
    `;
  }

  quizAnswers.innerHTML = template;
}

// event listeners

startButton.addEventListener("click", function () {
  startQuiz();
});

playAgainButton.addEventListener("click", function () {
  startQuiz();
});

// upon button click a timer starts and the first question appears

// questions
// each questions will have 4 buttons
// upon button click, user will be presented with another question
// when user submits answer, right or wrong is displayed on the screen.
// if question is wrong, time is subtracted from total time remaining.

// when timer or questions run out, game ends
// when game ends user is prompted to enter initials.
// initials and score is then recorded.
// final options are clear high score and go back
