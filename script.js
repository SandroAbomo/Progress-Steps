"use strict";
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updtate();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  updtate();
});

const updtate = function () {
  circles.forEach((circle, indx) => {
    if (indx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
    // console.log(indx, circle);
  });

  const actives = document.querySelectorAll(".active");
  // console.log(actives.length, circles.length);
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
