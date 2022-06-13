// Variables
let letters = document.querySelectorAll(".letters button");
let questions = [
  "The Worst Programming Language",
  "The Best Programming Language",
  "The Best Car In The World",
];
let question = document.querySelector(".question");
let answers = ["java", "javascript", "lamborghini"];
let randomPick = Math.floor(Math.random() * 3);
randomPick = 0;
let solution = document.querySelector(".solution");
let lives = document.querySelector(".lives");
// Variables

console.log(questions[randomPick]);
console.log(answers[randomPick]);
console.log(randomPick);

// put to the code
let keyQuestion = questions[randomPick];
let keyAnswer = answers[randomPick];

for (let i in keyAnswer) {
  let x = document.createElement("div");
  x.innerHTML = "_";
  solution.appendChild(x);
}

let sol = document.querySelectorAll(".solution div");
question.innerHTML = keyQuestion;
// put to the code

// clicked buttons
letters.forEach(function (e) {
  let counter = 0;
  e.addEventListener("click", function () {
    console.log(e.innerHTML);
    let testCase = false;
    for (let i = 0; i < keyAnswer.length; i++) {
      if (e.innerHTML == keyAnswer[i]) {
        console.log(i);
        sol[i].innerHTML = keyAnswer[i];
        testCase = true;
      }
    }
    if (testCase == false) {
      lives.innerHTML = +lives.innerHTML - 1;
    }
    if (lives.innerHTML == "0") {
      lives.parentElement.innerHTML = "You Are Dead";
    }

    sol.forEach(function (e) {
      if (e.innerHTML != "_") {
        counter++;
      }
    });

    if (counter == keyAnswer.length) {
      lives.parentElement.innerHTML = "You Win";
    }
    console.log(counter);

    e.classList.add("turnOff");
    e.disabled = true;
  });
});
// clicked buttons
