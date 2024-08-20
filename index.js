// document.querySelectorAll(".box").forEach((e) => {
//   e.style.backgroundColor = "green";
// });

// document.querySelector("#box1").style.backgroundColor = "red";

// document.querySelector("#box2").style.backgroundColor = "pink";

// document.querySelector("#box3").style.backgroundColor = "green";

// document.querySelector("#box4").style.backgroundColor = "#cccccc";

// document.querySelector("#box5").style.backgroundColor = "#123456";

let boxes = document.querySelector(".container").children;
function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1},${val2},${val3})`;
}

Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getRandomColor();
});
