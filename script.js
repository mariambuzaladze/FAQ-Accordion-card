let divs = document.getElementsByClassName("question-div");
let arrows = document.getElementsByClassName("arrow-down");
let answers = document.getElementsByClassName("answer");
let question = document.getElementsByClassName("question");
let down = true;

let clicked;

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function () {
    if (down) {
      if (clicked === undefined) {
      } else {
        arrows[clicked].style.transform = "rotate(0deg)";
        answers[clicked].style.display = "none";
        question[clicked].style.color = "#4b4c5f";
        question[clicked].style.fontWeight = "normal";
        clicked = i;
      }
      arrows[i].style.transform = "rotate(180deg)";
      answers[i].style.display = "block";
      question[i].style.color = "#1e1f36";
      question[i].style.fontWeight = "bold";
      down = false;
      clicked = i;
    } else {
      arrows[i].style.transform = "rotate(0deg)";
      answers[i].style.display = "none";
      question[i].style.color = "#4b4c5f";
      question[i].style.fontWeight = "normal";
      down = true;
    }
  });
}
