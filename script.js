let divs = document.getElementsByClassName("question-div");
let clicked;

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function () {
    if (clicked !== undefined) {
      divs[clicked].classList.remove("active");
    }

    if (clicked === i) {
      divs[i].classList.remove("active");
      clicked = undefined;
    } else {
      divs[i].classList.add("active");
      clicked = i;
    }
  });
}
