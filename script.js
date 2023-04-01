"use strict";

const circle = document.querySelectorAll(".circle");
const ratingOfNumbers = document.querySelector(".rating");
const submit = document.getElementById("submitButton");

let a = 0;
const wholeCircle = [...circle];

const circleColor = function () {
  wholeCircle.map(function (el) {
    (el.style.backgroundColor = "hsl(213, 19%, 18%)"),
      (el.style.color = "hsl(217, 12%, 63%)");
  });
};

const rating = function () {
  for (let i = 0; i < wholeCircle.length; i++) {
    const element = wholeCircle[i];

    element.addEventListener("click", function () {
      circleColor();
      a = element.textContent;
      ratingOfNumbers.textContent = `You selected ${a} out of 5`;
      element.style.backgroundColor = "hsl(25, 97%, 53%)";
      element.style.color = "white";
    });
  }

  submit.addEventListener("click", function () {
    document.getElementById("firstDiv").classList.add("hidden");
    document.getElementById("secondDiv").classList.remove("hidden");
    submit.style.backgroundColor = "hsl(25, 97%, 53%)";
    submit.style.color = "white";
  });
};
rating();
