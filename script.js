let divs = document.getElementsByClassName("question-div");
let arrowDown = true;
let clicked;

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function () {
    if (clicked !== undefined) {
      divs[clicked].classList.remove("active");
    }

    if (arrowDown) {
      divs[i].classList.add("active");
      clicked = i;
    } else {
      divs[i].classList.remove("active");
      clicked = undefined;
    }

    arrowDown = !arrowDown;
  });
}
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener("click", function () {
//     if (down) {
//       if (clicked === undefined) {
//       } else {
//         arrows[clicked].style.transform = "rotate(0deg)";
//         answers[clicked].style.display = "none";
//         question[clicked].style.color = "#4b4c5f";
//         question[clicked].style.fontWeight = "normal";
//         // clicked = undefined;
//       }
//       arrows[i].style.transform = "rotate(180deg)";
//       answers[i].style.display = "block";
//       question[i].style.color = "#1e1f36";
//       question[i].style.fontWeight = "bold";
//       down = false;
//       clicked = i;
//     } else {
//       arrows[i].style.transform = "rotate(0deg)";
//       answers[i].style.display = "none";
//       question[i].style.color = "#4b4c5f";
//       question[i].style.fontWeight = "normal";
//       down = true;
//       // clicked = undefined;
//     }
//   });
// }
