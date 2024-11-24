const handOptions = {
  "rock": "/assets/Rock.png",
  "paper": "/assets/Paper.png",  // here we created an object literal but instead of passing the value to key
  "scissors": "/assets/Scissors.png"  // value pair we passed the url to the key which are rock , paper and scissors.
}

let SCORE = 0;

const pickUserHand = (hand) => {
 console.log(hand);
  let hands = document.querySelector(".hands");
  hands.style.display = "none"; //makes the images on the first page disappear after clicking on the option.
  let contest = document.querySelector(".contest");
  contest.style.display = "flex"; // this makes the contest results appear to the same page when clicking on the options.
  document.getElementById("userPickImage").src = handOptions[hand]; // this is done so as to set the user choice.
  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
  let hands = ["rock" , "paper" , "scissors"];
  let cpHand =hands[Math.floor(Math.random() * hands.length)]; // this function here is used create a random choice for the computer to select.
  document.getElementById("computerPickImage").src = handOptions[cpHand];// this is done to set the computer choice.\
  referee(hand , cpHand);
};

const referee = (userHand, cpHand) => {         // this part is basically the decision making part and it acts like a referee here.
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!"); // setDecision function is used to update the decision message to be displayed on the webpage.
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
}

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision; // here the .innerText : Sets the text content of the selected <h1> element to the value of the decision parameter.
}

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore; // here the .innerText , Updates the text content of the selected <h1> element to display the new score.
}
